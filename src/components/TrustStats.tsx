import React from 'react';
import { Star, MapPin, Zap, ShieldCheck, Award, ThumbsUp, Wrench, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const TrustStats: React.FC = () => {
  return (
    <section className="relative z-20 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Container Card */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 sm:p-7 grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
        
        {/* Stat 1: Google Rating */}
        <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-3 first:pt-0">
          <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 text-amber-500 shadow-xs">
            <Star className="w-6 h-6 fill-amber-400 text-amber-500" />
          </div>
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">4.4</span>
              <span className="text-xs font-bold text-slate-500">/ 5.0</span>
            </div>
            <div className="flex text-amber-400 text-xs mb-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs font-bold text-slate-600">30+ Google Reviews</p>
          </div>
        </div>

        {/* Stat 2: Local Burien HQ */}
        <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-3">
          <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0 text-red-600 shadow-xs">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Burien, WA</div>
            <p className="text-xs font-bold text-red-600">Local King County HQ</p>
            <p className="text-[11px] text-slate-500">Seattle & Surrounding Areas</p>
          </div>
        </div>

        {/* Stat 3: Fast Dispatch */}
        <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-3">
          <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 text-slate-800 shadow-xs">
            <Zap className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Fast Service</div>
            <p className="text-xs font-bold text-slate-700">Prompt Scheduling</p>
            <p className="text-[11px] text-slate-500">Same/Next-Day Availability</p>
          </div>
        </div>

        {/* Stat 4: 10+ Appliance Services */}
        <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-3">
          <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0 text-red-600 shadow-xs">
            <Wrench className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">10+</div>
            <p className="text-xs font-bold text-slate-700">Appliance Services</p>
            <p className="text-[11px] text-slate-500">Sub-Zero & LG Certified Care</p>
          </div>
        </div>

      </div>
    </section>
  );
};
