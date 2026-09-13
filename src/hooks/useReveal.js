import { useEffect, useRef, useState } from 'react';

// Fires once when the element enters the viewport, using IntersectionObserver
// (no scroll listeners, no layout thrashing — GPU-cheap and passive).
export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -80px 0px', triggerOnce = true } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(node);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
}
