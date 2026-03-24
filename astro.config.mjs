// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://onejensen.github.io',
  base: '/Talleres_AutoMarcos',
  vite: {
    plugins: [tailwindcss()]
  }
});