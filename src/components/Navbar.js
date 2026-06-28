import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LogoMark } from './Icons';
import SocialLinks from './SocialLinks';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/#services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Lock background scroll while the full-screen mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="navbar">
        <div className="container">
          <Link to="/" className="logo" onClick={close}>
            <LogoMark />
            LV<span>CP</span>
          </Link>

          <nav className="nav-desktop" aria-label="Primary">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-cta-row">
            <SocialLinks />
            <Link to="/#contact" className="btn btn-primary nav-cta">
              Get a Quote
            </Link>
            <button
              className={`hamburger ${open ? 'is-open' : ''}`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobileMenu"
              onClick={() => setOpen((v) => !v)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`} id="mobileMenu">
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link to={link.to} onClick={close}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <SocialLinks />
        </div>
      </div>
    </>
  );
}
