import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconChevronDown } from '@tabler/icons-react';
import logo from '../assets/newlogo.png';

const PRODUCT_CATEGORIES = [
  { label: 'Hybrid Solar Inverters', slug: 'hybrid' },
  { label: 'Batteries', slug: 'batteries' },
  { label: 'On Grid Solar Inverters', slug: 'ongrid' },
  { label: 'Solar Panels', slug: 'panels' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Close menu automatically on route change and lock body scroll when open
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className="relative flex justify-center pt-4 px-4 z-50 w-full">
      {/* Navbar Container */}
      <nav className="flex items-center justify-between border border-slate-200 bg-white/90 backdrop-blur-md px-5 py-3 rounded-full text-slate-800 text-sm max-w-5xl w-full shadow-md relative z-50">

        {/* Logo - Clicks to Home */}
        <Link to="/" className="flex items-center gap-2 focus:outline-none group">
          <img src={logo} alt="ZM Solar Energy" className="h-11 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          <Link to="/" className="relative overflow-hidden h-6 group text-slate-700 hover:text-solarRed transition-colors">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Home</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-solarRed">Home</span>
          </Link>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 text-slate-700 hover:text-solarRed transition-colors focus:outline-none">
              <span>Products</span>
              <IconChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`} />
            </button>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                productsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
              }`}
            >
              <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-2 w-56">
                {PRODUCT_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.slug}
                    to={`/pages/products/category/${cat.slug}`}
                    className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-red-50 hover:text-solarRed transition-colors"
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/pages/services" className="relative overflow-hidden h-6 group text-slate-700 hover:text-solarRed transition-colors">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Services</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-solarRed">Services</span>
          </Link>

           <Link to="/pages/whyus" className="relative overflow-hidden h-6 group text-slate-700 hover:text-solarRed transition-colors">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">WhyUs</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-solarRed">WhyUs</span>
          </Link>

          <Link to="/pages/about" className="relative overflow-hidden h-6 group text-slate-700 hover:text-solarRed transition-colors">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">About Us</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-solarRed">About Us</span>
          </Link>

          <Link to="/pages/projects" className="relative overflow-hidden h-6 group text-slate-700 hover:text-solarRed transition-colors">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Projects</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-solarRed">Projects</span>
          </Link>

          <Link to="/pages/detailedreviews" className="relative overflow-hidden h-6 group text-slate-700 hover:text-solarRed transition-colors">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Reviews</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-solarRed">Reviews</span>
          </Link>
        </div>

        {/* Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/pages/contact" className="bg-solarRed hover:bg-red-700 text-white px-5 py-2 rounded-full font-medium shadow-md shadow-red-500/20 transition duration-300">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button onClick={toggleMenu} className="md:hidden text-slate-800 focus:outline-none p-2 relative z-50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>

      </nav>

      {/* Mobile Fullscreen Glassmorphism Grey Transparent Menu Overlay */}
      <div className={`fixed inset-0 bg-slate-900/60 backdrop-blur-xl z-40 md:hidden flex flex-col justify-between px-6 pt-28 pb-10 overflow-y-auto transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>

        {/* Mobile Links Container */}
        <div className="flex flex-col items-center justify-center space-y-6 my-auto text-center">
          <span className="text-[11px] font-bold uppercase tracking-widest text-solarRed mb-2">Navigation Menu</span>

          <Link onClick={closeMenu} to="/" className="text-2xl font-black tracking-tight text-white hover:text-solarRed transition-colors">
            Home
          </Link>

          {/* Mobile Products Dropdown */}
          <div className="flex flex-col items-center gap-3">
            <button
              onClick={() => setMobileProductsOpen((v) => !v)}
              className="flex items-center gap-1.5 text-2xl font-black tracking-tight text-white hover:text-solarRed transition-colors"
            >
              <span>Products</span>
              <IconChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileProductsOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileProductsOpen && (
              <div className="flex flex-col items-center gap-3">
                {PRODUCT_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.slug}
                    onClick={closeMenu}
                    to={`/pages/products/category/${cat.slug}`}
                    className="text-base font-semibold text-slate-200 hover:text-solarRed transition-colors"
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link onClick={closeMenu} to="/pages/services" className="text-2xl font-black tracking-tight text-white hover:text-solarRed transition-colors">
            Services
          </Link>
          <Link onClick={closeMenu} to="/pages/about" className="text-2xl font-black tracking-tight text-white hover:text-solarRed transition-colors">
            About Us
          </Link>
          <Link onClick={closeMenu} to="/pages/projects" className="text-2xl font-black tracking-tight text-white hover:text-solarRed transition-colors">
            Projects
          </Link>
           <Link onClick={closeMenu} to="/pages/whyus" className="text-2xl font-black tracking-tight text-white hover:text-solarRed transition-colors">
            WhyUs
          </Link>
            <Link onClick={closeMenu} to="/pages/detailedreviews" className="text-2xl font-black tracking-tight text-white hover:text-solarRed transition-colors">
            Reviews
          </Link>
        </div>

        {/* Mobile CTA Footer */}
        <div className="w-full space-y-4 pt-6 border-t border-white/10 text-center">
          <Link onClick={closeMenu} to="/pages/contact" className="w-full bg-solarRed hover:bg-red-700 text-white text-center py-3.5 rounded-full font-bold shadow-lg shadow-solarRed/30 block transition-all">
            Contact Us
          </Link>
          <p className="text-xs text-slate-300">ZM Solar Energy • Hyderabad, Pakistan</p>
        </div>

      </div>
    </header>
  );
}
