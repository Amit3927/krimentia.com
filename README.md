# KRīMentia — Website

Solar-powered microgrid networks with edge AI, delivering electricity as a service.

Stack: Next.js (App Router) + TypeScript + Tailwind CSS. Every visual property lives in code as an explicit, editable class or CSS variable — no page-builder abstraction layer.

## First-time setup (on any machine)

```bash
git clone <your-github-repo-url> .
npm install
npm run dev
```

Then open http://localhost:3000.

## Everyday commands

```bash
npm run dev      # local dev server with live reload
npm run build    # production build (catches errors before deploy)
npm run start    # run the production build locally
npm run lint     # check code style
```

## Project structure

```
src/app/            route + page files (App Router)
  layout.tsx         root HTML shell, fonts, metadata
  page.tsx            homepage
  globals.css       design tokens (--background, --foreground, --font-sans...) + Tailwind import
public/              static assets (images, icons)
```

## Deploy

Push to GitHub, then connect the repo on Vercel, Netlify, or Cloudflare Pages — each auto-deploys on every push to `main`.
