import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://familyworkouts.com',
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
          pt: 'pt-BR',
          hi: 'hi-IN',
          ar: 'ar-SA',
          zh: 'zh-CN',
          fr: 'fr-FR'
        }
      }
    })
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
