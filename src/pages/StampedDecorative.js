import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const StampedDecorative = () => {
  return (
    <>
      <SEOHead
        title="Stamped & Decorative Concrete in Allentown, Bethlehem & Easton, PA | Lehigh Valley Concrete Pros"
        description="Stamped concrete patios, walkways, and driveways across the Lehigh Valley — stone, brick, or slate patterns and color, without the stone, brick, or slate price tag. Free on-site estimates."
        path="/stamped-decorative-concrete"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Stamped and Decorative Concrete Installation",
          "provider": {
            "@type": "GeneralContractor",
            "name": "Lehigh Valley Concrete Pros",
            "telephone": "+1-484-291-1365",
            "url": "https://www.lehighvalleyconcretepros.com/"
          },
          "areaServed": [
            { "@type": "City", "name": "Allentown, PA" },
            { "@type": "City", "name": "Bethlehem, PA" },
            { "@type": "City", "name": "Easton, PA" }
          ],
          "description": "Stamped and decorative concrete in the Lehigh Valley — stone, brick, or slate patterns and color on patios, walkways, and driveways, sealed for Pennsylvania winters."
        })}
      </script>

      <section className="hero" id="stamped-hero">
        <div className="container">
          <span className="hero-eyebrow eyebrow">Licensed &amp; Insured &middot; Serving the Lehigh Valley</span>
          <h1>Stamped &amp; Decorative Concrete That Looks Like Stone</h1>
          <p className="lede">
            Stone, brick, or slate patterns and color — without the stone, brick, or slate
            price tag. Same concrete underneath, a very different look on top.
          </p>
          <div className="hero-actions">
            <a href="/#contact" className="btn btn-primary">Get a Free Estimate</a>
            <Link to="/" className="btn btn-ghost">Back to Home</Link>
          </div>
        </div>
      </section>

      <section id="stamped-options">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Patterns &amp; Color</span>
            <h2>Pick the look, keep the concrete</h2>
            <p>
              Stamped concrete gets its pattern while the slab is still fresh — mats press the
              texture in, color gets worked into the surface, and the result reads as stone,
              brick, or slate at a glance. It costs far less than laying real stone, and there
              are no joints for weeds to grow through or pavers to settle unevenly.
            </p>
          </div>

          <ul className="process-list">
            <li>
              <strong>Patios.</strong> The most popular spot for stamped work — a patio that
              looks like flagstone for about half the price of the real thing.
            </li>
            <li>
              <strong>Walkways and steps.</strong> Stamped walkways tie the driveway to the
              front door and the patio together in one matching finish.
            </li>
            <li>
              <strong>Driveway borders and aprons.</strong> A stamped border dresses up a plain
              broom-finished driveway without stamping the whole thing.
            </li>
          </ul>
        </div>
      </section>

      <section className="section-alt" id="stamped-care">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Sealing &amp; Care</span>
            <h2>Sealed for winter, kept looking new</h2>
            <p>
              Stamped concrete gets sealed after it cures — the sealer locks in the color,
              protects the surface from salt and freeze-thaw, and keeps it looking fresh. It
              needs re-sealing every few years, which is a quick job compared to relaying
              stone. We'll walk you through the care when we finish, and we can re-seal it
              down the road.
            </p>
          </div>

          <div className="section-head">
            <span className="eyebrow">Where It Works</span>
            <h2>Best on patios, walkways, and driveways</h2>
            <p>
              Stamped concrete works anywhere flat concrete goes, but it shines on patios and
              walkways where you see it up close every day. For heavy vehicle traffic we talk
              through the trade-offs with you first — pattern and color hold up fine, but a
              driveway takes more abuse than a patio, so the finish choice matters.
            </p>
          </div>
        </div>
      </section>

      <section className="section-alt" id="stamped-cta">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Ready to Get Started?</span>
            <h2>Get a free stamped concrete estimate</h2>
            <p>
              Tell us about the space and the look you want — pattern, color, rough size, and
              where you are. We'll walk the site and give you a written estimate. Free on-site
              estimates, no obligation.
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

export default StampedDecorative;
