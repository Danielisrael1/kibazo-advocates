import { courts } from '../content'
import { photos } from '../photos'
import Photo from './Photo'
import { useSection } from '../kit'

// The three courts side by side, each with its name on it: the High Court wide, the Court of
// Appeal and the Supreme Court as two upright frames of the same height.
export default function Courts() {
  useSection('courts')
  return (
    <section className="section" id="courts" aria-labelledby="courts-h">
      <div className="wrap">
        <div className="section-head" data-rv="up">
          <h2 id="courts-h">{courts.h2}</h2>
          <p>{courts.line}</p>
        </div>
        <div className="courts">
          <Photo photo={photos.courtA} label={courts.names.high} className="court court--wide" />
          <Photo photo={photos.courtB} label={courts.names.appeal} className="court" delay={120} />
          <Photo photo={photos.supreme} label={courts.names.supreme} className="court" delay={240} />
        </div>
      </div>
    </section>
  )
}
