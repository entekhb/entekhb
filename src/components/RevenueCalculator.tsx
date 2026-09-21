import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, DollarSign, Users, ShieldCheck } from 'lucide-react';

interface RevenueCalculatorProps {
  onOpenAuditModal: () => void;
}

export const RevenueCalculator: React.FC<RevenueCalculatorProps> = ({ onOpenAuditModal }) => {
  const [monthlyViews, setMonthlyViews] = useState<number>(50000);
  const [dealValue, setDealValue] = useState<number>(300);
  const [selectedTier, setSelectedTier] = useState<'reels' | 'full' | 'scale'>('full');

  // Conversion rate multipliers based on aimo targeted content benchmark
  const tierConfig = {
    reels: {
      name: 'Reels & Video Pacing',
      conversionRate: 0.008, // 0.8% of viewers become high intent engagers
      leadCloseRate: 0.12,
    },
    full: {
      name: 'Reels + Carousels + Modern Bio',
      conversionRate: 0.016, // 1.6% of viewers become inbound DM leads
      leadCloseRate: 0.18,
    },
    scale: {
      name: 'Full Content & High-Converting Website',
      conversionRate: 0.024, // 2.4% conversion across omnichannel funnel
      leadCloseRate: 0.22,
    },
  };

  const currentConfig = tierConfig[selectedTier];
  const projectedLeads = Math.round(monthlyViews * currentConfig.conversionRate);
  const estimatedNewClients = Math.max(1, Math.round(projectedLeads * currentConfig.leadCloseRate));
  const estimatedMonthlyRevenue = estimatedNewClients * dealValue;

  return (
    <section id="calculator" className="py-20 md:py-28 bg-[#fafafb] border-t border-black/[0.04]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#979799] font-medium block mb-2">
            Revenue Modeling
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#17191c] leading-[1.2] mb-3">
            Calculate your <span className="italic text-[#5b21b6]">content-to-client</span> ROI.
          </h2>
          <p className="text-sm sm:text-base text-[#777b86]">
            See what happens when your social traffic is guided by purposeful hooks, psychological carousels, and a modern website.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="bg-white rounded-[28px] p-6 sm:p-10 border border-black/[0.06] shadow-sm max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls (Left 7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Slider 1: Monthly Reach */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs sm:text-sm font-medium text-[#17191c]">
                    Target Monthly Reach / Views:
                  </label>
                  <span className="text-sm sm:text-base font-bold text-[#5b21b6] font-mono">
                    {monthlyViews.toLocaleString()} views
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="300000"
                  step="5000"
                  value={monthlyViews}
                  onChange={(e) => setMonthlyViews(Number(e.target.value))}
                  className="w-full accent-[#5b21b6] cursor-pointer h-2 bg-[#f2f2f3] rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-[#979799] mt-1">
                  <span>5K (Starting Out)</span>
                  <span>100K</span>
                  <span>300K+ (Scaling Brand)</span>
                </div>
              </div>

              {/* Slider 2: Average Client Value */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs sm:text-sm font-medium text-[#17191c]">
                    Average Customer Value / Sale Price:
                  </label>
                  <span className="text-sm sm:text-base font-bold text-[#17191c] font-mono">
                    ${dealValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="3000"
                  step="50"
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  className="w-full accent-[#17191c] cursor-pointer h-2 bg-[#f2f2f3] rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-[#979799] mt-1">
                  <span>$50 (E-com/Small Product)</span>
                  <span>$1,000</span>
                  <span>$3,000+ (High-Ticket/B2B)</span>
                </div>
              </div>

              {/* Tier Selector */}
              <div>
                <label className="text-xs sm:text-sm font-medium text-[#17191c] block mb-2">
                  Select Desired Growth Setup:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['reels', 'full', 'scale'] as const).map((tierKey) => (
                    <button
                      key={tierKey}
                      onClick={() => setSelectedTier(tierKey)}
                      className={`p-2.5 sm:p-3 rounded-2xl text-xs font-medium text-left transition-all border ${
                        selectedTier === tierKey
                          ? 'border-[#5b21b6] bg-[#fbf9fe] text-[#5b21b6] shadow-sm'
                          : 'border-black/[0.06] bg-[#fafafb] text-[#777b86] hover:bg-[#f2f2f3]'
                      }`}
                    >
                      <div className="font-semibold text-xs leading-tight">
                        {tierKey === 'reels'
                          ? 'Reels Only'
                          : tierKey === 'full'
                          ? 'Reels + Slides'
                          : 'Omnichannel + Web'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Output Panel (Right 5 cols) */}
            <div className="lg:col-span-5 bg-[#17191c] rounded-[24px] p-6 sm:p-8 text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-white/60 mb-4 border-b border-white/10 pb-3">
                  <span>Estimated Output</span>
                  <span className="text-[#fbe1d1] font-mono">aimo Engine</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-[11px] text-white/70 block uppercase tracking-wider">
                      Projected Inbound Leads / Mo
                    </span>
                    <div className="text-2xl sm:text-3xl font-bold text-white">
                      ~{projectedLeads}{' '}
                      <span className="text-xs font-normal text-white/60">DMs & Bookings</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] text-white/70 block uppercase tracking-wider">
                      Estimated Monthly Revenue Lift
                    </span>
                    <div className="text-3xl sm:text-4xl font-serif text-[#fbe1d1] font-normal tracking-tight">
                      +${estimatedMonthlyRevenue.toLocaleString()}
                    </div>
                    <span className="text-[11px] text-white/50">
                      Based on ~{estimatedNewClients} closed customers
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <button
                  onClick={onOpenAuditModal}
                  className="w-full h-11 rounded-full bg-white text-[#17191c] text-xs sm:text-sm font-semibold hover:bg-neutral-100 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Build This System For My Brand</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <p className="text-center text-[10px] text-white/50">
                  Includes full editorial review & custom roadmap for aimoads.site
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
