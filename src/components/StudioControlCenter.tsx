import React from 'react';
import { Translations } from '../translations';
import { 
  Radio, 
  Clock, 
  Eye, 
  ThumbsUp, 
  TrendingUp, 
  MessageCircle, 
  ArrowRight,
  ShieldCheck,
  Video,
  FileCheck
} from 'lucide-react';

interface StudioControlCenterProps {
  t: Translations;
  onOpenInquiry: () => void;
  onWhatsApp: () => void;
}

export const StudioControlCenter: React.FC<StudioControlCenterProps> = ({ 
  t, 
  onOpenInquiry, 
  onWhatsApp 
}) => {
  const steps = [
    { num: '01', title: t.controlRoom.pipelineSteps.step1Title, desc: t.controlRoom.pipelineSteps.step1Desc },
    { num: '02', title: t.controlRoom.pipelineSteps.step2Title, desc: t.controlRoom.pipelineSteps.step2Desc },
    { num: '03', title: t.controlRoom.pipelineSteps.step3Title, desc: t.controlRoom.pipelineSteps.step3Desc },
    { num: '04', title: t.controlRoom.pipelineSteps.step4Title, desc: t.controlRoom.pipelineSteps.step4Desc },
  ];

  const pressPartners = [
    { name: 'Instagram Creator Network', type: 'Short-Form Specialists' },
    { name: 'YouTube Creator Program', type: '4K Long-Form Retention' },
    { name: 'Apple ProRes & DaVinci Studio', type: 'Broadcast Color Pipeline' },
    { name: 'Adobe Creative Master Suite', type: 'Kinetic Motion Typography' },
  ];

  return (
    <section id="workflow" className="relative py-20 sm:py-32 px-4 bg-[#0d0021] text-white overflow-hidden">
      
      {/* Flighty Atmospheric Radial Violet Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, rgba(107, 20, 216, 0.3) 0%, rgba(13, 0, 33, 0.95) 70%, #0d0021 100%)',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        
        {/* Section Header (White display typography on deep indigo) */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#f7be00] text-xs font-semibold mb-4 border border-white/15">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>{t.controlRoom.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-5 leading-tight">
            {t.controlRoom.title}
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto leading-relaxed font-normal">
            {t.controlRoom.subtitle}
          </p>
        </div>

        {/* Live Studio Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="bg-[#05010d] rounded-2xl p-5 border border-white/10 shadow-flighty-card-dark flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-neutral-400 font-mono">DRAFT TIME</span>
              <Clock className="w-4 h-4 text-[#f7be00]" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                {t.controlRoom.stats.stat1Val}
              </div>
              <span className="text-xs text-neutral-400 mt-1 block">
                {t.controlRoom.stats.stat1Label}
              </span>
            </div>
          </div>

          <div className="bg-[#05010d] rounded-2xl p-5 border border-white/10 shadow-flighty-card-dark flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-neutral-400 font-mono">VIEWS ACCUMULATED</span>
              <Eye className="w-4 h-4 text-[#007bff]" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                {t.controlRoom.stats.stat2Val}
              </div>
              <span className="text-xs text-neutral-400 mt-1 block">
                {t.controlRoom.stats.stat2Label}
              </span>
            </div>
          </div>

          <div className="bg-[#05010d] rounded-2xl p-5 border border-white/10 shadow-flighty-card-dark flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-neutral-400 font-mono">APPROVAL RATE</span>
              <ThumbsUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                {t.controlRoom.stats.stat3Val}
              </div>
              <span className="text-xs text-neutral-400 mt-1 block">
                {t.controlRoom.stats.stat3Label}
              </span>
            </div>
          </div>

          <div className="bg-[#05010d] rounded-2xl p-5 border border-white/10 shadow-flighty-card-dark flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-neutral-400 font-mono">INBOUND MULTIPLIER</span>
              <TrendingUp className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                {t.controlRoom.stats.stat4Val}
              </div>
              <span className="text-xs text-neutral-400 mt-1 block">
                {t.controlRoom.stats.stat4Label}
              </span>
            </div>
          </div>
        </div>

        {/* 4-Step Production Pipeline Cards */}
        <div className="mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-[#f7be00] uppercase mb-6 text-center sm:text-left rtl:sm:text-right">
            CONTINUOUS 4-STEP SPRINT WORKFLOW
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#05010d]/90 rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 relative group"
              >
                <span className="text-xs font-mono font-bold text-[#f7be00] mb-3 block">
                  STEP {step.num}
                </span>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-[#f7be00] transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Flighty Press / Ecosystem Credibility Grid (4 Columns on dark canvas) */}
        <div className="pt-8 border-t border-white/10 mb-14">
          <div className="text-center mb-6">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              Engineered For Modern Content Creators & Global Brands
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {pressPartners.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#05010d] rounded-xl py-5 px-4 border border-white/8 text-center flex flex-col items-center justify-center"
              >
                <span className="text-sm font-bold text-white/90 mb-1">
                  {item.name}
                </span>
                <span className="text-[11px] text-neutral-500 font-mono">
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar in Dark Control Room */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          {/* Amber Download/Action Button with shimmer */}
          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#f7be00] hover:bg-[#eab000] text-black font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg cursor-pointer gemini-shimmer"
          >
            <span>{t.controlRoom.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>

          {/* Dark Ghost WhatsApp Button */}
          <button
            onClick={onWhatsApp}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/20 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>{t.controlRoom.ctaSecondary}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
