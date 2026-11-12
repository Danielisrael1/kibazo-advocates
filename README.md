# Kibazo Associated Advocates — website

One-page site for a law firm on Buganda Road, Kampala. React 19 + TypeScript on Vite 7,
prerendered to static HTML at build time. The design kit in `public/assets` gives the tokens, type,
buttons, nav and form; `src/page.css` sets the page's own layout and motion on top of it.

## Run

    npm install
    npm run dev        # http://localhost:5173
    npm run build      # dist/: static HTML + hydrating React, ready to host anywhere
    npm run preview    # serve dist/ locally
    npm run typecheck

## Where things live

| Path | What |
|---|---|
| `src/content.ts` | Every word on the page. Change copy here, not in components. |
| `src/photos.ts` | The six photographs: files, `srcset` (AVIF and JPEG), alt text, crop positions. |
| `src/components/` | One component per section, in page order: Nav, Hero, About, Services, Courts, Questions, Book, Closing. |
| `src/page.css` | The page's layout (sections as tall as their content), the scroll reveals, the photographs' drift and the hover states. |
| `src/motion.ts` | Adds `.is-in` to `[data-rv]` parts as they are scrolled to, marks the nav link of the section on screen, and writes a clicked service's name into the form. |
| `src/kit.ts` | Loads the design kit's scripts, and starts `motion.ts`, after every section has hydrated. |
| `index.html` | The head: title, description, share tags, palette tokens, fonts. |
| `public/assets/` | The design kit (system.css, layout, motion, moments). Do not edit; update by copying a newer kit. |
| `photos-src/` | The six master photographs, one JPEG each. Not served. |
| `scripts/images.mjs` | `npm run images`: makes every AVIF and JPEG in `public/assets/img/` from the masters. |
| `public/assets/img/` | The photographs as served: AVIF, with a JPEG of each width for browsers that cannot read AVIF. `credits.json` records their licences. |
| `public/credits.html` | Photograph credits page, linked from the footer. |
| `scripts/prerender.mjs` | Writes the rendered React tree into `dist/index.html` after `vite build`. |
| `.taste-skill/` | The kit's build state, plan, copy draft and report. |

## Before this goes live

1. **Photographs.** All nine are licensed stand-ins: the hero, the three courts and the dusk skyline
   from Wikimedia Commons; two advocates in wig and gown (Kano and a Nigerian studio) and two Lagos
   office scenes from Pexels. The people are never named or presented as the firm's staff; replace
   them with the firm's own photographs first. To swap one: put the master in `photos-src/` as
   `photo-<id>.jpg`, add a JPEG for each width the page should offer to `public/assets/img/`
   (`photo-<id>-500.jpg`, `-960`, `-1280`; any resize will do, the script rewrites them), run
   `npm run images`, and update `src/photos.ts` (keep `width`/`height` honest). Then update
   `public/credits.html`, or, once every picture is the firm's own, delete the credits line in `Closing.tsx`.
2. **The form** opens a mail to `Kibazo.nasser@gmail.com` (`firm.formAction` in `src/content.ts`).
   To send without the visitor's mail client, set `data-endpoint` on the form to a form service's
   URL (the kit then posts there and shows the sent line).
3. **Practice areas.** The page states only what the public record supports: court representation
   and trademark registration (URSB-registered agent). Add the firm's other practice areas to
   `services.rows` in `src/content.ts` once the firm confirms them.
4. **Contact details** (phone, email, P.O. Box, street) live in `firm` in `src/content.ts`. They
   print in the booking panel and the footer, the phone is the second button of the phone bar, and
   the structured data reads them from the same place.
5. **Domain.** Build with it: `SITE_URL=https://the-domain.ug npm run build` writes the canonical
   link, `og:url`, absolute share-image URLs, `sitemap.xml` and the sitemap line in `robots.txt`.
6. **Logo.** The ring mark beside the name is the kit's placeholder. Replace the `<span class="mark">`
   in `src/components/Logo.tsx` with the firm's SVG.

## Search

- Every section is in the HTML the build ships (`scripts/prerender.mjs`, `progressiveChunkSize`
  in `src/entry-server.tsx`): a crawler without JavaScript reads the whole page, in order.
- `src/seo.ts` builds the JSON-LD from `content.ts`: a `LegalService` (name, street, P.O. Box,
  phone, email, the two services, Uganda as the area served) and a `FAQPage` for the six questions.
  It states only what the page states: no hours, prices, ratings or coordinates.
- Title, description and share tags are in `index.html`; the share image is `public/share.jpg`
  (1200x630). The credits page is `noindex`.
- After launch: submit `sitemap.xml` in Google Search Console, and put the site's address on the
  firm's Google Business Profile, with the same name, address and phone as the page.

## Motion

- A part with `data-rv="up"` fades and rises once when scrolled to; `data-rv="photo"` unmasks a
  photograph from its top edge; `data-rv="row"` draws a row's rule and raises its words. Set
  `--rv-d` (a time) on a part to stagger it against its neighbours.
- Photographs drift a few percent against the scroll through CSS scroll timelines. Browsers
  without them (Firefox at the time of writing) show the photographs still.
- With `prefers-reduced-motion`, without JavaScript, or in print, everything is shown at rest.

## Checks

    SK=~/.claude/skills/design-taste-frontend
    node $SK/scripts/copy-lint.mjs dist/index.html --kind service
    node $SK/scripts/shoot.mjs --url dist/index.html --root dist --w 1440 --out shots/1440.png --reduced

The layout deliberately leaves the kit's rule of one section per screen (it left most screens half
empty) and adds scroll reveals, so the kit's `gate.mjs` and `consistency.mjs` now report
section-height and scroll-reveal findings by design. `.taste-skill/report.md` lists what the last
gate left open and why. Shoot with `--reduced`: a stitched full-page shot otherwise catches parts
mid-reveal.
