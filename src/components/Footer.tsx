import React from 'react';
import { AimoLogo } from './AimoLogo';
import { ArrowUpRight, Send, MessageCircle, Instagram, Mail } from 'lucide-react';

interface FooterProps {
  onOpenAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuditModal }) => {
  return (
    <footer className="bg-white border-t border-black/[0.06] pt-16 pb-24 sm:pb-16 text-[#17191c]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Top CTA Banner in Steep Editorial Style */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 sm:pb-16 border-b border-black/[0.06] gap-6">
          <div>
            <h3 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#17191c] mb-2">
              Ready to turn attention into <span className="italic text-[#5b21b6]">actual clients</span>?
            </h3>
            <p className="text-sm sm:text-base text-[#777b86]">
              Let’s build targeted video edits, graphic carousels, and modern web experiences that scale your business.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAuditModal}
              className="h-12 px-7 rounded-full bg-[#17191c] text-white text-sm font-medium hover:bg-black transition-all flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Book Growth Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12">
          {/* Col 1 & 2: Brand & Positioning */}
          <div className="col-span-2 space-y-4">
            <AimoLogo size="md" showWordmark={true} withDomain={true} />
            <p className="text-xs sm:text-sm text-[#777b86] max-w-sm leading-relaxed">
              aimo is a high-performance content & digital agency. We modernize business presence and engineer targeted creative assets that systematically convert social followers into revenue.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs text-[#17191c] font-medium">
                Accepting 3 new brand partners this month
              </span>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#17191c] mb-3">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#777b86]">
              <li>
                <a href="#services" className="hover:text-[#17191c] transition-colors">
                  Reels & Video Editing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#17191c] transition-colors">
                  Instagram Carousels
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#17191c] transition-colors">
                  Modern Website Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#17191c] transition-colors">
                  Full Page Modernization
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Platform */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#17191c] mb-3">
              Agency
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#777b86]">
              <li>
                <a href="#portfolio" className="hover:text-[#17191c] transition-colors">
                  Portfolio & Swipe Files
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#17191c] transition-colors">
                  Content ROI Calculator
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-[#17191c] transition-colors">
                  Case Studies & Proof
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-[#17191c] transition-colors">
                  Content Philosophy
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Connect */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#17191c] mb-3">
              Contact
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#777b86]">
              <li>
                <a
                  href="https://t.me/aimoads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#17191c] transition-colors flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5 text-[#7c3aed]" />
                  <span>Telegram: @aimoads</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/?text=Hello%20aimo%20team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#17191c] transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Direct</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#17191c] transition-colors flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-600" />
                  <span>Instagram DM</span>
                </a>
              </li>
              <li>
                <span className="text-[#17191c] font-medium block">contact@aimoads.site</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#979799]">
          <div>
            © {new Date().getFullYear()} aimo (aimoads.site). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Steep-inspired aesthetic</span>
            <span>•</span>
            <span>Engineered for conversion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
