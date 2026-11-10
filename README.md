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
| `src/photos.ts` | The six photographs: files, `srcset`, alt text, crop positions. |
| `src/components/` | One component per section, in page order: Nav, Hero, About, Services, Courts, Questions, Book, Closing. |
| `src/page.css` | The page's layout (sections as tall as their content), the scroll reveals, the photographs' drift and the hover states. |
| `src/motion.ts` | Adds `.is-in` to `[data-rv]` parts as they are scrolled to, marks the nav link of the section on screen, and writes a clicked service's name into the form. |
| `src/kit.ts` | Loads the design kit's scripts, and starts `motion.ts`, after every section has hydrated. |
| `index.html` | The head: title, description, share tags, palette tokens, fonts. |
| `public/assets/` | The design kit (system.css, layout, motion, moments). Do not edit; update by copying a newer kit. |
| `public/assets/img/` | The photographs. `credits.json` records their licences. |
| `public/credits.html` | Photograph credits page, linked from the footer. |
| `scripts/prerender.mjs` | Writes the rendered React tree into `dist/index.html` after `vite build`. |
| `.taste-skill/` | The kit's build state, plan, copy draft and report. |

## Before this goes live

1. **Photographs.** All six are licensed stand-ins from Wikimedia Commons (the courts, the city).
   Replace them with the firm's own: drop files in `public/assets/img/`, update `src/photos.ts`
   (keep `width`/`height` honest and give each a 500/960/1280 size), then either regenerate
   `credits.html` or, once every picture is the firm's own, delete the credits line in `Closing.tsx`.
2. **The form.** `firm.formAction` in `src/content.ts` is a `mailto:` on a `.example` address.
   Point it at the firm's email, or set `data-endpoint` on the form to a form service's URL
   (the kit then posts there and shows the sent line).
3. **Practice areas.** The page states only what the public record supports: court representation
   and trademark registration (URSB-registered agent). Add the firm's other practice areas to
   `services.rows` in `src/content.ts` once the firm confirms them.
4. **Contact details.** No phone or email is printed (the kit's rule until the firm supplies them).
   Add them to the booking panel in `Book.tsx` when confirmed.
5. **Domain.** Uncomment the canonical link in `index.html` and set the `og:image` to an absolute URL.
6. **Logo.** The ring mark beside the name is the kit's placeholder. Replace the `<span class="mark">`
   in `src/components/Logo.tsx` with the firm's SVG.

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
section-height and scroll-reveal findings by design. `.taste-skill/report.md` describes the page
before that change. Shoot with `--reduced`: a stitched full-page shot otherwise catches parts
mid-reveal.
