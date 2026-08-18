import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Wrench, ArrowUp, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface FloatingCTAsProps {
  onOpenBooking: () => void;
}

export const FloatingCTAs: React.FC<FloatingCTAsProps> = ({ onOpenBooking }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop & Tablet Floating Action Stack on Right */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2.5">
        
        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 shadow-lg border border-slate-200 transition-all hover:scale-105 cursor-pointer"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* WhatsApp Message */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=Hello%20A1%20%26%20Son%20Appliance%20Repair,%20I%20need%20appliance%20repair%20service.`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-emerald-600/30 transition-all hover:scale-105 flex items-center justify-center cursor-pointer border-2 border-white"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
        </a>

        {/* Schedule Service Pill */}
        <button
          onClick={onOpenBooking}
          className="px-4 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xl border border-slate-700 transition-all hover:scale-105 flex items-center gap-2 cursor-pointer"
          title="Schedule Appointment Online"
        >
          <Calendar className="w-3.5 h-3.5 text-red-400" />
          <span>Book Repair</span>
        </button>

        {/* Floating Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          id="floating-call-btn"
          className="px-5 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-xl shadow-red-600/30 transition-all hover:scale-105 flex items-center gap-2 border-2 border-white cursor-pointer"
          title="Call A1 & Son Appliance Repair"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span>Call (206) 850-3969</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Floating Action Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-4 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          id="mobile-bottom-call-btn"
          className="flex-1 py-3 px-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs rounded-full flex items-center justify-center gap-2 shadow-md"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span>Call Now</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-1 py-3 px-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-full flex items-center justify-center gap-1.5"
        >
          <Wrench className="w-3.5 h-3.5 text-red-400" />
          <span>Book Online</span>
        </button>

        <a
          href={`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=Hello%20A1%20%26%20Son%20Appliance%20Repair,%20I%20need%20service.`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-emerald-600 text-white rounded-full flex items-center justify-center"
          title="WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
        </a>
      </div>
    </>
  );
};
