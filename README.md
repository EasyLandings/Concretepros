# Lehigh Valley Concrete Pros

A mobile-first marketing site built with Vite + React + React Router, styled
to match the original static HTML mockup exactly (charcoal/cream/orange
palette, Oswald/Inter/IBM Plex Mono, ticket-and-texture UI).

Pages: Home (`/`), Photo Gallery (`/gallery`), Reviews (`/reviews`), with a
Services and Contact section on the home page (`/#services`, `/#contact`).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000 (npm start works too, same thing)
npm run build    # production build in /dist
npm run preview  # serve the /dist build locally to sanity-check it
```

> Every file uses the `.js` extension with JSX inside, including the
> components. Vite's default config only treats `.jsx` files as JSX-capable,
> so `vite.config.js` has a small esbuild override that extends that to every
> `.js` file under `src/` — nothing else about the file layout had to change.

## Why Vite instead of Create React App

This was originally built with Create React App, which Facebook stopped
maintaining in 2025. Its `react-scripts` package pins old, now-vulnerable
versions of its own build tooling (jest, webpack-dev-server, svgo, etc.),
which is what `npm audit` was flagging — none of it shipped to your actual
visitors, but there also wasn't a real fix available short of leaving CRA
behind. Vite's toolchain (esbuild + Rollup) doesn't carry that baggage, so
`npm audit` should come back essentially clean.

No application code changed in the migration — same components, same CSS,
same data, same routes. Only the entry point, `index.html`, and the build
config changed to match Vite's conventions.

## Before you launch — replace these placeholders

| What | Where | Search for |
|---|---|---|
| Phone number | `Navbar.js`'s quote link, `InfoCard.js`, `index.html` JSON-LD | `(610) 814-2090` / `+16108142090` |
| Email | `index.html` JSON-LD | `info@lehighvalleyconcretepros.com` |
| Domain | `index.html`, `SEOHead.js`, `sitemap.xml`, `robots.txt` | `lehighvalleyconcretepros.com` |
| PA HIC license number | `Footer.js` | `PA-118273` (a real PA Home Improvement Contractor registration number is legally required on advertising) |
| Stats on the hero ticket | `BatchTicket.js` | years in business, slabs poured, PSI mix, average rating |
| Social links | `SocialLinks.js` | `facebook.com/lehighvalleyconcretepros`, `instagram.com/...` |
| Gallery photos | `src/data/gallery.js` | Each tile currently renders a CSS texture swatch (`tex-1`…`tex-6` in `index.css`) instead of a real photo — swap `GalleryTile.js` to render an `<img>` once you have real project photos, and update `alt`/`ariaLabel` text to match. |
| Reviews | `src/data/reviews.js` | Swap in your real Google/Facebook reviews; the homepage carousel + mini-grid and the `/reviews` page all read from this one file, and `index.html`'s `aggregateRating` should be updated to match. |

## Wiring up the contact form

`ContactForm.js` posts to `/api/contact`, which doesn't exist yet — it's a
placeholder so the form is fully built and just needs a backend. Given the
Resend setup already used for 4EverLilys' order emails, the quickest path is
probably a small Express route that takes the form payload and sends it
through Resend the same way; Formspree or Netlify Forms are zero-backend
alternatives if you'd rather not stand up an API for this. Validation is
native HTML5 (`required` + `checkValidity()`/`reportValidity()`), matching
the original mockup's behavior.

## How the architecture differs from the original mockup, on purpose

The original was a single static HTML file with anchor-link navigation. This
build keeps that exact look, copy, and interaction pattern on the Home page
(scroll down and it's the same page top-to-bottom), but adds two real routes:

- `/gallery` and `/reviews` are dedicated pages with their own `<title>`,
  meta description, and canonical URL — better for search visibility than
  anchor sections alone.
- The navbar's "Gallery" and "Reviews" links point at those routes; the
  hero's "See Our Work" button and the in-page gallery toggle still scroll
  within the Home page itself, exactly like the original.

## SEO / Lighthouse notes

- Per-page `<title>`/description/canonical are handled by `react-helmet-async`
  (see `SEOHead.js`), with sitewide Open Graph, Twitter Card, and a
  `GeneralContractor` JSON-LD block already in `index.html`.
- `robots.txt` and `sitemap.xml` are in `public/` — update the domain in both
  once you have a real one.
- Gallery tiles are CSS textures (no image requests at all), so there's
  nothing to lazy-load or optimize there until you swap in real photos.
- This is a client-side-rendered SPA (no server-side rendering), which is
  fine for Lighthouse's SEO/Performance/Accessibility/Best Practices audits
  since they run against the rendered DOM — but be aware some external
  crawlers that don't execute JS will see less than a fully server-rendered
  site would show them.
- After `npm run build`, run `npm run preview` (or serve `/dist` with any
  static server) and run Lighthouse against that — not against `npm run dev`,
  which is unminified and will score noticeably worse on Performance for
  reasons that won't exist in production.
