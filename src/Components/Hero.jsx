import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.png';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 pt-16 pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">
      
      {/* Background Decorative Glow Effects */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-solarYellow/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-24 left-1/4 w-[250px] h-[250px] bg-solarRed/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Badge / Tag */}
      <Reveal direction="up" duration={700} className="inline-flex items-center gap-2 border border-slate-200 bg-white/80 backdrop-blur-md rounded-full px-4 py-1.5 text-xs md:text-sm font-medium text-slate-700 shadow-sm mb-6 z-10">
        <span className="w-2 h-2 rounded-full bg-solarRed animate-pulse"></span>
        <span>Leading Solar Energy Solutions Provider</span>
      </Reveal>

      {/* Main Heading */}
      <Reveal as="h1" direction="up" delay={100} duration={700} className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 max-w-4xl leading-tight z-10">
        Power Your Future with <br className="hidden sm:block" />
        <span className="text-solarRed">
          Clean Solar Energy
        </span>
      </Reveal>

      {/* Subheading */}
      <Reveal as="p" direction="up" delay={200} duration={700} className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed z-10 px-2">
        Affordable & reliable solar panel installation, high-efficiency inverter setup, and complete maintenance services for residential & commercial spaces.
      </Reveal>

      {/* CTA Buttons */}
      <Reveal direction="up" delay={300} duration={700} className="mt-8 flex flex-col sm:flex-row items-center gap-4 z-10 w-full sm:w-auto">
        <Link
          to="/pages/booksurvey"
          className="w-full sm:w-auto bg-solarRed hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-red-500/25 transition duration-300 text-center"
        >
          Get a Free Quote
        </Link>
        <a
          href="/pages/services"
          className="w-full sm:w-auto border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-8 py-3.5 rounded-full shadow-sm transition duration-300 text-center"
        >
          Explore Services
        </a>
      </Reveal>

      {/* Optional Stats or Trust Badges */}
      <Reveal direction="up" delay={400} duration={700} className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl w-full px-4 z-10 border-t border-slate-200 pt-8">
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-bold text-slate-900">500+</span>
          <span className="text-xs md:text-sm text-slate-500 mt-1">Verified Installations</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-bold text-solarRed">24/7</span>
          <span className="text-xs md:text-sm text-slate-500 mt-1">Maintenance Support</span>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-bold text-slate-900">Net Metering</span>
          <span className="text-xs md:text-sm text-slate-500 mt-1">Expert Approval</span>
        </div>
      </Reveal>

      {/* Hero Image Section (White background corners blended out completely) */}
      <Reveal direction="up" delay={500} duration={1000} className="mt-16 w-full max-w-5xl px-2 z-10 flex justify-center">
        <img
          src={heroImage}
          alt="ZM Solar Energy Showcase"
          className="w-full h-auto object-contain max-h-[550px] mix-blend-multiply transition duration-500 hover:scale-[1.01]"
        />
      </Reveal>

    </section>
  );
}