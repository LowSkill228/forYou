import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://LowSkill228.github.io',
  base: '/forYou/',

  server: {
    allowedHosts: ['.trycloudflare.com']
  }
});
