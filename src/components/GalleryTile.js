import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function GalleryTile({ item }) {
  const ref = useScrollReveal();

  return (
    <figure className="gallery-tile reveal" ref={ref}>
      <div className={`tile-texture ${item.texture}`} role="img" aria-label={item.ariaLabel}></div>
      <figcaption className="tile-caption">{item.caption}</figcaption>
    </figure>
  );
}
