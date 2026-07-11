import React from 'react';
import { PhoneIcon, MapPinIcon, ClockIcon } from './Icons';
import SocialLinks from './SocialLinks';
import './InfoCard.css';
import ReactGA from 'react-ga4';


export default function InfoCard() {
  const trackCall = () => {
    ReactGA.event({
      category: 'Lead',
      action: 'phone_click',
      label: 'navbar',
    });
  };
  return (
    <div className="info-card">
      <h3 className="eyebrow" style={{ color: 'var(--orange)' }}>
        Lehigh Valley Concrete Pros
      </h3>

      <div className="info-line">
        <PhoneIcon />
        <a href="tel:+14842911365" onClick={trackCall}>(484) 291-1365</a>
      </div>
      <div className="info-line">
        <MapPinIcon />
        <span>Allentown &middot; Bethlehem &middot; Easton &middot; Emmaus &middot; Macungie &middot; Whitehall &middot; Phillipsburg, Nj &middot; Hellertown &middot; Fountain Hill &middot; Tatamy &middot; Windgap &middot; Bangor &middot; Freemansburg &middot; Catasaqua &middot; And More! </span>
      </div>
      <div className="info-line">
        <ClockIcon />
        <span>Estimates within one business day</span>
      </div>

      <div className="hours-ticket">
        <div>
          <span>Mon &ndash; Fri</span>
          <span>7:00 AM &ndash; 7:00 PM</span>
        </div>
        <div>
          <span>Saturday</span>
          <span>7:00 AM &ndash; 7:00 PM</span>
        </div>
        <div>
          <span>Sunday</span>
          <span>Closed</span>
        </div>
      </div>

      <SocialLinks />
    </div>
  );
}
