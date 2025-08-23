import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If repo is username.github.io → use '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})