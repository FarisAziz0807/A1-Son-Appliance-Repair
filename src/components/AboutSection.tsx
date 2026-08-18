import React from 'react';
import { MapPin, Phone, CheckCircle2, ShieldCheck, HeartHandshake, Wrench, Award, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Image with Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-100">
              <img
                src="/images/about/about-team.jpg"
                alt="A1 & Son Appliance Repair certified technician with tools and equipment in Burien WA"
                className="w-full h-[460px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = '/images/about/about-technician.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Bottom Badge inside photo */}
              <div className="absolute bottom-6 left-6 right-6 text-white bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-700/80 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-white">Located in Burien, WA</div>
                    <div className="text-xs text-slate-300">115 SW 155th St, Burien, WA 98166</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -top-6 -right-4 sm:-right-6 bg-gradient-to-br from-red-600 to-red-700 text-white p-4 rounded-2xl shadow-xl border-2 border-white max-w-[200px] hidden sm:block animate-shimmer">
              <div className="text-2xl font-black italic">A1 & Son</div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-red-100 mt-0.5">
                Fast • Reliable • Affordable
              </div>
            </div>
          </div>

          {/* Right Column: About Story & Mission */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 font-bold text-xs uppercase tracking-wider border border-red-200">
                <HeartHandshake className="w-3.5 h-3.5" />
                Local & Dedicated Service
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                About A1 & Son Appliance Repair
              </h2>
              <p className="text-lg font-semibold text-red-600">
                Dependable appliance repair serving Burien, Seattle, and surrounding King County communities.
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              At <strong>A1 & Son Appliance Repair</strong>, we understand that a broken refrigerator, malfunctioning oven, or failing washing machine causes immediate stress and disrupts your daily household routine. Our goal is straightforward: provide prompt, dependable, and honest appliance repair to get your machines functioning safely and efficiently again.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Based right here at <strong>115 SW 155th St in Burien, WA</strong>, we treat every service call with the respect and urgency it deserves. We do not push unnecessary replacements when a practical, cost-effective repair will restore full functionality.
            </p>

            {/* Core Values / Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Honest Communication</h4>
                  <p className="text-xs text-slate-500">Clear explanations of the problem and upfront pricing before work begins.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Technical Expertise</h4>
                  <p className="text-xs text-slate-500">Proficiency across standard home appliances and complex specialty systems.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Practical Solutions</h4>
                  <p className="text-xs text-slate-500">Focused on durable, reliable repairs using quality replacement components.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Local Commitment</h4>
                  <p className="text-xs text-slate-500">Proudly supporting our neighbors in Burien, Seattle, and nearby neighborhoods.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="py-3.5 px-6 bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call +1 206-850-3969</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="py-3.5 px-6 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Wrench className="w-4 h-4 text-red-400" />
                <span>Request Service Online</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
