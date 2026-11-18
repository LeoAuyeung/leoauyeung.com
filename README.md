# leoauyeung.com

Source for [leoauyeung.com](https://leoauyeung.com). Built with [Astro](https://astro.build).

## Develop

Requires Node 24 (see `.nvmrc`).

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check + build to dist/
npm run preview   # serve the build
```

Content lives in `src/data/*.ts`. Photos go in `src/assets/photos/` and are listed in `src/data/photos.ts`.
Replace `public/resume.pdf` with your latest résumé (no phone number).

## Deploy

Every push to `master` builds and deploys via GitHub Actions (`.github/workflows/deploy.yml`).

One-time setup:
1. Remove the custom domain from the old `leoauyeung.github.io` repo (Settings → Pages), so this repo can claim it.
2. In this repo: Settings → Pages → Source: **GitHub Actions**.
3. Push to `master`, wait for the deploy, then set Custom domain to `leoauyeung.com` and tick **Enforce HTTPS**.
