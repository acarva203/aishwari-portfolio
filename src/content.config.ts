import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// A running log of what Aishwari is currently working on / learning / reading.
// Add an update by dropping a new markdown file in src/content/updates/.
const updates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/updates' }),
  schema: z.object({
    date: z.string(), // YYYY-MM-DD
    title: z.string(),
    tag: z.enum(['building', 'learning', 'reading', 'shipping', 'thinking']).default('building'),
  }),
});

export const collections = { updates };
