import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const RetainingWalls = () => {
  return (
    <>
      <SEOHead
        title="Retaining Walls in Allentown, Bethlehem & Easton, PA"
        description="Concrete retaining walls across the Lehigh Valley — holding back grade and groundwater on sloped lots, with proper drainage and footings. Free on-site estimates."
        path="/retaining-walls"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Concrete Retaining Wall Installation",
          "provider": {
            "@type": "GeneralContractor",
            "name": "Lehigh Valley Concrete Pros",
            "telephone": "+1-484-291-1365",
            "url": "https://www.lehighvalleyconcretepros.com/",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "520 Seip Ave",
              "addressLocality": "Nazareth",
              "addressRegion": "PA",
              "postalCode": "18064",
              "addressCountry": "US"
            }
          },
          "areaServed": [
            { "@type": "City", "name": "Allentown, PA" },
            { "@type": "City", "name": "Bethlehem, PA" },
            { "@type": "City", "name": "Easton, PA" }
          ],
          "description": "Concrete retaining walls in the Lehigh Valley — holding back grade and groundwater on sloped lots, with drainage, footings, and permits where required."
        })}
      </script>

      <section className="hero" id="retaining-hero">
        <div className="container">
          <span className="hero-eyebrow eyebrow">Licensed &amp; Insured &middot; Serving the Lehigh Valley</span>
          <h1>Retaining Walls for Sloped Lehigh Valley Lots</h1>
          <p className="lede">
            Hold back grade and groundwater on the sloped lots this valley is known for — and
            get usable, level yard back in the process.
          </p>
          <div className="hero-actions">
            <a href="/#contact" className="btn btn-primary">Get a Free Estimate</a>
            <Link to="/" className="btn btn-ghost">Back to Home</Link>
          </div>
        </div>
      </section>

      <section id="retaining-why">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why a Wall</span>
            <h2>When a slope needs holding</h2>
            <p>
              A lot of Lehigh Valley properties sit on a grade — and a grade that moves
              takes the yard, the driveway edge, and sometimes the foundation with it. A
              retaining wall holds the hill where it is, levels off usable space, and keeps
              water and soil from working against your home.
            </p>
          </div>

          <ul className="process-list">
            <li>
              <strong>Footings first.</strong> A wall is only as strong as its footing. We dig
              to stable ground and pour a footing the wall can actually stand on.
            </li>
            <li>
              <strong>Drainage behind the wall.</strong> Water trapped behind a wall is what
              pushes it over. We build in drainage so groundwater has somewhere to go instead
              of pressing on the wall.
            </li>
            <li>
              <strong>Backfill and finish.</strong> Compacted backfill, proper grading at the
              top, and a finish that fits the property — plain, formed, or faced to match the
              home.
            </li>
          </ul>
        </div>
      </section>

      <section className="section-alt" id="retaining-permits">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Height &amp; Permits</span>
            <h2>Structural walls need permits</h2>
            <p>
              Taller retaining walls are structural work, and most municipalities require a
              permit — sometimes engineering, depending on height and what's above the wall.
              We check what your borough or township requires and handle the application
              where possible before we dig.
            </p>
          </div>

          <div className="section-head">
            <span className="eyebrow">Sloped Lots</span>
            <h2>Built for valley terrain</h2>
            <p>
              From the hillside streets of Bethlehem to the graded lots around Allentown and
              Easton, we've seen what these slopes do to a yard over a few winters. The wall
              gets built for your specific slope, soil, and water — not a generic design
              copied from somewhere flat.
            </p>
          </div>
        </div>
      </section>

      <section id="retainingwalls-related">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Related Services</span>
            <h2>More concrete work we do</h2>
            <p>
              <Link to="/concrete-repair-resurfacing">Concrete repair &amp; resurfacing</Link> and <Link to="/concrete-driveways">Concrete driveways</Link> &mdash; poured
              by the same crew, with the same free on-site estimate.
            </p>
          </div>
        </div>
      </section>

      <section className="section-alt" id="retaining-cta">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Ready to Get Started?</span>
            <h2>Get a free retaining wall estimate</h2>
            <p>
              Tell us about the slope — how high, how long, and where you are. We'll walk the
              site and give you a written estimate. Free on-site estimates, no obligation.
            </p>
          </div>
          <div className="hero-actions">
            <a href="/#contact" className="btn btn-primary">Request a Free Estimate</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default RetainingWalls;
