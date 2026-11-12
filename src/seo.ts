import { firm, hero, questions, services } from './content'

// The page's structured data (schema.org JSON-LD), built from content.ts so it can never say
// something the page does not. scripts/prerender.mjs writes each object into <head>. Only facts
// the page states: no opening hours, prices, ratings or coordinates, since none are known.
export function structuredData(siteUrl?: string): object[] {
  const base = siteUrl?.replace(/\/+$/, '')
  const firmLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': base ? `${base}/#firm` : undefined,
    name: firm.name,
    description: hero.lead,
    url: base ? `${base}/` : undefined,
    image: base ? `${base}/share.jpg` : undefined,
    logo: base ? `${base}/apple-touch-icon.png` : undefined,
    telephone: firm.phoneIntl,
    email: firm.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: firm.street,
      addressLocality: firm.city,
      addressCountry: firm.country,
      postOfficeBoxNumber: firm.poBox,
    },
    areaServed: { '@type': 'Country', name: 'Uganda' },
    knowsAbout: services.rows.map((r) => r.name),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: services.h2,
      itemListElement: services.rows.map((r) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: r.name, description: r.line },
      })),
    },
  }
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  return [firmLd, faqLd]
}
