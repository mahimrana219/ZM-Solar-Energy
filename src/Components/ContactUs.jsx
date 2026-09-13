import React, { useState } from 'react';
import { IconMail, IconBrandWhatsapp, IconMapPin, IconSend, IconCheck, IconLoader2 } from '@tabler/icons-react';
import Reveal from './Reveal';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzeblbla';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ fullName: '', phone: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-slate-50 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-solarRed/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-red-100 bg-red-50/80 backdrop-blur-md rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold text-solarRed shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-solarRed animate-pulse"></span>
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Let's Power Your <span className="text-solarRed">Property Today</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Have questions about solar panel installation, net metering, or pricing? Reach out to our expert team for a quick consultation.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Contact Info Cards */}
          <Reveal direction="left" className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Contact Information</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Connect with us directly via email or WhatsApp, or visit our head office in Hyderabad. We provide nationwide service across Pakistan.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email */}
                <a 
                  href="mailto:zmsolarenergy786@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-solarRed/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-solarRed/10 text-solarRed flex items-center justify-center group-hover:bg-solarRed group-hover:text-white transition-colors">
                    <IconMail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Us</span>
                    <p className="text-sm font-bold text-slate-800 group-hover:text-solarRed transition-colors">zmsolarenergy786@gmail.com</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/923000000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-green-500/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <IconBrandWhatsapp className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">WhatsApp Support</span>
                    <p className="text-sm font-bold text-slate-800 group-hover:text-green-600 transition-colors">+92 333 2664144</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <div className="w-12 h-12 rounded-xl bg-solarRed/10 text-solarRed flex items-center justify-center">
                    <IconMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Head Office</span>
                    <p className="text-sm font-bold text-slate-800">Hyderabad, Sindh, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

          </Reveal>

          {/* Right Column: Contact Form */}
          <Reveal direction="right" className="lg:col-span-7 bg-white border border-slate-200/80 p-8 sm:p-10 rounded-3xl shadow-sm relative">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h3>
            <p className="text-slate-600 text-sm mb-8">Fill out the form below and our solar experts will get back to you shortly.</p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl flex items-center gap-4 my-8">
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
                  <IconCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base">Message Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-emerald-700">Thank you for reaching out. We will contact you soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 text-solarRed p-4 rounded-xl text-sm font-medium">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-solarRed transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92 3XX XXXXXXX"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-solarRed transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-solarRed transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Message / Requirements</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your property type and estimated monthly electricity bill..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-solarRed transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-solarRed hover:bg-solarRedDark text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-solarRed/25 transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <IconLoader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <IconSend className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </Reveal>

        </div>

      </div>
    </section>
  );
}