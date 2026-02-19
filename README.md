# Dot Matrix Folio

Premium Product Manager / Product Owner portfolio — minimal, retro-tech, modern SaaS aesthetic.

## Tech Stack

- Vite
- TypeScript
- React
- Tailwind CSS
- Framer Motion
- shadcn/ui components

## Quick Start

```sh
npm install
npm run dev
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── sections/       # Page section components
├── data/           # Content data (projects, experiences, metrics)
├── pages/          # Route pages
└── lib/            # Utilities
```

## Build

```sh
npm run build
npm run preview
```

## Contact Form

Uses [FormSubmit](https://formsubmit.co) (free, no signup). **First-time setup:** Submit a test message from the live site — FormSubmit will email you an activation link. Click it once to enable. After that, all messages go straight to your inbox.

## Deploy to GitHub Pages

This portfolio is configured to deploy to **https://venkatsanhit.github.io/studio-pm-showcase/**.

### Option A: Push to `studio-pm-showcase` repo (recommended)

1. Copy this project into your `studio-pm-showcase` repo (or push this code to it)
2. In repo **Settings → Pages**, set **Source** to **GitHub Actions**
3. Push to `main` — the workflow will build and deploy automatically

### Option B: Manual deploy

```sh
VITE_GH_PAGES=true npm run build
# Then push the `dist/` folder to the gh-pages branch of studio-pm-showcase
```
