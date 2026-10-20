import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { IconArrowLeft, IconArrowRight, IconCheck, IconShieldCheck, IconTruck, IconHeadset } from '@tabler/icons-react';
import { getProductBySlug, getProductsByCategory } from '../../data/products';
import hybridVideo from '../../assets/HYBRID-INVERTERS.mp4';
import batteryVideo from '../../assets/lithium-ion-battery.mp4';

const CATEGORY_VIDEO = {
  'Hybrid Solar Inverters': hybridVideo,
  Batteries: batteryVideo,
};

const TRUST_POINTS = [
  { icon: IconShieldCheck, label: 'Genuine Equipment', desc: '100% authentic, warranty-backed products.' },
  { icon: IconTruck, label: 'Professional Installation', desc: 'Installed by our certified technical team.' },
  { icon: IconHeadset, label: 'After-Sales Support', desc: 'Ongoing maintenance & customer support.' },
];

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="bg-white text-slate-900 min-h-screen pt-28 pb-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-black mb-3">Product Not Found</h1>
        <p className="text-slate-600 mb-6">We couldn't find the product you're looking for.</p>
        <Link to="/" className="bg-solarRed text-white font-bold px-6 py-3 rounded-xl">
          Back to Home
        </Link>
      </div>
    );
  }

  const related = getProductsByCategory(product.category).filter((p) => p.slug !== product.slug);
  const video = CATEGORY_VIDEO[product.category];

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4">

        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-solarRed transition-colors mb-8">
          <IconArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Image */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-10 flex items-center justify-center">
            <img src={product.img} alt={product.name} className="w-full h-auto max-h-[480px] object-contain" />
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="inline-block bg-red-50 text-solarRed text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {product.category}
                </span>
                {product.price && (
                  <span className="text-xl font-black text-slate-900">{product.price}</span>
                )}
              </div>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">{product.name}</h1>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">{product.tagline}</p>
            </div>

            <p className="text-slate-600 leading-relaxed">{product.description}</p>

            {/* Specs */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Specifications</h3>
              {product.specs.map((spec, index) => (
                <div key={index} className="flex items-center justify-between text-sm border-b border-slate-200/60 last:border-0 pb-2 last:pb-0">
                  <span className="flex items-center gap-2 text-slate-500 font-medium">
                    <IconCheck className="w-4 h-4 text-solarRed" />
                    {spec.label}
                  </span>
                  <span className="font-bold text-slate-900">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/pages/booksurvey"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-solarRed hover:bg-red-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-solarRed/25 transition-all group"
              >
                <span>Request a Quote</span>
                <IconArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pages/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-700 font-bold px-8 py-4 rounded-2xl transition-all"
              >
                Ask a Question
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {TRUST_POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <div key={index} className="flex items-start gap-3 bg-slate-50 border border-slate-200/80 rounded-2xl p-5">
                <div className="w-10 h-10 rounded-xl bg-solarRed/10 text-solarRed flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{point.label}</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{point.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Product in Action Video */}
        {video && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {product.category} <span className="text-solarRed">in Action</span>
            </h2>
            <div className="rounded-3xl overflow-hidden shadow-xl bg-slate-950 max-w-3xl aspect-video">
              <video src={video} controls muted loop playsInline className="w-full h-full object-cover" />
            </div>
          </div>
        )}

        {/* Related Products */}
        {related.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              More in <span className="text-solarRed">{product.category}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/pages/products/${item.slug}`}
                  className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:border-solarRed/40 hover:shadow-xl transition-all group"
                >
                  <div className="h-48 bg-slate-50 flex items-center justify-center p-4">
                    <img src={item.img} alt={item.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    {item.price && (
                      <span className="text-xs font-bold text-solarRed block mb-1">{item.price}</span>
                    )}
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-solarRed transition-colors">{item.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
