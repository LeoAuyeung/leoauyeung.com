// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { photosReady } from './src/data/flags.ts';

export default defineConfig({
  site: 'https://leoauyeung.com',
  output: 'static',
  trailingSlash: 'ignore',
  // Keep the WIP /photos page out of the sitemap until real photos are in.
  integrations: [sitemap({ filter: (page) => photosReady || !/\/photos\/?$/.test(page) })],
});
