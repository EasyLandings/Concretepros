import React from 'react';
import { PhoneIcon, MapPinIcon, ClockIcon } from './Icons';
import SocialLinks from './SocialLinks';
import './InfoCard.css';

export default function InfoCard() {
  return (
    <div className="info-card">
      <h3 className="eyebrow" style={{ color: 'var(--orange)' }}>
        Lehigh Valley Concrete Pros
      </h3>

      <div className="info-line">
        <PhoneIcon />
        <span>(610) 814-2090</span>
      </div>
      <div className="info-line">
        <MapPinIcon />
        <span>Allentown &middot; Bethlehem &middot; Easton &middot; Emmaus &middot; Macungie &middot; Whitehall</span>
      </div>
      <div className="info-line">
        <ClockIcon />
        <span>Estimates within one business day</span>
      </div>

      <div className="hours-ticket">
        <div>
          <span>Mon &ndash; Fri</span>
          <span>7:00 AM &ndash; 6:00 PM</span>
        </div>
        <div>
          <span>Saturday</span>
          <span>8:00 AM &ndash; 2:00 PM</span>
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
