import React from 'react';
import { FacebookIcon, InstagramIcon, GoogleIcon } from './Icons';

const LINKS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/lehighvalleyconcretepros',
    Icon: FacebookIcon,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/lehighvalleyconcretepros',
    Icon: InstagramIcon,
  },
  {
    label: 'Google reviews',
    href: 'https://g.page/r/CRzdGvLTzd0CEAI/review',
    Icon: GoogleIcon,
  },
];

export default function SocialLinks({ className = 'social-row' }) {
  return (
    <div className={className} aria-label="Social media links">
      {LINKS.map(({ label, href, Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
          <Icon />
        </a>
      ))}
    </div>
  );
}
