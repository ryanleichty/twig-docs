import { defineConfig } from 'vitepress';
import { twigSidebar } from './generated/sidebar';
import { createTwigLanguages } from './twig-language';

type EditLinkPage = {
  frontmatter: {
    upstreamPath?: string;
  };
};

function upstreamEditUrl(page: EditLinkPage) {
  const upstreamPath = page.frontmatter.upstreamPath;

  if (upstreamPath) {
    return `https://github.com/twigphp/Twig/edit/3.x/${encodeURI(upstreamPath)}`;
  }

  return 'https://github.com/twigphp/Twig/tree/3.x/doc';
}

export default defineConfig({
  title: 'Twig Docs',
  description: 'An unofficial VitePress reader for the Twig 3.x documentation.',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    languages: createTwigLanguages()
  },
  ignoreDeadLinks: [
    /^https:\/\/github\.com\/twigphp\/Twig/,
    /^https:\/\/twig\.symfony\.com/
  ],
  themeConfig: {
    logo: { src: '/logo.svg', alt: 'Twig Docs' },
    nav: [
      { text: 'Docs', link: '/3.x/' },
      { text: 'Upstream', link: 'https://github.com/twigphp/Twig/tree/3.x/doc' }
    ],
    sidebar: {
      '/3.x/': twigSidebar
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/twigphp/Twig' }
    ],
    editLink: {
      pattern: upstreamEditUrl,
      text: 'Edit this page upstream'
    },
    footer: {
      message: 'Unofficial Twig documentation reader. Content is synced from twigphp/Twig.'
    }
  }
});
