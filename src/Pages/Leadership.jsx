import React from 'react';
import { IconShieldCheck, IconAward, IconCheck } from '@tabler/icons-react';
import ceo from '../assets/CEO.png'


export default function Leadership() {
  return (
    <section className="bg-slate-50 text-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-red-100 bg-red-50/85 backdrop-blur-md rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold text-solarRed shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-solarRed animate-pulse"></span>
            <span>Visionary Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
            Meet Our <span className="text-solarRed">CEO & Founder</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Driving innovation, trust, and excellence in sustainable solar energy solutions.
          </p>
        </div>

        {/* CEO Profile Card Layout */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* CEO Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-2 bg-solarRed/15 rounded-3xl blur-xl pointer-events-none"></div>
              <div className="relative h-96 sm:h-[420px] rounded-2xl overflow-hidden bg-slate-900 shadow-md">
                <img
                  src={ceo}
                  alt="Faisal Qureshi - CEO & Founder"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-solarRed bg-white/90 px-3 py-1 rounded-full shadow-sm">
                    Founder & CEO
                  </span>
                  <h3 className="text-3xl font-black mt-2">Faisal Qureshi</h3>
                  <p className="text-xs text-slate-300 mt-1">Pioneering ZM Solar Energy</p>
                </div>
              </div>
            </div>

            {/* CEO Details & Succession Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Building a Legacy of Clean & Reliable Power
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Under the dynamic leadership of <strong className="text-slate-900">Faisal Qureshi</strong>, ZM Solar has established a benchmark of unmatched quality and customer trust. His strategic vision focuses on making advanced renewable energy accessible, efficient, and pocket-friendly for homes and industries alike.
                </p>
              </div>

              {/* Next-Gen Operations Box (Huzaifa Faisal) */}
              <div className="bg-slate-950 text-white rounded-2xl p-5 sm:p-6 space-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-solarRed/20 rounded-full blur-xl pointer-events-none"></div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-solarRed">Operations & Execution</span>
                    <h4 className="text-lg font-bold text-white">Huzaifa Faisal</h4>
                  </div>
                  <span className="text-xs font-semibold bg-slate-800 text-slate-300 px-2.5 py-1 rounded-lg">
                    Managing Director
                  </span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Carrying forward the brand's core values, <strong className="text-white">Huzaifa Faisal</strong> oversees day-to-day operations and project deployments. His hands-on supervision ensures seamless execution, strict quality checks, and top-tier technical standards for every client installation.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-solarRed flex items-center justify-center flex-shrink-0">
                    <IconCheck className="w-3 h-3" />
                  </div>
                  <span>Decades of Business Trust</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-solarRed flex items-center justify-center flex-shrink-0">
                    <IconCheck className="w-3 h-3" />
                  </div>
                  <span>Seamless Site Execution</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}