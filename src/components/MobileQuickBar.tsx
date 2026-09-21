import React from 'react';
import { ArrowRight, Sparkles, Send, MessageCircle } from 'lucide-react';
import { AimoLogo } from './AimoLogo';

interface MobileQuickBarProps {
  onOpenAuditModal: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenAuditModal }) => {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="fixed bottom-3 inset-x-3 z-40 sm:hidden"
    >
      <div className="bg-[#17191c]/95 backdrop-blur-lg text-white rounded-full p-2 pl-3 shadow-2xl border border-white/10 flex items-center justify-between">
        {/* Left: Brand Mini */}
        <a href="#" className="flex items-center gap-2">
          <AimoLogo size="sm" showWordmark={true} withDomain={false} className="text-white" />
        </a>

        {/* Right Action Group */}
        <div className="flex items-center gap-2">
          <a
            href="https://t.me/aimoads"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            title="Telegram"
            aria-label="Telegram"
          >
            <Send className="w-3.5 h-3.5 text-[#ded5f7]" />
          </a>

          <button
            onClick={onOpenAuditModal}
            className="h-9 px-4 rounded-full bg-white text-[#17191c] text-xs font-semibold flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform cursor-pointer"
          >
            <span>Book Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
