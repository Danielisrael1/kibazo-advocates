# Plan: Kibazo Associated Advocates

1. kind: service (a law firm; people are hired). page-type service, site-kind other.
2. deal: hero `photo` (full-bleed photograph, the words in a solid box on its calm side) · palette
   `oxblood-grey`: a stone-grey ground, the render of Kampala's court buildings under an overcast sky,
   and an oxblood accent, the colour of bound law reports · type `newsreader` (Newsreader / Hanken
   Grotesk) · radius soft · nav `nav-centre` · footer `footer-columns` · close `close-photo` · rhythm
   `space` · buttons `solid` · mark `ring` · moment `word-highlight` in #about.
   Stack: Vite + React 19 + TypeScript, prerendered to static HTML at build; the kit in public/assets.

Voice: facts only (copy-registers.md 1), one move from 6: the places named (Buganda Road, the
High Court, the Registration Services Bureau)
Pairs: exact, not cold; plain, not curt
Person: third person for the firm; "you" only in the booking zone
Sentences: 8 to 18 words; one longer one in the statement
Humour: none
House words: advocate, matter, court representation, trademark registration, the Bureau; the same every time
Never: virtue words (trusted, experienced, dedicated), "legal solutions", promised outcomes, invented figures,
       practice areas the brief does not give, a phone, an email, a register number

Main action: Book a consultation (#book). Secondary in the hero: See the services (#services).

| # | id        | idea                                                | picture (kind)                                              | screens |
|---|-----------|-----------------------------------------------------|-------------------------------------------------------------|---------|
| 1 | hero      | advocates in Kampala, what and where                | High Court clock tower under a storm sky (work, stand-in)   | 1 |
| 2 | services  | the two kinds of work                               | the Supreme Court, 1:1 on a desktop (work, stand-in)        | 1 |
| 3 | about     | the firm's credentials in one statement             | type (word-highlight)                                       | 1 |
| 4 | courts    | the courts and the registry; the buyer's questions  | pair 4:3: the High Court + the Court of Appeal (stand-ins)  | 2 (.g2: pair, then six questions; five at the tablet, four on a phone) |
| 5 | book      | the booking form with the address                   | Kampala's centre by day beside the form (place, stand-in)   | 1 (2 on a phone) |
| 6 | closing   | close-photo + footer-columns                        | Kampala skyline at dusk (place, stand-in)                   | 1 |

Why it moves: hero entrance, the name arrives first, then what to do · word-highlight in #about: the
credentials light up word by word, the Bureau in the accent · hover: every link and button answers.

Picture-less neighbours: none (about is the only picture-less section). Main action's secondary dropped from the hero: the 32-character stress h1 ran past the fold at 390 with two buttons.
Assumed facts: none. Every photograph is a stand-in listed in the report.
