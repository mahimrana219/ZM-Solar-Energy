import React from 'react';
import { Link } from 'react-router-dom';
import { IconMail, IconBrandWhatsapp, IconMapPin, IconPhone, IconBrandFacebook, IconBrandInstagram, IconBrandTiktok } from '@tabler/icons-react';
import logoIcon from '../assets/optimized/logo-icon.webp';

export default function Footer() {
  return (
    <footer className="bg-[#030618] text-white pt-20 pb-10 px-4 relative overflow-hidden border-t border-white/10">

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-solarRed/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/15">

          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={logoIcon}
                alt="ZM Solar Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-black text-white tracking-tight">
                ZM <span className="text-solarRed">Solar</span> Energy
              </span>
            </div>
            <p className="text-white font-bold text-sm leading-relaxed">
              Pioneering reliable clean power across Pakistan. Rooted in Hyderabad, delivering over 500+ successful installations nationwide.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/message/OUKLMJYTMAZUM1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/15 text-white hover:bg-white hover:text-solarRed flex items-center justify-center shadow-lg transition-all"
              >
                <IconBrandWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="mailto:zmsolarenergy786@gmail.com"
                className="w-10 h-10 rounded-xl bg-white/15 text-white hover:bg-white hover:text-solarRed flex items-center justify-center shadow-lg transition-all"
              >
                <IconMail className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61595275815626"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/15 text-white hover:bg-white hover:text-solarRed flex items-center justify-center shadow-lg transition-all"
              >
                <IconBrandFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/zmsolarenergyofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/15 text-white hover:bg-white hover:text-solarRed flex items-center justify-center shadow-lg transition-all"
              >
                <IconBrandInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@zmsolarenergy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/15 text-white hover:bg-white hover:text-solarRed flex items-center justify-center shadow-lg transition-all"
              >
                <IconBrandTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white font-bold">
              <li>
                <Link to="/pages/about" className="hover:text-solarRed transition-colors flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-solarRed"></span> About Us
                </Link>
              </li>
              <li>
                <Link to="/pages/services" className="hover:text-solarRed transition-colors flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-solarRed"></span> Services
                </Link>
              </li>
              <li>
                <Link to="/pages/whyus" className="hover:text-solarRed transition-colors flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-solarRed"></span> How It Works
                </Link>
              </li>
              <li>
                <Link to="/pages/leadership" className="hover:text-solarRed transition-colors flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-solarRed"></span> Founder / CEO
                </Link>
              </li>
              <li>
                <Link to="/pages/contact" className="hover:text-solarRed transition-colors flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-solarRed"></span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide">Get in Touch</h4>
            <ul className="space-y-3.5 text-sm text-white font-bold">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/15 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                  <IconMapPin className="w-4 h-4" />
                </div>
                <span>Hyderabad, Sindh, Pakistan ( All Over Pakistan Service)</span>
              </li>
              <li className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-white/15 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <IconMail className="w-4 h-4" />
                </div>
                <a href="mailto:zmsolarenergy786@gmail.com" className="hover:text-white transition-colors break-words min-w-0">zmsolarenergy786@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/15 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <IconPhone className="w-4 h-4" />
                </div>
                <span className="hover:text-white transition-colors">+92 333 2664144</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Google Map Embed */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide">Our Location</h4>
            <div className="w-full h-36 rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-md">
              <iframe
                title="Hyderabad Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.10651841361!2d68.30132175!3d25.3960305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70f6d444d3d5%3A0x2d4d9b6a953e5cf7!2sHyderabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white font-bold gap-4">
          <p>© {new Date().getFullYear()} ZM Solar Energy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>
              Created By{' '}
              <a
                href="https://meertechsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                meertechsolutions.com
              </a>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}