import React, { useState } from 'react';
import { Translations } from '../translations';
import { AimoLogo } from './AimoLogo';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Heart, 
  MessageCircle, 
  Share2, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Flame,
  Award,
  Zap
} from 'lucide-react';

interface HeroProps {
  t: Translations;
  onOpenInquiry: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onOpenInquiry, onExploreWork }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 px-4 bg-[#ffffff] overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        
        {/* Flighty Award Badge Pair & Official Brand Indicator */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 mb-6 sm:mb-8 justify-center">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 text-white shadow-sm border border-neutral-800">
            <AimoLogo size="xs" showText={false} />
            <span className="text-xs font-bold font-sans tracking-wide">aimo</span>
            <span className="text-[10px] text-neutral-400 font-mono border-l border-neutral-700 pl-2">Content Studio</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-semibold shadow-xs">
              <Award className="w-3.5 h-3.5 text-neutral-900" />
              <span>{t.hero.badge1}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#7C3AED] text-white text-xs font-semibold shadow-xs">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{t.hero.badge2}</span>
            </div>
          </div>
        </div>

        {/* Display Headline (Flighty 56px tight tracking) */}
        <h1 className="flighty-display-title max-w-4xl text-neutral-950 mb-4 sm:mb-6">
          {t.hero.headlinePart1}{' '}
          <span className="relative inline-block text-[#007bff]">
            {t.hero.headlineHighlight}
            <span className="absolute left-0 right-0 -bottom-1 h-[3px] bg-[#f7be00] rounded-full" />
          </span>{' '}
          {t.hero.headlinePart2}
        </h1>

        {/* Subheadline (17px system-ui Carbon) */}
        <p className="text-base sm:text-lg md:text-[18px] text-[#333333] max-w-2xl leading-relaxed mb-8 sm:mb-10 text-balance font-normal">
          {t.hero.subheadline}
        </p>

        {/* CTA Button Group */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap mb-6 w-full max-w-md">
          {/* Amber Download/Action Button with subtle shimmer */}
          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#f7be00] hover:bg-[#eab000] text-black font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 shadow-md cursor-pointer gemini-shimmer"
          >
            <Zap className="w-4 h-4 fill-black" />
            <span>{t.hero.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>

          {/* Secondary Action: Signal Blue or Ghost */}
          <button
            onClick={onExploreWork}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 cursor-pointer shadow-xs"
          >
            <Play className="w-4 h-4 text-[#007bff] fill-[#007bff]" />
            <span>{t.hero.ctaSecondary}</span>
          </button>
        </div>

        {/* Micro-trust proof line */}
        <div className="flex items-center gap-2 text-xs sm:text-[13px] text-neutral-500 mb-12 sm:mb-16">
          <CheckCircle2 className="w-4 h-4 text-[#007bff] shrink-0" />
          <span>{t.hero.microTrust}</span>
        </div>

        {/* ========================================================================= */}
        {/* Flighty Signature Phone Mockup surrounded by Orbiting Notification Cards */}
        {/* ========================================================================= */}
        <div className="relative w-full max-w-4xl flex items-center justify-center mt-2 px-2">
          
          {/* Background subtle violet glow */}
          <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Floating Card 1: Top-Left (Instagram Reel 1.4M views) */}
          <div
            onMouseEnter={() => setActiveCard('c1')}
            onMouseLeave={() => setActiveCard(null)}
            className={`hidden md:flex absolute -left-4 lg:-left-12 top-6 z-20 w-[270px] bg-white rounded-2xl p-3.5 text-left rtl:text-right border-l-[3px] border-[#007bff] shadow-flighty-card transition-all duration-300 hover:scale-105 hover:z-30 cursor-pointer ${
              activeCard === 'c1' ? 'ring-2 ring-[#007bff]' : ''
            }`}
            style={{ transform: 'rotate(-2.5deg)' }}
          >
            <div className="flex items-start gap-2.5 w-full">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-[#007bff] flex items-center justify-center shrink-0">
                <Flame className="w-4 h-4 fill-[#007bff]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span className="text-[10px] font-bold text-[#007bff] tracking-wider uppercase">
                    {t.hero.floatingCards.card1Badge}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-mono">Just now</span>
                </div>
                <h4 className="text-[13px] font-bold text-neutral-900 leading-snug line-clamp-2">
                  {t.hero.floatingCards.card1Title}
                </h4>
                <p className="text-[11px] text-neutral-500 mt-0.5">
                  {t.hero.floatingCards.card1Meta}
                </p>
              </div>
            </div>
          </div>

          {/* Floating Card 2: Top-Right (Hook Retention 86.4%) */}
          <div
            onMouseEnter={() => setActiveCard('c2')}
            onMouseLeave={() => setActiveCard(null)}
            className={`hidden md:flex absolute -right-4 lg:-right-12 top-16 z-20 w-[260px] bg-white rounded-2xl p-3.5 text-left rtl:text-right border-l-[3px] border-[#f7be00] shadow-flighty-card transition-all duration-300 hover:scale-105 hover:z-30 cursor-pointer ${
              activeCard === 'c2' ? 'ring-2 ring-[#f7be00]' : ''
            }`}
            style={{ transform: 'rotate(2.5deg)' }}
          >
            <div className="flex items-start gap-2.5 w-full">
              <div className="w-8 h-8 rounded-full bg-amber-50 text-[#f7be00] flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 fill-[#f7be00]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span className="text-[10px] font-bold text-amber-700 tracking-wider uppercase">
                    {t.hero.floatingCards.card2Badge}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-mono">Live KPI</span>
                </div>
                <h4 className="text-[13px] font-bold text-neutral-900 leading-snug">
                  {t.hero.floatingCards.card2Title}
                </h4>
                <p className="text-[11px] text-neutral-500 mt-0.5">
                  {t.hero.floatingCards.card2Meta}
                </p>
              </div>
            </div>
          </div>

          {/* Floating Card 3: Bottom-Left (42 Inbound Leads) */}
          <div
            onMouseEnter={() => setActiveCard('c3')}
            onMouseLeave={() => setActiveCard(null)}
            className={`hidden md:flex absolute -left-6 lg:-left-14 bottom-14 z-20 w-[270px] bg-white rounded-2xl p-3.5 text-left rtl:text-right border-l-[3px] border-[#6b14d8] shadow-flighty-card transition-all duration-300 hover:scale-105 hover:z-30 cursor-pointer ${
              activeCard === 'c3' ? 'ring-2 ring-[#6b14d8]' : ''
            }`}
            style={{ transform: 'rotate(1.8deg)' }}
          >
            <div className="flex items-start gap-2.5 w-full">
              <div className="w-8 h-8 rounded-full bg-purple-50 text-[#6b14d8] flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span className="text-[10px] font-bold text-[#6b14d8] tracking-wider uppercase">
                    {t.hero.floatingCards.card3Badge}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-mono">+320%</span>
                </div>
                <h4 className="text-[13px] font-bold text-neutral-900 leading-snug">
                  {t.hero.floatingCards.card3Title}
                </h4>
                <p className="text-[11px] text-neutral-500 mt-0.5">
                  {t.hero.floatingCards.card3Meta}
                </p>
              </div>
            </div>
          </div>

          {/* Floating Card 4: Bottom-Right (YouTube 4K Timeline) */}
          <div
            onMouseEnter={() => setActiveCard('c4')}
            onMouseLeave={() => setActiveCard(null)}
            className={`hidden md:flex absolute -right-6 lg:-right-14 bottom-8 z-20 w-[270px] bg-white rounded-2xl p-3.5 text-left rtl:text-right border-l-[3px] border-[#10b981] shadow-flighty-card transition-all duration-300 hover:scale-105 hover:z-30 cursor-pointer ${
              activeCard === 'c4' ? 'ring-2 ring-[#10b981]' : ''
            }`}
            style={{ transform: 'rotate(-2deg)' }}
          >
            <div className="flex items-start gap-2.5 w-full">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#10b981] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span className="text-[10px] font-bold text-emerald-700 tracking-wider uppercase">
                    {t.hero.floatingCards.card4Badge}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-mono">60 FPS</span>
                </div>
                <h4 className="text-[13px] font-bold text-neutral-900 leading-snug">
                  {t.hero.floatingCards.card4Title}
                </h4>
                <p className="text-[11px] text-neutral-500 mt-0.5">
                  {t.hero.floatingCards.card4Meta}
                </p>
              </div>
            </div>
          </div>

          {/* ================================================================= */}
          {/* Central Phone Mockup (Apple-like titanium bezel & dynamic screen) */}
          {/* ================================================================= */}
          <div className="relative w-[280px] xs:w-[310px] sm:w-[340px] md:w-[360px] aspect-[9/18.5] bg-[#0c0c0e] rounded-[48px] p-3 shadow-2xl border-[4px] border-neutral-300/80 shadow-flighty-card z-10">
            {/* Gemini Chat Style Living Ambient Aurora Glow */}
            <div className="absolute -inset-2.5 rounded-[56px] gemini-aurora-glow opacity-80 blur-xl pointer-events-none -z-10" />
            
            {/* Phone Speaker & Dynamic Island */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-end px-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1c1c1e] flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-blue-500/60" />
              </div>
            </div>

            {/* Inner Phone Screen */}
            <div className="w-full h-full bg-[#05010d] rounded-[40px] overflow-hidden relative flex flex-col justify-between text-white select-none">
              
              {/* Simulated Reel Video Content (Dark Studio Atmosphere with Kinetic Graphics) */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#180a30] via-[#0b0314] to-black">
                {/* Visual grid & waveform simulation */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#6b14d8_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Animated kinetic typography hook showcase */}
                <div className="absolute inset-x-4 top-28 flex flex-col items-center text-center">
                  <div className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-semibold text-yellow-400 mb-3 flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>0:01s Hook Trigger</span>
                  </div>

                  <div className="bg-black/40 backdrop-blur-md p-3 rounded-2xl border border-white/10 max-w-[260px]">
                    <p className="text-sm font-extrabold leading-snug text-white">
                      "{t.phoneMockup.hookText}"
                    </p>
                    <div className="mt-2 flex items-center justify-center gap-1 text-[10px] text-green-400 font-mono">
                      <TrendingUp className="w-3 h-3" />
                      <span>Retention: 86.4% at 0:03s</span>
                    </div>
                  </div>

                  {/* Sound Wave simulation */}
                  <div className="flex items-center gap-1 mt-4 h-6">
                    {[40, 75, 95, 60, 100, 45, 80, 50, 90, 65, 30].map((h, i) => (
                      <div
                        key={i}
                        className="w-1 bg-[#f7be00] rounded-full transition-all duration-300"
                        style={{ height: isPlaying ? `${h}%` : '20%' }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Top Bar of Reel (Audio & Status) */}
              <div className="relative z-20 pt-6 px-4 flex items-center justify-between text-[11px] text-white/80">
                <span className="font-semibold text-yellow-400 flex items-center gap-1">
                  <Flame className="w-3 h-3 fill-yellow-400" />
                  {t.phoneMockup.statusActive}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1 rounded-full bg-black/40 backdrop-blur-sm text-white/90"
                    aria-label="Toggle mute"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-yellow-400" />}
                  </button>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1 rounded-full bg-black/40 backdrop-blur-sm text-white/90"
                    aria-label="Toggle play"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-yellow-400" />}
                  </button>
                </div>
              </div>

              {/* Right Side Social Actions (Like, Comment, Share) */}
              <div className="relative z-20 self-end px-3 flex flex-col items-center gap-3.5 mb-14 text-white">
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-red-500 hover:scale-110 transition-transform">
                    <Heart className="w-4 h-4 fill-red-500" />
                  </div>
                  <span className="text-[10px] font-mono mt-0.5">{t.phoneMockup.likesCount}</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:scale-110 transition-transform">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono mt-0.5">{t.phoneMockup.commentsCount}</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:scale-110 transition-transform">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono mt-0.5">{t.phoneMockup.sharesCount}</span>
                </div>
              </div>

              {/* Bottom Creator Info & Bio Link CTA */}
              <div className="relative z-20 p-4 pb-5 bg-gradient-to-t from-black via-black/80 to-transparent">
                <div className="flex items-center gap-2 mb-1.5">
                  <AimoLogo size="xs" showText={false} interactive={false} />
                  <span className="text-xs font-bold">{t.phoneMockup.creatorHandle}</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-blue-500/20 text-blue-400 font-medium">
                    Verified
                  </span>
                </div>

                <p className="text-[11px] text-white/90 line-clamp-2 mb-2 leading-relaxed">
                  {t.phoneMockup.caption}
                </p>

                {/* Direct High-Converting Bio-Link Pill Button inside Phone */}
                <button
                  onClick={onOpenInquiry}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-black text-xs font-bold flex items-center justify-center gap-1.5 hover:brightness-105 transition-colors cursor-pointer shadow-sm"
                >
                  <span>{t.nav.getStarted}</span>
                  <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Mobile-Only Horizontal Scroll / Grid of Floating Cards */}
        <div className="md:hidden w-full mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left rtl:text-right">
          <div className="bg-white rounded-xl p-3 border-l-[3px] border-[#007bff] shadow-sm">
            <span className="text-[10px] font-bold text-[#007bff] uppercase">{t.hero.floatingCards.card1Badge}</span>
            <h4 className="text-xs font-bold text-neutral-900">{t.hero.floatingCards.card1Title}</h4>
            <p className="text-[11px] text-neutral-500">{t.hero.floatingCards.card1Meta}</p>
          </div>
          <div className="bg-white rounded-xl p-3 border-l-[3px] border-[#f7be00] shadow-sm">
            <span className="text-[10px] font-bold text-amber-700 uppercase">{t.hero.floatingCards.card2Badge}</span>
            <h4 className="text-xs font-bold text-neutral-900">{t.hero.floatingCards.card2Title}</h4>
            <p className="text-[11px] text-neutral-500">{t.hero.floatingCards.card2Meta}</p>
          </div>
          <div className="bg-white rounded-xl p-3 border-l-[3px] border-[#6b14d8] shadow-sm">
            <span className="text-[10px] font-bold text-[#6b14d8] uppercase">{t.hero.floatingCards.card3Badge}</span>
            <h4 className="text-xs font-bold text-neutral-900">{t.hero.floatingCards.card3Title}</h4>
            <p className="text-[11px] text-neutral-500">{t.hero.floatingCards.card3Meta}</p>
          </div>
          <div className="bg-white rounded-xl p-3 border-l-[3px] border-[#10b981] shadow-sm">
            <span className="text-[10px] font-bold text-emerald-700 uppercase">{t.hero.floatingCards.card4Badge}</span>
            <h4 className="text-xs font-bold text-neutral-900">{t.hero.floatingCards.card4Title}</h4>
            <p className="text-[11px] text-neutral-500">{t.hero.floatingCards.card4Meta}</p>
          </div>
        </div>

      </div>
    </section>
  );
};
