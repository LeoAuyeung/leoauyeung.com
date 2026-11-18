# leoauyeung.com Redesign Plan

Nov 17, 2026 · @Leo

Rebuild leoauyeung.com as a minimal, recruiter-first site: a landing screen with just your name, one line and links, your professional story below the fold, and photography on its own page. The current Gatsby 2 site is too old to restyle cleanly, so the plan is a fresh Astro build, same domain.

> Build note: this was built in a brand-new repo (`leoauyeung.com`) rather than inside the old `leoauyeung.github.io` repo, so Phase 0's tag step and Phase 1's "delete the old Gatsby source" step do not apply. The old repo is untouched.

## The aesthetic to borrow

| Site | What to borrow |
| --- | --- |
| [Nathan To](https://nathanto.co/) | The **photos page**: tight 3-column grid, thin gutters, nothing competing with the images. |
| [Shannon Lau](https://www.shannonlau.com/) | The **structure for professional content**: one-sentence hero, then label/content columns for about, experience and projects. |
| [La Roca](https://laroca.design/) | The **typography and captions**: small mono-flavored type, lowercase meta text, and a single caption style for every piece of work. |

The combination: La Roca's type and restraint, Shannon's layout for the career content, and Nathan's grid for photography.

## Design direction

No photo of yourself on the landing page. Photography gets its own page, linked from the landing screen, with a 3-thumbnail teaser at the end of the home page.

| Decision | Choice |
| --- | --- |
| Theme | Light: off-white `#fafaf8` background, near-black `#111` text. Automatic dark mode via `prefers-color-scheme` |
| Typefaces | Geist for text, Geist Mono for labels, dates, captions and nav (self-hosted via @fontsource-variable) |
| Type sizes | Body 16px / 1.6. Labels and dates 12px mono, uppercase, letter-spacing 0.06em. Hero line 22–28px |
| Color | One accent, used only for the name in the hero and link hover: muted blue `#2f5bd3` |
| Case | Sentence case for prose, lowercase for nav and captions |
| Layout width | Text column max 680px. Photo grid up to 1100px |
| Motion | One soft fade-in as sections scroll into view, off under `prefers-reduced-motion` |
| Headshot | None on the site |
| Photography | Separate `/photos` page plus a 3-thumbnail teaser at the end of the home page |
| Name shown | "Leo Au-Yeung" (full legal name in page metadata only) |

Rules: no cards, borders around sections, box shadows, rounded buttons or icon circles. Spacing comes from whitespace. Links are text, underlined on hover. Every piece of meta text (dates, places, tags, captions) uses the same mono label style.

## Site structure

| Route | For | Contents |
| --- | --- | --- |
| `/` | Recruiters first, everyone | Hero (first screen), then About, Experience, Hackathons, Projects, Photos teaser, Footer |
| `/photos` | People curious about the photography | Small header, photo grid, lightbox |
| `/resume.pdf` | Recruiters | Current résumé, a static file |
| `/404` | Anyone lost | One line and a link home |

### Home: the first screen

```text
                                                     work · photos · résumé ↗

Leo Au-Yeung
Software engineer, most recently at Stripe.
{one clause}

email · linkedin · github · résumé ↗

↓
```

- Nav top-right in the 12px mono label style; stays three words on mobile.
- Name uses the accent color. Everything else is ink or muted gray.
- Contact links are text, not icons.

### Home: below the fold

On screens ≥768px each section has two columns: a 140px sticky label column in mono caps and the content column. On mobile the label sits above the content.

- **About:** 2–3 short paragraphs.
- **Experience:** newest first. "Company — Title", mono "MON YYYY — MON YYYY · CITY", at most 3 bullets with numbers. Internships collapse into one line each under "Earlier". End with "full résumé ↗".
- **Projects:** title left, links right, mono line of year and tags, one sentence.
- **Photos teaser:** three photos in a row linking to `/photos`, with "more photos →".
- **Footer:** "Designed and built by Leo Au-Yeung, 2026" plus a link to the source.

### Photos page

- Small top bar with "Leo Au-Yeung" linking home, and the same nav.
- Grid: 3/2/1 columns, 6px gutters, every image cropped to 4:5.
- Lightbox: ←/→, Esc, swipe, focus trap, full-size image; optional mono caption (place · year).
- Lazy-loaded AVIF/WebP at several widths with fixed aspect ratios.

## Tech approach

- **Astro**, static output. **Plain CSS** with custom properties. **Fonts** from `@fontsource-variable/geist` and `@fontsource-variable/geist-mono`.
- **Content in typed data files** (`src/data/*.ts`).
- **Images** through `astro:assets`.
- **Deploy** via GitHub Actions (`withastro/action` + `actions/deploy-pages`) on push to `master`.

## Build phases

1. Scaffold and deploy pipeline
2. Design tokens and base layout (+ temporary /styleguide)
3. Landing hero
4. About, Experience, Projects (+ fade-in)
5. Photos page + lightbox + home teaser
6. Polish: 404, favicon, og.png, sitemap, a11y, Lighthouse ≥95, delete /styleguide
7. Launch (see README)

## Content checklist (answers)

- **Role:** Software engineer, most recently at Stripe (Mar 2025 – Apr 2026), before that Qualtrics.
- **Hero line:** New York pun, born and raised → "Your friendly neighborhood software engineer, born and raised in New York."
- **Display name:** Leo Au-Yeung
- **About:** Most recently SWE at Stripe + Qualtrics. Working on impactful products end to end with visible impact on users. Outside: 2x marathoner, photographer, creator.
- **Experience:** from résumé, summarized.
- **Earlier:** keep Qualtrics + Numina internships as one-liners; older items (Google Mentorship, Hunter Codefest) as minor one-liners for now.
- **Hackathons:** own section under the engineering content.
- **Projects:** HackNYU 2020 (<https://bit.ly/changeHackNYU20>), JPMC Code for Good 2019 (<https://bit.ly/pactCFG19>), APCS Pokémon project (<https://github.com/LeoAuyeung/Team-Fantastic-Baby>).
- **Résumé PDF:** export from the Google Doc *without the phone number*, save as `public/resume.pdf`. (A placeholder is committed.)
- **Photos:** TBD — placeholders for now.
- **Links:** leo297747@gmail.com, <https://www.linkedin.com/in/leo-au-yeung/>, <https://github.com/leoauyeung>

## Gotchas

**The old site's service worker.** The Gatsby site used `gatsby-plugin-offline`, which installed a service worker at `/sw.js`. Ship this kill-switch as `public/sw.js` for a few months:

```js
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => caches.delete(k)));
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach((c) => c.navigate(c.url));
  })());
});
```

**GitHub Pages source.** Set Settings → Pages → Source to **GitHub Actions** on the new repo.

**Custom domain.** `CNAME` lives in `public/`. Because this is a new repo, remove the custom domain from the old `leoauyeung.github.io` repo first — GitHub only lets one repo claim a domain.

**Location data in photos.** `exiftool -gps:all= -overwrite_original src/assets/photos/*.jpg`

**Repo size.** ~2400px long edge at 80–85% JPEG quality, under ~1MB each.

**Old links.** Keep `#about` and `#experience` as section ids.
