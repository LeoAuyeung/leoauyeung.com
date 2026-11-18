// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://leoauyeung.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
