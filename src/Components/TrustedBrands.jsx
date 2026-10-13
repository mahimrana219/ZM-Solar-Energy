import React from 'react';
import Reveal from './Reveal';

import royalLogo from '../assets/brands/royal-solar.png';
import jinkoLogo from '../assets/brands/jinko.png';
import solaxLogo from '../assets/brands/solax.png';
import sacredSunLogo from '../assets/brands/sacredsun.png';

const LOGO_BRANDS = [
  { name: 'Royal Solar Energy', logo: royalLogo },
  { name: 'Jinko Solar', logo: jinkoLogo },
  { name: 'SolaX Power', logo: solaxLogo },
  { name: 'Sacred Sun', logo: sacredSunLogo },
];

export default function TrustedBrands() {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal direction="up" className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Powering Your Future with <span className="text-solarRed">Trusted Global Brands</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            We only install certified, warranty-backed equipment from globally recognized manufacturers.
          </p>
        </Reveal>

        <Reveal direction="up" delay={100} className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {LOGO_BRANDS.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 w-40 sm:w-44 px-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-solarRed/40 transition-all"
            >
              <img src={brand.logo} alt={brand.name} className="max-h-10 max-w-full object-contain" />
            </div>
          ))}
          <div className="flex items-center justify-center h-20 w-40 sm:w-44 px-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-solarRed/40 hover:text-solarRed transition-all text-slate-700 font-black text-sm tracking-wide">
            INVDT
          </div>
        </Reveal>
      </div>
    </section>
  );
}
