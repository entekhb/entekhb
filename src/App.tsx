import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { EditorialFeatureCard } from './components/EditorialFeatureCard';
import { RevenueCalculator } from './components/RevenueCalculator';
import { TransformationMetrics } from './components/TransformationMetrics';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenAuditModal = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsAuditModalOpen(true);
  };

  const handleCloseAuditModal = () => {
    setIsAuditModalOpen(false);
    setSelectedService(undefined);
  };

  const handleExploreWork = () => {
    const portfolioElement = document.getElementById('portfolio');
    if (portfolioElement) {
      portfolioElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#17191c] font-sans selection:bg-[#fbe1d1] selection:text-[#5d2a1a] relative">
      {/* Top Quiet Navigation */}
      <Navbar onOpenAuditModal={() => handleOpenAuditModal()} />

      <main>
        {/* Steep Editorial Hero Section */}
        <HeroSection
          onOpenAuditModal={() => handleOpenAuditModal()}
          onExploreWork={handleExploreWork}
        />

        {/* Core Content & Modernization Services */}
        <ServicesSection onSelectService={(svc) => handleOpenAuditModal(svc)} />

        {/* Interactive Portfolio Showcase (Reels, Instagram Slides, Websites) */}
        <PortfolioShowcase onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* Steep Signature Accent Blush Peach Card */}
        <EditorialFeatureCard onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* Interactive Content ROI & Revenue Calculator */}
        <RevenueCalculator onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* Transformation Metrics & Case Proof */}
        <TransformationMetrics />
      </main>

      {/* Editorial Footer */}
      <Footer onOpenAuditModal={() => handleOpenAuditModal()} />

      {/* 80% Mobile Traffic Priority: Bottom Quick Action Bar */}
      <MobileQuickBar onOpenAuditModal={() => handleOpenAuditModal()} />

      {/* Free Growth Audit & Project Request Modal */}
      <BookingModal
        isOpen={isAuditModalOpen}
        onClose={handleCloseAuditModal}
        preSelectedService={selectedService}
      />
    </div>
  );
}
