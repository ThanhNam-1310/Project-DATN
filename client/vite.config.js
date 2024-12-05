import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8386,
  },
  resolve: {
    alias:{
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@icons': path.resolve(__dirname,'src/assets/icons/svgs'),
      '@constans': path.resolve(__dirname, 'src/constans'),
    }
  }
})
