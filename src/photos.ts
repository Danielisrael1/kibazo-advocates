// The six photographs (the hero, the three courts, the city by day and at dusk). Every one is a licensed stand-in from Wikimedia Commons (credits in the
// footer line and /credits.html) until the firm supplies its own; the report lists each with the
// photograph to shoot in its place. Alt text is written new: the files' titles name other things.
// `sizes` is generous on purpose: the frames crop with object-fit: cover, so a frame needs the
// pixels of its height, not just its width, or the browser picks a file it then blows up.
export type Photo = {
  src: string
  srcset: string
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
const set = (id: string, widths: string[]) => widths.map((w) => `${img(`photo-${id}-${w}.jpg`)} ${w}w`).join(', ')
const HALF = '(max-width: 639px) 170vw, (max-width: 1023px) 120vw, 75vw'

export const photos = {
  hero: {
    src: img('photo-f94461750-1920.jpg'),
    srcset: set('f94461750', ['500', '960', '1280', '1920']),
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
    sizes: HALF,
    width: 960,
    height: 787,
    alt: 'The Court of Appeal of Uganda in Kampala',
    subject: 'court-of-appeal',
    pos: '50% 30%',
  },
  book: {
    src: img('photo-f11082077-960.jpg'),
    srcset: set('f11082077', ['500', '960', '1280']),
    sizes: HALF,
    width: 960,
    height: 640,
    alt: "Kampala's city centre by day, the towers of Nakasero above the lower roofs",
    subject: 'city-day',
    pos: '50% 45%',
  },
  close: {
    src: img('photo-f15958584-960.jpg'),
    srcset: set('f15958584', ['500', '960', '1280']),
    sizes: '(max-width: 639px) 140vw, (max-width: 1439px) 100vw, 1280px',
    width: 960,
    height: 722,
    alt: "Kampala's skyline at dusk, seen across open ground",
    subject: 'city-dusk',
    pos: '50% 40%',
  },
} satisfies Record<string, Photo>
