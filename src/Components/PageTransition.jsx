import React from 'react';
import { useLocation } from 'react-router-dom';

// Remounting a fresh element per route (via key) restarts its CSS animation,
// giving every navigation a brief, consistent fade-up transition.
export default function PageTransition({ children }) {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition">
      {children}
    </div>
  );
}
