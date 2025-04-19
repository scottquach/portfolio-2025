// 1. Import utilities from `astro:content`
import { defineCollection, reference, z } from 'astro:content';

import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const blog = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/blog' }),
    schema: z.object({
        status: z.string(),
        category: z.string(),
        title: z.string(),
        date: z.string(),
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog };
