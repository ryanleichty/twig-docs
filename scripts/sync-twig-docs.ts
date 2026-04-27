import { execFile } from 'node:child_process';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

const REPO = 'https://github.com/twigphp/Twig.git';
const BRANCH = '3.x';
const VERSION = '3.x';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docsRoot = path.join(rootDir, 'docs');
const generatedDocsDir = path.join(docsRoot, VERSION);
const sidebarPath = path.join(docsRoot, '.vitepress/generated/sidebar.ts');
const metadataPath = path.join(rootDir, 'upstream/twig-3.x.json');

type Page = {
  sourcePath: string;
  outputPath: string;
  title: string;
};

type ConversionResult = {
  markdown: string;
  title: string;
  warnings: string[];
};

type SidebarItem = {
  text: string;
  link?: string;
  items?: SidebarItem[];
};

const args = new Set(process.argv.slice(2));
const checkOnly = args.has('--check');
const sourceArg = process.argv.find((arg) => arg.startsWith('--source='));
const explicitSource = sourceArg ? path.resolve(sourceArg.slice('--source='.length)) : undefined;

async function main() {
  const tempBaseDir = path.join(rootDir, '.sync-tmp');
  await import('node:fs/promises').then((fs) => fs.mkdir(tempBaseDir, { recursive: true }));
  const tempDir = await mkdtemp(path.join(tempBaseDir, 'twig-docs-'));
  const workDir = checkOnly ? path.join(tempDir, 'output') : rootDir;

  try {
    const cloneDir = explicitSource ?? path.join(tempDir, 'Twig');

    if (!explicitSource) {
      await execFileAsync('git', ['clone', '--depth', '1', '--branch', BRANCH, REPO, cloneDir]);
    }

    const commit = (await git(cloneDir, ['rev-parse', 'HEAD'])).trim();
    const committedAt = (await git(cloneDir, ['show', '-s', '--format=%cI', 'HEAD'])).trim();
    const sourceDir = path.join(cloneDir, 'doc');
    const pages = await generateDocs(sourceDir, workDir, commit);
    await writeVersionIndex(workDir, pages, commit);

    await writeMetadata(workDir, {
      repo: 'twigphp/Twig',
      branch: BRANCH,
      commit,
      syncedAt: committedAt,
      sourcePath: 'doc',
      pages: pages.length
    });

    await writeSidebar(workDir, buildSidebar(pages));

    if (checkOnly) {
      await assertGeneratedFilesAreCurrent(workDir);
    }

    console.log(`Synced ${pages.length} Twig documentation pages from ${commit.slice(0, 12)}.`);
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
}

async function git(cwd: string, args: string[]) {
  const { stdout } = await execFileAsync('git', args, { cwd });
  return stdout;
}

async function generateDocs(sourceDir: string, outputRoot: string, commit: string) {
  const outputDir = path.join(outputRoot, 'docs', VERSION);
  await rm(outputDir, { recursive: true, force: true });

  const rstFiles = (await listFiles(sourceDir))
    .filter((file) => file.endsWith('.rst') && path.basename(file) !== 'index.rst')
    .sort((a, b) => a.localeCompare(b));

  const pages: Page[] = [];
  const warnings: string[] = [];

  for (const file of rstFiles) {
    const relativeSource = path.relative(sourceDir, file);
    const relativeOutput = relativeSource.replace(/\.rst$/, '.md');
    const outputPath = path.join(outputDir, relativeOutput);
    const source = await expandIncludes(await readFile(file, 'utf8'), path.dirname(file), sourceDir, new Set([file]));
    const result = convertRstToMarkdown(source, relativeSource);
    const frontmatter = [
      '---',
      `title: ${JSON.stringify(result.title)}`,
      `source: ${JSON.stringify(`https://github.com/twigphp/Twig/blob/${commit}/doc/${relativeSource}`)}`,
      `upstreamPath: ${JSON.stringify(`doc/${relativeSource}`)}`,
      'editLink: true',
      'vue: false',
      '---',
      ''
    ].join('\n');

    await writeTextFile(outputPath, `${frontmatter}:::::: v-pre\n\n${result.markdown}\n::::::\n`);
    pages.push({ sourcePath: relativeSource, outputPath: relativeOutput, title: result.title });
    warnings.push(...result.warnings.map((warning) => `${relativeSource}: ${warning}`));
  }

  if (warnings.length > 0) {
    console.warn(`Conversion completed with ${warnings.length} warnings.`);
    for (const warning of warnings.slice(0, 50)) {
      console.warn(`- ${warning}`);
    }
    if (warnings.length > 50) {
      console.warn(`- ...and ${warnings.length - 50} more warnings`);
    }
  }

  return pages;
}

async function listFiles(dir: string): Promise<string[]> {
  const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
  const files = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return listFiles(fullPath);
    }
    return [fullPath];
  }));

  return files.flat();
}

