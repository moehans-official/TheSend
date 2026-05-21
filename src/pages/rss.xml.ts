import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

export const GET: APIRoute = async (context) => {
  const posts = await getCollection('blog');
  const sortedPosts = posts
    .filter(post => !post.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
    .slice(0, 20);

  return rss({
    title: 'TheSend',
    description: '基于 Astro 的极简博客',
    site: context.site || 'https://example.com',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description || '',
      link: `/blog/${post.id}`,
      categories: post.data.tags || [],
    })),
    customData: `<language>zh-CN</language>`,
  });
};