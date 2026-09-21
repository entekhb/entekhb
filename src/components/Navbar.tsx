import React, { useState, useEffect } from 'react';
import { AimoLogo } from './AimoLogo';
import { Menu, X, ArrowRight, MessageCircle, Send } from 'lucide-react';

interface NavbarProps {
  onOpenAuditModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuditModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'ROI Calculator', href: '#calculator' },
    { label: 'Case Studies', href: '#results' },
    { label: 'Why aimo', href: '#philosophy' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-black/[0.05] py-3'
            : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center group">
            <AimoLogo size="md" showWordmark={true} withDomain={true} />
          </a>

          {/* Center Navigation Links - Steep whisper quiet */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] text-[#777b86] hover:text-[#17191c] transition-colors font-normal tracking-tight"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://t.me/aimoads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-[#777b86] hover:text-[#17191c] px-3 py-2 flex items-center gap-1.5 transition-colors"
            >
              <Send className="w-3.5 h-3.5 text-[#7c3aed]" />
              <span>Telegram</span>
            </a>

            <button
              onClick={onOpenAuditModal}
              className="h-10 px-5 rounded-full bg-[#17191c] text-white text-[14px] font-medium transition-all duration-200 hover:bg-black hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span>Book Growth Audit</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>

          {/* Mobile Action + Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenAuditModal}
              className="h-8 px-3.5 rounded-full bg-[#17191c] text-white text-[12px] font-medium flex items-center gap-1"
            >
              Audit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-full bg-[#f2f2f3] flex items-center justify-center text-[#17191c] hover:bg-[#eaeaea] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 sm:hidden bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="fixed inset-y-0 right-0 w-[82%] max-w-[320px] bg-white p-6 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-black/[0.06]">
                <AimoLogo size="sm" showWordmark={true} withDomain={true} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#f2f2f3] flex items-center justify-center text-[#17191c]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg text-[#17191c] font-medium py-1.5 border-b border-black/[0.03] flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-[#979799] text-sm">→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-black/[0.06]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuditModal();
                }}
                className="w-full h-12 rounded-full bg-[#17191c] text-white text-sm font-medium flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Book Growth Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://t.me/aimoads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 rounded-full border border-black/10 bg-[#fafafb] text-[#17191c] text-xs font-medium flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5 text-[#7c3aed]" />
                  <span>Telegram</span>
                </a>
                <a
                  href="https://wa.me/?text=Hello%20aimo%20team,%20I'd%20like%20to%20grow%20my%20business%20content"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 rounded-full border border-black/10 bg-[#fafafb] text-[#17191c] text-xs font-medium flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
              <div className="text-center text-[11px] text-[#777b86] pt-1">
                Official agency domain: <span className="text-[#17191c] font-medium">aimoads.site</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
