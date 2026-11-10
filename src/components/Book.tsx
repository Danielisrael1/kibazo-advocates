import { action, book, firm } from '../content'
import { photos } from '../photos'
import Photo from './Photo'
import { useSection } from '../kit'

// The head, then the form on the surface ground beside the photograph, the address and the way
// there closing the panel. system.js runs the form: errors under their fields on submit, the
// status line, no success line for the mailto stand-in.
export default function Book() {
  useSection('book')
  return (
    <section className="section" id="book" aria-labelledby="book-h">
      <div className="wrap">
        <div className="section-head" data-rv="up">
          <h2 id="book-h">{book.h2}</h2>
          <p>{book.line}</p>
        </div>
        <div className="grid grid--top">
          <div className="span-6 book__panel" data-rv="up">
            <form className="form" action={firm.formAction} method="post" encType="text/plain" data-endpoint="" noValidate>
              {book.fields.map((f) => (
                <div className="field" key={f.id}>
                  <label htmlFor={`f-${f.id}`}>{f.label}</label>
                  <input
                    id={`f-${f.id}`}
                    name={f.id}
                    type={f.type}
                    autoComplete={f.autoComplete}
                    inputMode={f.type === 'email' ? 'email' : undefined}
                    required
                    aria-describedby={`f-${f.id}-err`}
                  />
                  <p className="field__error" id={`f-${f.id}-err`} hidden>{f.error}</p>
                </div>
              ))}
              <div className="btn-row">
                <button className="btn btn--primary" type="submit">{action.label}</button>
              </div>
              <p className="form__status" role="status" data-form-status="" />
              <p className="t-small muted">{book.reply}</p>
            </form>
            <div className="stack-2 book__where">
              <address className="visit__address">{firm.address}</address>
              <p><a className="link" href={firm.directions}>{book.directions}</a></p>
            </div>
          </div>
          <Photo photo={photos.book} className="span-6 start-7 book__photo" delay={120} />
        </div>
      </div>
    </section>
  )
}
