import React from 'react';
import { Link } from 'react-router-dom';
import { 
  IconShieldCheck, 
  IconBolt, 
  IconTools, 
  IconHeadset, 
  IconSunHigh, 
  IconCurrencyDollar, 
  IconArrowRight, 
  IconCheck 
} from '@tabler/icons-react';

export default function WhyUs() {
  const advantages = [
    {
      title: "Tier-1 Certified Equipment",
      description: "We use top-tier solar panels, hybrid inverters, and durable mounting structures engineered for maximum energy yields.",
      icon: <IconSunHigh className="w-6 h-6 text-solarRed group-hover:text-white transition-colors duration-300" />
    },
    {
      title: "Expert Net Metering",
      description: "Complete legal, documentation, and technical liaison with WAPDA to ensure seamless grid-tie and bidirectional metering setup.",
      icon: <IconBolt className="w-6 h-6 text-solarRed group-hover:text-white transition-colors duration-300" />
    },
    {
      title: "24/7 Monitoring & Support",
      description: "Real-time generation tracking through smart mobile apps paired with rapid on-call troubleshooting and technical assistance.",
      icon: <IconHeadset className="w-6 h-6 text-solarRed group-hover:text-white transition-colors duration-300" />
    },
    {
      title: "Preventive Maintenance",
      description: "Scheduled panel cleaning, inverter diagnostics, and health check-ups to protect your investment for decades to come.",
      icon: <IconTools className="w-6 h-6 text-solarRed group-hover:text-white transition-colors duration-300" />
    },
    {
      title: "Transparent Pricing",
      description: "No hidden costs. Clear energy load assessments, upfront equipment costs, and complete subsidy/financing guidance.",
      icon: <IconCurrencyDollar className="w-6 h-6 text-solarRed group-hover:text-white transition-colors duration-300" />
    },
    {
      title: "Solid Warranties & Legacy",
      description: "Backed by the trusted market legacy of Faisal Electronics in Hyderabad, offering up to 25 years of performance guarantees.",
      icon: <IconShieldCheck className="w-6 h-6 text-solarRed group-hover:text-white transition-colors duration-300" />
    }
  ];

  return (
    <div className="bg-white text-slate-800 min-h-screen pt-28 pb-20">
      
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-16">
        <div className="inline-flex items-center gap-2 border border-red-100 bg-red-50/80 backdrop-blur-md rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold text-solarRed shadow-sm mb-4">
          <span className="w-2 h-2 rounded-full bg-solarRed animate-pulse"></span>
          <span>The ZM Advantage</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
          Why Choose <span className="text-solarRed">ZM Solar Energy?</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          We don't just install solar panels; we engineer independent power ecosystems designed for absolute reliability and maximum savings.
        </p>
      </div>

      {/* Cards Grid System */}
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, index) => (
            <div 
              key={index} 
              className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl shadow-sm hover:border-solarRed hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-solarRed/10 flex items-center justify-center mb-6 group-hover:bg-solarRed transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-solarRed transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-slate-700 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-solarRed"></span>
                <span>ZM Standard Guaranteed</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Highlights Section */}
      <div className="max-w-6xl mx-auto px-4 mb-20 bg-slate-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-solarRed/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-solarRed">Engineering Excellence</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Committed to Long-Term Performance & Peace of Mind</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              From initial site audit and load calculation to post-installation health diagnostics, our technical teams ensure your setup operates at peak efficiency year-round.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-3">
            {[
              "Rapid Response Maintenance Teams",
              "Performance Audits & Voltage Checks",
              "Complete Inverter & Panel Warranty Management"
            ].map((check, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-slate-900/80 border border-slate-800 p-3.5 rounded-2xl text-sm font-medium text-slate-200">
                <div className="w-5 h-5 rounded-full bg-solarRed/20 text-solarRed flex items-center justify-center flex-shrink-0">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>{check}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-50 border border-slate-200/80 p-8 rounded-3xl w-full justify-between">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-slate-900">Have questions about your energy load?</h3>
            <p className="text-slate-600 text-sm mt-1">Speak with our solar consultants today for a free custom proposal.</p>
          </div>
          <Link 
            to="/pages/contact"
            className="bg-solarRed hover:bg-red-700 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-solarRed/30 transition-all inline-flex items-center gap-2 group flex-shrink-0"
          >
            <span>Get Free Proposal</span>
            <IconArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

    </div>
  );
}