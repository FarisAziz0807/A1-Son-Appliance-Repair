import React, { useState } from 'react';
import { MapPin, Search, CheckCircle, Navigation, Phone, ShieldCheck, ArrowRight, Building } from 'lucide-react';
import { SERVICE_AREAS, BUSINESS_INFO } from '../data/content';

export const ServiceAreaSection: React.FC = () => {
  const [zipInput, setZipInput] = useState('');
  const [checkResult, setCheckResult] = useState<{ covered: boolean; message: string } | null>(null);

  const handleCheckZip = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();
    if (!cleanZip) return;

    // Check if zip matches 981XX or 980XX
    const validPrefixes = ['98166', '98146', '98148', '98101', '98102', '98103', '98104', '98105', '98106', '98107', '98108', '98109', '98116', '98118', '98126', '98136', '98144', '98158', '98168', '98178', '98188', '98198', '98055', '98056', '98057', '98030', '98031', '98032'];
    
    const isMatch = validPrefixes.some(z => cleanZip.startsWith(z.slice(0, 4)) || cleanZip === z);

    if (isMatch || (cleanZip.startsWith('981') || cleanZip.startsWith('980'))) {
      setCheckResult({
        covered: true,
        message: `Great news! ZIP code ${cleanZip} is in our primary King County service area with fast dispatch available!`
      });
    } else {
      setCheckResult({
        covered: true,
        message: `ZIP code ${cleanZip} may be within our extended service range. Please call (206) 850-3969 for direct dispatch confirmation.`
      });
    }
  };

  return (
    <section id="service-area" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 font-bold text-xs uppercase tracking-wider border border-red-200">
            <MapPin className="w-3.5 h-3.5" />
            King County Service Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Serving Burien, Seattle & Nearby Areas
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Headquartered at <strong>115 SW 155th St in Burien, WA</strong>, we provide fast, prompt on-site residential appliance repair throughout the greater Seattle metropolitan area.
          </p>
        </div>

        {/* Map & Neighborhoods Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Map & HQ Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              
              {/* Map embed centered on 115 SW 155th St, Burien, WA 98166 */}
              <div className="relative h-[340px] sm:h-[400px] w-full bg-slate-200">
                <iframe
                  title="A1 & Son Appliance Repair Location - 115 SW 155th St, Burien, WA 98166"
                  src="https://maps.google.com/maps?q=115%20SW%20155th%20St,%20Burien,%20WA%2098166&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Overlay Badge on top of map */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white px-3.5 py-2 rounded-xl border border-slate-700 shadow-lg text-xs font-bold flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                  <span>Workshop HQ: 115 SW 155th St, Burien</span>
                </div>
              </div>

              {/* HQ Address card */}
              <div className="p-5 sm:p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100">
                <div>
                  <h4 className="text-base font-extrabold text-slate-900">
                    A1 & Son Appliance Repair HQ
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    115 SW 155th St, Burien, WA 98166, United States
                  </p>
                </div>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors shrink-0"
                >
                  <Phone className="w-3.5 h-3.5 fill-white" />
                  <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Quick Zip Code Checker */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs">
              <h4 className="text-sm font-extrabold text-slate-900 mb-1 flex items-center gap-2">
                <Search className="w-4 h-4 text-red-600" />
                Check Your Service Area & ZIP Code
              </h4>
              <p className="text-xs text-slate-500 mb-4">
                Enter your 5-digit Washington ZIP code below to verify fast local dispatch.
              </p>

              <form onSubmit={handleCheckZip} className="flex gap-2">
                <input
                  type="text"
                  maxLength={5}
                  placeholder="e.g. 98166 or 98116"
                  value={zipInput}
                  onChange={(e) => setZipInput(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-red-500"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors shrink-0 cursor-pointer"
                >
                  Check Area
                </button>
              </form>

              {checkResult && (
                <div className={`mt-3 p-3 rounded-xl text-xs font-semibold flex items-start gap-2 ${
                  checkResult.covered ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-amber-50 text-amber-800 border border-amber-200'
                }`}>
                  <CheckCircle className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
                  <span>{checkResult.message}</span>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Communities Served List */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Building className="w-5 h-5 text-red-600" />
                Primary Communities Served
              </h3>
              <p className="text-xs text-slate-600">
                Our technicians travel with fully equipped service vehicles stocked with common replacement parts to complete repairs on the first visit.
              </p>

              <div className="divide-y divide-slate-100">
                {SERVICE_AREAS.map((area, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                        {area.name}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        ZIPs: {area.zip}
                      </div>
                    </div>

                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                      area.highlight 
                        ? 'bg-red-50 text-red-700 border border-red-200' 
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {area.response}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-xs text-slate-500 italic">
                * Nearby surrounding neighborhoods in South King County and Seattle are also happily accommodated.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
