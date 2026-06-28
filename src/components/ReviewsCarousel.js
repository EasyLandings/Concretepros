import React, { useEffect, useRef, useState } from 'react';
import { StarIcon } from './Icons';

const SLIDE_MS = 10000;
const STARTING_TICKET_NO = 104;

export default function ReviewsCarousel({ reviews }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const startTimer = () => {
    if (reducedMotion.current) return;
    timerRef.current = window.setInterval(() => {
      setCurrent((c) => (c + 1) % reviews.length);
    }, SLIDE_MS);
  };
  const stopTimer = () => window.clearInterval(timerRef.current);

  useEffect(() => {
    startTimer();
    return stopTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reviews.length]);

  const goTo = (i) => {
    setCurrent(i);
    stopTimer();
    startTimer();
  };

  return (
    <div
      className="carousel"
      aria-roledescription="carousel"
      aria-label="Customer reviews"
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
      onFocus={stopTimer}
      onBlur={startTimer}
    >
      <div className="carousel-track" aria-live="polite">
        {reviews.map((r, i) => (
          <div
            key={r.id}
            className={`review-slide ${i === current ? 'active' : ''}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${reviews.length}`}
          >
            <div className="review-top">
              <span>Review No. {STARTING_TICKET_NO + i}</span>
              <div className="review-stars" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: r.rating }).map((_, s) => (
                  <StarIcon key={s} />
                ))}
              </div>
            </div>
            <p className="review-quote">&ldquo;{r.text}&rdquo;</p>
            <div className="review-author">
              <b>{r.name}</b> &mdash; {r.location}
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {reviews.map((r, i) => (
          <button
            key={r.id}
            type="button"
            className={i === current ? 'active' : ''}
            aria-label={`Show review ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
