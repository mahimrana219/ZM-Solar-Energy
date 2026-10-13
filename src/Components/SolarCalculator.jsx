import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconCalculator, IconArrowRight } from '@tabler/icons-react';
import Reveal from './Reveal';
import calcImage from '../assets/hero1.jpeg';

// Rule-of-thumb sizing: every ~5,000 PKR of monthly bill needs roughly 1kW of solar.
const PKR_PER_KW = 5000;

export default function SolarCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(40000);

  const estimatedKw = useMemo(() => {
    const kw = monthlyBill / PKR_PER_KW;
    return Math.max(1, Math.round(kw * 2) / 2).toFixed(1);
  }, [monthlyBill]);

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Image */}
          <Reveal direction="left" className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80">
            <img
              src={calcImage}
              alt="Advanced Customized Solar System"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-8">
              <p className="text-white text-sm font-semibold max-w-xs">
                Every roof is different — our engineers design a system sized exactly to your household's needs.
              </p>
            </div>
          </Reveal>

          {/* Right: Calculator */}
          <Reveal direction="right" delay={100} className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 border border-red-100 bg-red-50/80 backdrop-blur-md rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold text-solarRed shadow-sm mb-4">
                <span className="w-2 h-2 rounded-full bg-solarRed animate-pulse"></span>
                <span>Instant Estimate</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Advanced Customized Solar Systems <span className="text-solarRed">for Every Need</span>
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Move the slider to match your average monthly electricity bill and get an instant idea of the system size you'll need.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Monthly Electricity Bill</label>
                <span className="text-sm font-black text-slate-900">PKR {monthlyBill.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="10000"
                max="150000"
                step="5000"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full accent-solarRed cursor-pointer"
              />

              <div className="bg-solarRed rounded-2xl p-6 flex items-center justify-between shadow-lg shadow-solarRed/25">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <IconCalculator className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white font-semibold text-sm">Estimated System Size</span>
                </div>
                <span className="text-white text-3xl font-black">{estimatedKw} kW</span>
              </div>

              <Link
                to="/pages/booksurvey"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <span>Get an Exact Quote</span>
                <IconArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-[11px] text-slate-500 text-center">
                This is a rough estimate. Final sizing depends on your roof space, appliance load, and usage pattern.
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