async function expandIncludes(source: string, currentDir: string, sourceRoot: string, seen: Set<string>): Promise<string> {
  const lines = source.replace(/\r\n/g, '\n').split('\n');
  const expanded: string[] = [];

  for (const line of lines) {
    const match = line.trim().match(/^\.\. include::\s*(.+)$/);
    if (!match) {
      expanded.push(line);
      continue;
    }

    const includePath = path.resolve(currentDir, match[1]);
    if (!includePath.startsWith(sourceRoot) || seen.has(includePath)) {
      continue;
    }

    seen.add(includePath);
    expanded.push(await expandIncludes(await readFile(includePath, 'utf8'), path.dirname(includePath), sourceRoot, seen));
  }

  return expanded.join('\n');
}

function convertRstToMarkdown(source: string, sourcePath: string): ConversionResult {
  const lines = normalizeRstSource(source).split('\n');
  const out: string[] = [];
  const warnings: string[] = [];
  const headingLevels = new Map<string, number>();
  let nextHeadingLevel = 1;
  let title = titleFromPath(sourcePath);

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i] ?? '';
    const trimmed = line.trim();

    if (isOverlineHeading(lines, i)) {
      const headingText = lines[i + 1].trim();
      const marker = line.trim()[0];
      const level = headingLevel(marker, headingLevels, () => nextHeadingLevel++);
      if (level === 1 && title === titleFromPath(sourcePath)) {
        title = headingText;
      }
      out.push(`${'#'.repeat(level)} ${headingText}`);
      i += 2;
      continue;
    }

    if (isUnderlineHeading(lines, i)) {
      const headingText = trimmed;
      const marker = lines[i + 1].trim()[0];
      const level = headingLevel(marker, headingLevels, () => nextHeadingLevel++);
      if (level === 1 && title === titleFromPath(sourcePath)) {
        title = headingText;
      }
      out.push(`${'#'.repeat(level)} ${headingText}`);
      i += 1;
      continue;
    }

    const directive = trimmed.match(/^\.\. ([a-zA-Z0-9_-]+)::\s*(.*)$/);
    if (directive) {
      const [, name, rest] = directive;
      if (name === 'code-block' || name === 'sourcecode') {
        const block = readDirectiveBlock(lines, i);
        out.push(...renderCodeBlock(rest, block.body));
        i = block.end;
        continue;
      }

      if (['note', 'warning', 'caution', 'tip', 'important', 'seealso'].includes(name)) {
        const block = readDirectiveBlock(lines, i);
        out.push(...renderAdmonition(name, rest, block.body));
        i = block.end;
        continue;
      }

      if (name === 'versionadded' || name === 'versionchanged') {
        const block = readDirectiveBlock(lines, i);
        const label = name === 'versionadded' ? 'Added' : 'Changed';
        out.push(...renderAdmonition('note', `${label} in Twig ${rest.trim()}`, block.body));
        i = block.end;
        continue;
      }

      if (name === 'deprecated') {
        const block = readDirectiveBlock(lines, i);
        out.push(...renderAdmonition('warning', `Deprecated since Twig ${rest.trim()}`, block.body));
        i = block.end;
        continue;
      }

      if (name === 'admonition' || name === 'sidebar') {
        const block = readDirectiveBlock(lines, i);
        out.push(...renderAdmonition('note', rest, block.body));
        i = block.end;
        continue;
      }

      if (name === 'toctree' || name === 'contents' || name === 'include') {
        i = readDirectiveBlock(lines, i).end;
        continue;
      }

      if (name === 'image' || name === 'figure') {
        out.push(`![${path.basename(rest)}](${rest})`);
        i = readDirectiveBlock(lines, i).end;
        continue;
      }

      if (name.startsWith('_')) {
        continue;
      }

      warnings.push(`Unsupported directive "${name}"`);
      out.push(`<!-- Unsupported upstream directive: ${name} -->`);
      continue;
    }

    if (/^\.\. _[^:]+:/.test(trimmed)) {
      continue;
    }

    if (trimmed.endsWith('::')) {
      const block = readLiteralBlock(lines, i);
      if (block.body.length > 0) {
        const prefix = line.replace(/::\s*$/, ':');
        if (prefix.trim() !== ':') {
          out.push(convertInlineMarkup(prefix));
        }
        out.push(...renderCodeBlock(inferCodeLanguage(block.body), block.body));
        i = block.end;
        continue;
      }
    }

    out.push(convertInlineMarkup(line));
  }

  return {
    markdown: normalizeBlankLines(out).join('\n').trimEnd() + '\n',
    title,
    warnings
  };
}

