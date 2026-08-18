import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { ServicesSection } from './components/ServicesSection';
import { ApplianceTypes } from './components/ApplianceTypes';
import { SymptomDiagnosticTool } from './components/SymptomDiagnosticTool';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { HowItWorks } from './components/HowItWorks';
import { EmergencyCTA } from './components/EmergencyCTA';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingCTAs } from './components/FloatingCTAs';
import { BookingModal } from './components/BookingModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServiceItem } from './types';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedApplianceForBooking, setSelectedApplianceForBooking] = useState('Refrigerator');
  const [activeServiceDetail, setActiveServiceDetail] = useState<ServiceItem | null>(null);

  const handleOpenBooking = (applianceName: string = 'Refrigerator') => {
    setSelectedApplianceForBooking(applianceName);
    setBookingModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setActiveServiceDetail(service);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-red-600 selection:text-white">
      {/* Sticky Navigation Header */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Automatic Slider & Direct CTAs */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Trust Indicators & Animated Counter Stats */}
        <TrustStats />

        {/* 3. 10 Detailed Appliance Repair Services with Category Filters */}
        <ServicesSection 
          onSelectService={handleSelectService}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 4. Appliance Types Section (9 Categories & Brands) */}
        <ApplianceTypes onOpenBooking={() => handleOpenBooking()} />

        {/* 5. Interactive Appliance Symptom Diagnostic Tool */}
        <SymptomDiagnosticTool onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Why Choose A1 & Son Section (8 Value Pillars) */}
        <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />

        {/* 7. Authentic Local About Section */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* 8. Simple 4-Step Process (How It Works) */}
        <HowItWorks onOpenBooking={() => handleOpenBooking()} />

        {/* 9. High-Conversion Emergency CTA Banner */}
        <EmergencyCTA onOpenBooking={() => handleOpenBooking()} />

        {/* 10. 20+ Image Masonry Gallery with Lightbox */}
        <GallerySection />

        {/* 11. Customer Reviews & 4.4/5 Google Rating Showcase */}
        <ReviewsSection />

        {/* 12. Local SEO Service Area & Map Section (115 SW 155th St Burien WA) */}
        <ServiceAreaSection />

        {/* 13. Searchable Accordion FAQ Section */}
        <FAQSection onOpenBooking={() => handleOpenBooking()} />

        {/* 14. Contact Section with Service Request Form */}
        <ContactSection />
      </main>

      {/* Multi-Column Professional Footer */}
      <Footer />

      {/* Floating Action Triggers (Call, WhatsApp, Booking) */}
      <FloatingCTAs onOpenBooking={() => handleOpenBooking()} />

      {/* Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialAppliance={selectedApplianceForBooking}
      />

      <ServiceDetailModal
        service={activeServiceDetail}
        onClose={() => setActiveServiceDetail(null)}
        onBookService={(serviceName) => handleOpenBooking(serviceName)}
      />
    </div>
  );
}
