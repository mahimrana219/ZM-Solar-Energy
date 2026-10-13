import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconCheck, IconArrowRight } from '@tabler/icons-react';
import Reveal from './Reveal';
import { getProductsByCategory } from '../data/products';

const SHOWCASE = [
  {
    category: 'Solar Panels',
    title: 'Tier-1 Solar Panels',
    desc: 'Industry-leading solar modules from globally trusted manufacturers, engineered for maximum efficiency, long-term reliability, and exceptional performance.',
    features: ['Premium Build Quality', 'Tier-1 Certified', 'High Energy Efficiency'],
  },
  {
    category: 'On Grid Solar Inverters',
    title: 'On Grid Solar Inverters',
    desc: 'Dependable grid-tie inverters built for seamless solar power generation, with weatherproof housing and smart monitoring for complete peace of mind.',
    features: ['IP66 Weatherproof', 'Smart App Monitoring', 'Up to 125KW Capacity'],
  },
  {
    category: 'Batteries',
    title: 'Lithium-Ion Batteries',
    desc: 'High-capacity lithium battery banks designed for reliable backup power, intelligent battery management, and years of consistent daily performance.',
    features: ['Lithium-Ion (LiFePO4)', 'Intelligent BMS Protection', 'Scalable Capacity'],
  },
];

export default function ProductHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = SHOWCASE[activeIndex];
  const firstProduct = getProductsByCategory(active.category)[0];

  return (
    <Reveal direction="up" className="mb-16">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        {SHOWCASE.map((item, index) => (
          <button
            key={item.category}
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

            {firstProduct && (
              <Link
                to={`/pages/products/${firstProduct.slug}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-solarRed group"
              >
                <span>Explore Products</span>
                <IconArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>

          {firstProduct && (
            <div className="bg-slate-50 rounded-2xl p-8 flex items-center justify-center">
              <img
                src={firstProduct.img}
                alt={active.title}
                className="w-full h-auto max-h-[320px] object-contain"
              />
            </div>
          )}
        </div>
      </div>

      {/* Thumbnail Selector */}
      <div className="flex items-center justify-center gap-4 mt-6">
        {SHOWCASE.map((item, index) => {
          const thumbProduct = getProductsByCategory(item.category)[0];
          if (!thumbProduct) return null;
          return (
            <button
              key={item.category}
              onClick={() => setActiveIndex(index)}
              className={`bg-white rounded-xl p-3 border-2 transition-all ${
                activeIndex === index ? 'border-solarRed shadow-md' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <img src={thumbProduct.img} alt={item.category} className="w-14 h-14 object-contain mx-auto" />
              <span className="block text-[10px] font-bold text-slate-600 mt-1.5 text-center uppercase tracking-wide">
                {item.category === 'On Grid Solar Inverters' ? 'On Grid' : item.category}
              </span>
            </button>
          );
        })}
      </div>
    </Reveal>
  );
}
