// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages 部署環境設定：
// 正式網域：https://web.ledlab.us.kg
// 自訂網域根路徑：/
const SITE = process.env.SITE_URL || 'https://web.ledlab.us.kg';
const BASE = process.env.BASE_PATH || '/';

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
