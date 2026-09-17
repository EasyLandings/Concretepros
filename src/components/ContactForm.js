import React, { useRef, useState } from 'react';
import './ContactForm.css';
import ReactGA from 'react-ga4';

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const projectType = formData.get('project') || 'General';
    const payload = new URLSearchParams(formData).toString();

    setStatus('sending');

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload,
      });

      if (!res.ok) throw new Error(`Submit failed with status ${res.status}`);

      ReactGA.event({
        category: 'Lead',
        action: 'quote_form_submitted',
        label: projectType,
      });

      setStatus('success');
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <form
      className="contact-form"
      ref={formRef}
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      noValidate
    >
      <input type="hidden" name="form-name" value="contact" />

      {status === 'success' && (
        <div className="form-alert form-alert-success" role="status" aria-live="polite">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" />
          </svg>
          <span>
            Thanks &mdash; your request has been received. We&rsquo;ll call or email you within one business day.
          </span>
        </div>
      )}

      {status === 'error' && (
        <div className="form-alert form-alert-error" role="alert" aria-live="assertive">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v6M12 16.5v.5" />
          </svg>
          <span>
            We couldn&rsquo;t send your request. Please try again, or call us directly at{' '}
            <a href="tel:+14842911365">(484) 291-1365</a>.
          </span>
        </div>
      )}

      <div className="form-two">
        <div className="form-row">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="form-row">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required />
        </div>
      </div>

      <div className="form-two">
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="form-row">
          <label htmlFor="location">Location / Address</label>
          <input id="location" name="location" type="text" autoComplete="street-address" required />
        </div>
      </div>

      <div className="form-row">
        <label htmlFor="project">Project type</label>
        <select id="project" name="project" required defaultValue="">
          <option value="">Select one</option>
          <option>Driveway</option>
          <option>Patio / Walkway</option>
          <option>Foundation / Slab</option>
          <option>Stamped / Decorative</option>
          <option>Retaining Wall</option>
          <option>Repair / Resurfacing</option>
          <option>Other</option>
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="message">Project details</label>
        <textarea
          id="message"
          name="message"
          placeholder="Approximate size, location, and timeline help us quote faster."
          required
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: '100%' }}
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending…' : 'Request My Estimate'}
      </button>
    </form>
  );
}