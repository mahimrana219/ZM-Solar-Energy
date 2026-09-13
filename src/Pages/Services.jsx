import React from 'react';
import { 
  IconSunHigh, 
  IconBatteryCharging, 
  IconTools, 
  IconFileText, 
  IconMapPin, 
  IconShieldCheck, 
  IconArrowRight, 
  IconCheck, 
  IconBolt 
} from '@tabler/icons-react';

export default function ServicesPage() {
  const servicesList = [
    {
      id: "residential-commercial",
      title: "Residential & Commercial Solar Systems",
      tagline: "Turnkey On-Grid, Off-Grid & Hybrid Solar Solutions",
      description: "Custom-engineered solar power systems designed specifically for homes, plazas, and industrial units. We utilize tier-1 solar panels and top-grade inverters to maximize electricity generation and drastically cut down monthly utility bills.",
      icon: <IconSunHigh className="w-7 h-7" />,
      features: [
        "Tier-1 Mono PERC & N-Type TopCon Panels",
        "Pure Sine Wave Hybrid & On-Grid Inverters",
        "Heavy-duty galvanized mounting structures (wind resistant)",
        "Comprehensive performance and generation warranty"
      ],
      badge: "Most Popular"
    },
    {
      id: "battery-storage",
      title: "Hybrid Battery & Storage Upgrades",
      tagline: "Uninterrupted Power Backup Solutions",
      description: "Say goodbye to load shedding. We integrate advanced Lithium-ion and tubular battery storage systems with your existing or new solar setup to ensure seamless power backup during grid outages.",
      icon: <IconBatteryCharging className="w-7 h-7" />,
      features: [
        "Long-lasting Lithium Iron Phosphate (LiFePO4) batteries",
        "Smart BMS (Battery Management System) protection",
        "Instant automatic switchover during power failures",
        "Space-saving, sleek, and safe rack designs"
      ],
      badge: "High Reliability"
    },
    {
      id: "site-survey",
      title: "Professional Technical Site Survey",
      tagline: "Accurate Load Analysis & Shadow Assessment",
      description: "Before installation, our expert engineers conduct a detailed on-site assessment of your roof orientation, shadow patterns, and electrical load capacity to design the most cost-effective system.",
      icon: <IconMapPin className="w-7 h-7" />,
      features: [
        "Complete load calculation and appliance audit",
        "Roof shadow analysis for optimal panel placement",
        "Voltage stability and wiring inspection",
        "100% Free of cost for initial consultation"
      ],
      badge: "Free Assessment"
    },
    {
      id: "net-metering",
      title: "Net Metering Legal & Documentation",
      tagline: "Sell Excess Power Back to HESCO / DISCOs",
      description: "We handle the entire bureaucratic process from documentation and application submission to bi-directional meter installation, allowing you to earn credits for extra units produced.",
      icon: <IconFileText className="w-7 h-7" />,
      features: [
        "End-to-end liaison with utility providers (HESCO/KE etc.)",
        "License processing and official documentation handling",
        "Bi-directional net meter installation assistance",
        "Complete compliance with government regulations"
      ],
      badge: "Zero Bill Strategy"
    },
    {
      id: "maintenance-cleaning",
      title: "Maintenance & Panel Cleaning",
      tagline: "Ensure Peak Generation All Year Round",
      description: "Dust and pollution can reduce solar panel efficiency by up to 25%. Our professional maintenance team provides scheduled washing, inverter health checks, and system diagnostics.",
      icon: <IconTools className="w-7 h-7" />,
      features: [
        "Specialized chemical-free glass washing solutions",
        "Inverter firmware updates and error log checks",
        "DC/AC breaker and wiring thermal testing",
        "Emergency repair and troubleshooting support"
      ],
      badge: "Lifetime Care"
    }
  ];

  return (
    <div className="bg-white text-slate-800 min-h-screen pt-28 pb-20">
      
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-16">
        <div className="inline-flex items-center gap-2 border border-red-100 bg-red-50/80 backdrop-blur-md rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold text-solarRed shadow-sm mb-4">
          <span className="w-2 h-2 rounded-full bg-solarRed animate-pulse"></span>
          <span>Comprehensive Energy Portfolio</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900">
          Our Professional <span className="text-solarRed">Solar Services</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          From precise site surveys and heavy-duty installations to net metering paperwork and ongoing maintenance, we provide end-to-end clean power solutions across Pakistan.
        </p>
      </div>

      {/* Services Grid / Detailed Cards */}
      <div className="max-w-6xl mx-auto px-4 space-y-12 mb-24">
        {servicesList.map((service, index) => (
          <div 
            key={service.id} 
            className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm hover:border-solarRed/40 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-solarRed/10 text-solarRed flex items-center justify-center flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-solarRed block mb-0.5">{service.badge}</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">{service.title}</h3>
                </div>
              </div>
              <p className="text-slate-900 font-medium text-sm sm:text-base">{service.tagline}</p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{service.description}</p>
            </div>

            {/* Right Features Column */}
            <div className="lg:col-span-5 bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Service Highlights</h4>
              {service.features.map((feat, fIndex) => (
                <div key={fIndex} className="flex items-start gap-3 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-solarRed/10 text-solarRed flex items-center justify-center flex-shrink-0 mt-0.5">
                    <IconCheck className="w-3.5 h-3.5" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
              <div className="pt-3">
                <a 
                  href="/pages/contact" 
                  className="w-full bg-slate-900 hover:bg-solarRed text-white text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 group"
                >
                  <span>Book This Service</span>
                  <IconArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Dark CTA Section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-950 text-white p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
          
          {/* Red Glow Accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-solarRed/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">Not Sure Which System Fits Your Needs?</h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Speak with our senior energy consultants in Hyderabad for a customized requirement analysis and clear cost estimation.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <a 
              href="/pages/booksurvey"
              className="bg-solarRed hover:bg-solarRedDark text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-solarRed/30 transition-all inline-flex items-center gap-2 group"
            >
              <span>Schedule Free Survey</span>
              <IconArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}