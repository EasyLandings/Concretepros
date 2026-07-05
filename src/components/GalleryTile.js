import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function GalleryTile({ item }) {
  const ref = useScrollReveal();

  return (
    <figure className="gallery-tile reveal" ref={ref}>
         <img
        src={item.image}
        alt={item.ariaLabel}
        loading="lazy"
        decoding="async"
      />
      <figcaption className="tile-caption">{item.caption}</figcaption>
    </figure>
  );
}
