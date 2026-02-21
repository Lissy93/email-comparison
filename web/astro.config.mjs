import { defineConfig } from 'astro/config';

import lit from '@semantic-ui/astro-lit';

// https://astro.build/config
export default defineConfig({
  integrations: [lit()],
  site: process.env.SITE || 'https://email-comparison.as93.net',
});
