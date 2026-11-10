// Encodes the page's photographs: npm run images.
// The masters are in photos-src/ (photo-<id>.jpg, never served). For every JPEG the page already
// has in public/assets/img (photo-<id>-<width>.jpg, or photo-<id>.jpg at the master's width) this
// writes an AVIF of the same width beside it and re-encodes the JPEG itself from the master. The
// page serves the AVIF and keeps the JPEG for a browser that cannot read one (src/components/Pic.tsx).
// Every file is made from the master, so running it twice gives the same files, not a copy of a copy.
import { readdirSync, statSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import sharp from 'sharp'

const SRC = resolve('photos-src')
const OUT = resolve('public/assets/img')
const AVIF = { quality: 50, effort: 7, chromaSubsampling: '4:2:0' }
const JPEG = { quality: 76, mozjpeg: true }

const kb = (n) => `${Math.round(n / 1024)} KB`
let before = 0
let avif = 0
let jpeg = 0

for (const master of readdirSync(SRC).filter((f) => /^photo-\w+\.jpg$/.test(f)).sort()) {
  const id = master.slice('photo-'.length, -'.jpg'.length)
  const full = (await sharp(resolve(SRC, master)).metadata()).width
  const files = readdirSync(OUT).filter((f) => f === `photo-${id}.jpg` || new RegExp(`^photo-${id}-\\d+\\.jpg$`).test(f))
  if (!files.length) throw new Error(`images: no photo-${id}-<width>.jpg in public/assets/img to match ${master}`)
  for (const file of files.sort()) {
    const width = Number(file.match(/-(\d+)\.jpg$/)?.[1] ?? full)
    if (width > full) throw new Error(`images: ${file} is wider than its master (${full}px)`)
    const sized = () => sharp(resolve(SRC, master)).rotate().resize({ width, withoutEnlargement: true })
    const a = await sized().avif(AVIF).toBuffer()
    const j = await sized().jpeg(JPEG).toBuffer()
    before += statSync(resolve(OUT, file)).size
    writeFileSync(resolve(OUT, `photo-${id}-${width}.avif`), a)
    writeFileSync(resolve(OUT, file), j)
    avif += a.length
    jpeg += j.length
    console.log(`${file.padEnd(28)} ${String(width).padStart(4)}px  avif ${kb(a.length).padStart(7)}  jpeg ${kb(j.length).padStart(7)}`)
  }
}
console.log(`\nJPEGs before ${kb(before)}; now AVIF ${kb(avif)}, JPEG fallback ${kb(jpeg)}`)
