import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/web/apps/neo-pkg-web-example/',
  build: {
    outDir: 'build',
  },
  plugins: [react()],
})
