import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/weatherforecast': {
        target: 'http://localhost:5271',
        changeOrigin: true,
        secure: false
      }
    }
  }
})