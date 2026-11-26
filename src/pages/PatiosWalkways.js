import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const PatiosWalkways = () => {
  return (
    <>
      <SEOHead
        title="Concrete Patios & Walkways in Allentown, Bethlehem & Easton, PA"
        description="Concrete patios and walkways across the Lehigh Valley — broom-finished or stamped, sized and shaped for how you use your yard, with proper grading and drainage. Free on-site estimates."
        path="/concrete-patios-walkways"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Concrete Patio and Walkway Installation",
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
          "description": "Concrete patios and walkways in the Lehigh Valley — broom-finished or stamped, sized and shaped for your yard, graded to drain away from your home."
        })}
      </script>

      <section className="hero" id="patios-hero">
        <div className="container">
          <span className="hero-eyebrow eyebrow">Licensed &amp; Insured &middot; Serving the Lehigh Valley</span>
          <h1>Concrete Patios &amp; Walkways, Sized for Your Yard</h1>
          <p className="lede">
            Broom-finished or stamped, sized and shaped for how you actually use your yard —
            not a one-size rectangle dropped behind the house.
          </p>
          <div className="hero-actions">
            <a href="/#contact" className="btn btn-primary">Get a Free Estimate</a>
            <Link to="/" className="btn btn-ghost">Back to Home</Link>
          </div>
        </div>
      </section>

      <section id="patio-design">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Design</span>
            <h2>Built around how you use it</h2>
            <p>
              A patio for a grill and a table needs a different shape than one for a fire pit
              and a dozen chairs. We walk the yard with you, talk about how you'll use the
              space, and size it to fit — including walkways that actually connect the driveway,
              the back door, and the patio instead of ending in the grass.
            </p>
          </div>

          <ul className="process-list">
            <li>
              <strong>Broom finish.</strong> The classic non-slip finish — clean, practical, and
              the right call for walkways and steps that get wet and icy.
            </li>
            <li>
              <strong>Stamped finish.</strong> Stone, brick, or slate patterns and color, without
              the stone, brick, or slate price tag. See our stamped concrete page for the full
              rundown.
            </li>
            <li>
              <strong>Steps included.</strong> Patio and walkway jobs usually need steps too —
              we pour them as part of the job so everything matches and drains right.
            </li>
          </ul>
        </div>
      </section>

      <section className="section-alt" id="patio-drainage">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Grading &amp; Drainage</span>
            <h2>Pitched away from the house</h2>
            <p>
              The most important part of a patio is the part you never see: the grade. A patio
              pitched toward the house sends rainwater straight at your foundation. We grade
              every patio and walkway to pitch water away from the home, and we account for
              downspouts and low spots in the yard before we pour — not after.
            </p>
          </div>

          <div className="section-head">
            <span className="eyebrow">Pennsylvania Winters</span>
            <h2>Built to survive freeze-thaw</h2>
            <p>
              Patios and walkways take the same freeze-thaw beating as driveways, and they sit
              right against the house where a failure is hardest to ignore. Compacted stone
              base, reinforcement, and our standard 4,000 PSI mix are how we keep them flat
              and crack-free through Lehigh Valley winters.
            </p>
          </div>
        </div>
      </section>

      <section id="patioswalkways-related">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Related Services</span>
            <h2>More concrete work we do</h2>
            <p>
              <Link to="/concrete-foundations-slabs">Concrete foundations &amp; slabs</Link> and <Link to="/stamped-decorative-concrete">Stamped &amp; decorative concrete</Link> &mdash; poured
              by the same crew, with the same free on-site estimate.
            </p>
          </div>
        </div>
      </section>

      <section className="section-alt" id="patios-cta">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Ready to Get Started?</span>
            <h2>Get a free patio or walkway estimate</h2>
            <p>
              Tell us about the space — rough size, what it's for, and where you are. We'll
              walk the yard and give you a written estimate. Free on-site estimates, no
              obligation.
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

export default PatiosWalkways;
