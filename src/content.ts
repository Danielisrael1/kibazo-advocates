// Every word on the page, in one place, so the firm can change it without touching markup.
// Facts only: what the public record gives (the approved-firm lists for 2024 to 2026, the URSB
// trademark-agent register, the Buganda Road address). Nothing here is invented.

export const firm = {
  name: 'Kibazo Associated Advocates',
  address: 'Mukwano Courts, Buganda Road, Kampala',
  directions: 'https://www.openstreetmap.org/search?query=Buganda%20Road%20Kampala',
  // a stand-in until the firm gives its form service or address; never printed on the page
  formAction: 'mailto:office@kibazo.example',
  year: 2026,
}

export const action = { label: 'Book a consultation', href: '#book' }

// in the order the sections come down the page, so the bar's marker moves left to right
export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Courts', href: '#courts' },
  { label: 'Questions', href: '#questions' },
]

export const hero = {
  h1: 'Advocates in Kampala',
  lead: 'Court representation and trademark registration with the Registration Services Bureau, from Mukwano Courts on Buganda Road, Kampala.',
}

export const services = {
  h2: 'Court and trademark services',
  // each row opens the booking form with its name written into "The matter"
  rows: [
    { name: 'Court representation', line: 'Appearing for clients before the courts of Uganda.' },
    {
      name: 'Trademark registration',
      line: 'Searches, filings and renewals as a registered agent of the Uganda Registration Services Bureau.',
    },
  ],
  rowAction: 'Book a consultation',
  link: { label: 'See the questions', href: '#questions' },
}

export const about = {
  label: 'The firm',
  // one statement of 12 to 40 words; the strong part lights up in the accent
  before: "Kibazo Associated Advocates has been on Uganda's list of approved law firms in 2024, 2025 and 2026, and files trademarks as an agent registered with the ",
  strong: 'Uganda Registration Services Bureau',
  after: '.',
}

export const courts = {
  h2: 'The courts and the registry',
  line: 'The High Court sits in Kampala, and the Uganda Registration Services Bureau keeps the trademark register there.',
  // the name printed on each photograph
  names: { high: 'High Court', appeal: 'Court of Appeal', supreme: 'Supreme Court' },
}

export const questions = {
  h2: 'Questions',
  line: 'What clients ask before a first meeting.',
  link: { label: 'Read about the firm', href: '#about' },
  faq: [
    {
      q: 'How long does registration last?',
      a: 'Seven years from the filing date. It can then be renewed for ten years at a time.',
    },
    {
      q: 'Who can register in Uganda?',
      a: 'Any person or company. The Bureau accepts filings made through a registered agent.',
    },
    {
      q: 'Can a foreign business file in Uganda?',
      a: 'Yes. A foreign applicant files through an agent registered in Uganda.',
    },
    {
      q: 'Which courts do advocates appear in?',
      a: "Magistrates' courts, the High Court, the Court of Appeal and the Supreme Court.",
    },
    {
      q: 'How long does registration take?',
      a: 'The Bureau examines the application and advertises it in the Uganda Gazette; the mark is registered once 60 days pass with no opposition.',
    },
    {
      q: "What is a search of Uganda's register?",
      a: 'A check of the register at the Bureau for identical or similar marks, made before filing.',
    },
  ],
}

export const book = {
  h2: 'Book a consultation',
  line: 'Write what the matter is about and a day that suits you.',
  directions: 'Get directions',
  fields: [
    { id: 'name', label: 'Name', type: 'text', autoComplete: 'name', error: 'Write the name the booking is under.' },
    { id: 'email', label: 'Email', type: 'email', autoComplete: 'email', error: 'Write an email address with an @, like name@example.com.' },
    { id: 'matter', label: 'The matter', type: 'text', autoComplete: 'off', error: 'Write a line on what the matter is about.' },
    { id: 'day', label: 'A day that suits you', type: 'text', autoComplete: 'off', error: 'Write a day you could come in.' },
  ],
  reply: 'The firm replies by email.',
}

export const closing = {
  h2: 'A first meeting on Buganda Road',
  line: 'Court matters and trademark filings, from Kampala.',
  lede: 'Advocates and trademark agents, Kampala.',
  columns: [
    { head: 'Services', links: [{ label: 'Court and trademark services', href: '#services' }] },
    { head: 'About', links: [{ label: 'The firm', href: '#about' }] },
    {
      head: 'Courts',
      links: [{ label: 'The courts and the registry', href: '#courts' }],
    },
    { head: 'Questions', links: [{ label: 'Questions', href: '#questions' }] },
  ],
  credits: { label: 'Photographs via Wikimedia Commons', href: '/credits.html' },
}
