import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import path from 'path'
import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  site: 'https://porfolio.dev/',
  integrations: [tailwind(), robotsTxt()],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
})
