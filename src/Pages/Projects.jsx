import React, { useState } from 'react';
import { IconMapPin, IconArrowRight, IconX } from '@tabler/icons-react';

// Importing pro1.jpeg to pro24.jpeg from assets folder using ES modules
import pro1 from '../assets/pro1.jpeg';
import pro2 from '../assets/pro2.jpeg';
import pro3 from '../assets/pro3.jpeg';
import pro4 from '../assets/pro4.jpeg';
import pro5 from '../assets/pro5.jpeg';
import pro6 from '../assets/pro6.jpeg';
import pro7 from '../assets/pro7.jpeg';
import pro8 from '../assets/pro8.jpeg';
import pro9 from '../assets/pro9.jpeg';
import pro10 from '../assets/pro10.jpeg';
import pro11 from '../assets/pro11.jpeg';
import pro12 from '../assets/pro12.jpeg';
import pro13 from '../assets/pro13.jpeg';
import pro14 from '../assets/pro14.jpeg';
import pro15 from '../assets/pro15.jpeg';
import pro16 from '../assets/pro16.jpeg';
import pro17 from '../assets/pro17.jpeg';
import pro18 from '../assets/pro18.jpeg';
import pro19 from '../assets/pro19.jpeg';
import pro20 from '../assets/pro20.jpeg';
import pro21 from '../assets/pro21.jpeg';
import pro22 from '../assets/pro22.jpeg';
import pro23 from '../assets/pro23.jpeg';
import pro24 from '../assets/pro24.jpeg';

