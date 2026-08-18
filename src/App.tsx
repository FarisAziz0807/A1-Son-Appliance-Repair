import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { TrustStats } from './components/TrustStats';
import { SymptomDiagnosticTool } from './components/SymptomDiagnosticTool';
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

      {/* Main Content Sections in Requested Order */}
      <main className="flex-1 pb-16 sm:pb-0">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. About Us Section */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Services Section */}
        <ServicesSection 
          onSelectService={handleSelectService}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />

        {/* 5. How It Works (Its Work) Section */}
        <HowItWorks onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Trust & Experience Stats */}
        <TrustStats />

        {/* 7. Interactive Symptom Diagnostic Tool */}
        <SymptomDiagnosticTool onOpenBooking={() => handleOpenBooking()} />

        {/* 8. Emergency Repair Dispatch CTA */}
        <EmergencyCTA onOpenBooking={() => handleOpenBooking()} />

        {/* 9. Real Work Gallery Showcase */}
        <GallerySection />

        {/* 10. Verified Customer Reviews & Ratings */}
        <ReviewsSection />

        {/* 11. Burien & King County Service Area Map */}
        <ServiceAreaSection />

        {/* 12. Frequently Asked Questions */}
        <FAQSection onOpenBooking={() => handleOpenBooking()} />

        {/* 13. Direct Contact & Booking Form */}
        <ContactSection />
      </main>

      {/* Multi-Column Professional Footer */}
      <Footer />

      {/* Floating Action Triggers (Call & Booking) */}
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
