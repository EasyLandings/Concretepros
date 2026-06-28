import React from 'react';

export function LogoMark(props) {
  return (
    <svg className="mark" viewBox="0 0 40 40" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="34" height="34" rx="3" stroke="#D9531E" strokeWidth="2" />
      <path d="M3 26L14 15L21 22L29 14L37 22" stroke="#F6F3ED" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14 9h3V6h-3c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v6H14v-6h2.6l.4-3h-3v-1.4c0-.6.4-1.1 1-1.1z" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" />
    </svg>
  );
}

export function GoogleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.6 12.2c0-.7-.06-1.4-.18-2H12v3.9h5.4c-.24 1.3-1 2.4-2.1 3.1v2.6h3.4c2-1.8 3-4.5 3-7.6z" />
      <path d="M12 22c2.7 0 5-.9 6.7-2.4l-3.4-2.6c-1 .6-2 .9-3.3.9-2.5 0-4.7-1.7-5.5-4H2.6v2.6C4.3 19.8 7.9 22 12 22z" />
      <path d="M6.5 13.9a6.3 6.3 0 010-3.8V7.5H2.6a10 10 0 000 9z" />
      <path d="M12 6.6c1.4 0 2.7.5 3.7 1.4l3-3A10 10 0 0012 2C7.9 2 4.3 4.2 2.6 7.5l3.9 2.6c.8-2.3 3-4 5.5-4z" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.9a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.9.6 2.9.7a2 2 0 011.7 2z" />
    </svg>
  );
}

export function MapPinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

export function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M10 1.5l2.6 5.6 6 .6-4.5 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6L1.4 7.7l6-.6z" />
    </svg>
  );
}

const SERVICE_ICON_PATHS = {
  driveways: (
    <>
      <path d="M6 38l6-26h24l6 26" />
      <path d="M14 38V20M34 38V20" />
      <path d="M6 38h36" />
    </>
  ),
  patios: (
    <>
      <rect x="6" y="6" width="36" height="36" />
      <path d="M6 18h36M6 30h36M18 6v36M30 6v36" />
    </>
  ),
  foundations: (
    <>
      <rect x="8" y="10" width="32" height="8" />
      <rect x="8" y="22" width="32" height="8" />
      <rect x="8" y="34" width="32" height="6" />
    </>
  ),
  stamped: (
    <>
      <path d="M24 6l14 9-14 9-14-9z" />
      <path d="M10 24l14 9 14-9M10 33l14 9 14-9" />
    </>
  ),
  retainingWalls: (
    <>
      <rect x="6" y="26" width="36" height="14" />
      <rect x="10" y="16" width="28" height="10" />
      <rect x="14" y="8" width="20" height="8" />
    </>
  ),
  repair: (
    <>
      <path d="M8 40l10-10M30 8l10 10-18 18-6-6 8-8" />
      <path d="M22 18l6 6" />
    </>
  ),
};

export function ServiceIcon({ icon, className = 'service-icon' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      {SERVICE_ICON_PATHS[icon]}
    </svg>
  );
}
