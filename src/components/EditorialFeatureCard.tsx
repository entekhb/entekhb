import React from 'react';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

interface EditorialFeatureCardProps {
  onOpenAuditModal: () => void;
}

export const EditorialFeatureCard: React.FC<EditorialFeatureCardProps> = ({
  onOpenAuditModal,
}) => {
  return (
    <section id="philosophy" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Steep Signature Accent Blush Peach Card */}
        <div className="bg-[#fbe1d1] rounded-[24px] p-8 sm:p-14 text-[#5d2a1a] relative overflow-hidden">
          {/* Subtle warm decorative stamp */}
          <div className="flex items-center justify-between border-b border-[#5d2a1a]/15 pb-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#5d2a1a]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#5d2a1a]">
                The aimo Content Philosophy
              </span>
            </div>
            <span className="text-xs font-mono text-[#5d2a1a]/70">aimoads.site / 2026</span>
          </div>

          <div className="max-w-3xl">
            <h3 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal leading-[1.2] mb-6 text-[#5d2a1a]">
              “Why 90% of business social media fails: They produce random aesthetics instead of{' '}
              <span className="italic font-normal underline decoration-[#5d2a1a]/30 underline-offset-4">
                targeted revenue engines
              </span>
              .”
            </h3>

            <p className="text-base sm:text-lg text-[#5d2a1a]/90 leading-relaxed font-normal mb-8 max-w-2xl">
              Anyone can post a pretty video or template graphic. But turning a skeptical stranger into an inbound customer requires psychological pacing, frictionless mobile hooks, and authoritative slide design. That is the exact formula aimo deploys for your business.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-2">
              <button
                onClick={onOpenAuditModal}
                className="h-12 px-7 rounded-full bg-[#5d2a1a] text-[#fbe1d1] hover:bg-[#451f13] transition-all text-sm font-medium flex items-center justify-center gap-2 cursor-pointer self-start shadow-sm"
              >
                <span>Audit Your Current Content Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs text-[#5d2a1a]/80">
                <TrendingUp className="w-4 h-4 text-[#5d2a1a]" />
                <span>Zero fluff • Results guaranteed in 30 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
