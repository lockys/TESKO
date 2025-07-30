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
  base: "./",
  plugins: [
    react(),
    // Configure the PWA plugin. This generates a service worker, caches assets
    // and injects a web manifest at build time.
    VitePWA({
      includeAssets: ["pwa-192x192.png", "pwa-512x512.png", "pwa-512x512-maskable.png"],
      registerType: 'autoUpdate',
      manifestFilename: 'manifest.webmanifest',
      injectRegister: 'auto',
      strategies: 'generateSW',
      manifest: {
        name: "TESKO",
        short_name: "TESKO",
        description: "Realtime dashboard and trip analysis for EV owners",
        theme_color: "#00C0BF",
        background_color: "#ffffff",
        display: "standalone",
        orientation: 'portrait',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "pwa-512x512-maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'document',
            handler: 'NetworkFirst',
            options: { cacheName: 'html-cache' }
          },
          {
            urlPattern: ({ request }) =>
              ['style', 'script', 'worker'].includes(request.destination),
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'asset-cache' }
          },
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
              expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 30 }
            }
          }
        ]
      }
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
