import React from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight } from '@tabler/icons-react';
import { useReveal } from '../hooks/useReveal';
import Reveal from './Reveal';

const PARAGRAPH =
  "We are ZM Solar Energy. We are based in Hyderabad but deliver quality all over Pakistan. We have 2 branches: first is our mother branch Faisal Electronics, and the second is ZM Solar Energy.";

export default function BlurText() {
  const [ref, isVisible] = useReveal({ threshold: 0.3 });
  const words = PARAGRAPH.split(' ');

  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-8">

        {/* Top Badge */}
        <Reveal direction="up" duration={700}>
          <div className="inline-flex items-center gap-2 border border-red-100 bg-red-50/80 backdrop-blur-md rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold text-solarRed shadow-sm">
            <span className="w-2 h-2 rounded-full bg-solarRed animate-pulse"></span>
            <span>Who We Are</span>
          </div>
        </Reveal>

        {/* Scroll-Triggered Blur-to-Focus Paragraph */}
        <p ref={ref} className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
          {words.map((word, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-700 ease-out ${
                isVisible ? 'blur-none opacity-100 translate-y-0' : 'blur-md opacity-0 translate-y-2'
              }`}
              style={{ transitionDelay: `${index * 35}ms` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </p>

        {/* CTA Button */}
        <Reveal direction="up" delay={300} duration={700}>
          <Link
            to="/pages/booksurvey"
            className="inline-flex items-center gap-2 bg-solarRed hover:bg-red-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-solarRed/25 transition duration-300 group"
          >
            <span>Get a Free Quote</span>
            <IconArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>

      </div>
    </section>
  );
}
