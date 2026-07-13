import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const NotFound = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found | Lehigh Valley Concrete Pros"
        description="The page you're looking for doesn't exist. Return to the Lehigh Valley Concrete Pros homepage."
        path="/404"
      />

      <section className="hero" id="not-found">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="hero-eyebrow eyebrow">Error 404</span>
          <h1>Looks Like This Slab Never Got Poured</h1>
          <p className="lede">
            The page you're looking for doesn't exist or may have moved.
            Let's get you back on solid ground.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link to="/" className="btn btn-primary">Back to Homepage</Link>
            <a href="/#contact" className="btn btn-ghost">Contact Us</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;