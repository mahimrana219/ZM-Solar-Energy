import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import { CATEGORIES, getProductsByCategory } from '../../data/products';

import hybridVideo from '../../assets/HYBRID-INVERTERS.mp4';
import batteryVideo from '../../assets/lithium-ion-battery.mp4';

const SLUG_TO_CATEGORY = {
  hybrid: 'Hybrid Solar Inverters',
  batteries: 'Batteries',
  ongrid: 'On Grid Solar Inverters',
  panels: 'Solar Panels',
};

const CATEGORY_VIDEO = {
  'Hybrid Solar Inverters': hybridVideo,
  Batteries: batteryVideo,
};

const CATEGORY_TAGLINE = {
  'Hybrid Solar Inverters':
    'Advanced hybrid inverter technology designed for seamless solar generation, battery backup, and intelligent energy management.',
  Batteries: 'Reliable lithium battery solutions engineered for long service life, high safety, and dependable backup power.',
  'On Grid Solar Inverters': 'High-efficiency on-grid inverters built for residential and commercial installations, with reliable grid synchronization.',
  'Solar Panels': 'Industry-leading solar modules engineered for maximum efficiency, long-term reliability, and exceptional performance.',
};

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const category = SLUG_TO_CATEGORY[categorySlug];

  if (!category || !CATEGORIES.includes(category)) {
    return (
      <div className="bg-white text-slate-900 min-h-screen pt-28 pb-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-black mb-3">Category Not Found</h1>
        <Link to="/" className="bg-solarRed text-white font-bold px-6 py-3 rounded-xl">
          Back to Home
        </Link>
      </div>
    );
  }

  const products = getProductsByCategory(category);
  const video = CATEGORY_VIDEO[category];

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4">

        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-solarRed transition-colors mb-6">
          <IconArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-red-50 text-solarRed text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
            {category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900">{category}</h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">{CATEGORY_TAGLINE[category]}</p>
        </div>

        {/* Optional Showcase Video */}
        {video && (
          <div className="rounded-3xl overflow-hidden shadow-xl mb-16 bg-slate-950 max-w-3xl mx-auto aspect-video">
            <video src={video} controls muted loop playsInline className="w-full h-full object-cover" />
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.slug}
              className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:border-solarRed/40 hover:shadow-xl transition-all group flex flex-col"
            >
              <div className="h-56 bg-slate-50 flex items-center justify-center p-6">
                <img
                  src={product.img}
                  alt={product.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                {product.price && (
                  <span className="text-xs font-bold text-solarRed mb-1">{product.price}</span>
                )}
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{product.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">{product.tagline}</p>
                <Link
                  to={`/pages/products/${product.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-solarRed mt-4 group-hover:gap-2.5 transition-all"
                >
                  <span>View Details</span>
                  <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            to="/pages/booksurvey"
            className="inline-flex items-center gap-2 bg-solarRed hover:bg-red-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-solarRed/25 transition-all group"
          >
            <span>Request a Quote</span>
            <IconArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </div>
  );
}
