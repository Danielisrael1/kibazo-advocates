import type { CSSProperties } from 'react'
import { action, services } from '../content'
import { useSection } from '../kit'

// The two kinds of work as full-width ruled rows. Each row is a link to the booking form;
// motion.ts writes the row's name into the form's "The matter" field on the way.
export default function Services() {
  useSection('services')
  return (
    <section className="section" id="services" aria-labelledby="services-h">
      <div className="wrap">
        <div className="section-head--split svc__head" data-rv="up">
          <h2 id="services-h">{services.h2}</h2>
          <a className="link" href={services.link.href}>{services.link.label}</a>
        </div>
        <ol className="svc">
          {services.rows.map((row, i) => (
            <li key={row.name} data-rv="row" style={{ '--rv-d': `${i * 120}ms` } as CSSProperties}>
              <a className="svc__row" href={action.href} data-matter={row.name}>
                <span className="svc__no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="svc__name">{row.name}</span>
                <span className="svc__line">{row.line}</span>
                <span className="svc__go">
                  <span className="sr-only">{services.rowAction}</span>
                  <svg viewBox="0 0 18 18" aria-hidden="true">
                    <path d="M3 9h12M10 4l5 5-5 5" />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
