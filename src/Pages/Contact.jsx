import React, { useState } from 'react';
import {
  IconMail,
  IconBrandWhatsapp,
  IconMapPin,
  IconPhone,
  IconSend,
  IconCheck,
  IconClock,
  IconHelpCircle,
  IconShieldCheck,
  IconLoader2
} from '@tabler/icons-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzeblbla';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceType: 'Residential Solar',
    monthlyBill: '15,000 - 30,000 PKR',
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
          ...(formData.email ? { email: formData.email } : {}),
          service_type: formData.serviceType,
          monthly_bill: formData.monthlyBill,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
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

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      serviceType: 'Residential Solar',
      monthlyBill: '15,000 - 30,000 PKR',
      message: ''
    });
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen pt-28 pb-20">
      
      {/* Hero Header Banner */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-16">
        <div className="inline-flex items-center gap-2 border border-red-100 bg-red-50/80 backdrop-blur-md rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold text-solarRed shadow-sm mb-4">
          <span className="w-2 h-2 rounded-full bg-solarRed animate-pulse"></span>
          <span>We Are Here To Help</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
          Get in Touch With <span className="text-solarRed">ZM Solar</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Have questions regarding net metering, solar system sizing, or looking for a custom cost proposal? Reach out to our team today.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        
        {/* Left Column: Detailed Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Contact Direct Card */}
          <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl shadow-sm space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Contact Channels</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Connect with our technical support or sales engineers directly through email, phone, or WhatsApp.
            </p>

            <div className="space-y-4 pt-2">
              {/* WhatsApp Support */}
              <a 
                href="https://wa.me/923000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/60 hover:border-green-500/50 transition-all group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <IconBrandWhatsapp className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp Instant Chat</span>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-green-600 transition-colors">+92 333 2664144</p>
                </div>
              </a>

              {/* Email Support */}
              <a 
                href="mailto:zmsolarenergy786@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/60 hover:border-solarRed/50 transition-all group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-solarRed text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <IconMail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Official Email</span>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-solarRed transition-colors">zmsolarenergy786@gmail.com</p>
                </div>
              </a>

              {/* Phone Support */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-solarRed text-white flex items-center justify-center flex-shrink-0">
                  <IconPhone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Helpline</span>
                  <p className="text-sm font-bold text-slate-900">+92 333 2664144</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours & Office */}
          <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Head Office & Timing</h3>
            
            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-solarRed text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <IconMapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Location</span>
                  <span>Hyderabad, Sindh, Pakistan (Pan-Pakistan Service Available)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-solarRed text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <IconClock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Working Hours</span>
                  <span>Monday - Saturday: 9:00 AM – 7:00 PM<br />Sunday: Closed (Emergency Support Only)</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Detailed Survey / Inquiry Form */}
        <div className="lg:col-span-7 bg-slate-50 border border-slate-200/80 p-8 sm:p-10 rounded-3xl shadow-sm relative">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Request a Free Site Survey</h3>
            <p className="text-slate-600 text-sm">Fill out the specifications below and our technical survey team will schedule a visit or provide a preliminary calculation.</p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-8 rounded-2xl flex flex-col items-center text-center gap-4 my-10">
              <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <IconCheck className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Request Submitted Successfully!</h4>
                <p className="text-sm text-emerald-700 max-w-md mx-auto">
                  Thank you for choosing ZM Solar Energy. Our representative has received your request and will contact you via phone or WhatsApp shortly.
                </p>
              </div>
              <button
                onClick={resetForm}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-xl text-sm transition-all"
              >
                Send Another Message
              </button>
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name" 
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-solarRed transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Phone / WhatsApp *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 3XX XXXXXXX" 
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-solarRed transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com" 
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-solarRed transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">System Category</label>
                  <select 
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-solarRed transition-colors"
                  >
                    <option value="Residential Solar">Residential Solar Setup</option>
                    <option value="Commercial Solar">Commercial / Industrial Solar</option>
                    <option value="Hybrid Battery Upgrade">Hybrid Battery & Inverter Upgrade</option>
                    <option value="Net Metering Consultation">Net Metering Assistance</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Average Monthly Electricity Bill</label>
                <select 
                  name="monthlyBill"
                  value={formData.monthlyBill}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-solarRed transition-colors"
                >
                  <option value="Under 15,000 PKR">Under 15,000 PKR</option>
                  <option value="15,000 - 30,000 PKR">15,000 - 30,000 PKR</option>
                  <option value="30,000 - 60,000 PKR">30,000 - 60,000 PKR</option>
                  <option value="60,000+ PKR">60,000+ PKR (Large Commercial)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Additional Specifications or Notes</label>
                <textarea 
                  name="message"
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mention your roof type (concrete/sheet), available space, or specific inverter preferences..." 
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-solarRed transition-colors resize-none"
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
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Survey Request</span>
                    <IconSend className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Full Width Google Map Section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold">Visit Our Headquarters</h3>
              <p className="text-slate-400 text-sm">Drop by our office in Hyderabad for a live product walkthrough and expert discussion.</p>
            </div>
            <div className="inline-flex items-center gap-2 bg-solarRed/20 border border-solarRed/40 text-solarRed px-4 py-2 rounded-xl text-xs font-semibold">
              <IconShieldCheck className="w-4 h-4" />
              <span>Verified Business Location</span>
            </div>
          </div>
          <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
            <iframe 
              title="ZM Solar Head Office Map"
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

    </div>
  );
}