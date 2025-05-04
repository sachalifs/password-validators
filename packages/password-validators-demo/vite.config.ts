import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/password-validators/',
  resolve: {
    alias: {
      '@slifszyc/password-validators': path.resolve(
        __dirname,
        '../password-validators/src'
      ),
    },
  },
})
