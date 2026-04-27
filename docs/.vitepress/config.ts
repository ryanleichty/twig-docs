import { defineConfig } from 'vitepress';
import { twigSidebar } from './generated/sidebar';

export default defineConfig({
  title: 'Twig Docs',
  description: 'An unofficial VitePress reader for the Twig 3.x documentation.',
  cleanUrls: true,
  lastUpdated: true,
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
      pattern: 'https://github.com/twigphp/Twig/edit/3.x/doc/:path',
      text: 'Edit this page upstream'
    },
    footer: {
      message: 'Unofficial Twig documentation reader. Content is synced from twigphp/Twig.'
    }
  }
});
