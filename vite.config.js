import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = process.env.NODE_ENV === 'production' ? '/CodeCraft/' : '/'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  base: base
})