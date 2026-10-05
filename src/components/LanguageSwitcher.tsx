import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { Globe, Check, ChevronUp } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
}

const languages: Array<{ code: Language; name: string; nativeName: string; flag: string; dir: 'ltr' | 'rtl' }> = [
  { code: 'en', name: 'English', nativeName: 'English (US)', flag: '🇺🇸', dir: 'ltr' },
  { code: 'fa', name: 'Persian', nativeName: 'فارسی (FA)', flag: '🇮🇷', dir: 'rtl' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية (AR)', flag: '🇦🇪', dir: 'rtl' },
  { code: 'es', name: 'Spanish', nativeName: 'Español (ES)', flag: '🇪🇸', dir: 'ltr' },
  { code: 'de', name: 'German', nativeName: 'Deutsch (DE)', flag: '🇩🇪', dir: 'ltr' },
  { code: 'fr', name: 'French', nativeName: 'Français (FR)', flag: '🇫🇷', dir: 'ltr' },
];

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, onSelectLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeLangObj = languages.find((l) => l.code === currentLang) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="fixed bottom-5 end-5 z-50 flex flex-col items-end"
    >
      {/* Expanded Popover List */}
      {isOpen && (
        <div className="mb-2 w-64 bg-white/95 backdrop-blur-xl border border-neutral-200/90 rounded-2xl p-2 shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-200 text-neutral-900">
          <div className="px-3 py-2 border-b border-neutral-100 flex items-center justify-between text-xs font-bold text-neutral-500 uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#007bff]" />
              <span>Select Language</span>
            </span>
            <span className="text-[10px] font-mono text-neutral-400">aimo i18n</span>
          </div>

          <div className="py-1 flex flex-col gap-0.5">
            {languages.map((lang) => {
              const isSelected = lang.code === currentLang;
              return (
                <button
                  key={lang.code}
                  onClick={() => {
                    onSelectLang(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-neutral-100 font-bold text-neutral-950'
                      : 'hover:bg-neutral-50 text-neutral-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base select-none">{lang.flag}</span>
                    <span className={lang.dir === 'rtl' ? 'font-serif' : 'font-sans'}>
                      {lang.nativeName}
                    </span>
                  </div>
                  {isSelected && (
                    <Check className="w-4 h-4 text-[#007bff]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Trigger Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Switch Language"
        aria-expanded={isOpen}
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white/95 backdrop-blur-md text-neutral-900 border border-neutral-200/90 shadow-flighty-pill hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer font-semibold text-xs sm:text-sm group"
      >
        <span className="text-sm select-none">{activeLangObj.flag}</span>
        <span className="font-bold tracking-tight uppercase text-xs">
          {activeLangObj.code}
        </span>
        <span className="text-neutral-400 text-xs hidden xs:inline">
          {activeLangObj.nativeName.split(' ')[0]}
        </span>
        <ChevronUp className={`w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
};
