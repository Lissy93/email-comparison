import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import lit from '@semantic-ui/astro-lit';

const siteMapFilter = (page) => !page.includes('/summary');

// https://astro.build/config
export default defineConfig({
  integrations: [lit(), sitemap({ filter: siteMapFilter })],
  site: process.env.SITE || 'https://email-comparison.as93.net',
});
