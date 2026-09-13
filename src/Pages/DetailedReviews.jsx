import React, { useState } from 'react';
import { IconPlayerPlay, IconX, IconStar } from '@tabler/icons-react';

export default function DetailedReviews() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [filter, setFilter] = useState('all');

  const reviewsData = [
    { id: 1, url: "https://res.cloudinary.com/kna0oakm/video/upload/v1789260462/Review1.mp4", client: "Muhammad Ali", location: "Hyderabad", category: "residential", feedback: "Amazing installation speed and expert net metering support!" },
    { id: 2, url: "https://res.cloudinary.com/kna0oakm/video/upload/v1789260691/Review2.mp4", client: "Ahmed Raza", location: "Latifabad", category: "residential", feedback: "My electricity bills dropped significantly after switching to ZM Solar." },
    { id: 3, url: "https://res.cloudinary.com/kna0oakm/video/upload/v1789260714/Review3.mp4", client: "Kamran Akmal", location: "Qasimabad", category: "commercial", feedback: "Top-tier hybrid inverters and professional technical team." },
    { id: 4, url: "https://res.cloudinary.com/kna0oakm/video/upload/v1789260754/Review4.mp4", client: "Dr. Farhan", location: "Hyderabad", category: "residential", feedback: "Very reliable 24/7 monitoring app and great customer service." },
    { id: 5, url: "https://res.cloudinary.com/kna0oakm/video/upload/v1789260991/Review5.mp4", client: "Shahid Afridi", location: "Hyderabad", category: "commercial", feedback: "Best decision for our warehouse power management." },
    { id: 6, url: "https://res.cloudinary.com/kna0oakm/video/upload/v1789260987/Review6.mp4", client: "Zainab Bibi", location: "Latifabad", category: "residential", feedback: "Clean panels installation and hassle-free WAPDA paperwork." },
    { id: 7, url: "https://res.cloudinary.com/kna0oakm/video/upload/v1789261046/Review7.mp4", client: "Tariq Jamil", location: "Qasimabad", category: "residential", feedback: "Faisal Electronics legacy really shows in their quality and trust." },
    { id: 8, url: "https://res.cloudinary.com/kna0oakm/video/upload/v1789261166/Review8.mp4", client: "Noman Ali", location: "Hyderabad", category: "commercial", feedback: "Zero downtime since setup. Highly recommended team!" },
    { id: 9, url: "https://res.cloudinary.com/kna0oakm/video/upload/v1789261258/Review9.mp4", client: "Bilal Ahmed", location: "Hyderabad", category: "residential", feedback: "Transparent pricing with no hidden costs at all." },
    { id: 10, url: "https://res.cloudinary.com/kna0oakm/video/upload/v1789261281/Review10.mp4", client: "Usman Ghani", location: "Latifabad", category: "commercial", feedback: "Complete load assessment saved us from buying oversized equipment." },
    { id: 11, url: "https://res.cloudinary.com/kna0oakm/video/upload/v1789261461/Review11.mp4", client: "Imran Khan", location: "Qasimabad", category: "residential", feedback: "Outstanding maintenance service and prompt response." },
  ];

  // Filter logic
  const filteredReviews = filter === 'all' 
    ? reviewsData 
    : reviewsData.filter(item => item.category === filter);

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-28 pb-20">
      
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <div className="inline-flex items-center gap-2 border border-red-100 bg-red-50/80 backdrop-blur-md rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold text-solarRed shadow-sm mb-4">
          <span className="w-2 h-2 rounded-full bg-solarRed animate-pulse"></span>
          <span>Verified Client Feedback</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
          Customer Video <span className="text-solarRed">Testimonials</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Explore all real video reviews from our valued residential and commercial clients across Hyderabad. Click any video to play with sound.
        </p>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'residential', label: 'Residential Homes' },
            { id: 'commercial', label: 'Commercial & Industrial' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                filter === tab.id
                  ? 'bg-solarRed text-white shadow-lg shadow-solarRed/30 scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Full Grid Layout Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              onClick={() => setActiveVideo(rev.url)}
              className="relative h-[440px] rounded-3xl overflow-hidden cursor-pointer group shadow-lg border border-slate-200/80 bg-slate-950 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-solarRed flex flex-col justify-between"
            >
              {/* Background Video (Muted & Looping preview) */}
              <video
                src={rev.url}
                muted
                loop
                autoPlay
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-95 transition-opacity duration-300"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-between p-5">
                
                {/* Top Badge */}
                <div className="flex justify-between items-center">
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
                    {rev.category}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-solarRed text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <IconPlayerPlay className="w-4 h-4 fill-white ml-0.5" />
                  </div>
                </div>

                {/* Bottom Details & Feedback Quote */}
                <div className="space-y-2.5 bg-slate-900/70 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <IconStar key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-200 italic line-clamp-2">
                    "{rev.feedback}"
                  </p>
                  <div className="flex justify-between items-center pt-2 border-t border-white/10">
                    <div>
                      <h4 className="text-white font-bold text-xs">{rev.client}</h4>
                      <span className="text-[10px] text-slate-400">{rev.location}</span>
                    </div>
                    <span className="text-[9px] text-solarRed font-bold bg-solarRed/10 px-2 py-0.5 rounded">Verified</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Video Modal Popup */}
      {activeVideo && (
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-2xl z-50 flex items-center justify-center p-4">
          
          {/* Close Button */}
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 rounded-full bg-white/10 hover:bg-solarRed text-white flex items-center justify-center transition-colors z-50 focus:outline-none shadow-xl"
            aria-label="Close modal"
          >
            <IconX className="w-7 h-7" />
          </button>

          {/* Modal Content Box */}
          <div className="relative max-w-md w-full h-[85vh] rounded-3xl overflow-hidden shadow-2xl bg-black border border-slate-800 flex items-center justify-center">
            <video
              src={activeVideo}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            />
          </div>

        </div>
      )}

    </div>
  );
}