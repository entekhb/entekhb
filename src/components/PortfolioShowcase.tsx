import React, { useState } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Bookmark, Share2, Heart, ExternalLink, Sparkles, Smartphone, Monitor } from 'lucide-react';
import { CarouselSlide } from '../types';

interface PortfolioShowcaseProps {
  onOpenAuditModal: () => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ onOpenAuditModal }) => {
  const [activeTab, setActiveTab] = useState<'reels' | 'carousels' | 'websites'>('reels');

  // Video Reel state
  const [selectedReel, setSelectedReel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Carousel state
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const reelProjects = [
    {
      title: 'B2B Founder: $45K Deal From 1 Viral Reel',
      niche: 'SaaS / Consulting',
      views: '420,000+',
      leads: '84 Inbound DMs',
      retention: '88% First 5s',
      hookText: '“If your agency isn’t using kinetic hooks in 2026, you’re donating clients to competitors.”',
      captionSnippet: 'We rebuilt their hook pacing, added dynamic SFX, and anchored the ending on a high-intent DM keyword.',
      badgeColor: 'bg-purple-100 text-purple-800',
    },
    {
      title: 'High-Ticket Fitness Coach: $32K Launch',
      niche: 'Health & Coaching',
      views: '280,000+',
      leads: '112 Inbound DMs',
      retention: '82% Full Video',
      hookText: '“Stop counting calories until you see this metabolic breakdown.”',
      captionSnippet: 'Engineered with pattern-interrupt text cards and clean sound design that held audience retention 2.4x above platform average.',
      badgeColor: 'bg-emerald-100 text-emerald-800',
    },
    {
      title: 'Luxury Interior Studio: 5 Commercial Inquiries',
      niche: 'Architecture & Design',
      views: '315,000+',
      leads: '24 Consultation Bookings',
      retention: '91% Hook Rate',
      hookText: '“The $200k Penthouse transformation nobody thought was possible.”',
      captionSnippet: 'Cinematic color grading and pacing matched with sound design tailored to affluent commercial clients.',
      badgeColor: 'bg-amber-100 text-amber-800',
    },
  ];

  const carouselSlides: CarouselSlide[] = [
    {
      id: 1,
      badge: 'SLIDE 1 • THE SCROLL-STOPPER',
      headline: 'The Exact 3-Part Content Framework That Generates $40k/Mo on Instagram.',
      subtext: 'Swipe to see how aimo re-engineers standard posts into revenue drivers →',
      visualNote: 'High visual contrast, ultra-clean typography, and instant emotional curiosity.',
      engagementStat: '3.8x higher tap-through rate than generic lifestyle posts.',
    },
    {
      id: 2,
      badge: 'SLIDE 2 • THE ANATOMY OF A HOOK',
      headline: 'Step 1: Replace Vanity Quotes with "High-Cost-of-Inaction" Triggers.',
      subtext: 'Audiences don’t save generic tips. They save frameworks that save them time, embarrassment, or wasted budget.',
      visualNote: 'Clear breakdown with clean diagrams and before/after comparisons.',
      engagementStat: '82% of readers continue past slide 2 when the stake is clear.',
    },
    {
      id: 3,
      badge: 'SLIDE 3 • RETENTION THROUGH TYPOGRAPHY',
      headline: 'Step 2: Editorial Hierarchy Built For 0.4s Thumb Scanning.',
      subtext: 'We apply the Steep typographic rhythm: bold concept anchoring, airy spacing, and zero cognitive clutter.',
      visualNote: 'Whitespace acts as cognitive breathing room, keeping mobile readers engaged.',
      engagementStat: 'Average reading time increases from 4s to 38s.',
    },
    {
      id: 4,
      badge: 'SLIDE 4 • VALUE DELIVERY',
      headline: 'Step 3: Actionable Blueprints People Can’t Afford to Lose.',
      subtext: 'When a slide feels like a $500 consulting framework, users instinctively hit the bookmark icon to revisit later.',
      visualNote: 'Bookmark icon animation prompts high-frequency Instagram algorithm signals.',
      engagementStat: 'Saves jump to 9.2% of total impressions.',
    },
    {
      id: 5,
      badge: 'SLIDE 5 • THE REVENUE CONVERSION',
      headline: 'Step 4: The Direct-to-DM Trigger Call to Action.',
      subtext: '“Comment \'GROWTH\' below and we’ll send you our private breakdown.” This converts passive lurkers into warm sales conversations.',
      visualNote: 'Direct prompt driving dozens of qualified prospective client discussions.',
      engagementStat: 'Average 40–120 qualified leads per carousel.',
    },
  ];

  const websiteProjects = [
    {
      name: 'Vanguard Capital Partners',
      type: 'Private Equity & Modern Advisory',
      metric: '3.4x Inbound Lead Conversion',
      speed: '0.5s Mobile Load',
      description: 'Ultra-clean, high-editorial web experience built for high-net-worth investors with frictionless inquiry booking.',
    },
    {
      name: 'Lumina Aesthetic Clinic',
      type: 'Luxury MedSpa & Treatments',
      metric: '180+ Consultation Bookings/Mo',
      speed: '0.7s Mobile Load',
      description: 'Mobile-first booking portal seamlessly synced with Instagram ad funnels to maximize appointment reservations.',
    },
    {
      name: 'Strive Performance Lab',
      type: 'B2B Fitness & Athletic Gear',
      metric: '+140% Mobile Checkout Rate',
      speed: '0.6s Mobile Load',
      description: 'Minimalist brand shop designed with micro-animations and zero checkout friction for mobile shoppers.',
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#979799] font-medium block mb-2">
              Selected Work & Proof
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#17191c] leading-[1.2]">
              Real deliverables designed to{' '}
              <span className="italic text-[#5b21b6]">move the needle</span>.
            </h2>
          </div>

          {/* Interactive Category Selector (Steep Pill Style) */}
          <div className="flex items-center p-1.5 rounded-full bg-[#f2f2f3] border border-black/[0.04] self-start md:self-auto overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('reels')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeTab === 'reels'
                  ? 'bg-[#17191c] text-white shadow-sm'
                  : 'text-[#777b86] hover:text-[#17191c]'
              }`}
            >
              Reels & Video Edits
            </button>
            <button
              onClick={() => setActiveTab('carousels')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeTab === 'carousels'
                  ? 'bg-[#17191c] text-white shadow-sm'
                  : 'text-[#777b86] hover:text-[#17191c]'
              }`}
            >
              Instagram Carousels
            </button>
            <button
              onClick={() => setActiveTab('websites')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeTab === 'websites'
                  ? 'bg-[#17191c] text-white shadow-sm'
                  : 'text-[#777b86] hover:text-[#17191c]'
              }`}
            >
              Modern Websites
            </button>
          </div>
        </div>

        {/* ================= REELS TAB ================= */}
        {activeTab === 'reels' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#fafafb] rounded-[28px] p-6 sm:p-10 border border-black/[0.05]">
            {/* Left: Mobile Phone Video Simulator (Touch-optimized) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[310px] aspect-[9/16] bg-[#17191c] rounded-[36px] p-3 shadow-2xl relative overflow-hidden border-4 border-[#2b2d31] flex flex-col justify-between text-white">
                {/* Simulated Screen Top Bar */}
                <div className="flex items-center justify-between text-[11px] text-white/70 px-3 pt-1 z-20">
                  <span className="font-semibold">aimo reel edit</span>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span>REC</span>
                  </div>
                </div>

                {/* Simulated Video Canvas / Visualizer */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a1c22] via-[#241e38] to-[#121118] flex flex-col items-center justify-center p-6 text-center z-10">
                  {/* Visual sound bars */}
                  <div className="flex items-end gap-1 h-12 mb-6">
                    {[40, 70, 95, 60, 80, 45, 90, 65, 85, 50, 75, 95].map((h, i) => (
                      <div
                        key={i}
                        className="w-1.5 bg-[#7c3aed] rounded-full transition-all duration-300"
                        style={{
                          height: isPlaying ? `${h}%` : '20%',
                          opacity: isPlaying ? 1 : 0.4,
                        }}
                      />
                    ))}
                  </div>

                  {/* Kinetic Typography Hook Demonstration */}
                  <div className="bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 max-w-[240px] shadow-lg mb-4">
                    <span className="text-[10px] uppercase font-bold text-[#fbe1d1] tracking-wider block mb-1">
                      {isPlaying ? '▶ LIVE HOOK PACING' : 'PAUSED'}
                    </span>
                    <p className="font-serif text-base sm:text-lg font-normal leading-snug text-white">
                      {reelProjects[selectedReel].hookText}
                    </p>
                  </div>

                  <span className="text-[11px] text-white/60">
                    Animated captions with retention-optimized audio
                  </span>
                </div>

                {/* Simulated Reel UI Right Action Rail */}
                <div className="relative z-20 flex justify-between items-end pb-2">
                  <div className="space-y-1 text-left max-w-[180px]">
                    <div className="text-xs font-semibold text-white">@aimoads.site</div>
                    <div className="text-[11px] text-white/80 line-clamp-2">
                      High-converting video editing built to convert clients.
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-3 text-white/90">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors"
                      title={isPlaying ? 'Pause simulation' : 'Play simulation'}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                    </button>
                    <div className="flex flex-col items-center">
                      <Heart className="w-5 h-5 text-red-400 fill-red-400" />
                      <span className="text-[10px] mt-0.5">14.2k</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Bookmark className="w-5 h-5 text-amber-300 fill-amber-300" />
                      <span className="text-[10px] mt-0.5">4.8k</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Share2 className="w-5 h-5 text-white" />
                      <span className="text-[10px] mt-0.5">2.1k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Detailed Case Breakdown */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#fbe1d1] text-[#5d2a1a]">
                  {reelProjects[selectedReel].niche}
                </span>
                <span className="text-xs text-[#777b86]">Case Study Breakdown</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl font-normal text-[#17191c] leading-tight">
                {reelProjects[selectedReel].title}
              </h3>

              <p className="text-sm sm:text-base text-[#777b86] leading-relaxed">
                {reelProjects[selectedReel].captionSnippet}
              </p>

              {/* Metrics Pills */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-white p-3.5 rounded-2xl border border-black/[0.05]">
                  <span className="text-[11px] text-[#777b86] block">Total Reach</span>
                  <span className="text-lg sm:text-xl font-bold text-[#17191c]">
                    {reelProjects[selectedReel].views}
                  </span>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-black/[0.05]">
                  <span className="text-[11px] text-[#777b86] block">Direct Conversions</span>
                  <span className="text-lg sm:text-xl font-bold text-[#7c3aed]">
                    {reelProjects[selectedReel].leads}
                  </span>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-black/[0.05]">
                  <span className="text-[11px] text-[#777b86] block">Audience Hold</span>
                  <span className="text-lg sm:text-xl font-bold text-emerald-600">
                    {reelProjects[selectedReel].retention}
                  </span>
                </div>
              </div>

              {/* Reel Selector Buttons */}
              <div className="pt-4 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {reelProjects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedReel(idx);
                        setIsPlaying(true);
                      }}
                      className={`h-9 px-4 rounded-full text-xs font-medium transition-all ${
                        selectedReel === idx
                          ? 'bg-[#17191c] text-white shadow-sm'
                          : 'bg-white text-[#777b86] border border-black/[0.06] hover:bg-[#f2f2f3]'
                      }`}
                    >
                      Project {idx + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={onOpenAuditModal}
                  className="text-xs sm:text-sm text-[#17191c] font-medium hover:underline inline-flex items-center gap-1"
                >
                  <span>Request reels for your brand</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= CAROUSELS TAB ================= */}
        {activeTab === 'carousels' && (
          <div className="bg-[#fafafb] rounded-[28px] p-6 sm:p-10 border border-black/[0.05]">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#7c3aed]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#777b86]">
                    Interactive Carousel Swipe File (Touch & Tap)
                  </span>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#f2f2f3] text-[#17191c]">
                  Slide {currentSlideIndex + 1} of {carouselSlides.length}
                </span>
              </div>

              {/* The Actual Carousel Slide Card (Mobile 1:1 Aspect Ratio) */}
              <div className="aspect-[4/3] sm:aspect-[16/10] bg-white rounded-[24px] p-6 sm:p-10 border border-black/[0.06] shadow-artifact flex flex-col justify-between relative overflow-hidden transition-all duration-300">
                {/* Watermark / subtle branding */}
                <div className="flex items-center justify-between text-xs text-[#777b86] border-b border-black/[0.04] pb-3">
                  <span className="font-semibold text-[#17191c]">aimoads.site</span>
                  <span className="text-[11px] font-mono text-[#7c3aed]">
                    {carouselSlides[currentSlideIndex].badge}
                  </span>
                </div>

                {/* Core Slide Content */}
                <div className="my-auto py-4">
                  <h4 className="font-serif text-xl sm:text-3xl lg:text-4xl font-normal text-[#17191c] leading-[1.25] mb-3 sm:mb-4">
                    {carouselSlides[currentSlideIndex].headline}
                  </h4>
                  <p className="text-sm sm:text-lg text-[#777b86] leading-relaxed max-w-xl">
                    {carouselSlides[currentSlideIndex].subtext}
                  </p>
                </div>

                {/* Bottom Slide Info & Stat */}
                <div className="pt-3 border-t border-black/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <span className="text-[#5d2a1a] bg-[#fbe1d1] px-2.5 py-1 rounded-lg font-medium self-start">
                    {carouselSlides[currentSlideIndex].visualNote}
                  </span>
                  <span className="text-emerald-700 font-medium">
                    {carouselSlides[currentSlideIndex].engagementStat}
                  </span>
                </div>
              </div>

              {/* Slide Navigation Controls */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-1.5">
                  {carouselSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlideIndex(i)}
                      className={`h-2.5 rounded-full transition-all duration-200 ${
                        currentSlideIndex === i
                          ? 'w-8 bg-[#17191c]'
                          : 'w-2.5 bg-black/20 hover:bg-black/40'
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setCurrentSlideIndex((prev) =>
                        prev === 0 ? carouselSlides.length - 1 : prev - 1
                      )
                    }
                    className="w-10 h-10 rounded-full bg-white border border-black/[0.08] flex items-center justify-center text-[#17191c] hover:bg-[#f2f2f3] active:scale-95 transition-all shadow-sm"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentSlideIndex((prev) => (prev + 1) % carouselSlides.length)
                    }
                    className="w-10 h-10 rounded-full bg-[#17191c] text-white flex items-center justify-center hover:bg-black active:scale-95 transition-all shadow-sm"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Mobile Swipe Tip */}
              <p className="text-center text-xs text-[#979799] mt-4">
                Tip: Tap arrow buttons or dot indicators above to flip through all 5 slides.
              </p>
            </div>
          </div>
        )}

        {/* ================= WEBSITES TAB ================= */}
        {activeTab === 'websites' && (
          <div className="bg-[#fafafb] rounded-[28px] p-6 sm:p-10 border border-black/[0.05]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {websiteProjects.map((proj, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[24px] p-6 border border-black/[0.06] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Simulated Browser Frame Header */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-black/[0.05]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-[10px] font-mono text-[#979799]">aimoads.site/work</span>
                    </div>

                    <span className="text-[11px] font-semibold text-[#7c3aed] uppercase tracking-wider block mb-1">
                      {proj.type}
                    </span>
                    <h4 className="font-serif text-2xl font-normal text-[#17191c] mb-2 leading-snug">
                      {proj.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#777b86] leading-relaxed mb-6">
                      {proj.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-black/[0.04]">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#777b86]">Mobile Load Time:</span>
                      <span className="font-mono font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                        {proj.speed}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#777b86]">Conversion Rate:</span>
                      <span className="font-bold text-[#17191c]">{proj.metric}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={onOpenAuditModal}
                className="h-12 px-8 rounded-full bg-[#17191c] text-white text-sm font-medium hover:bg-black transition-all inline-flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Build a Modern Site for My Business</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
