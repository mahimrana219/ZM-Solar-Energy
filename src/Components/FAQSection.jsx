import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconChevronDown, IconArrowRight } from '@tabler/icons-react';
import Reveal from './Reveal';

const FAQS = [
  {
    q: 'What is the cost of a solar system in Pakistan?',
    a: 'Costs depend on your monthly electricity bill and roof space — most homes need a 5kW to 15kW system. Use our calculator above or request a free site survey for an exact quote.',
  },
  {
    q: 'How long does installation take?',
    a: 'A typical residential system is installed within 3-5 working days after the site survey and material arrival. Commercial systems may take longer depending on scale.',
  },
  {
    q: 'Do you provide net metering assistance?',
    a: "Yes, we handle the complete net metering documentation and WAPDA/DISCO coordination so you can sell excess electricity back to the grid.",
  },
  {
    q: 'What warranty do your products carry?',
    a: 'Solar panels come with up to 25 years performance warranty, and inverters/batteries carry manufacturer warranties of up to 10 years, depending on the brand.',
  },
  {
    q: 'Do you offer installment or EMI plans?',
    a: 'Yes, we offer flexible monthly installment plans to make solar accessible for every budget — ask our team for current EMI options.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 px-4 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">

        <Reveal direction="up" className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 border border-red-100 bg-red-50/80 backdrop-blur-md rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold text-solarRed shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-solarRed animate-pulse"></span>
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Questions? <span className="text-solarRed">We've Got Answers.</span>
          </h2>
        </Reveal>

        <Reveal direction="up" delay={100} className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base">{faq.q}</span>
                  <IconChevronDown
                    className={`w-5 h-5 text-solarRed flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </Reveal>

        <Reveal direction="up" delay={200} className="flex justify-center mt-10">
          <Link
            to="/pages/booksurvey"
            className="inline-flex items-center gap-2 bg-solarRed hover:bg-red-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-solarRed/25 transition-all group"
          >
            <span>Request a Quote</span>
            <IconArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>

      </div>
    </section>
  );
}
