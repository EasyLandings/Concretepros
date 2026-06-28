import { useEffect, useRef } from 'react';

/**
 * Adds an 'is-visible' class once the element scrolls into view, then stops
 * observing it. Falls back to making everything visible immediately if
 * IntersectionObserver isn't available.
 */
export default function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible');
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}
