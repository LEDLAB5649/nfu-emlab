// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages 部署環境設定：
// 正式網域：https://liu030308.github.io
// 專案子路徑：/nfu-emlab
const SITE = process.env.SITE_URL || 'https://liu030308.github.io';
const BASE = process.env.BASE_PATH || '/nfu-emlab';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh',
        locales: {
          zh: 'zh-TW',
          en: 'en',
          ja: 'ja',
        },
      },
      filter: (page) => !page.includes('/404'),
    }),
  ],
  server: {
    host: true, // 監聽 0.0.0.0，開放區域網路（LAN）所有裝置連線造訪
    port: 4321,
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
