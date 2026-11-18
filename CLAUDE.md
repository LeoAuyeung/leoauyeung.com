# leoauyeung.com

Personal site for Leo Au-Yeung. Minimal, recruiter-first. Full design spec: `docs/REDESIGN_PLAN.md`.

## Stack
- Astro 7, static output, TypeScript strict. No UI framework, no Tailwind, no Bootstrap.
- Plain CSS with custom properties in `src/styles/global.css` (all tokens live there).
- Fonts: `@fontsource-variable/geist` (text), `@fontsource-variable/geist-mono` (labels/meta).
- Images via `astro:assets` (`<Picture>`, `getImage`) → AVIF/WebP, several widths.
- Deploy: `.github/workflows/deploy.yml` (withastro/action + actions/deploy-pages) on push to `master`.

## Commands
- `npm run dev` — dev server at http://localhost:4321
- `npm run build` — `astro check` + static build to `dist/`
- `npm run preview` — serve `dist/`

## Layout
- `src/data/` — ALL content (site.ts, experience.ts, projects.ts, photos.ts). Edit content here, never in components.
- `src/components/` — Nav, Hero, Section, ExperienceItem, ProjectItem, PhotoGrid, Lightbox, Reveal, Footer
- `src/layouts/Base.astro` — head, meta, fonts, theme
- `src/pages/` — index (landing: hero only), work (about, experience, projects), photos (WIP page until `photosReady` in src/data/flags.ts is true), 404
- `src/assets/photos/` — source JPGs (sRGB, ~2400px long edge, GPS stripped)
- `public/` — CNAME, resume.pdf, favicon.svg, og.png, sw.js (kill-switch for the old Gatsby service worker — keep until ~mid 2027)

## Design rules (do not break)
- No cards, borders around sections, box shadows, rounded buttons or icon circles. Spacing comes from whitespace.
- Links are text, underlined on hover. Accent color only on the hero name and link hover.
- Every piece of meta text (dates, places, tags, captions, nav) uses the `.label` mono style: 12px, uppercase, 0.06em tracking (nav/captions are lowercase via `.label--lower`).
- Sentence case for prose, lowercase for nav and captions.
- Always use the Oxford comma in copy.
- Text column max 680px (`--w-text`), photo grid max 1100px (`--w-wide`).
- Light theme `#fafaf8` / `#111`, automatic dark via `prefers-color-scheme`. Never hard-code colors or sizes outside global.css.
- Only JS allowed: scroll fade-in (IntersectionObserver, off under reduced motion) and the photo lightbox.
- Keep `#about`, `#experience`, `#projects` ids on /work; the landing page redirects those old hashes to /work.
- Never put a phone number on the site, including `public/resume.pdf`.
- `public/resume.pdf` is synced from Leo's Google Doc at deploy time by `scripts/fetch-resume.sh` (daily cron + manual run). The committed file is only a fallback; edit the doc, not the PDF.
- Never commit the résumé doc's ID or a link to the doc. It lives in the `RESUME_DOC_ID` GitHub secret.
