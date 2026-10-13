import React from 'react';
import { IconSunHigh, IconUsers, IconMapPin, IconHeadset } from '@tabler/icons-react';
import Reveal from './Reveal';

const STATS = [
  { icon: IconSunHigh, value: '500+', label: 'Systems Installed' },
  { icon: IconUsers, value: '450+', label: 'Happy Customers' },
  { icon: IconMapPin, value: 'Pan-Pakistan', label: 'Service Coverage' },
  { icon: IconHeadset, value: '24/7', label: 'Customer Support' },
];

export default function StatsBar() {
  return (
    <section className="bg-slate-950 py-16 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-solarRed/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal direction="up" className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-solarRed/15 text-solarRed flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-2xl sm:text-3xl font-black text-white">{stat.value}</span>
                <span className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">{stat.label}</span>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
