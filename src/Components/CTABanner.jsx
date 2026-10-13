import React from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight } from '@tabler/icons-react';
import Reveal from './Reveal';

export default function CTABanner() {
  return (
    <section className="px-4 py-4">
      <Reveal direction="up" className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-solarRed text-white p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
              Upgrade Your Power with Top-Tier Technology
            </h3>
            <p className="text-white/85 text-sm sm:text-base leading-relaxed">
              Join hundreds of satisfied homeowners and businesses across Pakistan saving thousands on their utility bills every month.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <Link
              to="/pages/booksurvey"
              className="bg-white text-solarRed hover:bg-slate-100 font-bold py-4 px-8 rounded-xl shadow-lg transition-all inline-flex items-center gap-2 group"
            >
              <span>Request a Quote</span>
              <IconArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
