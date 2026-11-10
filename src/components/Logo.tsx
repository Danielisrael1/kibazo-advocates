import { firm } from '../content'

// The dealt mark (ring) beside the name; the firm's own SVG replaces the span when it arrives.
export default function Logo() {
  return (
    <a className="nav__logo" href="#top">
      <span className="mark" data-mark="ring" aria-hidden="true" />
      <span className="nav__name">{firm.name}</span>
    </a>
  )
}
