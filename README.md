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

## Deploy

Every push to `master` builds and deploys via GitHub Actions (`.github/workflows/deploy.yml`).

One-time setup:
1. Remove the custom domain from the old `leoauyeung.github.io` repo (Settings → Pages), so this repo can claim it.
2. In this repo: Settings → Pages → Source: **GitHub Actions**.
3. Push to `master`, wait for the deploy, then set Custom domain to `leoauyeung.com` and tick **Enforce HTTPS**.

## Résumé

`leoauyeung.com/resume.pdf` is pulled from the Google Doc "Leo Au-Yeung Resume" on every deploy (`scripts/fetch-resume.sh`).

- Edit the Google Doc; the site picks it up within a day (daily scheduled deploy).
- To update right away: GitHub → Actions → "Deploy to GitHub Pages" → **Run workflow**, or `gh workflow run deploy.yml -R LeoAuyeung/leoauyeung.com`.
- The doc must stay shared as "Anyone with the link" (Viewer is enough).
- The doc's ID lives in the `RESUME_DOC_ID` repository secret (Settings → Secrets and variables → Actions), not in the code. To run the sync locally: `RESUME_DOC_ID=<doc id> bash scripts/fetch-resume.sh`.
- Safety net: if the download fails or the PDF contains a phone number, the deploy keeps the committed `public/resume.pdf` and shows a warning in the Actions log.
