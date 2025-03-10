import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://sancal0606.github.io/portafolio/",
  plugins: [react()],
  css:{
    modules: {
      localsConvention: "camelCase",
    }
  }
})
