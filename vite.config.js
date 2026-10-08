import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Build output is generated, and Windows may lock its large binary assets.
      ignored: ['**/dist/**'],
    },
  },
})
