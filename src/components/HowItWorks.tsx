import React from 'react';
import { PhoneCall, CalendarCheck, Search, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { HOW_IT_WORKS_STEPS, BUSINESS_INFO } from '../data/content';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PhoneCall': return <PhoneCall className="w-6 h-6 text-red-600" />;
      case 'CalendarCheck': return <CalendarCheck className="w-6 h-6 text-red-600" />;
      case 'Search': return <Search className="w-6 h-6 text-red-600" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-red-600" />;
      default: return <CheckCircle2 className="w-6 h-6 text-red-600" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 font-bold text-xs uppercase tracking-wider border border-red-200">
            <Sparkles className="w-3.5 h-3.5" />
            Simple 4-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Getting your broken appliance fixed is smooth, transparent, and hassle-free from your first phone call to the finished repair.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg hover:border-red-300 transition-all flex flex-col justify-between"
            >
              {/* Step number badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black italic text-red-600/30 group-hover:text-red-600 transition-colors">
                  {step.step}
                </span>
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shadow-2xs">
                  {getIcon(step.icon)}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress connector indicator */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                <span>Step {index + 1} of 4</span>
                <span className="w-2 h-2 rounded-full bg-red-500" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA prompt */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-sm font-bold text-slate-800">
              Ready to begin with Step 1?
            </span>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <button
                onClick={onOpenBooking}
                className="py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Schedule Online
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
