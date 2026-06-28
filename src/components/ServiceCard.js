import React from 'react';
import { ServiceIcon } from './Icons';
import useScrollReveal from '../hooks/useScrollReveal';

export default function ServiceCard({ service }) {
  const ref = useScrollReveal();

  return (
    <div className="service-card reveal" ref={ref}>
      <ServiceIcon icon={service.icon} />
      <h3>{service.name}</h3>
      <p>{service.description}</p>
    </div>
  );
}