function normalizeRstSource(source: string) {
  return source
    .replace(/\r\n/g, '\n')
    .replace(/:([a-zA-Z0-9_-]+):`([^`\n]+)\n\s*<([^`]+)>`/g, ':$1:`$2 <$3>`');
}

function isOverlineHeading(lines: string[], index: number) {
  const marker = lines[index]?.trim() ?? '';
  const text = lines[index + 1]?.trim() ?? '';
  const underline = lines[index + 2]?.trim() ?? '';
  return isHeadingMarker(marker) && marker === underline && text.length > 0 && marker.length >= text.length;
}

function isUnderlineHeading(lines: string[], index: number) {
  const text = lines[index]?.trim() ?? '';
  const marker = lines[index + 1]?.trim() ?? '';
  return text.length > 0 && isHeadingMarker(marker) && marker.length >= text.length;
}

function isHeadingMarker(value: string) {
  return /^([=\-~`^"'#*+])\1{2,}$/.test(value);
}

function headingLevel(marker: string, levels: Map<string, number>, create: () => number) {
  if (!levels.has(marker)) {
    levels.set(marker, Math.min(create(), 6));
  }
  return levels.get(marker) ?? 2;
}

function readDirectiveBlock(lines: string[], start: number) {
  const startIndent = indentation(lines[start] ?? '');
  const body: string[] = [];
  let end = start;
  let seenBody = false;

  for (let i = start + 1; i < lines.length; i += 1) {
    const line = lines[i] ?? '';
    const trimmed = line.trim();

    if (trimmed === '') {
      if (seenBody) {
        body.push('');
      }
      end = i;
      continue;
    }

    const indent = indentation(line);
    if (indent <= startIndent) {
      break;
    }

    if (!seenBody && trimmed.startsWith(':')) {
      end = i;
      continue;
    }

    seenBody = true;
    body.push(line);
    end = i;
  }

  return { body: dedent(body), end };
}

function readLiteralBlock(lines: string[], start: number) {
  const startIndent = indentation(lines[start] ?? '');
  const body: string[] = [];
  let end = start;
  let seenBody = false;

  for (let i = start + 1; i < lines.length; i += 1) {
    const line = lines[i] ?? '';
    const trimmed = line.trim();

    if (trimmed === '') {
      if (seenBody) {
        body.push('');
      }
      end = i;
      continue;
    }

    const indent = indentation(line);
    if (indent <= startIndent) {
      break;
    }

    seenBody = true;
    body.push(line);
    end = i;
  }

  return { body: dedent(body), end };
}

function renderCodeBlock(language: string, body: string[]) {
  const normalizedLanguage = normalizeCodeLanguage(language);
  return ['', `\`\`\`${normalizedLanguage}`, ...body, '```', ''];
}

function normalizeCodeLanguage(language: string) {
  const value = language.trim();
  if (value === 'html+twig' || value === 'jinja') {
    return 'twig';
  }
  if (value === 'php-annotations') {
    return 'php';
  }
  return value;
}

function inferCodeLanguage(body: string[]) {
  const sample = body.join('\n');
  if (sample.includes('<?php') || /\$[a-zA-Z_][\w]*|=>|new Twig\\/.test(sample)) {
    return 'php';
  }
  if (sample.includes('{%') || sample.includes('{{') || sample.includes('{#')) {
    return 'twig';
  }
  if (/<\/?[a-z][\s>]/i.test(sample)) {
    return 'html';
  }
  return '';
}

function renderAdmonition(name: string, rest: string, body: string[]) {
  const type = name === 'warning' || name === 'caution' ? 'warning' : name === 'tip' ? 'tip' : 'info';
  const content = [rest.trim(), ...body].filter((line, index) => index !== 0 || line.length > 0);
  const title = content.shift();
  const label = type === 'warning' ? 'Warning' : type === 'tip' ? 'Tip' : 'Note';
  return [
    '',
    `> **${title ? convertInlineMarkup(title) : label}**`,
    '>',
    ...convertBodyLines(content).map((line) => line.length > 0 ? `> ${line}` : '>'),
    ''
  ];
}

function convertBodyLines(lines: string[]) {
  const out: string[] = [];

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i] ?? '';
    const directive = line.trim().match(/^\.\. (code-block|sourcecode)::\s*(.*)$/);

    if (directive) {
      const [, , language] = directive;
      const block = readDirectiveBlock(lines, i);
      out.push(...renderCodeBlock(language, block.body));
      i = block.end;
      continue;
    }

    out.push(convertInlineMarkup(line));
  }

  return out;
}

