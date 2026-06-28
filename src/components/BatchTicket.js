import React from 'react';
import './BatchTicket.css';

const ITEMS = [
  { num: '27', label: 'Years pouring in the valley' },
  { num: '640+', label: 'Slabs poured to date' },
  { num: '4,000 PSI', label: 'Our standard mix' },
  { num: '4.9 / 5', label: 'Average customer rating', stamp: true },
];

export default function BatchTicket() {
  return (
    <div className="container">
      <div className="ticket">
        <div className="ticket-head">
          <span>Batch Ticket No. 0427</span>
          <span>Lehigh Valley, PA</span>
        </div>
        <div className="ticket-grid">
          {ITEMS.map((item) => (
            <div className="ticket-item" key={item.label}>
              <div className="ticket-num">{item.num}</div>
              <div className="ticket-label">{item.label}</div>
              {item.stamp && (
                <div className="stamp">
                  <span>Poured &amp; Approved</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
