import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { translations } from './translations';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterHook } from './components/BeforeAfterHook';
import { RoiCalculator } from './components/RoiCalculator';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { StudioControlCenter } from './components/StudioControlCenter';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';
import { Footer } from './components/Footer';
import { AdminPanel } from './components/AdminPanel';
import { recordPageView } from './utils/analytics';

export default function App() {
  // Default language is English as requested ("زبان اصلی سایت رو انگلیسی بطار")
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>();

  // Helper to detect /admin route cleanly across paths and hashes
  const checkIsAdmin = () => {
    if (typeof window === 'undefined') return false;
    const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
    const hash = window.location.hash.toLowerCase().replace(/\/+$/, '');
    return path === '/admin' || hash === '#admin' || hash === '#/admin';
  };

  // Admin route detector (/admin, /admin/, #admin, or #/admin)
  const [isAdminView, setIsAdminView] = useState(checkIsAdmin);

  const t = translations[currentLang];

  // Track page views and listen to navigation popstate & hashchange
  useEffect(() => {
    recordPageView();

    const handleLocationChange = () => {
      setIsAdminView(checkIsAdmin());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Update HTML document attributes when language changes for true RTL/LTR support
  useEffect(() => {
    if (!isAdminView) {
      document.documentElement.lang = currentLang;
      document.documentElement.dir = t.dir;
      document.title = `${t.brand.name} — ${t.brand.studio} | ${t.brand.domain}`;
    } else {
      document.title = 'پنل مدیریت استودیو ایمو | aimo Admin';
    }
  }, [currentLang, t, isAdminView]);

  const handleOpenInquiry = (serviceName?: string) => {
    setSelectedServiceForModal(serviceName);
    setInquiryModalOpen(true);
  };

  // WhatsApp with requested number: +98 9999927201
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `سلام تیم استودیو ایمو! از طریق وبسایت پیام می‌دهم و علاقه‌مند به همکاری برای تولید محتوا هستم.`
    );
    window.open(`https://wa.me/989999927201?text=${text}`, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToAdmin = () => {
    window.history.pushState(null, '', '/admin');
    setIsAdminView(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSite = () => {
    window.history.pushState(null, '', '/');
    setIsAdminView(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If in Admin route, render AdminPanel
  if (isAdminView) {
    return <AdminPanel onBackToSite={navigateToSite} />;
  }

  return (
    <div className={`min-h-screen bg-white text-neutral-900 transition-colors duration-200 ${t.dir === 'rtl' ? 'rtl font-serif' : 'ltr font-sans'}`}>
      
      {/* Flighty Announcement Bar */}
      <AnnouncementBar
        t={t}
        onActionClick={() => scrollToSection('reels-showcase')}
      />

      {/* Flighty Floating Navigation Pill */}
      <Navbar
        t={t}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Main Content Narrative */}
      <main>
        {/* 1. Hero with Departure-board White Canvas, Phone Mockup & Orbiting Notification Cards */}
        <Hero
          t={t}
          onOpenInquiry={() => handleOpenInquiry()}
          onExploreWork={() => scrollToSection('reels-showcase')}
        />

        {/* 2. Before/After Interactive Retention Slider (Raw Clip vs aimo Edit) */}
        <BeforeAfterHook
          t={t}
          onOpenInquiry={() => handleOpenInquiry('Instagram Reels & Graphics')}
        />

        {/* 3. Four Core Creative Disciplines (Instagram, YouTube, Motion, Web) */}
        <ServicesSection
          t={t}
          onOpenInquiry={(service) => handleOpenInquiry(service)}
        />

        {/* 4. Interactive Growth & ROI Calculator */}
        <RoiCalculator
          t={t}
          onOpenInquiry={() => handleOpenInquiry()}
        />

        {/* 5. Documented Results / Case Studies */}
        <CaseStudiesSection
          t={t}
          onOpenInquiry={() => handleOpenInquiry()}
        />

        {/* 6. Flighty Dark Control Room: Studio Control Center & Workflow */}
        <StudioControlCenter
          t={t}
          onOpenInquiry={() => handleOpenInquiry()}
          onWhatsApp={handleWhatsApp}
        />
      </main>

      {/* Footer */}
      <Footer
        t={t}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Floating Bottom Language Switcher (EN, FA, AR, ES, DE, FR) */}
      <LanguageSwitcher
        currentLang={currentLang}
        onSelectLang={(lang) => setCurrentLang(lang)}
      />

      {/* Simplified & User-Friendly Project Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        t={t}
        initialService={selectedServiceForModal}
      />

    </div>
  );
}
