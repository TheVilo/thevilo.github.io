import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const kategorie = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/kategorie" }),
  schema: z.object({
    nazov: z.string(),
    poradie: z.number().default(0),
    futbalnetSlug: z.string().optional().default(""),
  }),
});

export const collections = { kategorie };
