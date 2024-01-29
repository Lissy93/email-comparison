import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import lit from '@astrojs/lit';

const siteMapFilter = (page) => !page.includes('/summary');

// https://astro.build/config
export default defineConfig({
  integrations: [lit(), sitemap({ filter: siteMapFilter })],
  site: process.env.SITE,
  base: process.env.BASE_URL,
});
