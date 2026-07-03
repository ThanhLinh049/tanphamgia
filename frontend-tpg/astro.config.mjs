import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || undefined,
  output: 'static',
  adapter: vercel({
    isr: {
      expiration: 60,
    },
  }),
  integrations: [
    tailwind({
      configFile: './tailwind.config.mjs',
    }),
  ],
});

