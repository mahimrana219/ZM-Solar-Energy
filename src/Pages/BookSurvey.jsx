import React, { useState } from 'react';
import { 
  IconCalendar, 
  IconClock, 
  IconMapPin, 
  IconUser, 
  IconPhone, 
  IconShieldCheck, 
  IconArrowRight,
  IconHome,
  IconBuilding,
  IconCheck,
  IconLoader2
} from '@tabler/icons-react';

export default function BookSurvey() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Hyderabad',
    propertyType: 'residential',
    avgBill: '20k-40k',
    preferredDate: '',
    preferredTime: 'Morning (10 AM - 1 PM)',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch("https://formspree.io/f/mdeorova", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          phone: formData.phone,
          ...(formData.email ? { email: formData.email } : {}),
          city: formData.city,
          property_type: formData.propertyType,
          average_bill: formData.avgBill,
          preferred_date: formData.preferredDate,
          preferred_time: formData.preferredTime,
          notes: formData.notes || "None",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-28 pb-20">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <div className="inline-flex items-center gap-2 border border-red-100 bg-red-50/80 backdrop-blur-md rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold text-solarRed shadow-sm mb-4">
          <span className="w-2 h-2 rounded-full bg-solarRed animate-pulse"></span>
          <span>Free Expert Site Survey</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
          Book a 20-Min Call or <span className="text-solarRed">On-Site Survey</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Let our expert engineers visit your property, analyze your exact energy loads, and design a custom solar solution tailored to your budget.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        {!submitted ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Info Sidebar */}
            <div className="lg:col-span-5 bg-slate-950 text-white rounded-3xl p-8 space-y-6 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-solarRed/10 rounded-full blur-3xl pointer-events-none"></div>

              <div>
                <h3 className="text-xl font-bold mb-2">What happens during the survey?</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Our certified technical team visits your location at your preferred time to ensure seamless installation planning.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Roof & Shade Analysis", desc: "Checking optimum tilt angle and sun exposure." },
                  { title: "Load Calculation", desc: "Assessing heavy appliances and peak power consumption." },
                  { title: "WAPDA Meter Feasibility", desc: "Guidance on net metering documentation & load extension." },
                  { title: "Custom Proposal", desc: "On-the-spot component sizing and estimated ROI calculation." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800">
                    <div className="w-6 h-6 rounded-full bg-solarRed/20 text-solarRed flex items-center justify-center flex-shrink-0 mt-0.5">
                      <IconCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-200">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-solarRed/20 text-solarRed flex items-center justify-center">
                  <IconShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-slate-300">100% Free Consultation</h5>
                  <p className="text-xs text-slate-400">No hidden charges or obligation to buy.</p>
                </div>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200/80 rounded-3xl p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Error Banner if any */}
                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 text-solarRed p-4 rounded-xl text-sm font-medium">
                    {errorMessage}
                  </div>
                )}

                {/* Property Type Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Select Property Type
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, propertyType: 'residential' })}
                      className={`flex items-center justify-center gap-2 p-3.5 rounded-2xl border font-bold text-sm transition-all ${
                        formData.propertyType === 'residential'
                          ? 'bg-solarRed text-white border-solarRed shadow-md shadow-solarRed/20'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <IconHome className="w-4 h-4" />
                      <span>Residential Home</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, propertyType: 'commercial' })}
                      className={`flex items-center justify-center gap-2 p-3.5 rounded-2xl border font-bold text-sm transition-all ${
                        formData.propertyType === 'commercial'
                          ? 'bg-solarRed text-white border-solarRed shadow-md shadow-solarRed/20'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <IconBuilding className="w-4 h-4" />
                      <span>Commercial / Industrial</span>
                    </button>
                  </div>
                </div>

                {/* Personal Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Full Name *</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                        <IconUser className="w-4 h-4" />
                      </span>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Muhammad Ali"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-solarRed transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Phone Number *</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                        <IconPhone className="w-4 h-4" />
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0300 1234567"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-solarRed transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* City & Average Monthly Bill */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">City / Location</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                        <IconMapPin className="w-4 h-4" />
                      </span>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Hyderabad"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-solarRed transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Avg. Monthly Electricity Bill</label>
                    <select
                      name="avgBill"
                      value={formData.avgBill}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-solarRed transition-colors"
                    >
                      <option value="under-20k">Under PKR 20,000</option>
                      <option value="20k-40k">PKR 20,000 - 40,000</option>
                      <option value="40k-80k">PKR 40,000 - 80,000</option>
                      <option value="80k-plus">PKR 80,000+</option>
                    </select>
                  </div>
                </div>

                {/* Date & Time Slot Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Preferred Survey Date *</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                        <IconCalendar className="w-4 h-4" />
                      </span>
                      <input
                        type="date"
                        name="preferredDate"
                        required
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-solarRed transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Preferred Time Slot</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                        <IconClock className="w-4 h-4" />
                      </span>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-solarRed transition-colors"
                      >
                        <option value="Morning (10 AM - 1 PM)">Morning (10:00 AM - 01:00 PM)</option>
                        <option value="Afternoon (2 PM - 5 PM)">Afternoon (02:00 PM - 05:00 PM)</option>
                        <option value="Evening (5 PM - 7 PM)">Evening (05:00 PM - 07:00 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Additional Notes (Optional)</label>
                  <textarea
                    name="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Mention any specific inverter preference or roof type..."
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-solarRed transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-solarRed hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-solarRed/30 transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <IconLoader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm Survey & Booking</span>
                      <IconArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

              </form>
            </div>

          </div>
        ) : (
          /* Success Confirmation State */
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-12 text-center max-w-xl mx-auto space-y-6 shadow-xl">
            <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto shadow-inner">
              <IconCheck className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-slate-900">Survey Booked Successfully!</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Thank you, <span className="font-bold text-slate-800">{formData.fullName}</span>. Our technical coordinator will call you at <span className="font-bold text-slate-800">{formData.phone}</span> shortly to confirm your slot for <span className="font-bold text-solarRed">{formData.preferredDate}</span>.
              </p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: '',
                  phone: '',
                  email: '',
                  city: 'Hyderabad',
                  propertyType: 'residential',
                  avgBill: '20k-40k',
                  preferredDate: '',
                  preferredTime: 'Morning (10 AM - 1 PM)',
                  notes: ''
                });
              }}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-xl text-sm transition-all"
            >
              Book Another Survey
            </button>
          </div>
        )}
      </div>

    </div>
  );
}