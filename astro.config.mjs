import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  /** Sin sesiones: no aprovisiona un namespace KV al desplegar. */
  session: false,
  /**
   * Cloudflare Workers. Las páginas se prerenderizan; solo `/api/contact` es on-demand.
   * Las imágenes se optimizan en el build con Sharp (`compile` + prerender en Node).
   */
  adapter: cloudflare({
    imageService: 'compile',
    prerenderEnvironment: 'node',
  }),
  vite: { plugins: [tailwindcss()] },
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
