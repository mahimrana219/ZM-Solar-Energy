import React from 'react';
import { IconClipboardCheck, IconFileAnalytics, IconTool, IconBolt } from '@tabler/icons-react';
import Reveal from './Reveal';

export default function HowItWorks() {
  const steps = [
    {
      stepNumber: "01",
      title: "Consultation & Site Survey",
      description: "We analyze your energy needs and inspect your location for the best solar setup.",
      icon: <IconClipboardCheck className="w-7 h-7" />
    },
    {
      stepNumber: "02",
      title: "Custom Plan & Proposal",
      description: "Get a tailored solar solution with cost, savings, and subsidy details.",
      icon: <IconFileAnalytics className="w-7 h-7" />
    },
    {
      stepNumber: "03",
      title: "Installation & Setup",
      description: "Our certified technicians install panels, inverters, and batteries with care.",
      icon: <IconTool className="w-7 h-7" />
    },
    {
      stepNumber: "04",
      title: "Power Up & Support",
      description: "Start saving on bills while we provide ongoing maintenance and after-sales service.",
      icon: <IconBolt className="w-7 h-7" />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 bg-white text-slate-900 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-solarRed/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-red-100 bg-red-50/80 backdrop-blur-md rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold text-solarRed shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-solarRed animate-pulse"></span>
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            How It Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Switching to clean, reliable solar energy with ZM Solar Energy is simple, transparent, and hassle-free.
          </p>
        </Reveal>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <Reveal
              key={index}
              direction="up"
              delay={index * 120}
              className="group bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-solarRed/40 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-solarRed opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-14 h-14 rounded-2xl bg-solarRed/10 text-solarRed flex items-center justify-center group-hover:bg-solarRed group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </span>
                  <span className="text-xl font-black text-slate-300 group-hover:text-solarRed/40 transition-colors">
                    {item.stepNumber}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-solarRed transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Step indicator dot */}
              <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-solarRed"></span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Step {item.stepNumber}</span>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}