import React from 'react';
import { X, Phone, CheckCircle2, AlertCircle, Wrench, ShieldCheck, Zap } from 'lucide-react';
import { ServiceItem } from '../types';
import { BUSINESS_INFO } from '../data/content';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white text-slate-900 rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Image Banner */}
        <div className="relative h-60 w-full bg-slate-950">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (service.id === 'refrigerator-repair') {
                target.src = '/images/services/refrigerator-repair.jpg';
              } else if (service.id === 'freezer-repair') {
                target.src = '/images/services/freezer-repair.jpg';
              } else if (service.id === 'dryer-repair') {
                target.src = '/images/services/dryer-repair.webp';
              } else if (service.id === 'oven-repair') {
                target.src = '/images/services/oven-repair.jpg';
              } else if (service.id === 'stove-cooktop-repair') {
                target.src = '/images/services/stove-cooktop-repair.jpg';
              } else if (service.id === 'washer-repair') {
                target.src = '/images/services/washer-repair.jpg';
              } else if (service.id === 'lg-compressor-replacement') {
                target.src = '/images/services/lg-compressor.jpg';
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-red-600 text-white transition-colors cursor-pointer border border-white/20"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs font-black uppercase tracking-widest text-red-400 block mb-1">
              {service.category} Service
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {service.description}
          </p>

          {/* Common Problems Checklist */}
          <div className="bg-red-50/70 border border-red-200/80 rounded-2xl p-4 sm:p-5 space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-red-900 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-red-600" />
              Common Issues & Symptoms We Diagnose:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.commonProblems.map((prob, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                  <span>{prob}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Technical Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
              Technical Repair Solutions & Capabilities:
            </h4>
            <ul className="space-y-2">
              {service.detailedPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3 justify-between">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto py-3 px-5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call Now: {BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onBookService(service.title);
              }}
              className="w-full sm:w-auto py-3 px-5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
            >
              Request {service.title}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
