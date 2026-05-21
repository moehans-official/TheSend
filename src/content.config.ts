import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    description: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    showToc: z.boolean().default(true),
  }),
});

export const collections = { blog };
