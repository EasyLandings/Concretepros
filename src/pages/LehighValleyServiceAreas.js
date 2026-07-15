import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import './LehighValleyServiceAreas.css'

const faqData = [
  {
    id: 'companies-lehigh-valley',
    q: 'Are there concrete companies that serve all of the Lehigh Valley?',
    a: "Yes — we work across the entire Lehigh Valley rather than sticking to one town. Most concrete companies in the area focus on a single city, but our crew regularly travels between Allentown, Bethlehem, Easton, and the smaller boroughs in between on the same week, so you're not limited to a contractor who only knows one part of the valley."
  },
  {
    id: 'near-me',
    q: 'How do I find a concrete company near me in the Lehigh Valley?',
    a: "If you're searching for a concrete company near you, the fastest way to get an accurate answer is a phone call rather than a search result — service areas and drive times vary by contractor. We serve Allentown, Bethlehem, Easton, Emmaus, Macungie, Whitehall, and the surrounding townships, so if you're anywhere in the Lehigh Valley, there's a good chance we're already working nearby."
  },
  {
    id: 'allentown',
    q: 'Do you work as a concrete contractor in Allentown, PA?',
    a: "Yes, Allentown is one of our most frequent service areas. We handle driveways, patios, and foundation work throughout the city and surrounding neighborhoods, and we're familiar with the borough permitting process for Allentown specifically, which helps keep projects on schedule."
  },
  {
    id: 'bethlehem',
    q: 'Do you work as a concrete contractor in Bethlehem, PA?',
    a: "Yes, we regularly take on driveway, patio, and repair projects in Bethlehem. Between the older housing stock on the South Side and newer development further out, we've worked with a wide range of existing grading and drainage conditions specific to the area."
  },
  {
    id: 'easton',
    q: 'Do you work as a concrete contractor in Easton, PA?',
    a: "Yes, Easton is a regular part of our service area, including driveway installations, patios, and slab repair. We're familiar with Easton's permitting requirements, which we handle as part of the estimate process before any pour is scheduled."
  },
  {
    id: 'macungie',
    q: 'Do you provide concrete services in Macungie, PA?',
    a: "Yes — Macungie is a smaller borough, and we find that projects here tend to be driveways and patios on established residential lots. We size our crew and equipment access plan around each property before the day of the pour."
  },
  {
    id: 'saucon-valley',
    q: 'Do you serve the Saucon Valley area?',
    a: "Yes, we work throughout Saucon Valley, including Hellertown and the surrounding area. Sloped and wooded lots are common here, so site grading and drainage planning are usually a bigger part of the estimate than they would be on a flatter property."
  },
  {
    id: 'driveway-installation',
    q: 'What does concrete driveway installation involve in the Lehigh Valley?',
    a: "Driveway installation starts with excavation and grading, followed by a compacted stone base, then rebar or wire mesh reinforcement depending on the driveway's size and expected load. Forms are set to the correct height and slope before the pour, so water drains away from your garage and street properly. Pennsylvania winters are hard on driveways that skip proper base prep, so we don't cut corners on this step regardless of budget."
  },
  {
    id: 'driveway-permits',
    q: 'Do I need a permit for a new concrete driveway in the Lehigh Valley?',
    a: "It depends on your borough or township — some allow like-for-like driveway replacement without a permit, while others require one regardless of whether it's a replacement or a new installation. We determine this for you as part of the estimate, and we don't schedule a pour date until permitting (if required) is confirmed."
  }
];

const LehighValleyServiceAreas = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <>
      <SEOHead
        title="Concrete Contractor Service Areas | Lehigh Valley, PA | LVCP"
        description="Concrete contractor serving Allentown, Bethlehem, Easton, Macungie, Saucon Valley & the greater Lehigh Valley, PA. Driveways, patios, foundations & repair."
        path="/lehigh-valley-service-areas"
      />

      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <section className="hero" id="service-areas-hero">
        <div className="container">
          <span className="hero-eyebrow eyebrow">Licensed &amp; Insured &middot; Serving the Lehigh Valley</span>
          <h1>Concrete Companies &amp; Contractors Serving the Lehigh Valley</h1>
          <p className="lede">
            Looking for a concrete contractor near you in the Lehigh Valley? Here's
            where we work, what we do, and answers to the questions homeowners in
            Allentown, Bethlehem, Easton, and the surrounding area ask us most.
          </p>
          <div className="hero-actions">
            <a href="/#contact" className="btn btn-primary">Get a Free Estimate</a>
            <Link to="/lehigh-valley-concrete-contractor" className="btn btn-ghost">See Our Process</Link>
          </div>
        </div>
      </section>

      <section id="service-area-faq">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Service Areas</span>
            <h2>Where we work in the Lehigh Valley</h2>
          </div>

          {faqData.slice(0, 7).map((item) => (
            <div className="section-head" key={item.id} id={item.id}>
              <h3 className="faq-question">
                {item.q}
              </h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-alt" id="driveway-faq">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Driveway Installation</span>
            <h2>What to expect from a new driveway pour</h2>
          </div>

          {faqData.slice(7).map((item) => (
            <div className="section-head" key={item.id} id={item.id}>
              <h3 className="faq-question">
                {item.q}
              </h3>
              <p>{item.a}</p>
            </div>
          ))}

          <p>
            <Link to="/lehigh-valley-concrete-contractor" className="faq-link" >
              Read our full process, from first call to final cure →
            </Link>
          </p>
        </div>
      </section>

      <section id="service-areas-cta">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Ready to Get Started?</span>
            <h2>Get a free estimate for your area</h2>
          </div>
          <div className="hero-actions">
            <a href="/#contact" className="btn btn-primary">Request a Free Estimate</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default LehighValleyServiceAreas;