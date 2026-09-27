import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero1.jpeg';
import Reveal from './Reveal';
import { IconArrowRight, IconPlayerPlay, IconShieldCheck, IconHeadset, IconBolt } from '@tabler/icons-react';

export default function Hero() {
  return (
    <section className="relative flex flex-col lg:flex-row lg:items-stretch justify-between gap-10 lg:gap-14 lg:min-h-[85vh] px-4 sm:px-8 lg:px-16 pt-24 pb-16 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100">

      {/* Background Decorative Glow Effects */}
      <div className="absolute top-10 left-1/4 w-[300px] h-[300px] bg-solarRed/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Left Column: Content & Stats */}
      <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-10 space-y-6 max-w-2xl lg:justify-center">

        {/* Top Badge */}
        <Reveal direction="up" duration={700}>
          <div className="inline-flex items-center gap-2 border border-red-100 bg-red-50/80 backdrop-blur-md rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold text-solarRed shadow-sm">
            <span className="w-2 h-2 rounded-full bg-solarRed animate-pulse"></span>
            <span>Leading Solar Energy Solutions Provider</span>
          </div>
        </Reveal>

        {/* Main Heading */}
        <Reveal as="h1" direction="up" delay={100} duration={700} className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-slate-900 leading-[1.15]">
          Power Your Future with  Clean  <span  className="text-solarRed "> ZM Solar </span>  {' '}
          <span className="text-solarRed whitespace-nowrap"> Energy</span>
        </Reveal>

        {/* Subheading */}
        <Reveal as="p" direction="up" delay={200} duration={700} className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Affordable & reliable solar panel installation, high-efficiency inverter setup, and complete maintenance services for residential & commercial spaces.
        </Reveal>

        {/* CTA Buttons */}
        <Reveal direction="up" delay={300} duration={700} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
          <Link
            to="/pages/booksurvey"
            className="w-full sm:w-auto bg-solarRed hover:bg-red-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-solarRed/25 transition duration-300 text-center flex items-center justify-center gap-2 group"
          >
            <span>Get a Free Quote</span>
            <IconArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/pages/services"
            className="w-full sm:w-auto border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 font-bold px-8 py-4 rounded-2xl shadow-sm transition duration-300 text-center"
          >
            Explore Services
          </Link>
        </Reveal>

        {/* Stats Grid */}
        <Reveal direction="up" delay={400} duration={700} className="w-full grid grid-cols-3 gap-3 sm:gap-4 pt-8 border-t border-slate-200 mt-4">
          <div className="flex flex-col items-center justify-center text-center bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-200/60 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-solarRed/10 text-solarRed flex items-center justify-center mb-2">
              <IconShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-lg sm:text-2xl font-black text-slate-900 leading-tight">500+</span>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-1 font-medium">Installations</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-200/60 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-solarRed/10 text-solarRed flex items-center justify-center mb-2">
              <IconHeadset className="w-5 h-5" />
            </div>
            <span className="text-lg sm:text-2xl font-black text-solarRed leading-tight">24/7</span>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-1 font-medium">Support</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-200/60 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-solarRed/10 text-solarRed flex items-center justify-center mb-2">
              <IconBolt className="w-5 h-5" />
            </div>
            <span className="text-sm sm:text-lg font-black text-slate-900 leading-tight">Net Metering</span>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-1 font-medium">Approval</p>
          </div>
        </Reveal>

      </div>

      {/* Right Column: Split Screen Image & Floating Video Card */}
      <Reveal direction="up" delay={500} duration={1000} className="w-full lg:w-1/2 relative z-10 flex">
        <div className="relative w-full h-[380px] sm:h-[460px] lg:h-auto lg:flex-1 rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 group">

          {/* Main Hero Image (object-cover = always fills the box, no gaps) */}
          <img
            src={heroImage}
            alt="ZM Solar Energy Showcase"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>

          {/* Floating Video Overlay Card */}
          <div className="absolute bottom-6 right-6 w-64 sm:w-72 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-100 overflow-hidden">
            <div className="relative h-32 sm:h-36 rounded-xl overflow-hidden bg-slate-900 shadow-inner">
              <video
                src="https://res.cloudinary.com/kna0oakm/video/upload/v1789260462/Review1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              ></video>
              <div className="absolute inset-0 bg-slate-950/20 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-solarRed/90 text-white flex items-center justify-center shadow-md animate-pulse">
                  <IconPlayerPlay className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>
            </div>
            <div className="mt-2.5 px-1">
              <h4 className="text-xs font-bold text-slate-900">ZM Solar Live Project Review</h4>
              <p className="text-[10px] text-slate-500 mt-0.5">Client satisfaction & high performance setup.</p>
            </div>
          </div>

        </div>
      </Reveal>

    </section>
  );
}
