import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceIcon } from './Icons';
import useScrollReveal from '../hooks/useScrollReveal';

export default function ServiceCard({ service }) {
  const ref = useScrollReveal();

  return (
    <div className="service-card reveal" ref={ref}>
      <ServiceIcon icon={service.icon} />
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <Link to={service.path} style={{ color: 'var(--orange)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
        Learn more about {service.name} &rarr;
      </Link>
    </div>
  );
}
