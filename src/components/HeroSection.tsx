import React, { useState } from 'react';
import { ArrowRight, Play, Sparkles, CheckCircle2, Send, Search } from 'lucide-react';
import {
  RetentionCurveArtifact,
  CarouselMetricArtifact,
  RevenuePipelineArtifact,
  AvatarPresenceBubble,
} from './FloatingArtifacts';

interface HeroSectionProps {
  onOpenAuditModal: () => void;
  onExploreWork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenAuditModal,
  onExploreWork,
}) => {
  const [composerInput, setComposerInput] = useState('');
  const [composerResult, setComposerResult] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSimulatedAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!composerInput.trim()) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setComposerResult(
        `Analysis for @${composerInput.replace('@', '')}: Content lacks conversion hooks & slide hierarchy. Potential estimated lift: +240% DM pipeline.`
      );
    }, 900);
  };

  return (
    <section className="relative pt-24 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-white">
      {/* Subtle paper grain / ambient gradient */}
      <div className="absolute top-0 inset-x-0 h-[450px] bg-gradient-to-b from-[#fafafb] to-transparent -z-10 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Top Minimal Pill Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2f2f3] text-[#17191c] text-xs sm:text-sm font-medium border border-black/[0.04] transition-transform hover:scale-[1.01]">
            <span className="w-2 h-2 rounded-full bg-[#7c3aed]" />
            <span className="font-semibold">aimo</span>
            <span className="text-[#777b86]">|</span>
            <span className="text-[#5d2a1a] bg-[#fbe1d1] px-2 py-0.5 rounded-full text-[11px] font-medium">
              Targeted Content Agency
            </span>
          </div>
        </div>

        {/* Editorial Headline - Steep Style Serif at weight 400 with italic phrase */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-[76px] font-normal leading-[1.12] tracking-[-0.03em] text-[#17191c] mb-6 sm:mb-8">
            Targeted content that turns{' '}
            <span className="italic font-normal text-[#5b21b6] tracking-[-0.02em]">
              scrollers into revenue.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[#777b86] font-normal leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
            We produce high-retention video edits, scroll-stopping Instagram carousels, and high-converting modern websites engineered specifically to acquire customers and scale your brand.
          </p>

          {/* Steep Lozenge Button Pair */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
            <button
              onClick={onOpenAuditModal}
              className="w-full sm:w-auto h-12 sm:h-13 px-8 rounded-full bg-[#17191c] text-white text-base font-medium transition-all duration-200 hover:bg-black hover:scale-[1.02] active:scale-[0.98] shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book a Growth Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreWork}
              className="w-full sm:w-auto h-12 sm:h-13 px-8 rounded-full bg-transparent border border-[#17191c] text-[#17191c] text-base font-medium transition-all duration-200 hover:bg-[#fafafb] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Portfolio</span>
              <span className="text-sm font-normal text-[#777b86] font-mono">→</span>
            </button>
          </div>
        </div>

        {/* Steep-Style Floating Artifacts Grid / Collage */}
        {/* Desktop Layout: 3 floating cards arranged around center */}
        <div className="hidden lg:grid grid-cols-3 gap-6 items-start relative max-w-5xl mx-auto pt-4">
          {/* Top Left: Retention Curve */}
          <div className="transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center gap-2 mb-2 px-1">
              <AvatarPresenceBubble initials="AL" name="Alex (Video Director)" color="#e0f2fe" />
              <span className="text-[11px] text-[#777b86]">Pacing & Kinetic Hook Engine</span>
            </div>
            <RetentionCurveArtifact className="shadow-artifact hover:shadow-lg transition-all" />
          </div>

          {/* Center: Live Strategy Composer (Steep Ask Anything pattern) */}
          <div className="space-y-4">
            <div className="bg-white rounded-[20px] p-4 shadow-artifact border border-black/[0.05]">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#7c3aed]" />
                <span className="text-xs font-semibold text-[#17191c]">
                  Quick Instagram Assessment
                </span>
              </div>
              <form onSubmit={handleSimulatedAudit} className="relative">
                <input
                  type="text"
                  value={composerInput}
                  onChange={(e) => setComposerInput(e.target.value)}
                  placeholder="Enter your Instagram handle (e.g. @brand)..."
                  className="w-full h-11 pl-3 pr-10 text-xs bg-[#f2f2f3] rounded-xl text-[#17191c] placeholder:text-[#a3a6af] focus:outline-none focus:ring-1 focus:ring-[#7c3aed]"
                />
                <button
                  type="submit"
                  disabled={isAnalyzing}
                  className="absolute right-1 top-1 h-9 w-9 bg-[#17191c] text-white rounded-lg flex items-center justify-center hover:bg-black transition-colors"
                  title="Analyze"
                >
                  {isAnalyzing ? (
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5" />
                  )}
                </button>
              </form>

              {composerResult ? (
                <div className="mt-2.5 p-2 bg-[#fbe1d1]/60 text-[#5d2a1a] text-[11px] rounded-lg leading-relaxed border border-[#5d2a1a]/10">
                  {composerResult}
                </div>
              ) : (
                <div className="flex items-center justify-between text-[11px] text-[#777b86] mt-2 px-1">
                  <span>Free conversion diagnostics</span>
                  <span className="text-[#5b21b6] font-medium">aimoads.site</span>
                </div>
              )}
            </div>

            {/* Revenue Pipeline Card */}
            <RevenuePipelineArtifact className="shadow-artifact hover:shadow-lg transition-all" />
          </div>

          {/* Right: Instagram Carousel Performance */}
          <div className="transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center gap-2 mb-2 px-1 justify-end">
              <span className="text-[11px] text-[#777b86]">Visual Storytelling</span>
              <AvatarPresenceBubble initials="MO" name="Mona (Design Lead)" color="#fef08a" />
            </div>
            <CarouselMetricArtifact className="shadow-artifact hover:shadow-lg transition-all" />
          </div>
        </div>

        {/* Mobile-Optimized Artifacts View (80% Mobile Traffic Priority) */}
        <div className="lg:hidden space-y-4 max-w-md mx-auto">
          {/* Quick Instagram Diagnostic Bar */}
          <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-black/[0.06]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#17191c] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7c3aed]" />
                Free Instagram Audit
              </span>
              <span className="text-[10px] text-[#777b86]">Instant feedback</span>
            </div>
            <form onSubmit={handleSimulatedAudit} className="flex gap-2">
              <input
                type="text"
                value={composerInput}
                onChange={(e) => setComposerInput(e.target.value)}
                placeholder="Your Instagram handle..."
                className="flex-1 h-10 px-3 text-xs bg-[#f2f2f3] rounded-xl text-[#17191c] placeholder:text-[#a3a6af] focus:outline-none"
              />
              <button
                type="submit"
                className="h-10 px-4 bg-[#17191c] text-white rounded-xl text-xs font-medium shrink-0 flex items-center gap-1"
              >
                {isAnalyzing ? '...' : 'Check'}
              </button>
            </form>
            {composerResult && (
              <div className="mt-2 p-2 bg-[#fbe1d1] text-[#5d2a1a] text-[11px] rounded-lg">
                {composerResult}
              </div>
            )}
          </div>

          {/* Swipeable / Tabbed Mobile Artifacts Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <RetentionCurveArtifact />
            <CarouselMetricArtifact />
          </div>
        </div>

        {/* Trust Badges / Social Proof Ribbon */}
        <div className="mt-14 sm:mt-20 pt-8 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-6 text-xs text-[#777b86]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Targeted at High-Paying Clients</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Fast Turnaround & Rapid Iteration</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Complete Page & Web Modernization</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#17191c]">aimoads.site</span>
            <span>• Built for scalable revenue</span>
          </div>
        </div>
      </div>
    </section>
  );
};
