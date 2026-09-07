import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://etraction.com.br",
  output: "static",
  integrations: [
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
            if (id.includes("gsap")) return "motion";
          }
        }
      }
    }
  }
});
