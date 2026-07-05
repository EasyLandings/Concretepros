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
  
    const payload = new URLSearchParams(new FormData(form)).toString();
  
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload,
      });
      if (!res.ok) throw new Error('Submit failed');
    } catch (err) {
      console.error(err);
    }
  
    setShowSuccess(true);
    form.reset();
  };

  return (
    <form className="contact-form" ref={formRef} name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} noValidate>
       <input type="hidden" name="form-name" value="contact" />
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
