import React from 'react';
import { Translations } from '../translations';
import { AimoLogo } from './AimoLogo';
import { Instagram, MessageCircle, ArrowUp } from 'lucide-react';

interface FooterProps {
  t: Translations;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ t, onOpenInquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05010d] text-white pt-16 pb-20 sm:pb-16 px-4 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="mb-3">
              <AimoLogo size="md" textColor="text-white" showText={true} />
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm mb-6 leading-relaxed">
              {t.footer.tagline}
            </p>

            {/* Social & Contact Icons (Instagram & WhatsApp only as requested) */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/aimoads"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram aimoads"
                className="w-10 h-10 rounded-full bg-white/8 hover:bg-[#6b14d8] text-white/80 hover:text-white flex items-center justify-center transition-all border border-white/10 shadow-sm"
                title="Instagram: @aimoads"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/989999927201"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white/8 hover:bg-emerald-600 text-white/80 hover:text-white flex items-center justify-center transition-all border border-white/10 shadow-sm"
                title="WhatsApp: +98 999 992 7201"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6">
            <div>
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest block mb-4">
                {t.footer.linksTitle}
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
                <li>
                  <a href="#services" className="hover:text-[#f7be00] transition-colors">
                    {t.nav.services}
                  </a>
                </li>
                <li>
                  <a href="#reels-showcase" className="hover:text-[#f7be00] transition-colors">
                    {t.nav.reels}
                  </a>
                </li>
                <li>
                  <a href="#workflow" className="hover:text-[#f7be00] transition-colors">
                    {t.nav.workflow}
                  </a>
                </li>
                <li>
                  <a href="#calculator" className="hover:text-[#f7be00] transition-colors">
                    {t.nav.calculator}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest block mb-4">
                Disciplines
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
                <li>
                  <button onClick={onOpenInquiry} className="hover:text-[#007bff] transition-colors text-left rtl:text-right cursor-pointer">
                    Instagram Reels
                  </button>
                </li>
                <li>
                  <button onClick={onOpenInquiry} className="hover:text-[#007bff] transition-colors text-left rtl:text-right cursor-pointer">
                    YouTube 4K
                  </button>
                </li>
                <li>
                  <button onClick={onOpenInquiry} className="hover:text-[#007bff] transition-colors text-left rtl:text-right cursor-pointer">
                    Motion Graphics
                  </button>
                </li>
                <li>
                  <button onClick={onOpenInquiry} className="hover:text-[#007bff] transition-colors text-left rtl:text-right cursor-pointer">
                    Web & Bio-Links
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Back to top & Studio Identity */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end">
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors mb-4 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>

            <span className="text-[11px] font-mono text-neutral-400 block mb-2">
              aimo Content Studio
            </span>
            <div className="flex items-center gap-2 bg-white/5 px-3.5 py-2 rounded-xl border border-white/10 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-neutral-300 font-medium">Available for New Projects</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} aimo Content Studio. {t.footer.rights}
          </div>

          <div className="flex items-center gap-4 text-neutral-400">
            <span className="hover:underline cursor-pointer">{t.footer.privacy}</span>
            <span>·</span>
            <span className="hover:underline cursor-pointer">{t.footer.terms}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
