import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // User/Organization GitHub Pages sites are served from the root domain
  // (https://talha-webdev.github.io/), so the base path is "/".
  base: '/',
  plugins: [react(), tailwindcss()],
})