const projectImages = {
  1: pro1, 2: pro2, 3: pro3, 4: pro4, 5: pro5, 
  6: pro6, 7: pro7, 8: pro8, 9: pro9, 10: pro10, 
  11: pro11, 12: pro12, 13: pro13, 14: pro14, 15: pro15, 
  16: pro16, 17: pro17, 18: pro18, 19: pro19, 20: pro20, 
  21: pro21, 22: pro22, 23: pro23, 24: pro24, 
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null); // Lightbox State

  const projectsData = [
    { id: 1, title: "15kW Residential Solar System", category: "Residential", location: "Hyderabad", capacity: "15 kW", img: projectImages[1] },
    { id: 2, title: "Commercial Plaza Grid-Tie Setup", category: "Commercial", location: "Karachi", capacity: "50 kW", img: projectImages[2] },
    { id: 3, title: "Hybrid Villa Solar Integration", category: "Residential", location: "Hyderabad", capacity: "20 kW", img: projectImages[3] },
    { id: 4, title: "Industrial Warehouse Rooftop", category: "Industrial", location: "Kotri SITE", capacity: "150 kW", img: projectImages[4] },
    { id: 5, title: "Modern Home Solar & Batteries", category: "Residential", location: "Hyderabad", capacity: "10 kW", img: projectImages[5] },
    { id: 6, title: "Corporate Office Backup System", category: "Commercial", location: "Hyderabad", capacity: "30 kW", img: projectImages[6] },
    { id: 7, title: "Elite Bungalow On-Grid Project", category: "Residential", location: "Jamshoro", capacity: "25 kW", img: projectImages[7] },
    { id: 8, title: "Manufacturing Unit Power Plant", category: "Industrial", location: "Nooriabad", capacity: "200 kW", img: projectImages[8] },
    { id: 9, title: "Dual Inverter Hybrid Setup", category: "Residential", location: "Hyderabad", capacity: "12 kW", img: projectImages[9] },
    { id: 10, title: "Retail Store Solar Optimization", category: "Commercial", location: "Hyderabad", capacity: "40 kW", img: projectImages[10] },
    { id: 11, title: "Farmhouse Autonomous System", category: "Residential", location: "Super Highway", capacity: "30 kW", img: projectImages[11] },
    { id: 12, title: "Commercial Deployment", category: "Industrial", location: "Hyderabad", capacity: "300 kW", img: projectImages[12] },
    { id: 13, title: "Smart Metering Home Project", category: "Residential", location: "Hyderabad", capacity: "10 kW", img: projectImages[13] },
    { id: 14, title: "Shopping Mall Solar Rooftop", category: "Commercial", location: "Hyderabad", capacity: "100 kW", img: projectImages[14] },
    { id: 15, title: "Luxury Apartment Complex Grid", category: "Commercial", location: "Karachi", capacity: "80 kW", img: projectImages[15] },
    { id: 16, title: "High-Efficiency Panel Array", category: "Residential", location: "Hyderabad", capacity: "15 kW", img: projectImages[16] },
    { id: 17, title: "Cold Storage Solar Solution", category: "Industrial", location: "Hyderabad", capacity: "120 kW", img: projectImages[17] },
    { id: 18, title: "Suburban Villa Energy Unit", category: "Residential", location: "Hyderabad", capacity: "18 kW", img: projectImages[18] },
    { id: 19, title: "Educational Institute Rooftop", category: "Commercial", location: "Hyderabad", capacity: "60 kW", img: projectImages[19] },
    { id: 20, title: "Industrial Assembly Plant", category: "Industrial", location: "Kotri", capacity: "250 kW", img: projectImages[20] },
    { id: 21, title: "Independent Residential Unit", category: "Residential", location: "Hyderabad", capacity: "10 kW", img: projectImages[21] },
    { id: 22, title: "Showroom & Service Bay Setup", category: "Commercial", location: "Hyderabad", capacity: "35 kW", img: projectImages[22] },
    { id: 23, title: "Educational Institute Rooftop", category: "Residential", location: "Hyderabad", capacity: "15 kW", img: projectImages[23] },
    { id: 24, title: "Home Rooftop", category: "Residential", location: "Hyderabad", capacity: "10 kW", img: projectImages[24] },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <div className="bg-white text-slate-800 min-h-screen pt-28 pb-20 relative">
      
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-16">
        <div className="inline-flex items-center gap-2 border border-red-100 bg-red-50/80 backdrop-blur-md rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold text-solarRed shadow-sm mb-4">
          <span className="w-2 h-2 rounded-full bg-solarRed animate-pulse"></span>
          <span>Our Portfolio & Track Record</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900">
          Explore Our <span className="text-solarRed">Completed Projects</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Take a look at over 24+ successfully executed residential, commercial, and industrial solar installations powering businesses and homes across Pakistan.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-6xl mx-auto px-4 mb-12 flex flex-wrap items-center justify-center gap-3">
        {['All', 'Residential', 'Commercial', 'Industrial'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-sm ${
              activeFilter === filter
                ? 'bg-solarRed text-white shadow-solarRed/20'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            onClick={() => setSelectedImage(project)}
            className="bg-slate-50 border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:border-solarRed/50 transition-all group flex flex-col justify-between cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden bg-slate-200">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {project.category}
              </div>
              <div className="absolute top-4 right-4 bg-solarRed text-white px-3 py-1 rounded-full text-xs font-black">
                {project.capacity}
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-1">
                  <IconMapPin className="w-4 h-4 text-solarRed" />
                  <span>{project.location}, Pakistan</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-solarRed transition-colors">
                  {project.title}
                </h3>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">ZM Solar Project #{project.id}</span>
                <span className="text-xs font-bold text-solarRed flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>View Photo</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Clean Full-Image Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-slate-800/80 hover:bg-solarRed text-white flex items-center justify-center transition-colors shadow-xl border border-slate-700"
            aria-label="Close modal"
          >
            <IconX className="w-6 h-6" />
          </button>

          {/* Full Image Container */}
          <div 
            className="relative max-w-5xl w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex items-center justify-center bg-black/40">
              <img 
                src={selectedImage.img} 
                alt={selectedImage.title} 
                className="max-h-[75vh] w-auto object-contain rounded-2xl"
              />
            </div>

            {/* Bottom Caption Bar */}
            <div className="mt-4 w-full max-w-3xl bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-2xl p-4 sm:px-6 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white text-center sm:text-left">
                  {selectedImage.title}
                </h3>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-slate-400 mt-1">
                  <IconMapPin className="w-3.5 h-3.5 text-solarRed" />
                  <span>{selectedImage.location}, Pakistan</span>
                  <span>•</span>
                  <span>Project #{selectedImage.id}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-solarRed/20 text-solarRed rounded-full border border-solarRed/30">
                  {selectedImage.category}
                </span>
                <span className="text-xs font-black text-slate-200 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                  {selectedImage.capacity}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Dark CTA Section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-950 text-white p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-solarRed/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">Want Your Property Featured Next?</h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Get in touch with our experts today for a customized solar proposal and high-efficiency installation on your roof.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <a 
              href="#contact"
              className="bg-solarRed hover:bg-solarRedDark text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-solarRed/30 transition-all inline-flex items-center gap-2 group"
            >
              <span>Book Your Installation</span>
              <IconArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}