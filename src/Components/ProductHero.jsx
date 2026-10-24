import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconCheck, IconArrowRight } from '@tabler/icons-react';
import Reveal from './Reveal';

import solarImg from '../assets/solarpannerl.webp';
import hybridImg from '../assets/optimized/zm-hybrid-sunset.webp';
import onGridImg from '../assets/optimized/zm-ongrid-sunset.webp';
import batteryImg from '../assets/optimized/zm-battery-sunset.webp';
import hybridVideo from '../assets/HYBRID-INVERTERS.mp4';
import batteryVideo from '../assets/lithium-ion-battery.mp4';

const SHOWCASE = [
  {
    key: 'solar',
    category: 'Solar Panels',
    title: 'Tier-1 Solar Panels',
    desc: 'Industry-leading solar modules from globally trusted manufacturers, engineered for maximum efficiency, long-term reliability, and exceptional performance.',
    features: ['Premium Build Quality', 'Tier-1 Certified', 'High Energy Efficiency'],
    image: solarImg,
    exploreTo: '/pages/products/solar-panel',
  },
  {
    key: 'hybrid',
    category: 'Hybrid',
    title: 'Hybrid Solar Inverters',
    desc: 'Advanced hybrid inverter technology designed for seamless solar generation, battery backup, and intelligent energy management.',
    features: ['Battery Ready', 'IP66 Protection', 'AI Energy Management'],
    image: hybridImg,
    imgClass: 'scale-110',
    video: hybridVideo,
    exploreTo: '/pages/products/category/hybrid',
  },
  {
    key: 'ongrid',
    category: 'On Grid',
    title: 'On Grid Solar Inverters',
    desc: 'High-efficiency on-grid inverters built for residential and commercial installations, with reliable grid synchronization.',
    features: ['98%+ Efficiency', 'Smart Monitoring', '5 Year Warranty'],
    image: onGridImg,
    exploreTo: '/pages/products/fusion-ip66-12-15-20kw',
  },
  {
    key: 'battery',
    category: 'Lithium Batteries',
    title: 'Energy Storage Systems',
    desc: 'Reliable lithium battery solutions engineered for long service life, high safety, and dependable backup power.',
    features: ['LiFePO₄ Cells', 'Long Cycle Life', 'Fast Charging'],
    image: batteryImg,
    video: batteryVideo,
    exploreTo: '/pages/products/energy-wall-r5',
  },
];

export default function ProductHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = SHOWCASE[activeIndex];

  return (
    <Reveal direction="up" className="mb-16">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        {SHOWCASE.map((item, index) => (
          <button
            key={item.key}
            onClick={() => setActiveIndex(index)}
            className={`px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-sm ${
              activeIndex === index
                ? 'bg-solarRed text-white shadow-solarRed/20'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-solarRed/40'
            }`}
          >
            {item.category}
          </button>
        ))}
      </div>

      {/* Showcase Card */}
      <div className="bg-white border border-slate-200/80 rounded-3xl shadow-xl p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-red-50 text-solarRed text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
              {active.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">{active.title}</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">{active.desc}</p>

            <div className="space-y-2.5 mb-6">
              {active.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-solarRed/10 text-solarRed flex items-center justify-center flex-shrink-0">
                    <IconCheck className="w-3.5 h-3.5" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Link
              to={active.exploreTo}
              className="inline-flex items-center gap-2 text-sm font-bold text-solarRed group"
            >
              <span>Explore Products</span>
              <IconArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="overflow-hidden h-[320px] relative">
            {active.video ? (
              <video
                key={active.key}
                src={active.video}
                autoPlay
                muted
                loop
                playsInline
                className={`w-full h-full object-cover transition-transform duration-500 ${active.imgClass || ''}`}
              />
            ) : (
              <img
                src={active.image}
                alt={active.title}
                className={`w-full h-full object-cover transition-transform duration-500 ${active.imgClass || ''}`}
              />
            )}
          </div>
        </div>
      </div>

      {/* Thumbnail Selector */}
      <div className="flex items-center justify-center gap-4 mt-6">
        {SHOWCASE.map((item, index) => (
          <button
            key={item.key}
            onClick={() => setActiveIndex(index)}
            className={`bg-white rounded-xl p-1.5 border-2 overflow-hidden transition-all ${
              activeIndex === index ? 'border-solarRed shadow-md' : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <img src={item.image} alt={item.category} className="w-16 h-14 object-cover rounded-lg mx-auto" />
            <span className="block text-[10px] font-bold text-slate-600 mt-1 text-center uppercase tracking-wide">
              {item.category}
            </span>
          </button>
        ))}
      </div>
    </Reveal>
  );
}
