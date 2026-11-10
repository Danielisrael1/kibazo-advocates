import { about } from '../content'
import { useSection } from '../kit'

// The firm's one statement on the oxblood ground, straight under the hero. The kit's
// word-highlight moment (system.js mounts it from data-moment) turns it from half to full ink
// word by word as it crosses the middle of the screen.
export default function About() {
  useSection('about')
  return (
    <section className="section ground-inverse" id="about" data-moment="word-highlight" aria-label={about.label}>
      <div className="wrap">
        <div className="band__grid">
          <p className="t-label band__label" data-rv="up">{about.label}</p>
          <p className="mo-wh__text">
            {about.before}<strong>{about.strong}</strong>{about.after}
          </p>
        </div>
      </div>
    </section>
  )
}
