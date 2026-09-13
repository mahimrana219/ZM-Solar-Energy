import React from 'react';
import { 
  IconHome, 
  IconBuildingSkyscraper, 
  IconBolt, 
  IconBatteryCharging, 
  IconTools, 
  IconChartArcs, 
  IconArrowRight 
} from '@tabler/icons-react';
import Reveal from './Reveal';

export default function Services() {
  const servicesList = [
    {
      title: "Residential Solar",
      description: "Customized solar solutions designed for homes to slash electricity bills and ensure uninterrupted power supply.",
      icon: <IconHome className="w-7 h-7" />,
      badge: "Most Popular"
    },
    {
      title: "Commercial & Industrial",
      description: "High-capacity heavy-duty solar systems tailored for factories, offices, and commercial plazas to reduce operational costs.",
      icon: <IconBuildingSkyscraper className="w-7 h-7" />,
      badge: "High ROI"
    },
    {
      title: "Net Metering Service",
      description: "Complete government documentation and bi-directional meter approval so you can sell extra electricity back to the grid.",
      icon: <IconBolt className="w-7 h-7" />,
      badge: "Govt. Approved"
    },
    {
      title: "Inverter & Battery Setup",
      description: "Installation of world-class hybrid inverters and lithium/tubular battery banks for reliable backup during load shedding.",
      icon: <IconBatteryCharging className="w-7 h-7" />,
      badge: "Advanced Tech"
    },
    {
      title: "System Maintenance",
      description: "Routine panel cleaning, health audits, and performance optimization to guarantee peak energy generation all year round.",
      icon: <IconTools className="w-7 h-7" />,
      badge: "24/7 Support"
    },
    {
      title: "Free Energy Consultation",
      description: "Expert site surveys, load calculations, and customized cost-benefit analysis tailored specifically to your property.",
      icon: <IconChartArcs className="w-7 h-7" />,
      badge: "Free of Cost"
    }
  ];

  return (
    <section id="services" className="py-24 px-4 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-red-100 bg-red-50/80 backdrop-blur-md rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold text-solarRed shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-solarRed animate-pulse"></span>
            <span>Our Expert Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Complete Solar Solutions <span className="text-solarRed">for Every Need</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From initial consultation to seamless grid synchronization and long-term care, we handle everything under one roof.
          </p>
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <Reveal
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={(index % 3) * 120}
              className="group bg-white border border-slate-200/80 hover:border-solarRed/40 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-solarRed opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-14 h-14 rounded-2xl bg-solarRed/10 text-solarRed flex items-center justify-center group-hover:bg-solarRed group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-red-50 group-hover:text-solarRed transition-colors">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-solarRed transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-solarRed transition-colors pt-4 border-t border-slate-100"
              >
                <span>Book This Service</span>
                <IconArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}