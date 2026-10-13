import React from 'react';
import { Link } from 'react-router-dom';
import { IconMapPin, IconArrowRight } from '@tabler/icons-react';
import Reveal from './Reveal';

import pro1 from '../assets/pro1.jpeg';
import pro3 from '../assets/pro3.jpeg';
import pro8 from '../assets/pro8.jpeg';
import pro16 from '../assets/pro16.jpeg';
import pro17 from '../assets/pro17.jpeg';
import pro24 from '../assets/pro24.jpeg';

const FEATURED_PROJECTS = [
  { id: 1, title: '8kW Residential Hybrid Solar System', location: 'Hyderabad', capacity: '8 kW', img: pro1 },
  { id: 16, title: '20kW Rooftop Solar Array Installation', location: 'Hyderabad', capacity: '20 kW', img: pro16 },
  { id: 17, title: '6kW Residential System – 12 Jinko Panels', location: 'Qasimabad, Hyderabad', capacity: '6 kW', img: pro17 },
  { id: 3, title: '20kW Three-Phase Hybrid Solar System', location: 'Hyderabad', capacity: '20 kW', img: pro3 },
  { id: 8, title: '6.6kW Residential Hybrid Solar System', location: 'Hyderabad', capacity: '6.6 kW', img: pro8 },
  { id: 24, title: '7kW Off-Grid Solar Inverter System', location: 'Hyderabad', capacity: '7 kW', img: pro24 },
];

export default function ProjectsShowcase() {
  return (
    <section className="py-24 px-4 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">

        <Reveal direction="up" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 border border-red-100 bg-red-50/80 backdrop-blur-md rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold text-solarRed shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-solarRed animate-pulse"></span>
            <span>Our Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Successful <span className="text-solarRed">Solar Projects</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A glimpse of our real, completed residential and commercial solar installations across Pakistan.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {FEATURED_PROJECTS.map((project, index) => (
            <Reveal
              key={project.id}
              direction="up"
              delay={(index % 3) * 100}
              className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:border-solarRed/50 transition-all group"
            >
              <div className="relative h-56 overflow-hidden bg-slate-200">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-solarRed text-white px-3 py-1 rounded-full text-xs font-black">
                  {project.capacity}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-1">
                  <IconMapPin className="w-4 h-4 text-solarRed" />
                  <span>{project.location}, Pakistan</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-solarRed transition-colors">
                  {project.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" className="flex justify-center">
          <Link
            to="/pages/projects"
            className="inline-flex items-center gap-2 bg-solarRed hover:bg-red-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-solarRed/25 transition-all group"
          >
            <span>View All Projects</span>
            <IconArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>

      </div>
    </section>
  );
}
