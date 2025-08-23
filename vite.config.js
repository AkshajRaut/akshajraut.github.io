import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 set this based on your repo name
export default defineConfig({
  plugins: [react()],
  base: '/akshajraut.github.io/',   // <-- important!
})