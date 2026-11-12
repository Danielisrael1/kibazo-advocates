import { prerender } from 'react-dom/static'
import App from './App'

export { structuredData } from './seo'

// Build-time render: scripts/prerender.mjs injects this into dist/index.html, so the shipped
// page is complete HTML before any script runs. prerender waits for the lazy sections' chunks.
// progressiveChunkSize: React writes a boundary bigger than this (12.8 kB by default) out of
// order, hidden in a <template> that an inline script moves into place, so a reader without
// JavaScript would miss it; a section's photographs' srcsets alone pass that size. A whole
// page is one chunk here, so every section renders in place, in page order.
export async function render(): Promise<string> {
  const { prelude } = await prerender(<App />, { progressiveChunkSize: Number.POSITIVE_INFINITY })
  return await new Response(prelude).text()
}
