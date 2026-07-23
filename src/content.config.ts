import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    title: z.string(),
    date: z.coerce.date(),
    agency: z.string(),
    tags: z.array(z.string()),
    logo: z.string(),
    color: z.string(),
    // Slide lists in frontmatter drifted from the files on disk (see
    // src/lib/slides.ts, which reads the directory instead).
    slides: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };
