import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import BatchTicket from '../components/BatchTicket';
import ServiceCard from '../components/ServiceCard';
import GalleryTile from '../components/GalleryTile';
import ReviewsCarousel from '../components/ReviewsCarousel';
import { StarIcon } from '../components/Icons';
import ContactForm from '../components/ContactForm';
import InfoCard from '../components/InfoCard';
import services from '../data/services';
import reviews from '../data/reviews';
import gallery from '../data/gallery';
import './Home.css';

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  const initialTiles = gallery.slice(0, 3);
  const moreTiles = gallery.slice(3);

  return (
    <>
      <SEOHead
        title="Lehigh Valley Concrete Pros | Concrete Contractor in Allentown, Bethlehem & Easton, PA"
        description="Licensed, insured concrete contractor serving the Lehigh Valley, PA. Driveways, patios, foundations, stamped concrete and repair. Free on-site quotes."
        path="/"
      />

      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        <div className="container">
          <span className="hero-eyebrow eyebrow">Licensed &amp; Insured &middot; Serving the Lehigh Valley</span>
          <h1>
            Built to last.
            <br />
            Poured to <em>perfection.</em>
          </h1>
          <p className="lede">
            From driveways to foundations, we mix, pour, and finish concrete that holds up to
            Pennsylvania winters and decades of daily use.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Get a Free Estimate
            </a>
            <a href="#gallery" className="btn btn-ghost">
              See Our Work
            </a>
          </div>
        </div>
      </section>

      {/* ================= BATCH TICKET STATS ================= */}
      <BatchTicket />

      {/* ================= SERVICES ================= */}
      <section id="services">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What We Pour</span>
            <h2>Six services, one crew</h2>
            <p>
              Every job, from a backyard patio to a commercial slab, gets concrete pour and finish tailored to the jobs requirements,
               with a crew that cares about our customers satasfaction. 
            </p>
            <p style={{ marginTop: '12px' }}>
              <Link to="/lehigh-valley-concrete-contractor" style={{ color: 'var(--orange)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                See how our process works →
              </Link>
            </p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <ServiceCard service={s} key={s.id} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section id="gallery" className="section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Recent Pours</span>
            <h2>A look at the work</h2>
            <p>
              A sample of driveways, patios, and slabs poured across the Valley this year. Tap any
              project type to see it up close.
            </p>
          </div>

          <div className="gallery-grid">
            {initialTiles.map((item) => (
              <GalleryTile item={item} key={item.id} />
            ))}
          </div>

          {showMore && (
            <div className="gallery-grid gallery-more show">
              {moreTiles.map((item) => (
                <GalleryTile item={item} key={item.id} />
              ))}
            </div>
          )}

          <div className="gallery-actions">
            <button type="button" className="btn btn-dark" onClick={() => setShowMore((v) => !v)}>
              {showMore ? 'Show Fewer Projects' : 'View Full Gallery'}
            </button>
          </div>
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section id="reviews">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">From the Job Sites</span>
            <h2>What homeowners say</h2>
            <p>Real feedback from projects around Allentown, Bethlehem, Easton, and the surrounding townships.</p>
          </div>

          <ReviewsCarousel reviews={reviews} />

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
        </div>
      </section>

      <section id="service-areas-teaser" >
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">Serving the Whole Valley</span>
          <h2>Allentown, Bethlehem, Easton &amp; Beyond</h2>
          <p style={{ maxWidth: '52ch', margin: '12px auto 0', color: 'var(--charcoal-soft)', opacity: 0.78 }}>
            Not sure if we cover your town, or curious what a driveway install
            actually involves? We answered the questions homeowners ask us most.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '24px' }}>
            <Link to="/lehigh-valley-service-areas" className="btn btn-dark">
              See Service Areas &amp; FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Get In Touch</span>
            <h2>Get a free estimate</h2>
            <p>Tell us about your project and we&rsquo;ll get back to you within one business day with a quote.</p>
          </div>

          <div className="contact-wrap">
            <ContactForm />
            <InfoCard />
          </div>
        </div>
      </section>
    </>
  );
}
