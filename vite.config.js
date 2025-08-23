import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change this if you're using a project repo (not username.github.io)
const repoName = '' // e.g. '/portfolio' if repo = portfolio

export default defineConfig({
  plugins: [react()],
  base: repoName ? `${repoName}/` : '/',
})