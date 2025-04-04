import {build, defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import {resolve} from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: {
          enabled: true
        },
        manifest: {
          name: 'Simbase Mobile',
          short_name: 'Simbase',
          start_url: '/',
          display: 'standalone',
          background_color: '#ffffff',
          theme_color: '#ffffff',
          icons: [
            {
              src: '/logo.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/logo.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: '/logo.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: "maskable"
            }
          ]
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,png,jpg,svg}'],
        },
      })
  ],
})
