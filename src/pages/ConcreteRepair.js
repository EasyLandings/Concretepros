import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const ConcreteRepair = () => {
  return (
    <>
      <SEOHead
        title="Concrete Repair & Resurfacing in Allentown, Bethlehem & Easton, PA"
        description="Concrete repair and resurfacing across the Lehigh Valley — spalling, settling, and cracked slabs leveled and brought back to a clean finish, or an honest call when replacement is smarter. Free on-site estimates."
        path="/concrete-repair-resurfacing"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Concrete Repair and Resurfacing",
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
          "description": "Concrete repair and resurfacing in the Lehigh Valley — spalling, settling, and cracked slabs leveled and brought back to a clean finish."
        })}
      </script>

      <section className="hero" id="repair-hero">
        <div className="container">
          <span className="hero-eyebrow eyebrow">Licensed &amp; Insured &middot; Serving the Lehigh Valley</span>
          <h1>Concrete Repair &amp; Resurfacing That Holds Up</h1>
          <p className="lede">
            Spalling, settling, or cracked slabs leveled and brought back to a clean finish —
            and an honest answer when repair isn't the right call.
          </p>
          <div className="hero-actions">
            <a href="/#contact" className="btn btn-primary">Get a Free Estimate</a>
            <Link to="/" className="btn btn-ghost">Back to Home</Link>
          </div>
        </div>
      </section>

      <section id="repair-problems">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What We Fix</span>
            <h2>Spalling, settling, and cracks</h2>
            <p>
              Most concrete problems in this valley come from the same places: water getting
              in, freezing, and working a small flaw into a big one — or a base that was never
              right to begin with. We look at what's actually failing before we quote, so the
              fix addresses the cause, not just the symptom.
            </p>
          </div>

          <ul className="process-list">
            <li>
              <strong>Spalling and flaking.</strong> Surface concrete coming off in chips and
              flakes, usually from salt and freeze-thaw. Resurfacing gives it a clean, bonded
              new top.
            </li>
            <li>
              <strong>Settling and uneven slabs.</strong> Slabs that have dropped or tilted —
              trip hazards at the front door, water pooling against the house. Leveled and
              brought back to grade where the slab is still sound.
            </li>
            <li>
              <strong>Cracks.</strong> Hairlines from curing and movement are one thing; cracks
              that run through, heave, or keep growing are another. We'll tell you which one
              you're looking at.
            </li>
          </ul>
        </div>
      </section>

      <section className="section-alt" id="repair-vs-replace">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Repair or Replace</span>
            <h2>We'll tell you straight</h2>
            <p>
              Some slabs are worth saving and some aren't. If a slab is cracked through,
              heaving, or sitting on a failed base, a resurface is money thrown at a slab
              that will fail again — and we'll say so. If the slab is sound and the damage
              is on the surface, repair and resurfacing gets you years more life for a
              fraction of replacement. Either way, you get the honest call before you spend
              anything.
            </p>
          </div>

          <div className="section-head">
            <span className="eyebrow">Steps &amp; Small Jobs</span>
            <h2>Not just big pours</h2>
            <p>
              Repair work is often the small stuff — a settling step, a cracked walkway
              section, a spalled stoop. We take those jobs too. A front step that trips
              everyone who visits is worth fixing right, even if it's a half-day job.
            </p>
          </div>
        </div>
      </section>

      <section id="concreterepair-related">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Related Services</span>
            <h2>More concrete work we do</h2>
            <p>
              <Link to="/concrete-driveways">Concrete driveways</Link> and <Link to="/concrete-patios-walkways">Concrete patios &amp; walkways</Link> &mdash; poured
              by the same crew, with the same free on-site estimate.
            </p>
          </div>
        </div>
      </section>

      <section className="section-alt" id="repair-cta">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Ready to Get Started?</span>
            <h2>Get a free repair estimate</h2>
            <p>
              Tell us what's failing — photos help — and where you are. We'll come look and
              give you a written estimate, including whether repair or replacement is the
              smarter spend. Free on-site estimates, no obligation.
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

export default ConcreteRepair;
