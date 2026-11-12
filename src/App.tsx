import { Suspense, lazy } from 'react'
import { action, book, firm } from './content'
import Nav from './components/Nav'
import Hero from './components/Hero'

// The sections below the fold are their own chunks: the first paint needs only the nav and the
// hero's code. The build prerenders them all (react-dom/static waits for lazy modules), so the
// shipped HTML is complete; the client hydrates each as its chunk arrives. main.tsx starts
// those downloads at once, so hydration never waits on a chain of imports.
export const below = {
  About: () => import('./components/About'),
  Services: () => import('./components/Services'),
  Courts: () => import('./components/Courts'),
  Questions: () => import('./components/Questions'),
  Book: () => import('./components/Book'),
  Closing: () => import('./components/Closing'),
}

const About = lazy(below.About)
const Services = lazy(below.Services)
const Courts = lazy(below.Courts)
const Questions = lazy(below.Questions)
const Book = lazy(below.Book)
const Closing = lazy(below.Closing)

// The hero alone on the first screen; every section after it is as tall as what it holds.
export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Suspense fallback={null}><About /></Suspense>
        <Suspense fallback={null}><Services /></Suspense>
        <Suspense fallback={null}><Courts /></Suspense>
        <Suspense fallback={null}><Questions /></Suspense>
        <Suspense fallback={null}><Book /></Suspense>
      </main>
      <Suspense fallback={null}><Closing /></Suspense>
      <nav className="actionbar" aria-label="Quick actions">
        <a className="btn btn--primary" href={action.href}>{action.label}</a>
        <a className="btn btn--secondary" href={firm.phoneHref}>{book.call}</a>
      </nav>
    </>
  )
}
