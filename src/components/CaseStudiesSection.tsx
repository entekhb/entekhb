import React from 'react';
import { Translations } from '../translations';
import { TrendingUp, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface CaseStudiesProps {
  t: Translations;
  onOpenInquiry: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesProps> = ({ t, onOpenInquiry }) => {
  return (
    <section id="case-studies" className="py-16 sm:py-24 px-4 bg-[#faf8f7] border-t border-neutral-200/80">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-[#007bff] uppercase mb-2 block">
            {t.caseStudiesSection.kicker}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight mb-3">
            {t.caseStudiesSection.title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            {t.caseStudiesSection.subtitle}
          </p>
        </div>

        {/* 3 Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.caseStudiesSection.studies.map((study, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/80 shadow-flighty-card flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* Category & Client Header */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-neutral-100">
                  <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
                    {study.category}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>

                <h3 className="text-lg font-bold text-neutral-950 mb-4 group-hover:text-[#6b14d8] transition-colors">
                  {study.client}
                </h3>

                {/* Main Metric Highlight (Flighty Bold Number Style) */}
                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/60 mb-5">
                  <div className="text-3xl sm:text-4xl font-black text-neutral-950 font-mono tracking-tight flex items-center gap-1.5">
                    <TrendingUp className="w-5 h-5 text-[#007bff]" />
                    <span>{study.stat}</span>
                  </div>
                  <span className="text-xs font-semibold text-neutral-600 mt-1 block">
                    {study.label}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                  {study.desc}
                </p>
              </div>

              {/* Concrete Outcome Strip */}
              <div className="pt-4 border-t border-neutral-100">
                <div className="flex items-start gap-2 text-xs font-bold text-neutral-900 mb-4 bg-emerald-50/80 p-3 rounded-xl border border-emerald-200/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{study.impact}</span>
                </div>

                <button
                  onClick={onOpenInquiry}
                  className="w-full py-2 px-3 rounded-full text-xs font-bold text-neutral-700 hover:text-black hover:bg-neutral-100 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Build A Similar Campaign</span>
                  <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-[-90deg]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
