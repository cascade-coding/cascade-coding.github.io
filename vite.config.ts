import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],

  base: "/cascade-coding.github.io/",

  server: {
    host: true,
    allowedHosts: true
  },
})