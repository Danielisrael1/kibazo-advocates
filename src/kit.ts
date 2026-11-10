import { useEffect } from 'react'
import { startMotion } from './motion'

// The design kit (nav sheet, forms, hover layer, hero entrance, the dealt moment) is plain JS
// that reads the DOM once. It is loaded only after every section has committed, so hydration
// never sees the kit's DOM changes: the below-the-fold sections are lazy chunks, and a kit
// mutation inside a boundary React had not hydrated yet would be undone when it did. The
// scripts load in document order, since motion.js and layout.js build on system.js.
const KIT = ['/assets/system.js', '/assets/motion/motion.js', '/assets/layout/layout.js']
const SECTIONS = ['nav', 'hero', 'about', 'services', 'courts', 'questions', 'book', 'closing'] as const
export type Section = (typeof SECTIONS)[number]

const committed = new Set<Section>()
let loaded = false

function loadKit(): void {
  if (loaded) return
  loaded = true
  // the page's own reveals, nav marker and form prefill (motion.ts) start at the same moment
  startMotion()
  for (const src of KIT) {
    if (document.querySelector(`script[src="${src}"]`)) continue
    const s = document.createElement('script')
    s.type = 'module'
    s.src = src
    s.async = false
    document.body.appendChild(s)
  }
}

// Every section calls this once; the kit loads when the last of them has committed.
export function useSection(name: Section): void {
  useEffect(() => {
    committed.add(name)
    if (SECTIONS.every((s) => committed.has(s))) loadKit()
  }, [name])
}
