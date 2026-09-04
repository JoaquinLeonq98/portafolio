import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  /** Netlify (Functions para /api/*). En local sigue siendo `npm run dev`. */
  adapter: netlify(),
  integrations: [tailwind()],
  /** Solo `astro dev` / preview local. El servidor Node de producción usa el puerto que definas al arrancar (p. ej. PORT=3000). */
  server: { port: 4321 },
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'darkgrey-alpaca-160443.hostingersite.com',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'evo.coparmexqro.org',
        pathname: '/assets/**',
      },
    ],
  },
});