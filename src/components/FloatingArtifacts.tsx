import React, { useState } from 'react';
import { Play, TrendingUp, ArrowUpRight, MessageSquare, Check, Sparkles } from 'lucide-react';

export const RetentionCurveArtifact: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`bg-white rounded-[20px] p-4 text-[#17191c] shadow-artifact border border-black/[0.04] select-none ${className}`}
    >
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-medium tracking-wide uppercase text-[#777b86]">
            Reel Retention
          </span>
        </div>
        <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
          +84.2% Avg. Watch Time
        </span>
      </div>

      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-2xl font-semibold tracking-tight">3.4M</span>
        <span className="text-xs text-[#777b86]">organic impressions</span>
      </div>

      {/* Retention SVG Graph */}
      <div className="h-16 w-full relative">
        <svg viewBox="0 0 200 60" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="retentionGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          {/* Fill */}
          <path
            d="M 0 10 Q 30 12, 60 16 T 120 22 T 180 20 L 200 18 L 200 60 L 0 60 Z"
            fill="url(#retentionGrad)"
          />
          {/* Benchmark line */}
          <path
            d="M 0 15 Q 30 38, 70 48 T 150 54 L 200 55"
            fill="none"
            stroke="#e2e4e9"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          {/* aimo optimized line */}
          <path
            d="M 0 10 Q 30 12, 60 16 T 120 22 T 180 20 L 200 18"
            fill="none"
            stroke="#5b21b6"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Key Hook point indicator */}
          <circle cx="60" cy="16" r="3.5" fill="#ffffff" stroke="#5b21b6" strokeWidth="2.5" />
        </svg>
      </div>

      <div className="flex items-center justify-between text-[11px] text-[#777b86] pt-1 border-t border-black/[0.04]">
        <span>0s Hook</span>
        <span className="font-medium text-[#17191c]">aimo Pacing vs. Industry Avg.</span>
        <span>60s CTA</span>
      </div>
    </div>
  );
};

export const CarouselMetricArtifact: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <div
      className={`bg-white rounded-[20px] p-4 text-[#17191c] shadow-artifact border border-black/[0.04] select-none ${className}`}
    >
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]" />
          <span className="text-[11px] font-medium tracking-wide uppercase text-[#777b86]">
            Instagram Slide Engine
          </span>
        </div>
        <span className="text-[11px] font-semibold text-[#17191c]">
          Slide {activeSlide}/5
        </span>
      </div>

      {/* Mini Carousel Card preview */}
      <div
        onClick={() => setActiveSlide((prev) => (prev % 5) + 1)}
        className="cursor-pointer bg-[#fafafb] hover:bg-[#f2f2f3] transition-colors p-3 rounded-xl border border-black/[0.05] relative overflow-hidden"
      >
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white border border-black/[0.06] text-[#5b21b6]">
            {activeSlide === 1
              ? 'Pattern Interrupt'
              : activeSlide === 5
              ? 'Lead Magnet CTA'
              : 'Actionable Framework'}
          </span>
          <span className="text-[10px] text-[#777b86]">Tap to slide →</span>
        </div>
        <p className="text-xs font-medium text-[#17191c] leading-snug line-clamp-2">
          {activeSlide === 1 && '"The 3 Content Mistakes Costing Your Brand $10k/Month"'}
          {activeSlide === 2 && 'Step 1: Replace generic reels with targeted problem-solving hooks'}
          {activeSlide === 3 && 'Step 2: Visual contrast hierarchy stops the 0.4s thumb scroll'}
          {activeSlide === 4 && 'Step 3: Direct DM trigger keyword instead of passive links'}
          {activeSlide === 5 && 'Result: 140+ targeted DMs and 28 closed sales'}
        </p>
      </div>

      <div className="mt-2.5 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-1 text-[#777b86]">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
          <span>Save rate:</span>
          <span className="font-semibold text-[#17191c]">8.4% (4.2x avg)</span>
        </div>
        <span className="text-[#7c3aed] font-medium hover:underline cursor-pointer">
          High Intent
        </span>
      </div>
    </div>
  );
};

export const RevenuePipelineArtifact: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`bg-white rounded-[20px] p-4 text-[#17191c] shadow-artifact border border-black/[0.04] select-none ${className}`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#fbe1d1] text-[#5d2a1a] flex items-center justify-center text-[10px] font-bold">
            $
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-[#777b86]">
              Attributed Revenue
            </div>
            <div className="text-base font-semibold text-[#17191c] leading-tight">
              +$38,400 <span className="text-xs font-normal text-emerald-600">this month</span>
            </div>
          </div>
        </div>
        <ArrowUpRight className="w-4 h-4 text-[#777b86]" />
      </div>

      <div className="space-y-1.5 pt-2 border-t border-black/[0.04]">
        <div className="flex items-center justify-between text-xs py-1 px-2 rounded-lg bg-[#fafafb]">
          <span className="text-[#777b86] flex items-center gap-1.5">
            <MessageSquare className="w-3 h-3 text-[#7c3aed]" />
            Instagram Inbound DMs
          </span>
          <span className="font-medium text-[#17191c]">84 leads</span>
        </div>
        <div className="flex items-center justify-between text-xs py-1 px-2 rounded-lg bg-[#fafafb]">
          <span className="text-[#777b86] flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-amber-500" />
            Website PageSpeed
          </span>
          <span className="font-medium text-emerald-600 font-mono">0.6s / 99 Score</span>
        </div>
      </div>
    </div>
  );
};

export const AvatarPresenceBubble: React.FC<{
  initials: string;
  name: string;
  color: string;
  cursorOffset?: { x: number; y: number };
}> = ({ initials, name, color }) => {
  return (
    <div className="relative inline-flex items-center gap-1.5 group cursor-default">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-[#17191c] border-2 border-white shadow-sm transition-transform group-hover:scale-105"
        style={{ backgroundColor: color }}
      >
        {initials}
      </div>
      {/* Pointer cursor mark representing live collaboration */}
      <svg
        viewBox="0 0 16 16"
        className="w-3.5 h-3.5 absolute -bottom-1 -right-1 text-[#17191c] drop-shadow-sm pointer-events-none"
        fill="currentColor"
      >
        <path d="M0 0 L12 4 L6 7 L4 13 Z" />
      </svg>
      <div className="hidden group-hover:block absolute left-full ml-1 px-2 py-0.5 bg-[#17191c] text-white text-[10px] rounded-md whitespace-nowrap z-20">
        {name}
      </div>
    </div>
  );
};
