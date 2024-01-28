import { defineConfig } from 'astro/config';

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  integrations: [lit()],
  base: process.env.BASE_URL || '/',
  vite: {
    define: {
      'import.meta.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
    },
  },
});
