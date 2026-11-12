# Build report: Kibazo Associated Advocates (2026-11-12)

GATE: OPEN 47 (rounds used up), build re-armed on 2026-11-11 for the contact details. The previous
build closed with GATE: DONE on the user's words "escape the rules box and give me your best work as
long as its not ai slop"; since then the user asked for "animations and hover effects", for no big
blank parts, for Pexels photographs of African people, and for SEO.

## Waivers
- phone-number (two): 0700901610 is the firm's own number, supplied by the user on 2026-11-11. The
  kit's check assumes every real-format number on a page is invented.

## Open FAILs, and why each stays
- scroll-reveal, scroll-linked, effect-kind: the reveals and the photographs' drift. The user asked
  for animation; reduced motion and no-JS show everything at rest (verified in a browser).
- section-height, one-section, screen-short, screen-height, neighbour, neighbour-ground, hero-fold,
  hero-fill, sparse, section-tile, one-heading: the kit's one-section-per-screen rhythm, replaced on
  purpose by sections as tall as their content (no half-empty screens).
- visual-caption: the court names printed on the three court photographs (the labels say which
  court is which).
- card-family: the checker reads the Questions heading column and the answer list as two cards of one
  kind with mismatched title faces; one is a heading block, the other a list.

## Checks run on the final build
- copy-lint: 383 words, 0 FAIL, 0 WARN.
- consistency.mjs (1440, 390): page-meta, share-meta, heading-order, img-alt, a11y-name, tap-size,
  contrast, text-contrast, focus-visible, skip-link, lang, links, off-viewport, collide, form-fields:
  all PASS.
- Browser (Playwright): no sideways scroll at 1440, 1024, 768, 390 or 320; no console errors; no blank
  band of 200px or more in any section at any of those widths (largest 192px, under the phone bar);
  all 23 reveal parts arrive; the hero enters; the statement lights 31 of 31 words; every hover
  answers (service rows, photos, court labels, question rules, buttons, nav words, links); under
  reduced motion nothing is hidden. Phone bar: two buttons at 390, "Book a consultation" alone under 360.
- Prerender: all six sections inline and in order (React's progressive chunk size lifted).

## Photographs: every frame a stand-in
| Where | Source | Shows |
|---|---|---|
| hero | Wikimedia f94461750 (Alvinategyeka) | the High Court's clock tower |
| courts x3 | Wikimedia f62324217, f174819714, f182268543 | High Court, Court of Appeal, Supreme Court |
| close | Wikimedia f15958584 (Todd Huffman) | Kampala's skyline at dusk |
| service: court | Pexels 37129340 (Skylight Views, Kano) | a woman in barrister's wig and gown |
| service: trademark | Pexels 30688591 (Ninthgrid, Lagos) | two men at a desk with a laptop |
| booking | Pexels 30688592 (Ninthgrid, Lagos) | a meeting around a table, from above |
| questions | Pexels 34850169 (unique bash Creative) | a man in barrister's wig and gown |
No person is named or presented as the firm's own. Credits: /credits.html (noindex).

## Facts and contacts
- Supplied by the user: phone 0700901610, Kibazo.nasser@gmail.com, P.O. Box 15906 Kampala.
- The URSB trade mark agents register lists P.O. Box 23131 and 0784320172 (its agent, Mirembe Leylah)
  for this firm: to confirm with the firm which the public should use.
- No domain yet: canonical, og:url and sitemap.xml are written when built with SITE_URL.
