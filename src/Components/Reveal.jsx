import React from 'react';
import { useReveal } from '../hooks/useReveal';

// Starting (hidden) transform for each direction — must stay as literal
// strings so Tailwind's build-time scanner can find and generate them.
const HIDDEN_CLASSES = {
  left: 'opacity-0 -translate-x-16',
  right: 'opacity-0 translate-x-16',
  up: 'opacity-0 translate-y-16',
  down: 'opacity-0 -translate-y-16',
  fade: 'opacity-0',
};

const DURATION_CLASSES = {
  500: 'duration-500',
  700: 'duration-700',
  1000: 'duration-1000',
};

// Reusable scroll-reveal wrapper: pass any element/card as children and it
// slides + fades into place the first time it enters the viewport.
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 700,
  as: Tag = 'div',
  className = '',
}) {
  const [ref, isVisible] = useReveal();

  const hiddenClasses = HIDDEN_CLASSES[direction] || HIDDEN_CLASSES.up;
  const durationClass = DURATION_CLASSES[duration] || DURATION_CLASSES[700];

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={[
        'transform transition-all ease-out will-change-transform',
        durationClass,
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : hiddenClasses,
        className,
      ].join(' ')}
    >
      {children}
    </Tag>
  );
}
