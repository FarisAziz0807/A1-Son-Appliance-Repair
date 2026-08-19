import React, { useState, useEffect } from 'react';
import { GALLERY_PHOTOS } from '../data/content';
import { GalleryPhoto } from '../types';
import { APP_IMAGES } from '../assets/images';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  Image as ImageIcon, 
  Filter, 
  Wrench,
  CheckCircle2
} from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filters = [
    { key: 'all', label: 'All Photos (7)' },
    { key: 'refrigeration', label: 'Refrigerators & Freezers' },
    { key: 'laundry', label: 'Washers & Dryers' },
    { key: 'cooking', label: 'Ovens & Stoves' },
    { key: 'specialty', label: 'LG Specialty' },
  ];

  const getFallbackImage = (photoId: string) => {
    switch (photoId) {
      case 'gal-refrigerator':
        return APP_IMAGES.fallbacks.refrigerator;
      case 'gal-freezer':
        return APP_IMAGES.fallbacks.freezer;
      case 'gal-dryer':
        return APP_IMAGES.fallbacks.dryer;
      case 'gal-oven':
        return APP_IMAGES.fallbacks.oven;
      case 'gal-stove-cooktop':
        return APP_IMAGES.fallbacks.stove;
      case 'gal-washer':
        return APP_IMAGES.fallbacks.washer;
      case 'gal-lg-compressor':
        return APP_IMAGES.fallbacks.lgCompressor;
      default:
        return APP_IMAGES.fallbacks.refrigerator;
    }
  };

  const filteredPhotos = activeFilter === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeFilter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, filteredPhotos]);

  const handlePrev = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => 
      prev === 0 ? filteredPhotos.length - 1 : (prev! - 1)
    );
  };

  const handleNext = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => 
      prev === filteredPhotos.length - 1 ? 0 : (prev! + 1)
    );
  };

  const currentPhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  return (
    <section id="gallery" className="py-20 bg-slate-100 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 font-bold text-xs uppercase tracking-wider border border-red-200">
            <ImageIcon className="w-3.5 h-3.5" />
            Field Work & Equipment Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Appliance Repair Gallery
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Browse our field gallery showcasing residential refrigerators, freezers, dryers, ovens, stoves & cooktops, washers, and specialized LG linear compressor replacements.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => {
                  setActiveFilter(f.key);
                  setSelectedPhotoIndex(null);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === f.key
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 shadow-sm hover:shadow-xl border border-slate-200/80 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <img
                  src={photo.image}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = getFallbackImage(photo.id);
                  }}
                />

                {/* Hover Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
                  {/* Top Badge */}
                  <div className="flex justify-between items-start">
                    <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md shadow-sm">
                      {photo.categoryLabel}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Caption */}
                  <div>
                    <h4 className="text-sm font-bold text-white leading-snug">
                      {photo.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 mt-1 line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Card Title */}
              <div className="p-3.5 bg-white border-t border-slate-100">
                <span className="text-[10px] font-extrabold text-red-600 uppercase block">
                  {photo.categoryLabel}
                </span>
                <span className="text-xs font-bold text-slate-800 line-clamp-1">
                  {photo.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Summary Stats */}
        <div className="mt-10 text-center text-xs font-bold text-slate-500">
          Showing {filteredPhotos.length} of {GALLERY_PHOTOS.length} curated appliance repair photos • Click any image to view in high resolution
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && currentPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-slate-800/80 hover:bg-red-600 text-white transition-colors z-50 cursor-pointer border border-slate-700"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-red-600 text-white transition-colors z-50 cursor-pointer border border-slate-700"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-red-600 text-white transition-colors z-50 cursor-pointer border border-slate-700"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Modal Image Box */}
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[65vh] sm:max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={currentPhoto.image}
                alt={currentPhoto.alt}
                className="w-full h-auto max-h-[65vh] sm:max-h-[70vh] object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = getFallbackImage(currentPhoto.id);
                }}
              />
            </div>

            {/* Lightbox Footer Content */}
            <div className="p-4 sm:p-6 bg-slate-900 text-white space-y-2">
              <div className="flex items-center justify-between">
                <span className="bg-red-600 text-white text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded">
                  {currentPhoto.categoryLabel}
                </span>
                <span className="text-xs font-bold text-slate-400">
                  {selectedPhotoIndex + 1} / {filteredPhotos.length}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {currentPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                {currentPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
