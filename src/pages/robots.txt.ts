import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const siteUrl = site ? site.href.replace(/\/$/, '') : 'https://liu030308.github.io';
  const sitemapUrl = `${siteUrl}${base}/sitemap-index.xml`;
  const content = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`;
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};

