import React from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight } from '@tabler/icons-react';
import Reveal from './Reveal';
import ProductHero from './ProductHero';
import { getProductsByCategory } from '../data/products';

const CATEGORIES = ['Batteries', 'On Grid Solar Inverters', 'Solar Panels'];

const CATEGORY_SLUGS = {
  'Hybrid Solar Inverters': 'hybrid',
  Batteries: 'batteries',
  'On Grid Solar Inverters': 'ongrid',
  'Solar Panels': 'panels',
};

function ProductCard({ product, index }) {
  return (
    <Reveal direction="up" delay={index * 80} className="h-full">
      <div className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:border-solarRed/40 hover:shadow-xl transition-all group h-full flex flex-col">
        <div className="h-56 bg-slate-50 flex items-center justify-center p-6">
          <img
            src={product.img}
            alt={product.name}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
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
    </Reveal>
  );
}

function ProductCategoryRow({ title }) {
  const products = getProductsByCategory(title);
  return (
    <div className="mb-16 last:mb-0">
      <Reveal direction="up" className="flex items-center justify-between mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{title}</h3>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {products.map((product, index) => (
          <ProductCard key={product.slug} product={product} index={index} />
        ))}
      </div>

      <Reveal direction="up" className="flex justify-center">
        <Link
          to={`/pages/products/category/${CATEGORY_SLUGS[title]}`}
          className="inline-flex items-center gap-2 bg-solarRed hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-solarRed/20 transition-all text-sm"
        >
          View All {title}
        </Link>
      </Reveal>
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section className="py-24 px-4 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <Reveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-red-100 bg-red-50/80 backdrop-blur-md rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold text-solarRed shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-solarRed animate-pulse"></span>
            <span>Our Products</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Premium Solar Solutions & <span className="text-solarRed">Products in Pakistan</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Genuine Tier-1 panels, lithium batteries, and on-grid inverters — every product we install is the same equipment we proudly showcase here.
          </p>
        </Reveal>

        <ProductHero />

        {CATEGORIES.map((category) => (
          <ProductCategoryRow key={category} title={category} />
        ))}

      </div>
    </section>
  );
}
