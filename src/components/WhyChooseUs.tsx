import React from 'react';
import { 
  MapPin, 
  Zap, 
  Wrench, 
  DollarSign, 
  Calendar, 
  Home, 
  Layers, 
  ShieldCheck, 
  CheckCircle,
  Phone,
  Sparkles
} from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/content';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin': return <MapPin className="w-5 h-5 text-red-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-red-600" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-red-600" />;
      case 'DollarSign': return <DollarSign className="w-5 h-5 text-red-600" />;
      case 'Calendar': return <Calendar className="w-5 h-5 text-red-600" />;
      case 'Home': return <Home className="w-5 h-5 text-red-600" />;
      case 'Layers': return <Layers className="w-5 h-5 text-red-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-red-600" />;
      default: return <CheckCircle className="w-5 h-5 text-red-600" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-slate-900 text-white scroll-mt-20 relative overflow-hidden">
      {/* Subtle Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/20 text-red-400 font-bold text-xs uppercase tracking-wider border border-red-500/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            The Local Difference
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Choose A1 & Son Appliance Repair?
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            When an essential home appliance stops working, you need a local technician who answers the phone, shows up on time, provides clear pricing, and fixes the issue properly the first time.
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="group bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-red-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-600/20 transition-all duration-300">
                  {getIcon(item.icon)}
                </div>
                
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-700/60 flex items-center gap-1.5 text-[11px] font-bold text-red-400">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verified Service Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-gradient-to-r from-red-950/80 via-slate-800 to-red-950/80 border border-red-900/50 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center shrink-0 shadow-lg text-white font-black text-xl">
              A1
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-black text-white">
                Ready to speak directly with an appliance repair specialist?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Call now for fast troubleshooting advice and convenient appointment booking across Burien & King County.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="py-3 px-6 bg-red-600 hover:bg-red-500 text-white font-black text-sm rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="py-3 px-5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm rounded-xl border border-slate-600 transition-colors cursor-pointer"
            >
              Book Online
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
