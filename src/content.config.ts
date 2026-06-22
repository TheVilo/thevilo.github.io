import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const kategorie = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/kategorie" }),
  schema: z.object({
    nazov: z.string(),
    poradie: z.number().default(0),
    rocnik: z.string().optional().default(""),
    trener: z.string().optional().default(""),
    popis: z.string().optional().default(""),
    foto: z.string().optional().default(""),
    aktualne: z.string().optional().default(""),
    futbalnetSlug: z.string().optional().default(""),
  }),
});

const clanokSchema = z.object({
  titulok: z.string(),
  datum: z.coerce.date(),
  kategoria: z.string().optional().default("Klub"),
  perex: z.string().optional().default(""),
  foto: z.string().optional().default(""),
});

const novinky = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/novinky" }),
  schema: clanokSchema,
});
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: clanokSchema,
});

export const collections = { kategorie, novinky, blog };
