import path from "path"
import { fileURLToPath } from "url"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { VitePWA } from "vite-plugin-pwa"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Vite configuration for TESKO
// We integrate the PWA plugin to generate a service worker and manifest.
export default defineConfig({
  plugins: [
    react(),
    // Configure the PWA plugin. This generates a service worker, caches assets
    // and injects a web manifest at build time.
    VitePWA({
      registerType: "prompt",
      includeAssets: ["pwa-192x192.png", "pwa-512x512.png"],
      manifest: {
        name: "TESKO",
        short_name: "TESKO",
        description: "Realtime dashboard and trip analysis for EV owners",
        theme_color: "#00C0BF",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
