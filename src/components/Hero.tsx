import type { CSSProperties } from 'react'
import { action, hero } from '../content'
import { photos } from '../photos'
import Arrow from './Arrow'
import Pic from './Pic'
import { useSection } from '../kit'

// The dealt photo hero: a full-bleed photograph, the words in a solid box on its calm side.
export default function Hero() {
  useSection('hero')
  const p = photos.hero
  return (
    <section className="hero hero--photo" data-enter="" data-calm={p.calm} aria-labelledby="hero-h">
      <Pic
        photo={p}
        frame
        className="hero__bg"
        style={{ '--ly-pos': p.pos, '--ly-pos-phone': p.posPhone } as CSSProperties}
        fetchPriority="high"
      />
      <div className="wrap">
        <div className="hero-text">
          <div className="hero__text">
            <h1 id="hero-h">{hero.h1}</h1>
            <p className="hero__lead">{hero.lead}</p>
            <div className="btn-row">
              <a className="btn btn--primary" href={action.href}>{action.label}<Arrow /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
