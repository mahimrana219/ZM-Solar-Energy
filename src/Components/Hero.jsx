import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import hero1 from '../assets/optimized/hero1.webp';
import hero2 from '../assets/optimized/hero2.webp';
import hero3 from '../assets/optimized/hero3.webp';

const SLIDES = [
  {
    image: hero1,
    headingThin: 'Power Your Home with',
    headingBold: 'Clean Solar Energy',
    label: 'Solar Panels',
    subheading:
      'Affordable & reliable solar panel installation, high-efficiency inverter setup, and complete maintenance services for residential & commercial spaces.',
    ctaLabel: 'Explore Products',
  },
  {
    image: hero2,
    headingThin: 'Complete Solar Solutions for a',
    headingBold: 'Brighter Tomorrow',
    label: 'Solar Solutions',
    subheading:
      'From panels to batteries to inverters — every component is engineered to work together for maximum efficiency and reliability.',
    ctaLabel: 'Explore All Products',
  },
  {
    image: hero3,
    headingThin: 'Smarter Energy with',
    headingBold: 'Hyvion Hybrid Inverters',
    label: 'Hybrid Solar Inverters',
    subheading:
      'Intelligent load management, real-time monitoring, and seamless battery backup — all in one IP65-rated hybrid inverter.',
    ctaLabel: 'Explore Hybrid Inverters',
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i) => setIndex(i);
  const goPrev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const goNext = () => setIndex((i) => (i + 1) % SLIDES.length);

  const slide = SLIDES[index];

  return (
    <section className="relative w-full mt-4 sm:mt-6 lg:mt-8 aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2150/730] min-h-[380px] sm:min-h-[420px] lg:min-h-[400px] max-h-[640px] overflow-hidden bg-white">

      {/* Slide Images (crossfade) */}
      {SLIDES.map((s, i) => (
        <img
          key={i}
          src={s.image}
          alt={s.label}
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchPriority={i === 0 ? 'high' : 'auto'}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* White Gradient Fade (left to right) */}
      <div className="absolute inset-0 bg-gradient-to-r from-white from-5% via-white/90 via-45% sm:via-white/85 sm:via-35% to-transparent to-80% sm:to-75%"></div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex items-center px-4 sm:px-8 lg:px-16">
        <div className="max-w-[260px] sm:max-w-lg space-y-2 sm:space-y-4">
          <h1 className="text-xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-[1.15]">
            <span className="font-bold block">{slide.headingThin}</span>
            <span className="font-black text-solarRed block">{slide.headingBold}</span>
          </h1>

          <div className="inline-block">
            <span className="text-[10px] sm:text-sm font-semibold uppercase tracking-widest text-slate-600">
              {slide.label}
            </span>
            <div className="h-0.5 w-8 sm:w-10 bg-solarRed mt-1"></div>
          </div>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-[240px] sm:max-w-md">
            {slide.subheading}
          </p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
            <Link
              to="/pages/services"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-solarRed hover:bg-red-700 text-white font-bold px-3.5 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg shadow-solarRed/25 transition duration-300 text-xs sm:text-base group"
            >
              <span>{slide.ctaLabel}</span>
              <IconArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pages/about"
              className="inline-flex items-center justify-center gap-2 border border-solarRed/40 hover:border-solarRed text-solarRed font-bold px-3.5 sm:px-6 py-2 sm:py-3 rounded-lg transition duration-300 text-xs sm:text-base bg-white/70"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>

      {/* Slider Controls (bottom-right) */}
      <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-8 z-10 flex items-center gap-2 sm:gap-4">
        <button
          onClick={goPrev}
          aria-label="Previous slide"
          className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-slate-900/10 hover:bg-slate-900/20 backdrop-blur-md text-slate-700 flex items-center justify-center transition-colors"
        >
          <IconChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-5 sm:w-7 bg-solarRed' : 'w-2 sm:w-2.5 bg-slate-900/20 hover:bg-slate-900/40'
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          aria-label="Next slide"
          className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-slate-900/10 hover:bg-slate-900/20 backdrop-blur-md text-slate-700 flex items-center justify-center transition-colors"
        >
          <IconChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

    </section>
  );
}
