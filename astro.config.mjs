import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://familyworkouts.com',
  integrations: [
    tailwind()
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'hi', 'ar', 'zh', 'fr'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  build: {
    inlineStylesheets: 'auto'
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    domains: ['img.youtube.com', 'i.ytimg.com']
  },
  vite: {
    build: {
      cssCodeSplit: true
    }
  }
});
