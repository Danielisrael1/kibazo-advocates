import { action, book, closing, firm } from '../content'
import { photos } from '../photos'
import Arrow from './Arrow'
import Logo from './Logo'
import Pic from './Pic'
import { useSection } from '../kit'

// footer.closing: row 1 the dealt close (close-photo), row 2 the firm, the page's words, its contacts
// and its office, then the legal row.
export default function Closing() {
  useSection('closing')
  const p = photos.close
  return (
    <footer className="footer closing" id="contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--photo">
          <div className="section-head--split" data-rv="up">
            <div>
              <h2 id="close-h">{closing.h2}</h2>
              <p className="t-lead">{closing.line}</p>
            </div>
            <a className="btn btn--primary" href={action.href}>{action.label}<Arrow /></a>
          </div>
          <div className="close__media ph" data-rv="photo">
            <Pic photo={p} className="ph__img" loading="lazy" decoding="async" />
          </div>
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-4 stack-4">
              <Logo />
              <p className="footer__lede">{closing.lede}</p>
            </div>
            <div className="span-2 footer__col">
              <h3>{closing.pages.head}</h3>
              <ul>
                {closing.pages.links.map((l) => (
                  <li key={l.href}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>
            <div className="span-3 footer__col">
              <h3>{closing.contactHead}</h3>
              <ul>
                <li><a href={firm.phoneHref}>{firm.phone}</a></li>
                <li><a href={`mailto:${firm.email}`}>{firm.email}</a></li>
              </ul>
            </div>
            <address className="span-3 footer__col footer__office">
              <h3>{closing.officeHead}</h3>
              <ul>
                <li>{firm.address}</li>
                <li>{firm.postal}</li>
                <li><a href={firm.directions}>{book.directions}</a></li>
              </ul>
            </address>
          </div>
          <div className="footer__legal">
            <span>© {firm.year} {firm.name}</span>
            <div className="socials" />
            <a className="credits" href={closing.credits.href}>{closing.credits.label}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
