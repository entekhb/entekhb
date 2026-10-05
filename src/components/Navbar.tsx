import React, { useState, useEffect } from 'react';
import { AimoLogo } from './AimoLogo';
import { Translations } from '../translations';
import { MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  t: Translations;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ t, onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.reels, href: '#reels-showcase' },
    { label: t.nav.workflow, href: '#workflow' },
    { label: t.nav.calculator, href: '#calculator' },
    { label: t.nav.caseStudies, href: '#case-studies' },
  ];

  return (
    <header className="sticky top-3 z-40 px-3 sm:px-6 w-full flex justify-center pointer-events-none transition-all duration-300">
      <div
        className={`pointer-events-auto w-full max-w-[1040px] bg-white/95 backdrop-blur-md border border-neutral-200/80 rounded-full py-2 px-3 sm:px-4 flex items-center justify-between shadow-flighty-pill transition-all duration-300 ${
          scrolled ? 'py-1.5 shadow-md border-neutral-300' : 'py-2'
        }`}
      >
        {/* Brand Zone: 3D puffy "a" squircle + wordmark */}
        <a
          href="#"
          className="flex items-center group transition-transform active:scale-95"
          aria-label="aimo home"
        >
          <AimoLogo size="sm" showText={true} />
        </a>

        {/* Desktop Nav Zone: Clean unboxed typography links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-[14px] font-medium text-neutral-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-black transition-colors relative py-1 hover:underline underline-offset-4 decoration-neutral-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions Zone: Start Project Ghost button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenInquiry}
            className="flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-neutral-900 bg-neutral-100 hover:bg-[#f7be00] hover:text-black border border-neutral-300/80 transition-all duration-200 active:scale-95 cursor-pointer shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.nav.getStarted}</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-500 rtl:rotate-[-90deg]" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-1.5 rounded-full hover:bg-neutral-100 text-neutral-700 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-14 left-4 right-4 bg-white/98 backdrop-blur-xl border border-neutral-200 rounded-3xl p-5 shadow-2xl md:hidden flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              {t.brand.studio}
            </span>
            <span className="text-xs font-mono text-neutral-400">aimoads.site</span>
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-xl hover:bg-neutral-100 text-neutral-800 text-base font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-neutral-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-2.5 px-4 rounded-full bg-[#f7be00] text-black font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.nav.getStarted}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
