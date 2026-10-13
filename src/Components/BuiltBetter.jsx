import React from 'react';
import { IconSolarPanel, IconBattery4, IconDeviceDesktopAnalytics, IconHeadset } from '@tabler/icons-react';
import Reveal from './Reveal';

const FEATURES = [
  {
    icon: IconSolarPanel,
    title: 'Genuine Tier-1 Panels',
    desc: 'Every panel we install is certified, high-efficiency Tier-1 equipment — never substandard or unbranded stock.',
  },
  {
    icon: IconBattery4,
    title: 'Lithium-Ion Batteries',
    desc: 'Long-cycle lithium battery banks for reliable backup power during load shedding, without the maintenance hassle.',
  },
  {
    icon: IconDeviceDesktopAnalytics,
    title: 'Smart Hybrid Inverters',
    desc: 'Hybrid inverters with intelligent load management, real-time monitoring, and app-based control.',
  },
  {
    icon: IconHeadset,
    title: 'Unmatched Customer Support',
    desc: 'Dedicated after-sales service and maintenance support — we stay with you long after installation.',
  },
];

export default function BuiltBetter() {
  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">

        <Reveal direction="up" className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Built Different. <span className="text-solarRed">Built Better.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Four reasons homeowners and businesses across Pakistan trust ZM Solar Energy with their power.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal
                key={index}
                direction="up"
                delay={index * 100}
                className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 text-center shadow-sm hover:border-solarRed hover:bg-solarRed transition-all group duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-solarRed/10 text-solarRed flex items-center justify-center mx-auto mb-5 group-hover:bg-white group-hover:text-solarRed transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-white transition-colors mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 group-hover:text-white/90 transition-colors leading-relaxed">
                  {feature.desc}
                </p>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
