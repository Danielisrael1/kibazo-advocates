import type { CSSProperties } from 'react'
import { questions } from '../content'
import { photos } from '../photos'
import Photo from './Photo'
import { useSection } from '../kit'

// The buyer's six questions, every answer open: the heading and a photograph on the left half, the
// answers in one column on the right half, on the same split line as the booking form.
export default function Questions() {
  useSection('questions')
  return (
    <section className="section" id="questions" aria-labelledby="questions-h">
      <div className="wrap">
        <div className="grid grid--top">
          <div className="span-6 q__head" data-rv="up">
            <h2 id="questions-h">{questions.h2}</h2>
            <p>{questions.line}</p>
            <p><a className="link" href={questions.link.href}>{questions.link.label}</a></p>
            <Photo photo={photos.barrister} className="q__ph" />
          </div>
          <div className="faq q__list span-6 start-7">
            {questions.faq.map((item, i) => (
              <div className="faq__item" key={item.q} data-rv="row" style={{ '--rv-d': `${Math.min(i, 3) * 80}ms` } as CSSProperties}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
