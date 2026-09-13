import React, { useState } from 'react';
import { IconPlayerPlay, IconX, IconStar } from '@tabler/icons-react';

export default function Reviews() {
  const [activeVideo, setActiveVideo] = useState(null);

  const reviewsData = [
    { id: 1, url: "https://res.cloudinary.com/kna0oakm/video/upload/v1789260462/Review1.mp4", client: "Client Review 1" },
    { id: 2, url: "https://res.cloudinary.com/kna0oakm/video/upload/v1789260691/Review2.mp4", client: "Client Review 2" },
    { id: 3, url: "https://res.cloudinary.com/kna0oakm/video/upload/v1789260714/Review3.mp4", client: "Client Review 3" },
    { id: 4, url: "https://res.cloudinary.com/kna0oakm/video/upload/v1789260754/Review4.mp4", client: "Client Review 4" },
    { id: 5, url: "https://res.cloudinary.com/kna0oakm/video/upload/v1789260991/Review5.mp4", client: "Client Review 5" },
    { id: 6, url: "https://res.cloudinary.com/kna0oakm/video/upload/v1789260987/Review6.mp4", client: "Client Review 6" },
    { id: 7, url: "https://res.cloudinary.com/kna0oakm/video/upload/v1789261046/Review7.mp4", client: "Client Review 7" },
    { id: 8, url: "https://res.cloudinary.com/kna0oakm/video/upload/v1789261166/Review8.mp4", client: "Client Review 8" },
    { id: 9, url: "https://res.cloudinary.com/kna0oakm/video/upload/v1789261258/Review9.mp4", client: "Client Review 9" },
    { id: 10, url: "https://res.cloudinary.com/kna0oakm/video/upload/v1789261281/Review10.mp4", client: "Client Review 10" },
    { id: 11, url: "https://res.cloudinary.com/kna0oakm/video/upload/v1789261461/Review11.mp4", client: "Client Review 11" },
  ];

  // Double the array for seamless infinite marquee loop effect
  const marqueeVideos = [...reviewsData, ...reviewsData];

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-28 pb-20 overflow-hidden">
      
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-16">
        <div className="inline-flex items-center gap-2 border border-red-100 bg-red-50/80 backdrop-blur-md rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold text-solarRed shadow-sm mb-4">
          <span className="w-2 h-2 rounded-full bg-solarRed animate-pulse"></span>
          <span>Customer Testimonials</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
          What Our Clients <span className="text-solarRed">Say About Us</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Watch real experiences and success stories shared by homeowners and businesses who switched to ZM Solar Energy.
        </p>
      </div>

      {/* Infinite Animated Marquee Slider */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Gradient Fades for Smooth Edges */}
        <div className="absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex gap-6 animate-marquee w-max hover:[animation-play-state:paused]">
          {marqueeVideos.map((rev, index) => (
            <div
              key={`${rev.id}-${index}`}
              onClick={() => setActiveVideo(rev.url)}
              className="relative flex-shrink-0 w-64 sm:w-72 h-[400px] rounded-3xl overflow-hidden cursor-pointer group shadow-lg border border-slate-200/80 bg-slate-950 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-solarRed"
            >
              {/* Background Video (Muted & Looping) */}
              <video
                src={rev.url}
                muted
                loop
                autoPlay
                playsInline
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-between p-5">
                
                {/* Top Badge */}
                <div className="flex justify-between items-center">
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Video Review
                  </span>
                  <div className="w-8 h-8 rounded-full bg-solarRed text-white flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform">
                    <IconPlayerPlay className="w-4 h-4 fill-white" />
                  </div>
                </div>

                {/* Bottom Details */}
                <div>
                  <div className="flex gap-1 text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <IconStar key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <h3 className="text-white font-bold text-base">{rev.client}</h3>
                  <p className="text-xs text-slate-300 mt-0.5">Click to view full video</p>
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
          <div className="relative max-w-md w-full h-[80vh] rounded-3xl overflow-hidden shadow-2xl bg-black border border-slate-800 flex items-center justify-center">
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

      {/* Custom Tailwind CSS Animation for Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 45s linear infinite;
        }
      `}</style>

    </div>
  );
}