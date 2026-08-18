import React, { useState } from 'react';
import { Phone, Wrench, ArrowRight, CheckCircle2, AlertCircle, Shield, Sparkles, ChevronRight, Zap } from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Refrigeration', 'Laundry', 'Cooking', 'Specialty'];

  const filteredServices = activeCategory === 'All' 
    ? SERVICES_LIST 
    : SERVICES_LIST.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 font-bold text-xs uppercase tracking-wider border border-red-200">
            <Wrench className="w-3.5 h-3.5" />
            Comprehensive Repair Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Appliance Repair Services
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Professional troubleshooting, OEM parts replacement, and dependable repairs for all major residential kitchen and laundry appliances throughout Burien and Seattle.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/20 scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
                }`}
              >
                {cat === 'Specialty' ? 'Specialty (LG / Sub-Zero)' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`group bg-white rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col overflow-hidden ${
                service.isSpecialty 
                  ? 'border-red-300 ring-2 ring-red-500/20 shadow-md' 
                  : 'border-slate-200 shadow-xs hover:border-red-300'
              }`}
            >
              {/* Card Image Container */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Badge if present */}
                {service.badge && (
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1">
                    <Zap className="w-3 h-3 fill-white" />
                    {service.badge}
                  </div>
                )}

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-bold text-red-400 uppercase tracking-widest block mb-0.5">
                    {service.category}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug drop-shadow-sm">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Common Symptoms / Issues solved */}
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 text-red-500" />
                    Common Symptoms Fixed:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.commonProblems.map((prob, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-white text-slate-700 text-[11px] font-medium px-2 py-0.5 rounded-md border border-slate-200/80 shadow-2xs"
                      >
                        {prob}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Technical Highlights */}
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {service.detailedPoints.slice(0, 2).map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Service Details</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="py-2.5 px-3.5 bg-red-50 hover:bg-red-100 text-red-700 hover:text-red-800 border border-red-200 text-xs font-black rounded-xl transition-colors flex items-center justify-center gap-1"
                    title={`Call for ${service.title}`}
                  >
                    <Phone className="w-3.5 h-3.5 text-red-600 fill-red-600" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner for booking */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Don't see your specific appliance issue listed?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We repair nearly all residential major appliance models and configurations. Call our local Burien workshop directly for an instant phone consultation!
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="py-3 px-5 bg-red-600 hover:bg-red-500 text-white font-black text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer"
            >
              Request Custom Diagnosis
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="py-3 px-5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-red-400" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
