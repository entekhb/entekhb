import React from 'react';
import { TrendingUp, ArrowUpRight, Award, Zap, ShieldCheck } from 'lucide-react';
import { CaseStudy } from '../types';

export const TransformationMetrics: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      client: 'Novex FinTech',
      niche: 'B2B Software & Payments',
      challenge: 'High production costs with zero qualified leads generated from social channels.',
      solution: 'Replaced long boring talking-head videos with kinetic 40s educational carousels and problem-first hooks.',
      results: {
        primary: '+420%',
        primaryLabel: 'Qualified Lead Inquiries',
        secondary: '$180,000',
        secondaryLabel: 'Pipeline Added in 60 Days',
      },
      highlightQuote:
        '“aimo didn’t just edit our videos; they re-architected how we communicate value. Our Instagram page became our #1 lead channel.”',
      author: 'David Vance',
      role: 'Head of Growth, Novex',
    },
    {
      id: '2',
      client: 'Aura Studio Living',
      niche: 'High-End Architecture & Design',
      challenge: 'Outdated aesthetic profile and low engagement from affluent local homeowners.',
      solution: 'Full page modernization, cinematic reels with tailored sound design, and a modern sub-second portfolio website.',
      results: {
        primary: '3.4x',
        primaryLabel: 'Average Reel Watch Time',
        secondary: '14 Signed',
        secondaryLabel: 'Commercial Interior Deals',
      },
      highlightQuote:
        '“The aesthetic polish matches the million-dollar spaces we build. Clients now tell us they found us because our page looked miles ahead of anyone else.”',
      author: 'Elena Rostova',
      role: 'Principal Architect',
    },
  ];

  return (
    <section id="results" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-widest text-[#979799] font-medium block mb-2">
            Proven Outcomes
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#17191c] leading-[1.2] mb-3">
            Real transformations that{' '}
            <span className="italic text-[#5b21b6]">impact the bottom line</span>.
          </h2>
          <p className="text-sm sm:text-base text-[#777b86]">
            Every metric we track connects directly to revenue: watch time, save rates, profile visits, and inbound conversations.
          </p>
        </div>

        {/* Global Performance Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="bg-[#fafafb] rounded-[20px] p-5 sm:p-6 border border-black/[0.04]">
            <span className="text-xs text-[#777b86] block mb-1 font-medium">Total Views</span>
            <div className="text-2xl sm:text-4xl font-serif text-[#17191c] font-normal tracking-tight mb-1">
              48M+
            </div>
            <span className="text-[11px] text-emerald-600 font-medium">Organic Impressions</span>
          </div>

          <div className="bg-[#fafafb] rounded-[20px] p-5 sm:p-6 border border-black/[0.04]">
            <span className="text-xs text-[#777b86] block mb-1 font-medium">Avg. Hook Rate</span>
            <div className="text-2xl sm:text-4xl font-serif text-[#17191c] font-normal tracking-tight mb-1">
              84.2%
            </div>
            <span className="text-[11px] text-[#5b21b6] font-medium">Watched past 3 seconds</span>
          </div>

          <div className="bg-[#fafafb] rounded-[20px] p-5 sm:p-6 border border-black/[0.04]">
            <span className="text-xs text-[#777b86] block mb-1 font-medium">Inbound DM Lift</span>
            <div className="text-2xl sm:text-4xl font-serif text-[#17191c] font-normal tracking-tight mb-1">
              +310%
            </div>
            <span className="text-[11px] text-emerald-600 font-medium">Qualified buyer inquiries</span>
          </div>

          <div className="bg-[#fafafb] rounded-[20px] p-5 sm:p-6 border border-black/[0.04]">
            <span className="text-xs text-[#777b86] block mb-1 font-medium">Web Performance</span>
            <div className="text-2xl sm:text-4xl font-serif text-[#17191c] font-normal tracking-tight mb-1">
              99/100
            </div>
            <span className="text-[11px] text-amber-600 font-medium">Google PageSpeed score</span>
          </div>
        </div>

        {/* Detailed Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-[#fafafb] rounded-[24px] p-6 sm:p-8 border border-black/[0.05] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#7c3aed]">
                    {cs.niche}
                  </span>
                  <span className="text-xs font-medium text-[#17191c] bg-white px-2.5 py-1 rounded-full border border-black/[0.04]">
                    Verified Client
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#17191c] mb-3">
                  {cs.client}
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-[#777b86] mb-6">
                  <p>
                    <strong className="text-[#17191c] font-medium">Challenge:</strong> {cs.challenge}
                  </p>
                  <p>
                    <strong className="text-[#17191c] font-medium">aimo Strategy:</strong> {cs.solution}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-white border border-black/[0.04] mb-6">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-[#17191c]">
                      {cs.results.primary}
                    </div>
                    <div className="text-[11px] text-[#777b86]">{cs.results.primaryLabel}</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-[#5b21b6]">
                      {cs.results.secondary}
                    </div>
                    <div className="text-[11px] text-[#777b86]">{cs.results.secondaryLabel}</div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="pt-4 border-t border-black/[0.06]">
                <p className="text-xs sm:text-sm italic text-[#17191c] leading-relaxed mb-3">
                  {cs.highlightQuote}
                </p>
                <div className="text-xs font-semibold text-[#17191c]">
                  {cs.author} <span className="text-[#777b86] font-normal">— {cs.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
