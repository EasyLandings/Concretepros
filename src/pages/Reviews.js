import React from 'react';
import SEOHead from '../components/SEOHead';
import { StarIcon } from '../components/Icons';
import reviews from '../data/reviews';
import './Reviews.css';

export default function Reviews() {
  return (
    <>
      <SEOHead
        title="Customer Reviews | Lehigh Valley Concrete Pros"
        description="Read what homeowners across Allentown, Bethlehem, and Easton, PA are saying about Lehigh Valley Concrete Pros' driveways, patios, foundations, and repair work."
        path="/reviews"
      />

      <section className="reviews-page">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">From the Job Sites</span>
            <h1>What Homeowners Say</h1>
            <p>Real feedback from projects around Allentown, Bethlehem, Easton, and the surrounding townships.</p>
          </div>

          <div className="reviews-grid">
            {reviews.map((r) => (
              <div className="mini-review" key={r.id}>
                <div className="review-stars" aria-label={`${r.rating} out of 5 stars`}>
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p>&ldquo;{r.text}&rdquo;</p>
                <div className="review-author">
                  <b>{r.name}</b> &mdash; {r.location}
                </div>
              </div>
            ))}
          </div>

          <div className="reviews-cta">
            <p>Had a good experience with us?</p>
            <a
              href="https://g.page/r/CRzdGvLTzd0CEAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Leave Us a Google Review
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
