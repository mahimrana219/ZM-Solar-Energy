
import React from 'react';
import { IconShieldCheck, IconMapPin, IconUsers, IconAward, IconCheck } from '@tabler/icons-react';
import aboutImage from '../assets/aboutus.png';
import Reveal from './Reveal';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 px-4 bg-white text-slate-900 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-solarRed/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-red-100 bg-red-50/80 backdrop-blur-md rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold text-solarRed shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-solarRed animate-pulse"></span>
            <span>About ZM Solar Energy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Reliable Solar Power, Built <span className="text-solarRed">on Years of Trust</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Rooted in Hyderabad and proudly powered by our main branch <strong>Faisal Electronics</strong>, we are bringing a revolution to Pakistan's solar industry.
          </p>
        </Reveal>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

          {/* Left Column: Story & Vision */}
          <Reveal direction="left" className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
              Solving Industry Gaps with Expert Engineering & 500+ Successful Installations
            </h3>
            <p className="text-slate-600 leading-relaxed">
              ZM Solar Energy was founded with a clear vision to eliminate the common flaws found in local solar installations—such as poor service, inadequate maintenance, and hidden charges. Backed by the rich legacy and experience of our primary branch, <strong className="text-slate-900">Faisal Electronics</strong>, we have successfully installed <strong className="text-slate-900">over 500 solar systems</strong> across Pakistan.
            </p>
            <p className="text-slate-600 leading-relaxed">
              While we are headquartered in Hyderabad, our expert deployment and installation teams operate nationwide. Additionally, we serve as <strong className="text-slate-900">authorized distributors for Royal products</strong>, reflecting our uncompromising standards for quality and authenticity.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl">
                <IconMapPin className="w-5 h-5 text-solarRed" />
                <span className="text-sm font-semibold text-slate-800">Hyderabad Based</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl">
                <IconShieldCheck className="w-5 h-5 text-solarRed" />
                <span className="text-sm font-semibold text-slate-800">Pan-Pakistan Installation</span>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Key Highlights / Stats Cards */}
          <Reveal direction="right" className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-3xl hover:border-solarRed/30 hover:shadow-lg transition-all duration-300 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-solarRed/10 text-solarRed flex items-center justify-center mb-4">
                <IconUsers className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900 leading-none mb-1">500+</h4>
              <p className="text-sm font-semibold text-slate-800 mb-2">Systems Installed</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Successfully running residential & commercial solar setups across Pakistan.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-3xl hover:border-solarRed/30 hover:shadow-lg transition-all duration-300 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-solarRed/10 text-solarRed flex items-center justify-center mb-4">
                <IconAward className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">Royal Authorized</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Proud authorized distributors of Royal products, ensuring genuine quality.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-3xl hover:border-solarRed/30 hover:shadow-lg transition-all duration-300 shadow-sm sm:col-span-2">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-xl bg-solarRed/10 text-solarRed flex items-center justify-center">
                  <IconCheck className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Backed by Faisal Electronics</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our parent brand Faisal Electronics brings decades of market credibility, ensuring you get 100% original equipment, transparent dealings, and lifelong after-sales maintenance support.
              </p>
            </div>

          </Reveal>

        </div>

        {/* Bottom About Us Showcase Image */}
        <Reveal direction="up" className="w-full flex justify-center mt-4">
          <img
            src={aboutImage}
            alt="ZM Solar Energy Team and Setup"
            className="w-full max-w-5xl h-auto object-contain transition-transform duration-500 hover:scale-[1.01]"
          />
        </Reveal>

      </div>
    </section>
  );
}