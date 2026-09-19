import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  // Important for GitHub Pages
  base: '/Collegedecode/',

  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },

  server: {
    // Keep your existing AI Studio settings
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
})
