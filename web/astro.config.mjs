import { defineConfig } from 'astro/config';

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  integrations: [lit()],
  site: process.env.SITE,
  base: process.env.BASE_URL,
});
