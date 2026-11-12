// Runs after `vite build` and the SSR build: renders the React tree once and writes it into
// dist/index.html, so the shipped page is complete HTML (readable by search engines and the
// kit's static checks) before any script runs. Vite hoists the entry script into <head>, so
// the body holds only the rendered header, main and footer; the resource hints React emits at
// the top of its output (a preload for the hero's photograph) are moved into <head> too.
//
// Search: the page's structured data (src/seo.ts) goes into <head> as JSON-LD, and robots.txt
// is written. With SITE_URL set (SITE_URL=https://example.ug npm run build) it also writes the
// canonical link, og:url, absolute share-image URLs and sitemap.xml, which all need the domain.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = resolve('dist')
const site = process.env.SITE_URL?.trim().replace(/\/+$/, '') || ''
if (site && !/^https?:\/\/[^/]+$/.test(site)) throw new Error(`prerender: SITE_URL must be an origin like https://example.ug, got ${site}`)

const { render, structuredData } = await import(pathToFileURL(resolve(dist, '.server/entry-server.js')).href)
const page = resolve(dist, 'index.html')
const html = readFileSync(page, 'utf8')
let body = await render()
const hints = body.match(/^(?:<link [^>]*>)+/)?.[0] ?? ''
body = body.slice(hints.length)
let out = html.replace(/<body([^>]*)>\s*<\/body>/, (_, attrs) => `<body${attrs}>${body}</body>`)
if (out === html) throw new Error('prerender: no empty <body> in dist/index.html')

// JSON-LD: '<' escaped so no string in it can close the script element
const ld = structuredData(site || undefined)
  .map((o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`)
  .join('\n')
let head = `${hints}\n${ld}\n`
if (site) {
  head += `<link rel="canonical" href="${site}/">\n<meta property="og:url" content="${site}/">\n`
  out = out.replace('<meta property="og:image" content="/share.jpg">', `<meta property="og:image" content="${site}/share.jpg">`)
}
out = out.replace('</head>', `${head}</head>`)
writeFileSync(page, out)

writeFileSync(resolve(dist, 'robots.txt'), `User-agent: *\nAllow: /\n${site ? `\nSitemap: ${site}/sitemap.xml\n` : ''}`)
if (site) {
  const today = new Date().toISOString().slice(0, 10)
  writeFileSync(
    resolve(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${site}/</loc><lastmod>${today}</lastmod></url>\n</urlset>\n`,
  )
}
rmSync(resolve(dist, '.server'), { recursive: true, force: true })
console.log(`prerender: dist/index.html written (${ld.match(/ld\+json/g).length} JSON-LD blocks; ${site ? `canonical, sitemap.xml and robots.txt for ${site}` : 'robots.txt; set SITE_URL for the canonical link and sitemap.xml'})`)
