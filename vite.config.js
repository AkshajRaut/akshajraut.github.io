import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Edit `base` to '/<your-repo-name>/' if deploying from a project repo (not username.github.io)
export default defineConfig({
  plugins: [react()],
  base: '/', // change to '/<repo>/' if hosting from a repo
})
