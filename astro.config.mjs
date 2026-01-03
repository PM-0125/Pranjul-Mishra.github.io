import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://pm-0125.github.io',
  outDir: 'dist',
  integrations: [react()]
});