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
            <p>
              Every photo here is a finished job &mdash; driveways, patios, slabs, and
              retaining walls poured for homeowners around Allentown, Bethlehem, Easton,
              and the surrounding townships. Most of these pours follow the same spec: a
              compacted stone base, reinforcement where the job calls for it, and a
              4,000 PSI mix finished to match the house and the way the space gets used.
              Finishes range from a plain broom finish to stamped patterns, and every
              slab is graded so water runs away from the house, not toward it. If you
              are weighing a project of your own, these photos are the closest thing to
              a walk-through &mdash; the finishes, the grading, and the edges are all
              exactly as they cured.
            </p>
            <p>
              See a project that looks like yours? Tell us which photo caught your eye
              when you reach out &mdash; we will tell you what went into it and what
              something like it would take on your property.
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
