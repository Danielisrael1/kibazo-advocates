// The nine photographs: the hero, the three courts and the city at dusk from Wikimedia Commons; two
// advocates in wig and gown and two Lagos office scenes from Pexels (Nigerian photographers). Every
// one is a licensed stand-in (credits in the footer line and /credits.html) until the firm supplies its own; the report lists each with the
// photograph to shoot in its place. Alt text is written new: the files' titles name other things.
// Each is served as AVIF, with the JPEGs kept for a browser that cannot read one (scripts/images.mjs
// makes both from the masters in photos-src/). `sizes` is generous on purpose: the frames crop with object-fit: cover, so a frame needs the
// pixels of its height, not just its width, or the browser picks a file it then blows up.
export type Photo = {
  src: string
  srcset: string
  avif: string
  sizes?: string
  width: number
  height: number
  alt: string
  subject: string
  pos?: string
  posPhone?: string
  calm?: 'left' | 'right' | 'top'
}

const img = (file: string) => `/assets/img/${file}`
const set = (id: string, widths: string[], ext = 'jpg') => widths.map((w) => `${img(`photo-${id}-${w}.${ext}`)} ${w}w`).join(', ')
const HALF = '(max-width: 639px) 170vw, (max-width: 1023px) 120vw, 75vw'
// a service row's picture: the full column on a phone, a thumbnail beside the words above it
const ROW = '(max-width: 639px) 100vw, (max-width: 1023px) 200px, 25vw'

export const photos = {
  hero: {
    src: img('photo-f94461750-1920.jpg'),
    srcset: set('f94461750', ['500', '960', '1280', '1920']),
    avif: set('f94461750', ['500', '960', '1280', '1920'], 'avif'),
    sizes: '(max-width: 639px) 180vw, (max-width: 1279px) 150vw, 125vw',
    width: 1920,
    height: 991,
    alt: 'The clock tower of the High Court of Uganda in Kampala, under a storm sky',
    subject: 'high-court-tower',
    pos: '50% 50%',
    posPhone: '40% 50%',
    calm: 'right',
  },
  supreme: {
    src: img('photo-f182268543-960.jpg'),
    srcset: set('f182268543', ['500', '960']),
    avif: set('f182268543', ['500', '960'], 'avif'),
    sizes: HALF,
    width: 960,
    height: 722,
    alt: "The Supreme Court of Uganda's building in Kampala, its arches and tower in sunlight",
    subject: 'supreme-court',
    pos: '50% 50%',
  },
  courtA: {
    src: img('photo-f62324217.jpg'),
    srcset: `${img('photo-f62324217-500.jpg')} 500w, ${img('photo-f62324217-960.jpg')} 960w, ${img('photo-f62324217.jpg')} 1280w`,
    avif: set('f62324217', ['500', '960', '1280'], 'avif'),
    sizes: HALF,
    width: 1280,
    height: 719,
    alt: "The High Court of Uganda's building in Kampala, seen across its forecourt",
    subject: 'high-court',
    pos: '50% 60%',
  },
  courtB: {
    src: img('photo-f174819714-960.jpg'),
    srcset: set('f174819714', ['500', '960']),
    avif: set('f174819714', ['500', '960'], 'avif'),
    sizes: HALF,
    width: 960,
    height: 787,
    alt: 'The Court of Appeal of Uganda in Kampala',
    subject: 'court-of-appeal',
    pos: '50% 30%',
  },
  // the people: stand-ins that show the work, never named or presented as the firm's own staff
  court: {
    src: img('photo-px37129340-960.jpg'),
    srcset: set('px37129340', ['500', '960']),
    avif: set('px37129340', ['500', '960'], 'avif'),
    sizes: ROW,
    width: 960,
    height: 1200,
    alt: "A woman in a barrister's wig, bands and gown, seated",
    subject: 'barrister-seated',
    pos: '55% 16%',
  },
  filing: {
    src: img('photo-px30688591-960.jpg'),
    srcset: set('px30688591', ['500', '960', '1280']),
    avif: set('px30688591', ['500', '960', '1280'], 'avif'),
    sizes: ROW,
    width: 960,
    height: 640,
    alt: 'Two men talking across a desk with a laptop in an office',
    subject: 'desk-meeting',
    pos: '64% 36%',
  },
  book: {
    src: img('photo-px30688592-960.jpg'),
    srcset: set('px30688592', ['500', '960', '1280']),
    avif: set('px30688592', ['500', '960', '1280'], 'avif'),
    sizes: HALF,
    width: 960,
    height: 640,
    alt: 'Five people in a meeting around a white table in an office, seen from above',
    subject: 'table-meeting',
    pos: '55% 45%',
  },
  barrister: {
    src: img('photo-px34850169-960.jpg'),
    srcset: set('px34850169', ['500', '960']),
    avif: set('px34850169', ['500', '960'], 'avif'),
    sizes: '(max-width: 1023px) 100vw, 33vw',
    width: 960,
    height: 1200,
    alt: 'A man in a barrister\'s wig, bands and gown, hands folded',
    subject: 'barrister-standing',
    pos: '50% 22%',
  },
  close: {
    src: img('photo-f15958584-960.jpg'),
    srcset: set('f15958584', ['500', '960', '1280']),
    avif: set('f15958584', ['500', '960', '1280'], 'avif'),
    sizes: '(max-width: 639px) 140vw, (max-width: 1439px) 100vw, 1280px',
    width: 960,
    height: 722,
    alt: "Kampala's skyline at dusk, seen across open ground",
    subject: 'city-dusk',
    pos: '50% 40%',
  },
} satisfies Record<string, Photo>
