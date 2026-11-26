import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const FoundationsSlabs = () => {
  return (
    <>
      <SEOHead
        title="Concrete Foundations & Slabs in Allentown, Bethlehem & Easton, PA"
        description="Footings, basement slabs, and garage pads poured to code across the Lehigh Valley — engineered for your soil and priced per job, not per square foot out of thin air. Free on-site estimates."
        path="/concrete-foundations-slabs"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Concrete Foundation and Slab Installation",
          "provider": {
            "@type": "GeneralContractor",
            "name": "Lehigh Valley Concrete Pros",
            "telephone": "+1-484-291-1365",
            "priceRange": "$$",
            "image": "https://www.lehighvalleyconcretepros.com/og-cover.svg",
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
          "description": "Footings, basement slabs, and garage pads poured to code in the Lehigh Valley — engineered for your soil, reinforced, and permitted where required."
        })}
      </script>

      <section className="hero" id="foundations-hero">
        <div className="container">
          <span className="hero-eyebrow eyebrow">Licensed &amp; Insured &middot; Serving the Lehigh Valley</span>
          <h1>Foundations &amp; Slabs Poured to Code</h1>
          <p className="lede">
            Footings, basement slabs, and garage pads — poured to code and engineered for your
            soil, because a foundation is the one place there is no room for guesswork.
          </p>
          <div className="hero-actions">
            <a href="/#contact" className="btn btn-primary">Get a Free Estimate</a>
            <Link to="/" className="btn btn-ghost">Back to Home</Link>
          </div>
        </div>
      </section>

      <section id="foundation-types">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What We Pour</span>
            <h2>Footings, slabs, and garage pads</h2>
            <p>
              Every foundation job starts with the site, not a price list. A sloped lot in
              Bethlehem needs different prep than a flat pad in Easton — soil, drainage, and
              access all change the job. We price each one based on what your property
              actually needs.
            </p>
          </div>

          <ul className="process-list">
            <li>
              <strong>Footings.</strong> Poured to the depth and width your structure and your
              soil call for, inspected before the walls go up.
            </li>
            <li>
              <strong>Basement slabs.</strong> Graded, based, and reinforced — flat, level, and
              ready for whatever goes on top of it.
            </li>
            <li>
              <strong>Garage pads and pole barn slabs.</strong> Built to carry real weight:
              vehicles, equipment, and storage, on a compacted stone base with reinforcement.
            </li>
          </ul>
        </div>
      </section>

      <section className="section-alt" id="foundation-soil">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Soil &amp; Site</span>
            <h2>Engineered for your ground</h2>
            <p>
              Lehigh Valley soil varies a lot from one township to the next — clay that holds
              water, rocky fill, sloped lots that need real grading. We look at the soil, the
              drainage, and the access for our equipment before we quote, because a foundation
              poured without understanding the ground is a foundation that moves later.
            </p>
          </div>

          <div className="section-head">
            <span className="eyebrow">Permits</span>
            <h2>Structural work needs permits</h2>
            <p>
              Foundations and structural slabs almost always need a permit, whatever the
              township. We identify which borough or township has jurisdiction, confirm what
              documentation they require, and submit the application on your behalf where
              possible. We don't schedule a pour date until we're cleared to work.
            </p>
          </div>
        </div>
      </section>

      <section id="foundationsslabs-related">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Related Services</span>
            <h2>More concrete work we do</h2>
            <p>
              <Link to="/stamped-decorative-concrete">Stamped &amp; decorative concrete</Link> and <Link to="/retaining-walls">Retaining walls</Link> &mdash; poured
              by the same crew, with the same free on-site estimate.
            </p>
          </div>
        </div>
      </section>

      <section className="section-alt" id="foundations-cta">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Ready to Get Started?</span>
            <h2>Get a free foundation estimate</h2>
            <p>
              Tell us about the project — footings, slab, or pad, rough size, and where you
              are. We'll walk the site and give you a written estimate that breaks down
              materials, labor, and site prep. Free on-site estimates, no obligation.
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

export default FoundationsSlabs;
