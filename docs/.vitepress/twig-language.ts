import twigLanguages from '@shikijs/langs/twig';
import type { LanguageInput } from 'shiki';

type Grammar = Record<string, unknown> & {
  name?: string;
  repository?: Record<string, Record<string, string>>;
};

const tags = [
  'apply',
  'autoescape',
  'block',
  'cache',
  'deprecated',
  'do',
  'embed',
  'extends',
  'flush',
  'for',
  'from',
  'guard',
  'if',
  'import',
  'include',
  'macro',
  'raw',
  'sandbox',
  'set',
  'spaceless',
  'trans',
  'types',
  'use',
  'verbatim',
  'with'
];

const filters = [
  'abs',
  'batch',
  'capitalize',
  'column',
  'convert_encoding',
  'country_name',
  'currency_name',
  'currency_symbol',
  'data_uri',
  'date',
  'date_modify',
  'default',
  'e',
  'escape',
  'filter',
  'find',
  'first',
  'format',
  'format_currency',
  'format_date',
  'format_datetime',
  'format_number',
  'format_time',
  'html_attr_merge',
  'html_attr_type',
  'html_to_markdown',
  'inky_to_html',
  'inline_css',
  'invoke',
  'join',
  'json_encode',
  'keys',
  'language_name',
  'last',
  'length',
  'locale_name',
  'lower',
  'map',
  'markdown_to_html',
  'merge',
  'nl2br',
  'number_format',
  'plural',
  'raw',
  'reduce',
  'replace',
  'reverse',
  'round',
  'shuffle',
  'singular',
  'slice',
  'slug',
  'sort',
  'spaceless',
  'split',
  'striptags',
  'timezone_name',
  'title',
  'trim',
  'u',
  'upper',
  'url_encode'
];

const functions = [
  'attribute',
  'block',
  'constant',
  'country_names',
  'country_timezones',
  'currency_names',
  'cycle',
  'date',
  'dump',
  'enum',
  'enum_cases',
  'html_attr',
  'html_classes',
  'html_cva',
  'include',
  'language_names',
  'locale_names',
  'max',
  'min',
  'parent',
  'random',
  'range',
  'script_names',
  'source',
  'template_from_string',
  'timezone_names'
];

const tests = [
  'constant',
  'defined',
  'divisible by',
  'empty',
  'even',
  'iterable',
  'mapping',
  'null',
  'odd',
  'same as',
  'sequence'
];

function alternatives(values: string[]) {
  return values
    .sort((a, b) => b.length - a.length)
    .map((value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');
}

function findTwigGrammar(languages: LanguageInput[]) {
  return languages.find((language): language is Grammar => {
    return typeof language === 'object' && language !== null && 'name' in language && language.name === 'twig';
  });
}

export function createTwigLanguages(): LanguageInput[] {
  const languages = JSON.parse(JSON.stringify(twigLanguages)) as LanguageInput[];
  const grammar = findTwigGrammar(languages);
  const repository = grammar?.repository;

  if (!repository) {
    return languages;
  }

  const tagAlternatives = alternatives(tags);
  const filterAlternatives = alternatives(filters);
  const functionAlternatives = alternatives(functions);
  const testAlternatives = alternatives(tests);

  repository['twig-keywords'].match = `(?<=\\s)((?:end)?(?:${tagAlternatives})|as|else|elseif|ignore missing|only)(?=\\s)`;
  repository['twig-filters'].match = `(?<=(?:[a-zA-Z0-9_\\x{7f}-\\x{ff}\\]\\)'\\"]\\|)|\\{%\\sfilter\\s)(${filterAlternatives})(?=[\\s\\|\\]\\}\\):,]|\\.\\.|\\*\\*)`;
  repository['twig-filters-warg'].begin = `(?<=(?:[a-zA-Z0-9_\\x{7f}-\\x{ff}\\]\\)'\\"]\\|)|\\{%\\sfilter\\s)(${filterAlternatives})(\\()`;
  repository['twig-functions'].match = `(?<=is\\s)(${testAlternatives})(?=[\\s\\)\\]\\}\\,])`;
  repository['twig-functions-warg'].begin = `(?<=[\\s\\(\\[\\{:,])(${functionAlternatives}|${testAlternatives})(\\()`;

  return languages;
}
