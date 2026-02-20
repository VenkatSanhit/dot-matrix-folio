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

Live at **https://venkatsanhit.github.io/dot-matrix-folio/**

### Deploy (one command)

```sh
npm run deploy
```

Builds and pushes to the `gh-pages` branch. Ensure **Settings → Pages** uses **Deploy from a branch** → `gh-pages` / root.

### GitHub Actions (optional)

Push to `main` triggers auto-deploy. Requires **Settings → Pages** → **Source: GitHub Actions**.