function dedent(lines: string[]) {
  const nonEmpty = lines.filter((line) => line.trim().length > 0);
  const minIndent = Math.min(...nonEmpty.map(indentation), Number.POSITIVE_INFINITY);
  if (!Number.isFinite(minIndent)) {
    return [];
  }
  return lines.map((line) => line.slice(minIndent));
}

function indentation(line: string) {
  return line.match(/^ */)?.[0].length ?? 0;
}

function convertInlineMarkup(line: string) {
  return line
    .replace(/`([^`<]+?)\s*<((?:https?:\/\/|mailto:)[^>]+)>`_/g, '[$1]($2)')
    .replace(/`([^`<]+?)\s*<([^>]+)>`_/g, (_match, text: string, target: string) => `[${text}](${normalizeDocLink(target)})`)
    .replace(/:doc:`([^`<]+?)\s*<([^>]+)>`/g, (_match, text: string, target: string) => `[${text}](${normalizeDocLink(target)})`)
    .replace(/:doc:`([^`]+)`/g, (_match, target: string) => `[${target}](${normalizeDocLink(target)})`)
    .replace(/:(?:ref|class|func|filter|tag|test|operator|option|method|const|attr):`([^`<]+?)\s*<([^>]+)>`/g, '`$1`')
    .replace(/:(?:ref|class|func|filter|tag|test|operator|option|method|const|attr):`([^`]+)`/g, '`$1`')
    .replace(/``([^`]+)``/g, '`$1`')
    .replace(/\{\{/g, '&#123;&#123;')
    .replace(/\}\}/g, '&#125;&#125;');
}

function normalizeDocLink(target: string) {
  const cleanTarget = target.trim().replace(/^\//, '');
  if (/^(https?:|mailto:|#)/.test(cleanTarget)) {
    return cleanTarget;
  }

  const [filePart, hashPart] = cleanTarget.split('#');
  const normalizedFile = filePart.endsWith('.rst') ? filePart.replace(/\.rst$/, '') : filePart;
  if (normalizedFile.endsWith('/index')) {
    const section = normalizedFile.slice(0, -'/index'.length).split('/').pop();
    return section ? `/${VERSION}/#${section.toLowerCase()}` : `/${VERSION}/`;
  }
  return hashPart ? `${normalizedFile}#${hashPart}` : normalizedFile;
}

function normalizeBlankLines(lines: string[]) {
  const normalized: string[] = [];
  let blankCount = 0;

  for (const line of lines) {
    if (line.trim() === '') {
      blankCount += 1;
      if (blankCount <= 2) {
        normalized.push('');
      }
    } else {
      blankCount = 0;
      normalized.push(line);
    }
  }

  return normalized;
}

function titleFromPath(sourcePath: string) {
  const base = path.basename(sourcePath, '.rst');
  if (base === 'index') {
    return 'Twig Documentation';
  }
  return base
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function buildSidebar(pages: Page[]): SidebarItem[] {
  const groups = new Map<string, Page[]>();

  for (const page of pages) {
    const [firstSegment] = page.outputPath.split('/');
    const groupName = page.outputPath.includes('/') ? firstSegment : 'Guides';
    const groupPages = groups.get(groupName) ?? [];
    groupPages.push(page);
    groups.set(groupName, groupPages);
  }

  const sidebar: SidebarItem[] = [
    {
      text: 'Introduction',
      items: [
        { text: 'Getting Started', link: `/${VERSION}/` }
      ]
    }
  ];

  for (const [group, groupPages] of [...groups.entries()].sort(([a], [b]) => sortGroups(a, b))) {
    sidebar.push({
      text: titleFromPath(`${group}.rst`),
      collapsed: group !== 'Guides',
      items: groupPages
        .sort((a, b) => a.outputPath.localeCompare(b.outputPath))
        .map((page) => ({
          text: plainTitle(page.title),
          link: pageLink(page.outputPath)
        }))
    } as SidebarItem);
  }

  return sidebar;
}

async function writeVersionIndex(outputRoot: string, pages: Page[], commit: string) {
  const groups = buildSidebar(pages).filter((item) => item.items?.length && item.text !== 'Introduction');
  const sections = groups.map((group) => {
    const items = group.items
      ?.slice(0, group.text === 'Guides' ? undefined : 12)
      .map((item) => `- [${item.text}](${item.link})`)
      .join('\n');
    return `## ${group.text}\n\n${items}`;
  });

  await writeTextFile(path.join(outputRoot, 'docs', VERSION, 'index.md'), [
    '---',
    'title: "Getting Started"',
    `source: ${JSON.stringify(`https://github.com/twigphp/Twig/blob/${commit}/doc/index.rst`)}`,
    'upstreamPath: "doc/index.rst"',
    'editLink: true',
    '---',
    '# Getting Started',
    '',
    'Browse the generated Twig 3.x documentation synced from the upstream Twig repository.',
    '',
    ...sections,
    ''
  ].join('\n'));
}

function plainTitle(title: string) {
  return title.replace(/``([^`]+)``/g, '$1').replace(/`([^`]+)`/g, '$1');
}

function pageLink(outputPath: string) {
  if (outputPath === 'index.md') {
    return `/${VERSION}/`;
  }
  if (outputPath.endsWith('/index.md')) {
    return `/${VERSION}/${outputPath.slice(0, -'index.md'.length)}`;
  }
  return `/${VERSION}/${outputPath.replace(/\.md$/, '')}`;
}

function sortGroups(a: string, b: string) {
  const order = ['Guides', 'tags', 'filters', 'functions', 'tests'];
  const aIndex = order.indexOf(a);
  const bIndex = order.indexOf(b);
  if (aIndex !== -1 || bIndex !== -1) {
    return (aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex) - (bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex);
  }
  return a.localeCompare(b);
}

async function writeSidebar(outputRoot: string, sidebar: SidebarItem[]) {
  const file = path.join(outputRoot, 'docs/.vitepress/generated/sidebar.ts');
  const contents = [
    "import type { DefaultTheme } from 'vitepress';",
    '',
    `export const twigSidebar = ${JSON.stringify(sidebar, null, 2)} satisfies DefaultTheme.SidebarItem[];`,
    ''
  ].join('\n');
  await writeTextFile(file, contents);
}

async function writeMetadata(outputRoot: string, metadata: Record<string, unknown>) {
  await writeTextFile(path.join(outputRoot, 'upstream/twig-3.x.json'), `${JSON.stringify(metadata, null, 2)}\n`);
}

async function writeTextFile(file: string, contents: string) {
  await import('node:fs/promises').then((fs) => fs.mkdir(path.dirname(file), { recursive: true }));
  await writeFile(file, contents);
}

async function assertGeneratedFilesAreCurrent(outputRoot: string) {
  const generatedFiles = await listFiles(outputRoot);
  const mismatches: string[] = [];

  for (const generatedFile of generatedFiles) {
    const relative = path.relative(outputRoot, generatedFile);
    const actualFile = path.join(rootDir, relative);

    if (!existsSync(actualFile)) {
      mismatches.push(relative);
      continue;
    }

    const [generated, actual] = await Promise.all([
      readFile(generatedFile, 'utf8'),
      readFile(actualFile, 'utf8')
    ]);

    if (generated !== actual) {
      mismatches.push(relative);
    }
  }

  if (mismatches.length > 0) {
    throw new Error(`Generated Twig docs are out of date:\n${mismatches.map((file) => `- ${file}`).join('\n')}`);
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
