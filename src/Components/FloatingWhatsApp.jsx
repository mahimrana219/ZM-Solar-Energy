import React, { useEffect, useState } from 'react';
import { IconBrandWhatsapp } from '@tabler/icons-react';

const WHATSAPP_LINK = 'https://wa.me/message/OUKLMJYTMAZUM1';

const CAPTIONS = [
  "We are here to guide 👋",
  "Just a quick call?",
  "Free solar consultation",
  "Chat with us anytime",
];

export default function FloatingWhatsApp() {
  const [captionIndex, setCaptionIndex] = useState(0);
  const [showCaption, setShowCaption] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCaption(false);
      setTimeout(() => {
        setCaptionIndex((prev) => (prev + 1) % CAPTIONS.length);
        setShowCaption(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[60] flex items-center gap-3">

      {/* Rotating Caption Bubble */}
      <div
        className={`bg-white text-slate-800 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 whitespace-nowrap transition-all duration-300 ${
          showCaption ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        {CAPTIONS[captionIndex]}
      </div>

      {/* Floating Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="relative shrink-0 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg shadow-green-500/40 transition-all duration-300 hover:scale-110"
      >
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
        <IconBrandWhatsapp className="w-7 h-7 relative z-10" />
      </a>

    </div>
  );
}
