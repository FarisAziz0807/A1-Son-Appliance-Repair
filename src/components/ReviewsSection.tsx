import React, { useState } from 'react';
import { Star, ShieldCheck, ThumbsUp, Quote, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { REVIEWS_LIST, BUSINESS_INFO } from '../data/content';

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'refrigeration' | 'laundry' | 'cooking'>('all');

  const filteredReviews = filter === 'all'
    ? REVIEWS_LIST
    : REVIEWS_LIST.filter(r => {
        if (filter === 'refrigeration') return r.service.toLowerCase().includes('refrigerator') || r.service.toLowerCase().includes('freezer') || r.service.toLowerCase().includes('compressor');
        if (filter === 'laundry') return r.service.toLowerCase().includes('washer') || r.service.toLowerCase().includes('dryer') || r.service.toLowerCase().includes('washing');
        if (filter === 'cooking') return r.service.toLowerCase().includes('oven') || r.service.toLowerCase().includes('stove') || r.service.toLowerCase().includes('range');
        return true;
      });

  return (
    <section id="reviews" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Google Rating Showcase Box */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-14">
          
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 font-bold text-xs uppercase tracking-wider border border-red-200">
              <Star className="w-3.5 h-3.5 fill-red-600 text-red-600" />
              Customer Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Burien & Seattle Neighbors Say
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Real reviews from local homeowners who trusted A1 & Son Appliance Repair for fast diagnosis, fair pricing, and long-lasting repairs.
            </p>
          </div>

          {/* Google Rating Official Card */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 shadow-sm flex items-center gap-6 shrink-0 w-full sm:w-auto justify-center">
            {/* Google G Logo icon */}
            <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center font-black text-2xl text-slate-800">
              <span className="text-blue-600">G</span>
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-slate-900">4.4</span>
                <span className="text-sm font-bold text-slate-500">out of 5</span>
              </div>
              
              <div className="flex text-amber-400 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <div className="text-xs font-extrabold text-slate-700">
                30 Verified Google Reviews
              </div>
            </div>
          </div>

        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-red-300 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">
                    {review.date}
                  </span>
                </div>

                {/* Service Tag */}
                <div className="inline-block bg-red-50 text-red-700 text-[11px] font-bold px-2.5 py-0.5 rounded-md border border-red-200">
                  {review.service}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author & Location Footer */}
              <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">
                    {review.author}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {review.location}
                  </p>
                </div>

                {review.verified && (
                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-12 text-center bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800">
          <div className="text-left">
            <h4 className="text-lg font-bold text-white">
              Had a great experience with A1 & Son Appliance Repair?
            </h4>
            <p className="text-xs text-slate-300">
              We appreciate our Burien & Seattle community support! Your feedback helps us continue providing top-rated local repairs.
            </p>
          </div>

          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-5 bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-colors shrink-0 inline-flex items-center gap-2"
          >
            <span>Review on Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
