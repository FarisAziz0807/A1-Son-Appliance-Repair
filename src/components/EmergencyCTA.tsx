import React from 'react';
import { Phone, Clock, AlertTriangle, ShieldCheck, ArrowRight, MessageSquare, Wrench } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface EmergencyCTAProps {
  onOpenBooking: () => void;
}

export const EmergencyCTA: React.FC<EmergencyCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 bg-gradient-to-br from-red-600 via-red-600 to-red-700 text-white relative overflow-hidden shadow-2xl">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/15 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Urgent Alert Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white font-black text-xs uppercase tracking-widest border border-white/30 shadow-sm animate-pulse">
          <Clock className="w-4 h-4" />
          <span>Same-Day & Urgent Appointment Dispatch</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-md">
          Need Appliance Repair?
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-red-50 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-xs">
          Don't let a broken appliance disrupt your day. Contact <strong>A1 & Son Appliance Repair</strong> for dependable appliance repair in Burien, Seattle, and nearby areas.
        </p>

        {/* Highlights Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2 text-xs sm:text-sm font-bold text-red-100">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span>Honest Transparent Estimates</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Wrench className="w-4 h-4 text-white" />
            <span>All Major Residential Brands</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-white" />
            <span>Fast Turnaround Times</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            id="emergency-banner-call-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-red-700 hover:text-red-800 text-base sm:text-lg font-black px-8 py-4 rounded-xl shadow-2xl transition-all transform hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5 fill-red-600 text-red-600 animate-bounce" />
            <span>Call Now — {BUSINESS_INFO.phone}</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-950/70 hover:bg-slate-950 text-white font-extrabold text-sm sm:text-base px-7 py-4 rounded-xl border border-white/20 transition-colors shadow-lg cursor-pointer"
          >
            <Wrench className="w-4 h-4 text-red-400" />
            <span>Request Repair Online</span>
          </button>
        </div>

      </div>
    </section>
  );
};
