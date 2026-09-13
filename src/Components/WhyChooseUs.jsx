import React from 'react';
import {
  IconShieldCheck,
  IconCreditCard,
  IconCertificate,
  IconTools,
  IconAward,
  IconHeadset,
} from '@tabler/icons-react';
import Reveal from './Reveal';

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 px-4 bg-white text-slate-900 relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-solarRed/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-red-100 bg-red-50/80 backdrop-blur-md rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold text-solarRed shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-solarRed animate-pulse"></span>
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Your trusted partner for reliable <span className="text-solarRed">and affordable solar solutions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We bridge the gap between high electricity bills and sustainable energy with certified engineering and unmatched customer care.
          </p>
        </Reveal>

        {/* 4 Main Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

          {/* Card 1 */}
          <Reveal direction="left" className="group bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-solarRed/30 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-solarRed opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-14 h-14 rounded-2xl bg-solarRed/10 text-solarRed flex items-center justify-center mb-6 shadow-sm group-hover:bg-solarRed group-hover:text-white group-hover:shadow-lg group-hover:shadow-solarRed/30 transition-all duration-300">
              <IconShieldCheck size={28} stroke={1.75} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Certified & Experienced Technicians</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our team of skilled professionals ensures high-quality solar installations with precision and safety, delivering systems that last for years.
            </p>
          </Reveal>

          {/* Card 2 */}
          <Reveal direction="right" className="group bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-solarRed/30 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-solarRed opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-14 h-14 rounded-2xl bg-solarRed/10 text-solarRed flex items-center justify-center mb-6 shadow-sm group-hover:bg-solarRed group-hover:text-white group-hover:shadow-lg group-hover:shadow-solarRed/30 transition-all duration-300">
              <IconCreditCard size={28} stroke={1.75} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Affordable Pricing & EMI Options</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We make solar energy accessible for everyone with competitive pricing and easy monthly installment plans to fit your budget.
            </p>
          </Reveal>

          {/* Card 3 */}
          <Reveal direction="left" delay={120} className="group bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-solarRed/30 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-solarRed opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-14 h-14 rounded-2xl bg-solarRed/10 text-solarRed flex items-center justify-center mb-6 shadow-sm group-hover:bg-solarRed group-hover:text-white group-hover:shadow-lg group-hover:shadow-solarRed/30 transition-all duration-300">
              <IconCertificate size={28} stroke={1.75} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Govt. Approved Installations</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              All our solar solutions are government-approved, subsidy-compliant, and meet the highest industry standards for quality and efficiency.
            </p>
          </Reveal>

          {/* Card 4 */}
          <Reveal direction="right" delay={120} className="group bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-solarRed/30 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-solarRed opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-14 h-14 rounded-2xl bg-solarRed/10 text-solarRed flex items-center justify-center mb-6 shadow-sm group-hover:bg-solarRed group-hover:text-white group-hover:shadow-lg group-hover:shadow-solarRed/30 transition-all duration-300">
              <IconTools size={28} stroke={1.75} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">After-Sales Support & Warranty</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our relationship doesn’t end at installation. We provide dedicated after-sales service, timely maintenance, and product warranties for complete peace of mind.
            </p>
          </Reveal>

        </div>

        {/* Bottom Highlight Badges */}
        <Reveal direction="up" className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-200">
          <div className="group flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-solarRed/40 hover:bg-white hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 shrink-0 rounded-xl bg-solarRed/10 text-solarRed flex items-center justify-center group-hover:bg-solarRed group-hover:text-white transition-colors duration-300">
              <IconAward size={20} stroke={1.75} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold text-slate-900">Certified</span>
              <span className="text-xs text-slate-500">Experts</span>
            </div>
          </div>
          <div className="group flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-solarRed/40 hover:bg-white hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 shrink-0 rounded-xl bg-solarRed/10 text-solarRed flex items-center justify-center group-hover:bg-solarRed group-hover:text-white transition-colors duration-300">
              <IconCreditCard size={20} stroke={1.75} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold text-slate-900">Affordable</span>
              <span className="text-xs text-slate-500">Plans</span>
            </div>
          </div>
          <div className="group flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-solarRed/40 hover:bg-white hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 shrink-0 rounded-xl bg-solarRed/10 text-solarRed flex items-center justify-center group-hover:bg-solarRed group-hover:text-white transition-colors duration-300">
              <IconCertificate size={20} stroke={1.75} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold text-slate-900">Govt.</span>
              <span className="text-xs text-slate-500">Approved</span>
            </div>
          </div>
          <div className="group flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-solarRed/40 hover:bg-white hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 shrink-0 rounded-xl bg-solarRed/10 text-solarRed flex items-center justify-center group-hover:bg-solarRed group-hover:text-white transition-colors duration-300">
              <IconHeadset size={20} stroke={1.75} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold text-slate-900">After-Sales</span>
              <span className="text-xs text-slate-500">Care</span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}