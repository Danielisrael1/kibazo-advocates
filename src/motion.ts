// The page's own motion, beside the design kit's: parts that arrive as they are scrolled to, the
// bar's marker for the section on screen, and the service rows that fill in the booking form.
// Started once from kit.ts, after every section has hydrated, so React never sees these changes
// mid-hydration. The styles are in page.css; without this script the page shows everything at rest.

declare global {
  interface Window { __rv?: number }
}

// [data-rv] parts get .is-in the first time they come on screen (or are already above it, when the
// page opens on an anchor), and keep it: nothing hides again on the way back up.
function reveal(): void {
  const parts = [...document.querySelectorAll<HTMLElement>('[data-rv]')]
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)
  if (still) {
    for (const el of parts) el.classList.add('is-in')
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting && e.boundingClientRect.bottom > 0) continue
          e.target.classList.add('is-in')
          io.unobserve(e.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    for (const el of parts) io.observe(el)
    // keyboard focus never lands on a part that is still waiting: it is shown at once (page.css
    // drops the transition while the focus is inside)
    document.addEventListener('focusin', (e) => {
      const part = (e.target as Element | null)?.closest?.('[data-rv]')
      if (part && !part.classList.contains('is-in')) {
        part.classList.add('is-in')
        io.unobserve(part)
      }
    })
  }
  // the head's fallback (show everything after four seconds) is no longer needed
  window.clearTimeout(window.__rv)
}

// The nav link of the section crossing the upper third of the screen carries aria-current.
function current(): void {
  const links = [...document.querySelectorAll<HTMLAnchorElement>('.nav__link[href^="#"]')]
  const pairs = links.flatMap((a) => {
    const target = document.getElementById(a.hash.slice(1))
    return target ? [{ a, target }] : []
  })
  if (!pairs.length) return
  let queued = false
  const mark = () => {
    queued = false
    const line = innerHeight * 0.34
    for (const { a, target } of pairs) {
      const r = target.getBoundingClientRect()
      if (r.top <= line && r.bottom > line) a.setAttribute('aria-current', 'location')
      else a.removeAttribute('aria-current')
    }
  }
  const queue = () => {
    if (queued) return
    queued = true
    requestAnimationFrame(mark)
  }
  addEventListener('scroll', queue, { passive: true })
  addEventListener('resize', queue, { passive: true })
  mark()
}

// A service row leads to the booking form and writes its own name into "The matter", unless the
// visitor has already written something there.
function prefill(): void {
  const field = document.getElementById('f-matter') as HTMLInputElement | null
  if (!field) return
  for (const row of document.querySelectorAll<HTMLAnchorElement>('a[data-matter]')) {
    row.addEventListener('click', () => {
      if (!field.value.trim()) field.value = row.dataset.matter ?? ''
    })
  }
}

let started = false
export function startMotion(): void {
  if (started) return
  started = true
  reveal()
  current()
  prefill()
}
