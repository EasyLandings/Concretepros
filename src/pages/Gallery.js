import React from 'react';
import SEOHead from '../components/SEOHead';
import GalleryTile from '../components/GalleryTile';
import gallery from '../data/gallery';
import './Gallery.css';

export default function Gallery() {
  return (
    <>
      <SEOHead
        title="Photo Gallery | Lehigh Valley Concrete Pros"
        description="Browse finished driveways, patios, foundations, retaining walls, and repair work from Lehigh Valley Concrete Pros across Allentown, Bethlehem, and Easton, PA."
        path="/gallery"
      />

      <section className="gallery-page">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Recent Pours</span>
            <h1>A Look at the Work</h1>
            <p>
              A sample of driveways, patios, and slabs poured across the Valley this year &mdash;
              the same projects featured on the homepage, all in one place.
            </p>
          </div>

          <div className="gallery-grid">
            {gallery.map((item) => (
              <GalleryTile item={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
