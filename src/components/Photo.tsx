import type { CSSProperties } from 'react'
import type { Photo as PhotoData } from '../photos'
import Pic from './Pic'

// One photograph in the page's frame (.ph, page.css): the frame's size comes from its class, the
// picture fills it, is unmasked when scrolled to and drifts a little as the page moves. A label
// makes it a figure with the name printed on its lower left corner. `delay` (ms) staggers a row.
export default function Photo({
  photo,
  className = '',
  label,
  delay = 0,
}: {
  photo: PhotoData
  className?: string
  label?: string
  delay?: number
}) {
  const Tag = label ? 'figure' : 'div'
  return (
    <Tag className={`ph ${className}`.trim()} data-rv="photo" style={delay ? ({ '--rv-d': `${delay}ms` } as CSSProperties) : undefined}>
      <Pic
        photo={photo}
        className="ph__img"
        style={photo.pos ? ({ objectPosition: photo.pos } as CSSProperties) : undefined}
        loading="lazy"
        decoding="async"
      />
      {label ? <figcaption className="ph__label">{label}</figcaption> : null}
    </Tag>
  )
}
