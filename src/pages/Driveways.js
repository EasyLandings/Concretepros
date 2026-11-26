import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const Driveways = () => {
  return (
    <>
      <SEOHead
        title="Concrete Driveways in Allentown, Bethlehem & Easton, PA | Lehigh Valley Concrete Pros"
        description="Concrete driveway installation and replacement across the Lehigh Valley — tear-out, stone base, reinforcement, and a 4,000 PSI pour built for salt, snow, and daily traffic. Free on-site estimates."
        path="/concrete-driveways"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Concrete Driveway Installation",
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
          "description": "Concrete driveway installation and replacement in the Lehigh Valley — tear-out, compacted stone base, reinforcement, and a 4,000 PSI finish built for Pennsylvania winters."
        })}
      </script>

      <section className="hero" id="driveways-hero">
        <div className="container">
          <span className="hero-eyebrow eyebrow">Licensed &amp; Insured &middot; Serving the Lehigh Valley</span>
          <h1>Concrete Driveways Built for Lehigh Valley Winters</h1>
          <p className="lede">
            A driveway here has to handle road salt, snowplows, freeze-thaw, and daily traffic
            without cracking or heaving. We pour them for exactly that.
          </p>
          <div className="hero-actions">
            <a href="/#contact" className="btn btn-primary">Get a Free Estimate</a>
            <Link to="/" className="btn btn-ghost">Back to Home</Link>
          </div>
        </div>
      </section>

      <section id="how-driveway-built">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How It Gets Built</span>
            <h2>What goes into a driveway that lasts</h2>
            <p>
              A driveway is only as good as what's underneath it. We don't pour over a bad base
              and hope for the best — every driveway gets the same prep, whether it's a small
              single-car pad or a full two-car replacement.
            </p>
          </div>

          <ul className="process-list">
            <li>
              <strong>Tear-out and haul-away.</strong> Old concrete, asphalt, or pavers come out,
              and the ground gets graded so water drains away from your home, not toward it.
            </li>
            <li>
              <strong>Compacted stone base.</strong> A layer of crushed stone goes down first and
              gets compacted. Skipping this step is one of the most common reasons a new driveway
              settles or cracks in its first few winters.
            </li>
            <li>
              <strong>Reinforcement.</strong> Wire mesh or rebar goes in before the pour, tied and
              positioned so the slab holds together under car and truck traffic.
            </li>
            <li>
              <strong>4,000 PSI pour and finish.</strong> Our standard mix, screeded, finished,
              and cured — broom finish for grip in snow and rain, or a decorative finish if
              that's what you want.
            </li>
          </ul>
        </div>
      </section>

      <section className="section-alt" id="driveway-winter">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Built for Here</span>
            <h2>Salt, snow, and freeze-thaw</h2>
            <p>
              Lehigh Valley winters are hard on concrete. Water gets into small cracks, freezes,
              expands, and turns a hairline into a problem. That's why the base, the mix, and
              the finish all matter — and why we seal and cure properly instead of rushing it.
              A driveway poured right in October should still look right three winters later.
            </p>
          </div>

          <div className="section-head">
            <span className="eyebrow">Aprons &amp; Replacements</span>
            <h2>Driveway aprons and full replacements</h2>
            <p>
              We also pour the apron where your driveway meets the street — the part that takes
              the worst beating from plows and traffic — and we handle full tear-outs of failed
              driveways, including the ones that were poured thin or over a bad base the first
              time. If your driveway is settling, spalling, or cracked through, we'll tell you
              straight whether repair makes sense or replacement is the honest call.
            </p>
          </div>
        </div>
      </section>

      <section id="driveway-permits">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Permits</span>
            <h2>We handle the paperwork</h2>
            <p>
              Permit rules for driveways vary by borough and township across the Valley — a
              replacement might be exempt in one municipality and need a permit in the next.
              We check what your town requires and handle the application where possible, so
              the job doesn't stall waiting on paperwork.
            </p>
          </div>
        </div>
      </section>

      <section className="section-alt" id="driveways-cta">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Ready to Get Started?</span>
            <h2>Get a free driveway estimate</h2>
            <p>
              Tell us about your driveway — new pour or replacement, rough size, and where you
              are. We'll walk the site and give you a written estimate. Free on-site estimates,
              no obligation.
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

export default Driveways;
