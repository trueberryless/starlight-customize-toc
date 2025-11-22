// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      locales: {
        root: {
          label: "English",
          lang: "en", // lang is required for root locales
        },
        de: {
          label: "Deutsch",
          lang: "de",
        },
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      // routeMiddleware: "./src/routeDataMonolingual.ts",
      // routeMiddleware: "./src/routeDataMultilingual.ts",
      // routeMiddleware: "./src/routeDataIndividual.ts",
      routeMiddleware: "./src/routeDataMultilingualIndividual.ts",
    }),
  ],
});
