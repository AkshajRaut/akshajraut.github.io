# Akshaj Raut — Professional Portfolio (React + Vite + Tailwind)

Multi‑page portfolio with React Router, styled with Tailwind. Deployed easily to GitHub Pages.

## Scripts
- `npm install`
- `npm run dev` → local dev
- `npm run build` → production build

## Deploy to GitHub Pages
### Option A — Username site (recommended)
1. Create repo: `AkshajRaut.github.io`.
2. In `vite.config.js`, leave `base: '/'`.
3. Push code; enable **Settings → Pages → GitHub Actions** (workflow included).

### Option B — Project site
1. Create repo (any name, e.g., `portfolio`).
2. Set `base: '/portfolio/'` in `vite.config.js`.
3. Commit + push; Pages (Actions) builds to `gh-pages` automatically.

## Customize
- Update routes/pages in `src/pages/`.
- Replace `public/Akshaj_Raut_Resume.pdf` with your actual resume.
- Project data lives in `Projects.jsx` as an array of cards.
