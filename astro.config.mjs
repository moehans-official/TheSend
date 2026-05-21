// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/draft/') && !page.includes('/admin/'),
      customPages: [],
      serialize(item) {
        // 添加最后修改日期
        item.lastmod = new Date().toISOString();
        // 设置优先级
        if (item.url === 'https://example.com/') {
          item.priority = 1.0;
        } else if (item.url.includes('/blog/')) {
          item.priority = 0.8;
        } else if (item.url.includes('/archive/') || item.url.includes('/search/')) {
          item.priority = 0.6;
        } else {
          item.priority = 0.5;
        }
        // 设置更新频率
        if (item.url === 'https://example.com/' || item.url.includes('/blog/')) {
          item.changefreq = 'weekly';
        } else {
          item.changefreq = 'monthly';
        }
        return item;
      },
    })
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  server: {
    allowedHosts: ['.monkeycode-ai.online']
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
