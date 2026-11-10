# Build report: Kibazo Associated Advocates (2026-11-10)

GATE: PASS  (round 1 of the second build; the first build passed at round 2, then the page was
re-armed with --new after the lazy-loading change and passed again)

## Waivers and open FAILs
- Open FAILs: none.
- Waiver on file, unmatched at the gate: `section-gaps` for `hero--photo / section#services` at 390.
  The full consistency run (5 widths) reports it as a FAIL at 390 (149px between the hero's last
  content and the services h2, against a median of ~380px); the gate's own run reports it as a WARN.
  Cause: layout.css top-aligns the photo hero's words under the 42svh photograph on a phone, so the
  first screen's content ends short of the fold. It is the dealt hero's geometry, not a page fault.

## Kind and deal
- kind: service (a law firm). page-type service, site-kind other.
- hero `photo` (full-bleed photograph, the words in a solid box on its calm side; data-calm right, so
  the High Court's clock tower stays clear on the left) · palette `oxblood-grey` (a stone-grey ground
  and an oxblood accent: made for law; the grey of court render under an overcast sky, the oxblood of
  bound law reports) · type `newsreader` (Newsreader / Hanken Grotesk; headlines 400) · radius soft ·
  nav `nav-centre` · footer `footer-columns` · close `close-photo` · rhythm `space` · buttons `solid` ·
  mark `ring` · moment `word-highlight` in #about (the credentials light up word by word, the Bureau in
  the accent). No grounds, effects or scenes (kind other).
- Category passed to the gate: "advocates" (re-armed from "legal services" so the h1 "Advocates in
  Kampala" names what is sold); primary: "Book a consultation".

## Voice
facts only (copy-registers.md 1) with the places named (Buganda Road, the High Court, the Court of
Appeal, the Supreme Court, the Uganda Registration Services Bureau); third person for the firm, "you"
only in the booking zone; no virtue words, no promises, no invented practice areas.
- copy-lint: 355 words, 0 FAIL, 0 WARN (one list of three: "Searches, filings and renewals"; kept,
  it is the three things a trademark agent does).

## Checks
- consistency.mjs (1440, 1024, 820, 768, 390; rhythm at 1440, 820, 768, 390): 0 FAIL besides the
  waived 390 gap; WARNs kept, with why:
  - scroll-linked / scroll-reveal in #about: the dealt moment, expected.
  - section-gaps hero/services (desktop) and book/footer (390): the hero's geometry (above) and the
    booking section's two phone screens.
  - photo-set: the dusk skyline in the close is lighter/warmer than the rest; the High Court building
    frame is cool. Stand-ins from five photographers; one grade comes with the firm's own shoot.
  - photo-credit: the page credits Wikimedia Commons; every frame is a stand-in (below).
  - nav-current: the nav does not mark the current section; the kit's motion.js owns that.
  - split-align: the booking split's frame stretches to the panel's height (both 469px), which the
    check reads as middle-aligned.
  - action-repeat: the nav's button and the hero's on the first screen, the allowed pair.
  - form-send: the mailto stand-in (below).
  - no-visual / empty-area / section-air in #courts at 1024 and the tablet: two 4:3 (desktop) or 4:5
    (tablet) photographs under a two-screen section's head cover 16 to 22% of it; the second screen
    holds the questions. The pair cannot grow without breaking the screen grid at 768x1024.
- layout check.mjs (1440x900, 1024x768, 820x1180, 768x1024, 390x844): no findings after the hero's
  secondary button was dropped (the 32-character h1 stress ran past the fold at 390 with it).
- perf.mjs: 0 FAIL, 5 WARN: 1,167 KiB total (images 802 KiB over 6 files, JS 124 KiB gzipped, fonts
  163 KiB: the two Google families); two 500px files serve 165px two-up frames on a phone (the frames
  crop 4:5 from landscape files, so the width is needed for cover); LCP 1.3 s on the CPU run, CLS 0.
- Hydration: 0 console errors or warnings in production and on the dev server; the kit loads after
  every section has committed; the moment mounts (31 words).
- Not checked: a real device, a real network, the mail client's handling of the mailto form.

## Facts
- Assumed facts: none (the checker's `assumed` list is empty). No coined name: the client's own.
- Everything stated comes from the public record: Uganda Law Society / Ministry of Justice approved
  law firm lists 2024, 2025, 2026 (Mukwano Courts, Buganda Road); the URSB trade mark agents register
  (agent for Kibazo Associated Advocates); the Trademarks Act's seven-year term, ten-year renewals and
  60-day opposition; the courts named.
- The form: `mailto:office@kibazo.example`, a stand-in until the firm gives its form address or email.
- The canonical link stays a comment until the domain is known; og:image is `/share.jpg`, the hero's
  own 1440 tile, and needs the absolute URL then.
- No phone, no email, no register number is printed (house rule 9); the address is building, street
  and city.

## Photographs: every frame is a stand-in (Wikimedia Commons), to be replaced
| Where | File (id) | Shows | Shoot in its place |
|---|---|---|---|
| hero | f94461750 (Alvinategyeka, CC BY-SA 4.0) | the High Court's clock tower, Kampala | the firm's building or entrance on Buganda Road, with sky above for the words |
| services | f182268543 (Geossegawa, CC BY-SA 4.0) | the Supreme Court building | the firm's reception or an advocate at work, 1:1 |
| courts, left | f62324217 (Kateregga1, CC BY-SA 4.0) | the High Court building | the High Court as the firm sees it, by day |
| courts, right | f174819714 (Ssemmanda will, CC BY-SA 4.0) | the Court of Appeal | the Court of Appeal or the Bureau's registry, by day |
| book | f11082077 (Andrew Regan, CC BY-SA 3.0) | Kampala's centre by day | the view from Mukwano Courts, or the street door |
| close | f15958584 (Todd Huffman, CC BY 2.0) | Kampala's skyline at dusk | the office at the end of the day, or the team |
Credits: one footer line, "Photographs via Wikimedia Commons", opening /credits.html (6 entries).
Client slots: none (the brief names no files).

## Page CSS kept (index.html), each with its reason
booking panel on the surface ground from 1024 (the service page's visit panel); the questions row's
scroll margin (it sits a screen down inside #courts); the wordmark's size below 1280 and two lines
below 640 (a 27-character name); the two frames' ratios per width; the pair of courts as a
column-aligned grid; the tablet and phone cuts (five, then four, of six questions); the hero's
overflow clip (the photograph's entrance begins after hydration on this page); the hidden scrollbar
(asked for).
