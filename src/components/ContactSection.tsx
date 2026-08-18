import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  Calendar, 
  Wrench, 
  AlertCircle, 
  MessageSquare,
  ShieldCheck,
  Building
} from 'lucide-react';
import { BUSINESS_INFO, APPLIANCE_TYPES, BRANDS_SERVICED } from '../data/content';
import { BookingFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: 'Burien',
    zipCode: '98166',
    applianceType: 'Refrigerator',
    applianceBrand: 'Whirlpool',
    issueDescription: '',
    preferredDate: '',
    preferredTimeSlot: 'Morning (8:00 AM - 12:00 PM)',
    isEmergency: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable form processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/20 text-red-400 font-bold text-xs uppercase tracking-wider border border-red-500/30">
            <Phone className="w-3.5 h-3.5" />
            Contact & Service Dispatch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Schedule Appliance Repair Today
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Call our Burien team directly for immediate assistance or complete the service request form below to arrange an appointment window.
          </p>
        </div>

        {/* Contact Grid: Info Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Business Details & Instant Call */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Call Box */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl space-y-4 border border-red-500">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest bg-black/20 px-3 py-1 rounded-full">
                  Fastest Response
                </span>
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              </div>

              <div>
                <h3 className="text-2xl font-black">Call Us Directly</h3>
                <p className="text-xs text-red-100 mt-1">
                  Speak directly with an appliance technician for instant advice and scheduling.
                </p>
              </div>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                id="contact-box-call-btn"
                className="w-full py-4 px-6 bg-white hover:bg-slate-100 text-red-700 font-black text-lg rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3 animate-shimmer"
              >
                <Phone className="w-5 h-5 fill-red-600 animate-bounce" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <div className="pt-2 text-center text-xs text-red-100 font-semibold">
                Available Mon–Sat: 7:30 AM – 7:00 PM
              </div>
            </div>

            {/* Business Information Cards */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 space-y-5">
              <h4 className="text-base font-extrabold text-white pb-2 border-b border-slate-700">
                Business Information
              </h4>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold">Phone (Call or Text)</div>
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-sm font-bold text-white hover:text-red-400 transition-colors">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold">Direct Email</div>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-sm font-bold text-white hover:text-red-400 transition-colors break-all">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold">Address / HQ</div>
                  <div className="text-sm font-bold text-white">
                    115 SW 155th St<br />
                    Burien, WA 98166, United States
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold">Working Hours</div>
                  <div className="text-xs text-slate-300 font-medium leading-relaxed">
                    Mon - Sat: 7:30 AM - 7:00 PM<br />
                    Sunday: Emergency dispatch on-call
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Service Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    Service Request Received!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. We have logged your request for <strong>{formData.applianceBrand} {formData.applianceType}</strong> repair in {formData.city}, WA.
                  </p>
                  
                  <div className="bg-slate-900/80 p-4 rounded-xl max-w-md mx-auto text-xs text-left text-slate-300 border border-slate-700 space-y-1">
                    <div><strong>Requested Time:</strong> {formData.preferredTimeSlot}</div>
                    <div><strong>Contact:</strong> {formData.phone}</div>
                    <div><strong>Status:</strong> Technician Reviewing Dispatch Schedule</div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="py-2.5 px-5 bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="py-2.5 px-5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call for Faster Confirmation</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="service-request-form">
                  <div className="border-b border-slate-700 pb-3">
                    <h3 className="text-xl font-bold text-white">
                      Request Appliance Service
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Fill out the details below and we will contact you shortly to confirm your service visit.
                    </p>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jordan Smith"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm font-semibold text-white focus:outline-hidden focus:ring-2 focus:ring-red-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. (206) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm font-semibold text-white focus:outline-hidden focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  {/* Email & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. yourname@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm font-semibold text-white focus:outline-hidden focus:ring-2 focus:ring-red-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        City / Area *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Burien, Seattle"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm font-semibold text-white focus:outline-hidden focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  {/* Appliance Type & Brand */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Appliance Type *
                      </label>
                      <select
                        value={formData.applianceType}
                        onChange={(e) => setFormData({ ...formData, applianceType: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm font-semibold text-white focus:outline-hidden focus:ring-2 focus:ring-red-500"
                      >
                        <option value="Refrigerator">Refrigerator</option>
                        <option value="Freezer">Freezer / Deep Freeze</option>
                        <option value="Washing Machine">Washing Machine</option>
                        <option value="Clothes Dryer">Clothes Dryer</option>
                        <option value="Oven">Oven</option>
                        <option value="Stove / Range">Stove / Range</option>
                        <option value="Cooktop">Cooktop</option>
                        <option value="LG Linear Compressor">LG Refrigerator Compressor</option>
                        <option value="Sub-Zero System">Sub-Zero Luxury Unit</option>
                        <option value="Other Appliance">Other Major Appliance</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Brand / Make
                      </label>
                      <select
                        value={formData.applianceBrand}
                        onChange={(e) => setFormData({ ...formData, applianceBrand: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm font-semibold text-white focus:outline-hidden focus:ring-2 focus:ring-red-500"
                      >
                        {BRANDS_SERVICED.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                        <option value="Other Brand">Other Brand</option>
                      </select>
                    </div>
                  </div>

                  {/* Issue description */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Describe the Appliance Problem *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="e.g. Fridge is running but not cooling, clicking sound from back, water leaking onto floor, dryer won't heat..."
                      value={formData.issueDescription}
                      onChange={(e) => setFormData({ ...formData, issueDescription: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm font-medium text-white focus:outline-hidden focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  {/* Preferred Time Window & Emergency Check */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Preferred Arrival Window
                      </label>
                      <select
                        value={formData.preferredTimeSlot}
                        onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm font-semibold text-white focus:outline-hidden focus:ring-2 focus:ring-red-500"
                      >
                        <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                        <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                        <option value="Late Afternoon (4:00 PM - 7:00 PM)">Late Afternoon (4:00 PM - 7:00 PM)</option>
                        <option value="First Available Slot">First Available / Urgent</option>
                      </select>
                    </div>

                    <div className="pt-4 sm:pt-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.isEmergency}
                          onChange={(e) => setFormData({ ...formData, isEmergency: e.target.checked })}
                          className="w-4 h-4 rounded text-red-600 focus:ring-red-500 bg-slate-900 border-slate-700"
                        />
                        <span className="text-xs font-bold text-red-400">
                          Urgent / High Priority (Leaking water or food spoiling)
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-sm sm:text-base rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer animate-shimmer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Submitting Request...' : 'Send Service Request'}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
