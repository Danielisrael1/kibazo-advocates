import type { CSSProperties } from 'react'
import { questions } from '../content'
import { useSection } from '../kit'

// The buyer's six questions, every answer open: the heading on the left, the answers in two
// columns beside it (one column on a phone).
export default function Questions() {
  useSection('questions')
  return (
    <section className="section" id="questions" aria-labelledby="questions-h">
      <div className="wrap">
        <div className="grid grid--top">
          <div className="span-4 q__head" data-rv="up">
            <h2 id="questions-h">{questions.h2}</h2>
            <p>{questions.line}</p>
            <p><a className="link" href={questions.link.href}>{questions.link.label}</a></p>
          </div>
          <div className="faq q__list span-8">
            {questions.faq.map((item, i) => (
              <div className="faq__item" key={item.q} data-rv="row" style={{ '--rv-d': `${(i % 2) * 100}ms` } as CSSProperties}>
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
