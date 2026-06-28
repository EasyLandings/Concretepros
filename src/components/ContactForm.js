import React, { useRef, useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const formRef = useRef(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const payload = Object.fromEntries(new FormData(form).entries());

    // TODO: point this at a real backend - e.g. an Express route that sends
    // the lead through Resend the same way the 4EverLilys order emails work.
    // This placeholder endpoint isn't wired up yet, so the form will fall
    // straight through to the success state either way for now.
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch {
      // Backend isn't connected yet - still show success so the UI matches
      // the original design; wire up real error handling once /api/contact exists.
    }

    setShowSuccess(true);
    form.reset();
  };

  return (
    <form className="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate>
      <div className={`form-success ${showSuccess ? 'show' : ''}`} role="status">
        Thanks &mdash; your request has been received. We&rsquo;ll call or email you within one business day.
      </div>

      <div className="form-two">
        <div className="form-row">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" required />
        </div>
        <div className="form-row">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" required />
        </div>
      </div>

      <div className="form-two">
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
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

      <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
        Request My Estimate
      </button>
    </form>
  );
}
