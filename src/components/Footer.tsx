import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUp, Star, Wrench } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/content';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-xs sm:text-sm">
      {/* Top Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="inline-block focus:outline-hidden" aria-label="A1 & Son Appliance Repair Home">
              <Logo size="lg" />
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Reliable appliance repair services for refrigerators, freezers, washers, dryers, ovens, stoves, and other major household appliances in Burien, Seattle, and nearby areas.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-white">4.4 / 5.0 Rating</span>
              <span className="text-slate-500 text-xs">• 30 Google Reviews</span>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-full shadow-lg shadow-red-600/20 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 fill-white" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-red-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-red-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-red-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#gallery" className="hover:text-red-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-red-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Appliance Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-red-400 transition-colors">Refrigerator Repair</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Freezer Repair</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Dryer Repair</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Oven Repair</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Stove & Cooktop Repair</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Washer Repair</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors font-bold text-red-400">LG Refrigerator Compressor</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact & HQ
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-500 font-semibold">Direct Phone</div>
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold text-white hover:text-red-400">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-500 font-semibold">Email</div>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="font-bold text-white hover:text-red-400 break-all">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-500 font-semibold">Address</div>
                  <div className="font-bold text-white">
                    115 SW 155th St<br />
                    Burien, WA 98166
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Sleek Bottom Status Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950 py-4 px-4 sm:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4 text-center md:text-left">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              115 SW 155th St, Burien, WA 98166
            </span>
            <span>© {new Date().getFullYear()} A1 & Son Appliance Repair. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-white font-medium">Open Mon-Sat: 7:30AM - 7:00PM</span>
            <span className="text-red-400 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Prompt Emergency Dispatch
            </span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-600 hover:text-white text-slate-300 transition-colors ml-2 cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
