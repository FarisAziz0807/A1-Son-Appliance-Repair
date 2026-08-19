import React from 'react';
import { APPLIANCE_TYPES, BRANDS_SERVICED, BUSINESS_INFO } from '../data/content';
import { CheckCircle2, Wrench, Shield, ChevronRight, Phone } from 'lucide-react';
import { ApplianceType } from '../types';
import { APP_IMAGES } from '../assets/images';

interface ApplianceTypesProps {
  onOpenBooking: () => void;
}

export const ApplianceTypes: React.FC<ApplianceTypesProps> = ({ onOpenBooking }) => {
  return (
    <section id="appliances" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 font-bold text-xs uppercase tracking-wider border border-red-200">
            <Wrench className="w-3.5 h-3.5" />
            Equipment Categories
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Appliances We Repair
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            From everyday laundry machines and cooking ranges to sophisticated linear compressors and luxury Sub-Zero systems, our Burien team has the specialized tooling and expertise to get it fixed right.
          </p>
        </div>

        {/* 9 Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {APPLIANCE_TYPES.map((appliance) => (
            <div
              key={appliance.id}
              className="group bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-red-300 p-5 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Top Image & Badge Row */}
                <div className="relative h-44 rounded-xl overflow-hidden mb-4 bg-slate-200">
                  <img
                    src={appliance.image}
                    alt={`${appliance.name} repair in Burien WA`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (appliance.id === 'refrigerators') {
                        target.src = APP_IMAGES.fallbacks.refrigerator;
                      } else if (appliance.id === 'freezers') {
                        target.src = APP_IMAGES.fallbacks.freezer;
                      } else if (appliance.id === 'washing-machines') {
                        target.src = APP_IMAGES.fallbacks.washer;
                      } else if (appliance.id === 'dryers') {
                        target.src = APP_IMAGES.fallbacks.dryer;
                      } else if (appliance.id === 'ovens') {
                        target.src = APP_IMAGES.fallbacks.oven;
                      } else if (appliance.id === 'stoves-cooktops') {
                        target.src = APP_IMAGES.fallbacks.stove;
                      } else if (appliance.id === 'lg-compressors') {
                        target.src = APP_IMAGES.fallbacks.lgCompressor;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  
                  {appliance.badge && (
                    <span className="absolute top-2.5 right-2.5 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
                      {appliance.badge}
                    </span>
                  )}

                  <div className="absolute bottom-2.5 left-3 text-white">
                    <h3 className="text-lg font-extrabold text-white">
                      {appliance.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">
                  {appliance.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {appliance.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium bg-white group-hover:bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200 flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3 h-3 text-red-600" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-extrabold text-red-600 hover:text-red-700 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                >
                  <span>Book {appliance.name} Repair</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-xs font-bold text-slate-500 hover:text-slate-900 inline-flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-red-500" />
                  <span>Call</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Major Brands Serviced Strip */}
        <div className="mt-14 pt-10 border-t border-slate-200">
          <div className="text-center mb-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
              Trusted Service Across All Leading Appliance Brands
            </span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {BRANDS_SERVICED.map((brand) => (
              <span
                key={brand}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-800 text-xs sm:text-sm font-bold border border-slate-200 transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
