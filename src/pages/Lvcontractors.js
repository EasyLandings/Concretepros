import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const LvContractors = () => {
  return (
    <>
      <SEOHead
        title="Lehigh Valley Concrete Contractor | Licensed & Insured | LVCP"
        description="Trusted concrete contractor serving the Lehigh Valley — Allentown, Bethlehem, Easton & beyond. Driveways, patios, foundations, and repair. Free on-site estimates."
        path="/lehigh-valley-concrete-contractor"
      />

     
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Concrete Contracting",
          "provider": {
            "@type": "GeneralContractor",
            "name": "Lehigh Valley Concrete Pros",
            "telephone": "+1-610-814-2090",
            "url": "https://www.lehighvalleyconcretepros.com/"
          },
          "areaServed": [
            { "@type": "City", "name": "Allentown, PA" },
            { "@type": "City", "name": "Bethlehem, PA" },
            { "@type": "City", "name": "Easton, PA" }
          ],
          "description": "Concrete contractor serving the Lehigh Valley — driveways, patios, foundations, and repair."
        })}
      </script>

      <section className="hero" id="lv-contractor-hero">
        <div className="container">
          <span className="hero-eyebrow eyebrow">Licensed &amp; Insured &middot; Serving the Lehigh Valley</span>
          <h1>Your Lehigh Valley Concrete Contractor, From First Call to Final Cure</h1>
          <p className="lede">
            Homeowners across Allentown, Bethlehem, and Easton call us for one reason:
            they want a concrete contractor who explains the process, gives a fair
            estimate, and handles the permit paperwork so they don't have to. Here's
            exactly what working with us looks like, start to finish.
          </p>
          <div className="hero-actions">
            <a href="/#contact" className="btn btn-primary">Get a Free Estimate</a>
            <Link to="/" className="btn btn-ghost">Back to Home</Link>
          </div>
        </div>
      </section>

      <section id="how-it-works">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Step One</span>
            <h2>Tell us about your project</h2>
            <p>
              Every job starts with a phone call or a quick form submission. We ask about
              the type of project — driveway, patio, foundation, repair — along with the
              approximate size, your property's location, and your timeline. There's no
              charge and no pressure at this stage; we just need enough detail to schedule
              a site visit.
            </p>
          </div>

          <div className="section-head">
            <span className="eyebrow">Step Two</span>
            <h2>We walk the site and build your estimate</h2>
            <p>
              A member of our crew comes out to see the site in person. We look at grading,
              drainage, existing concrete or soil conditions, and access for our equipment.
              Lehigh Valley properties vary a lot — a sloped lot in Bethlehem needs different
              prep than a flat pad in Easton — so we price each job based on what your
              property actually needs, not a flat per-square-foot number pulled out of thin air.
              You'll get a written estimate that breaks down materials, labor, and any site
              prep work required.
            </p>
          </div>

          <div className="section-head">
            <span className="eyebrow">Step Three</span>
            <h2>Determining if your project needs a permit</h2>
            <p>
              Before any concrete gets poured, we check whether your project requires a
              permit from your local borough or township. In the Lehigh Valley, requirements
              vary by municipality — a driveway replacement might be exempt in one township
              and require a permit in the next, and larger projects like foundations or
              structural retaining walls almost always need one regardless of location.
            </p>
            <p>
              We handle this determination for you: we identify which borough or township
              has jurisdiction over your property, confirm what documentation they require
              (typically a site plan showing the project's location, dimensions, and
              distance from property lines), and submit the application on your behalf where
              possible. Permit review times vary by municipality, so this step is factored
              into your project timeline from the start — we don't schedule a pour date
              until we know we're cleared to work.
            </p>
          </div>

          <div className="section-head">
            <span className="eyebrow">Step Four</span>
            <h2>Preparing the site for the pour</h2>
            <p>
              Once permitting is squared away, our crew preps the site before a single truck
              of concrete arrives:
            </p>
            <ul className="process-list">
              <li>
                <strong>Excavation.</strong> We remove existing concrete, sod, or soil to
                reach stable ground, and grade the area so water drains away from your home
                rather than pooling against it.
              </li>
              <li>
                <strong>Stone base.</strong> A compacted layer of crushed stone goes down
                first. This gives the slab a stable, well-draining foundation — skipping this
                step, or skimping on it, is one of the most common reasons concrete cracks or
                heaves after a Pennsylvania winter.
              </li>
              <li>
                <strong>Rebar and wire mesh.</strong> Depending on the project — a driveway,
                a foundation, or a slab that'll carry heavier loads — we reinforce the pour
                with rebar, wire mesh, or both, tied and positioned before the forms go up.
              </li>
              <li>
                <strong>Forming and setting depth.</strong> Wood or metal forms are set to
                the required height and slope for your project, so the finished slab sits at
                the correct depth and pitches water in the right direction.
              </li>
            </ul>
          </div>

          <div className="section-head">
            <span className="eyebrow">Step Five</span>
            <h2>The pour, finish, and cure</h2>
            <p>
              With the site prepped and inspected, we pour, screed, and finish the concrete —
              broom finish, stamped, or exposed aggregate, depending on what you've chosen.
              We'll walk you through curing time and any care instructions (like keeping
              traffic off a new driveway for the first several days) before we leave the site.
            </p>
          </div>
        </div>
      </section>

      <section className="section-alt" id="lv-contractor-cta">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Ready to Get Started?</span>
            <h2>Talk to a Lehigh Valley concrete contractor today</h2>
            <p>
              Whether you're planning a new driveway, a patio, or need a cracked slab
              repaired, we'll walk you through this exact process for your property.
              Free on-site estimates, no obligation.
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

export default LvContractors;