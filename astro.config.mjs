import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://etraction.com.br",
  output: "static",
  integrations: [
    react(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      filter: (page) => !page.includes("case-em-validacao") && !page.includes("conteudo-a-migrar")
    })
  ],
  build: {
    assets: "assets"
  },
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("three") || id.includes("@react-three")) return "growth-scene";
            if (id.includes("gsap")) return "motion";
          }
        }
      }
    }
  }
});
