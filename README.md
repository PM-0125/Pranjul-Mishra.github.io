# Pranjul Mishra — Portfolio (Astro)

Cosmos-themed portfolio for Pranjul Mishra (Research Software Engineer, credible AI/RAG) built with Astro. Deployed via GitHub Pages from `main`.

## Stack
- Astro (static site), Fuse.js for blog search
- Custom CSS (cosmos theme), particles canvas, PWA (manifest + SW)
- Content defined in `src/data/content.ts`

## Structure
- `src/pages/index.astro` – main page with all sections.
- `src/styles/global.css` – theme and layout.
- `src/data/content.ts` – hero, research, projects, experience, skills, achievements, blog posts.
- `public/manifest.webmanifest`, `public/sw.js`, `public/PRANJULMISHRA_CV.pdf` – static assets.

## Local development
```bash
npm install
npm run dev
# open http://localhost:4321
```

## Build
```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)
Workflow `.github/workflows/deploy.yml` builds and deploys `dist` on pushes to `main`. Ensure Pages is enabled for the repo.

## View the site
Once Pages is enabled and a build has run, the site will be available at:
- https://pranjul-mishra.github.io

## Owner TODO
- Update Formspree endpoint in `src/pages/index.astro` (`action="https://formspree.io/f/YOUR_FORM_ID"`).
- Add GA4 later by inserting gtag in `<head>` when you have the Measurement ID.
- Replace `og-preview.png` if you add a custom preview image.
