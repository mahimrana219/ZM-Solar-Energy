import React from 'react';
import { IconShieldCheck, IconUsers, IconBolt, IconCheck, IconArrowRight, IconAward, IconSunHigh } from '@tabler/icons-react';

// Importing local images from assets folder
import about1 from '../assets/ABOUT.jpeg';
import about2 from '../assets/about2.jpeg';
import about3 from '../assets/about3.jpeg';
import about4 from '../assets/about4.jpeg';
import about5 from '../assets/about5.jpeg';

export default function About() {
  const stats = [
    { label: "Successful Installations", value: "500+", icon: <IconSunHigh className="w-6 h-6 text-solarRed" /> },
    { label: "Happy Customers", value: "450+", icon: <IconUsers className="w-6 h-6 text-solarRed" /> },
    { label: "Years of Trust & Legacy", value: "10+", icon: <IconAward className="w-6 h-6 text-solarRed" /> },
    { label: "Certified Technicians", value: "15+", icon: <IconShieldCheck className="w-6 h-6 text-solarRed" /> }
  ];

  const values = [
    {
      title: "Uncompromising Quality",
      description: "We use tier-1 solar panels, premium hybrid inverters, and durable mounting structures designed to withstand extreme weather conditions.",
      icon: <IconShieldCheck className="w-6 h-6" />
    },
    {
      title: "Client-Centric Transparency",
      description: "From honest energy assessments to clear cost projections and subsidy guidance, we keep you informed at every single step.",
      icon: <IconUsers className="w-6 h-6" />
    },
    {
      title: "Reliable After-Sales Support",
      description: "Our commitment doesn't end at installation. We provide continuous maintenance, performance monitoring, and rapid support.",
      icon: <IconBolt className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-white text-slate-800 min-h-screen pt-28 pb-20">
      
      {/* Hero Header */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-16">
        <div className="inline-flex items-center gap-2 border border-red-100 bg-red-50/80 backdrop-blur-md rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold text-solarRed shadow-sm mb-4">
          <span className="w-2 h-2 rounded-full bg-solarRed animate-pulse"></span>
          <span>Our Story & Legacy</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900">
          Powering Pakistan’s Future with <span className="text-solarRed">ZM Solar</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Rooted deeply in Hyderabad and backed by the trusted legacy of Faisal Electronics, we are committed to delivering clean, independent, and cost-effective energy solutions nationwide.
        </p>
      </div>

      {/* Image & Overview Section (ABOUT.jpeg - Clean Layout without background wrapper) */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Rooted in Hyderabad, Delivering Pan-Pakistan Excellence
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            ZM Solar Energy was founded with a clear mission: to combat rising electricity tariffs by making solar energy accessible, efficient, and reliable for residential, commercial, and industrial clients. 
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            Drawing strength from our association with <strong className="text-slate-900">Faisal Electronics</strong>, we bring decades of market experience, technical expertise, and absolute reliability to every project we undertake. With over 500+ successful installations, our track record speaks for itself.
          </p>

          <div className="space-y-3 pt-2">
            {[
              "Authorized Tier-1 Solar Equipment Providers",
              "Expert Net Metering & Grid-Tie Setup Assistance",
              "Customized Engineering Solutions for Every Roof Type"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="w-5 h-5 rounded-full bg-solarRed/10 text-solarRed flex items-center justify-center flex-shrink-0">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 group">
            <img 
              src={about1} 
              alt="ZM Solar Installation Work" 
              className="w-full h-[420px] object-contain group-hover:scale-105 transition-transform duration-700 bg-slate-50"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-6 flex items-end">
              <div className="text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-solarRed block mb-1">Elite Engineering</span>
                <p className="text-lg font-bold">Precision installation for maximum power output.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Gallery Showcase Grid */}
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Our Work in Action</h2>
          <p className="text-slate-600 text-sm sm:text-base">A glimpse into our field operations, quality equipment, and expert teams.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: about2 },
            { img: about3 },
            { img: about4 },
            { img: about5 }
          ].map((item, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200/80 group h-64 bg-slate-50 flex items-center justify-center">
              <img 
                src={item.img} 
                alt="Gallery preview" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Clean Stats Section */}
      <div className="max-w-6xl mx-auto px-4 mb-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl text-center shadow-sm hover:border-solarRed hover:bg-solarRed transition-all group duration-300">
              <div className="w-12 h-12 rounded-2xl bg-solarRed/10 text-solarRed flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:text-solarRed transition-colors">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 group-hover:text-white transition-colors mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-slate-600 font-semibold uppercase tracking-wider group-hover:text-white/90 transition-colors">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-6xl mx-auto px-4 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
          <p className="text-slate-600 text-sm sm:text-base">What drives us to deliver excellence on every single rooftop.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, index) => (
            <div key={index} className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl shadow-sm hover:border-solarRed/40 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-solarRed/10 text-solarRed flex items-center justify-center mb-6 group-hover:bg-solarRed group-hover:text-white transition-colors">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Clean Dark CTA Section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-950 text-white p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-solarRed/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Switch to Autonomous Clean Energy?</h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Join hundreds of satisfied homeowners and business owners across Pakistan saving thousands on utility bills every month.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <a 
              href="/pages/booksurvey"
              className="bg-solarRed hover:bg-solarRedDark text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-solarRed/30 transition-all inline-flex items-center gap-2 group"
            >
              <span>Get Free Proposal</span>
              <IconArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}