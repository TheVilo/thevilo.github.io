import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: { kind: "local" },
  ui: { brand: { name: "Karlova Ves CMS" } },
  collections: {
    kategorie: collection({
      label: "Kategórie",
      slugField: "nazov",
      path: "src/content/kategorie/*",
      format: { data: "json" },
      schema: {
        nazov: fields.slug({ name: { label: "Názov kategórie" } }),
        poradie: fields.integer({ label: "Poradie", defaultValue: 0 }),
      },
    }),
  },
});
