import React from 'react';
import { Link } from 'react-router-dom';
import { LogoMark } from './Icons';
import './Footer.css';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/#services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <Link to="/" className="logo">
            <LogoMark />
            LV<span>CP</span>
          </Link>
          <ul className="footer-links">
            {LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-bottom">
          &copy; 2026 Lehigh Valley Concrete Pros. Licensed &amp; Insured &middot; PA HIC #PA-118273. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
