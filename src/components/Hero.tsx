import React, { useState, useEffect } from 'react';
import { Phone, Calendar, ArrowRight, ChevronLeft, ChevronRight, Star, ShieldCheck, Wrench, MessageSquare, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface HeroProps {
  onOpenBooking: () => void;
}

const HERO_SLIDES = [
  {
    id: 1,
    serviceId: 'refrigerator-repair',
    image: 'https://frostguide.ru/wp-content/uploads/2026/03/fridge-repair_1-scaled.webp',
    fallback: '/images/services/refrigerator-repair.jpg',
    title: 'Refrigerator Repair & Sealed System Diagnostics',
    category: 'Cooling Specialist',
    caption: 'Compressor diagnostics, refrigerant recharge & cold airflow recovery.'
  },
  {
    id: 2,
    serviceId: 'freezer-repair',
    image: 'https://cloudfrontgharpediabucket.gharpedia.com/uploads/2024/11/Complex-Repairs-08-0706140003.jpg',
    fallback: '/images/services/freezer-repair.jpg',
    title: 'Freezer & Deep Freeze Precision Repair',
    category: 'Freezer Mechanics',
    caption: 'Frost-free defrost cycles, starter relays & precision thermostat controls.'
  },
  {
    id: 3,
    serviceId: 'dryer-repair',
    image: 'https://uaebusinessman.com/wp-content/uploads/2025/09/How-to-Fix-Dryer-With-No-Power-Supply-1024x684.webp',
    fallback: '/images/services/dryer-repair.webp',
    title: 'Dryer Heating & Tumble Drive Repair',
    category: 'Laundry Specialists',
    caption: 'Thermal fuses, heating coils, rollers & quiet belt replacements.'
  },
  {
    id: 4,
    serviceId: 'oven-repair',
    image: 'https://fixappliance.co.uk/wp-content/uploads/2025/08/Electric-Oven-Repair.jpg',
    fallback: '/images/services/oven-repair.jpg',
    title: 'Electric & Gas Oven Calibration',
    category: 'Cooking Systems',
    caption: 'Dual bake elements, gas safety valves & digital temperature setup.'
  },
  {
    id: 5,
    serviceId: 'stove-cooktop-repair',
    image: 'https://www.glbrain.com/images/tools/80/3a/69d3520856cb12f99dd6c2368b083a80_xxbig.jpg',
    fallback: '/images/services/stove-cooktop-repair.jpg',
    title: 'Stove & Cooktop Burner & Igniter Fix',
    category: 'Range Mechanics',
    caption: 'Spark electrodes, infinite burner switches & radiant surface repairs.'
  },
  {
    id: 6,
    serviceId: 'washer-repair',
    image: 'https://blog.aham.org/wp-content/uploads/2026/03/appliance-repair-1024x683.jpg',
    fallback: '/images/services/washer-repair.jpg',
    title: 'Washing Machine Pump & Motor Repair',
    category: 'Laundry Specialists',
    caption: 'Drain pumps, direct-drive motors & heavy-duty suspension balancing.'
  },
  {
    id: 7,
    serviceId: 'lg-compressor-replacement',
    image: 'https://guide-images.cdn.ifixit.com/igi/fDeZjPFBpZXrLuTI.medium',
    fallback: '/images/services/lg-compressor.jpg',
    title: 'LG Refrigerator Compressor Replacement',
    category: 'Certified Specialty',
    caption: 'Authorized linear compressor extraction, MCU software flash & sealed vacuum charging.'
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section 
      className="relative bg-slate-50 border-b border-slate-200 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Sleek Interface Headline & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10 space-y-6">
            
            {/* Sleek Badge */}
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit border border-red-100 shadow-2xs">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              Serving Burien, Seattle & Nearby Areas
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Reliable Appliance <br />
              <span className="text-red-600">Repair Experts.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Fast, dependable repair for refrigerators, freezers, washers, dryers, and ovens. Your trusted local technical specialists for LG, Sub-Zero, and all major residential brands.
            </p>

            {/* Service checklist badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Fast Dispatch Available</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>LG Compressor Pros</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Sub-Zero Specialists</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Honest Upfront Rates</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>All Major Brands</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Burien Local HQ</span>
              </div>
            </div>

            {/* Action Buttons & Rating Stats */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Call CTA */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                id="hero-call-btn"
                className="bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-red-600/25 flex items-center gap-2.5 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Phone className="w-5 h-5 fill-white" />
                <span>Call: {BUSINESS_INFO.phone}</span>
              </a>

              {/* Request Repair CTA */}
              <button
                onClick={onOpenBooking}
                id="hero-request-btn"
                className="bg-slate-900 hover:bg-slate-800 text-white px-7 py-4 rounded-xl font-bold text-sm sm:text-base shadow-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <Wrench className="w-4 h-4 text-red-400" />
                <span>Request Appliance Repair</span>
              </button>

              {/* Rating Box */}
              <div className="flex items-center gap-3 pl-2 sm:pl-4 py-1">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-amber-500">
                    <span className="text-xl font-black text-slate-900">4.4</span>
                    <div className="flex text-amber-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 font-bold">30+ Verified Google Reviews</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Sleek Appliance Visual Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col p-6 space-y-4">
              
              {/* Card Header */}
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-600" />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Technician On-Site
                  </span>
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2.5 py-1 rounded-full font-black uppercase tracking-wider">
                  Active Dispatch Now
                </span>
              </div>

              {/* Slide Visual Box */}
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-900 group">
                <img
                  src={HERO_SLIDES[currentSlide].image}
                  alt={HERO_SLIDES[currentSlide].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const fallback = HERO_SLIDES[currentSlide].fallback;
                    if (fallback) {
                      e.currentTarget.src = fallback;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-5 flex flex-col justify-between pointer-events-none" />
                
                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
                    {HERO_SLIDES[currentSlide].category}
                  </span>
                </div>

                {/* Bottom Title & Caption */}
                <div className="absolute bottom-4 inset-x-4 text-white">
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight drop-shadow-sm">
                    {HERO_SLIDES[currentSlide].title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {HERO_SLIDES[currentSlide].caption}
                  </p>
                </div>
              </div>

              {/* Slide Navigation Dots & Quick Booking */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-1.5">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === currentSlide ? 'w-6 bg-red-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={onOpenBooking}
                  className="text-xs font-extrabold text-red-600 hover:text-red-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>Book Inspection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
