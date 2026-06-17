// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

// Keystatic (CMS) beží len lokálne; pri build-e sa vynechá → web je statický.
const enableKeystatic = process.env.NODE_ENV !== "production";

export default defineConfig({
  site: "https://thevilo.github.io",
  integrations: [react(), ...(enableKeystatic ? [keystatic()] : [])],
});
