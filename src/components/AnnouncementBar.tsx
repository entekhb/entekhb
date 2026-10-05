import React from 'react';
import { ArrowRight, Sparkles, X } from 'lucide-react';
import { Translations } from '../translations';

interface AnnouncementBarProps {
  t: Translations;
  onActionClick: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ t, onActionClick }) => {
  const [visible, setVisible] = React.useState(true);

  if (!visible) return null;

  return (
    <aside aria-label="Announcement" className="w-full bg-[#0d0021] text-white border-b border-white/10 px-4 py-2 text-xs md:text-sm transition-all duration-300 relative z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-3">
        <div className="flex-1 flex items-center justify-center gap-2.5 text-center flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/10 text-white font-medium text-[11px] border border-white/15">
            <Sparkles className="w-3 h-3 text-[#f7be00]" />
            {t.announcement.pill}
          </span>
          <span className="text-white/90 font-normal">
            {t.announcement.text}
          </span>
          <button
            onClick={onActionClick}
            className="inline-flex items-center gap-1 text-[#f7be00] hover:text-white font-semibold transition-colors cursor-pointer ml-1"
          >
            <span>{t.announcement.link}</span>
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </button>
        </div>

        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss announcement"
          className="text-white/60 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors shrink-0"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
