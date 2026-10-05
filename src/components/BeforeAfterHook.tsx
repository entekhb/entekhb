import React, { useState, useEffect } from 'react';
import { Translations } from '../translations';
import { 
  Zap, 
  Volume2, 
  Flame, 
  Check, 
  X, 
  Play, 
  Sparkles, 
  TrendingUp, 
  Heart, 
  MessageCircle, 
  Share2, 
  RefreshCw,
  Eye,
  Sliders,
  Radio
} from 'lucide-react';

interface BeforeAfterHookProps {
  t: Translations;
  onOpenInquiry: () => void;
}

export const BeforeAfterHook: React.FC<BeforeAfterHookProps> = ({ t, onOpenInquiry }) => {
  // Mode: 'aimo' (Master Production) vs 'raw' (Standard Uncut)
  const [activeMode, setActiveMode] = useState<'aimo' | 'raw'>('aimo');
  const [isAutoCycle, setIsAutoCycle] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<'hook' | 'sound' | 'pacing' | null>(null);
  const [pulseKey, setPulseKey] = useState(0);

  // Auto-cycle between Raw and aimo every 4.5 seconds to showcase the dramatic difference automatically
  useEffect(() => {
    if (!isAutoCycle) return;
    const interval = setInterval(() => {
      setActiveMode((prev) => (prev === 'aimo' ? 'raw' : 'aimo'));
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoCycle]);

  const triggerHotspot = (hotspot: 'hook' | 'sound' | 'pacing') => {
    setActiveMode('aimo');
    setActiveHotspot(hotspot);
    setPulseKey((k) => k + 1);
  };

  const isRtl = t.dir === 'rtl';

  return (
    <section id="reels-showcase" className="py-16 sm:py-24 px-4 bg-[#faf8f7] border-y border-neutral-200/80">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold tracking-widest text-[#7C3AED] uppercase mb-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200">
            <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
            <span>{t.beforeAfter.kicker}</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight mt-2 mb-3">
            {t.beforeAfter.title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            {t.beforeAfter.subtitle}
          </p>
        </div>

        {/* Master Comparison Stage */}
        <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-flighty-card border border-neutral-200/90 relative overflow-hidden">
          
          {/* Top Control Bar: Interactive Mode Switcher & Auto-Cycle toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-neutral-100">
            
            {/* Segmented Pill Switcher */}
            <div className="flex items-center p-1.5 rounded-2xl bg-neutral-100 border border-neutral-200 w-full sm:w-auto shadow-inner">
              <button
                type="button"
                onClick={() => {
                  setActiveMode('raw');
                  setIsAutoCycle(false);
                }}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeMode === 'raw'
                    ? 'bg-white text-neutral-900 shadow-md scale-100'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-400" />
                <span>{t.beforeAfter.rawLabel}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveMode('aimo');
                  setIsAutoCycle(false);
                }}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeMode === 'aimo'
                    ? 'bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white shadow-md shadow-purple-500/20 scale-100'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t.beforeAfter.aimoLabel}</span>
              </button>
            </div>

            {/* Auto-Compare Indicator & Mode Indicator */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsAutoCycle(!isAutoCycle)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                  isAutoCycle
                    ? 'bg-purple-50 border-purple-200 text-[#7C3AED]'
                    : 'bg-neutral-50 border-neutral-200 text-neutral-500 hover:text-neutral-800'
                }`}
                title="Toggle live auto-switching between modes"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isAutoCycle ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
                <span>{isAutoCycle ? (isRtl ? 'حالت مقایسه خودکار (فعال)' : 'Auto-Comparing (Live)') : (isRtl ? 'فعال‌سازی مقایسه خودکار' : 'Enable Auto-Compare')}</span>
              </button>

              <span className="hidden md:inline-flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                <Sliders className="w-3.5 h-3.5" />
                <span>{isRtl ? 'برای مشاهده تغییر کلیک کنید' : 'Click tabs to switch'}</span>
              </span>
            </div>

          </div>

          {/* Interactive Screen Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col (Desktop): Interactive Feature Hotspots */}
            <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col gap-3">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-1">
                {isRtl ? 'مهندسی هوک و نگهداشت مخاطب' : 'Retention Engineering Anatomy'}
              </span>

              {/* Hotspot 1: 3-Second Hook */}
              <button
                type="button"
                onClick={() => triggerHotspot('hook')}
                className={`text-left rtl:text-right p-4 rounded-2xl border transition-all cursor-pointer text-sm ${
                  activeMode === 'aimo' && (activeHotspot === 'hook' || activeHotspot === null)
                    ? 'bg-purple-50/80 border-[#7C3AED]/40 shadow-sm'
                    : 'bg-neutral-50/60 border-neutral-200/70 hover:bg-neutral-100/70 text-neutral-600'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-extrabold text-neutral-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#7C3AED]/15 text-[#7C3AED] flex items-center justify-center font-bold text-xs">
                      1
                    </span>
                    {isRtl ? 'هوک ثانیه اول و متن پویا' : 'Psychological 0:01s Hook'}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-amber-100 text-amber-800 font-bold">
                    +70% Stop
                  </span>
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed ps-8">
                  {isRtl 
                    ? 'کلمات کلیدی در ۲ ثانیه اول با رنگ و انیمیشن هایلایت می‌شوند تا مخاطب اسکرول نکند.'
                    : 'High-contrast word-by-word active captioning that locks visual attention instantly.'}
                </p>
              </button>

              {/* Hotspot 2: Sound Design */}
              <button
                type="button"
                onClick={() => triggerHotspot('sound')}
                className={`text-left rtl:text-right p-4 rounded-2xl border transition-all cursor-pointer text-sm ${
                  activeMode === 'aimo' && activeHotspot === 'sound'
                    ? 'bg-purple-50/80 border-[#7C3AED]/40 shadow-sm'
                    : 'bg-neutral-50/60 border-neutral-200/70 hover:bg-neutral-100/70 text-neutral-600'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-extrabold text-neutral-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#7C3AED]/15 text-[#7C3AED] flex items-center justify-center font-bold text-xs">
                      2
                    </span>
                    {isRtl ? 'صداگذاری ساب‌بیس و ووش' : 'Sub-Bass & Foley Sound Design'}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-purple-100 text-purple-800 font-bold">
                    Sub-Bass
                  </span>
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed ps-8">
                  {isRtl
                    ? 'ترکیب افکت‌های صوتی وووش و ضربه فرکانس پایین که جذابیت ناخودآگاه شنیداری ایجاد می‌کند.'
                    : 'Low-frequency risers, tactile whooshes, and impact cues that trigger dopamine spikes.'}
                </p>
              </button>

              {/* Hotspot 3: Kinetic Pacing */}
              <button
                type="button"
                onClick={() => triggerHotspot('pacing')}
                className={`text-left rtl:text-right p-4 rounded-2xl border transition-all cursor-pointer text-sm ${
                  activeMode === 'aimo' && activeHotspot === 'pacing'
                    ? 'bg-purple-50/80 border-[#7C3AED]/40 shadow-sm'
                    : 'bg-neutral-50/60 border-neutral-200/70 hover:bg-neutral-100/70 text-neutral-600'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-extrabold text-neutral-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#7C3AED]/15 text-[#7C3AED] flex items-center justify-center font-bold text-xs">
                      3
                    </span>
                    {isRtl ? 'کات‌های ریتمیک و زوم دوربین' : 'Kinetic Pacing & Speed Ramps'}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-emerald-100 text-emerald-800 font-bold">
                    3.8x Watch
                  </span>
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed ps-8">
                  {isRtl
                    ? 'تغییر زاویه و زوم هر ۲.۵ ثانیه یک‌بار باعث ریست شدن تمرکز مغز بیننده و تماشای کامل ویدیو می‌شود.'
                    : 'Micro-punches and rhythm cuts every 2.5 seconds keep viewer attention in a retention lock.'}
                </p>
              </button>
            </div>

            {/* Center/Right Col: The Dynamic 9:16 Simulated Reel Player */}
            <div className="lg:col-span-8 order-1 lg:order-2 flex flex-col items-center justify-center">
              
              <div 
                className={`w-full max-w-[420px] rounded-3xl p-1.5 transition-all duration-500 relative ${
                  activeMode === 'aimo'
                    ? 'bg-gradient-to-tr from-[#7C3AED] via-[#3B82F6] to-[#EC4899] shadow-2xl shadow-purple-500/30'
                    : 'bg-neutral-800 shadow-xl'
                }`}
              >
                {/* The Phone Bezel Container */}
                <div className="relative rounded-[22px] overflow-hidden aspect-[9/14] sm:aspect-[9/13] flex flex-col justify-between p-5 sm:p-6 select-none bg-neutral-950 text-white transition-colors duration-500">
                  
                  {activeMode === 'aimo' ? (
                    /* ------------------ AIMO MASTER PRODUCTION (ENERGETIC, KINETIC, VIRAL) ------------------ */
                    <>
                      {/* Ambient Energy Glow Backdrop */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#16032d] via-[#210947] to-[#0c011a]" />
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#a78bfa_1px,transparent_1px)] [background-size:18px_18px]" />

                      {/* Top HUD / Status Bar */}
                      <div className="relative z-10 flex items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#f7be00] text-black font-black text-[11px] sm:text-xs flex items-center gap-1.5 shadow-md animate-bounce" style={{ animationDuration: '2.5s' }}>
                          <Flame className="w-3.5 h-3.5 fill-black" />
                          <span>VIRAL RETENTION</span>
                        </span>

                        <span className="text-[11px] font-mono text-purple-200 bg-white/10 px-2.5 py-1 rounded-full border border-white/15 backdrop-blur-md flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                          <span>60 FPS · 4K MASTER</span>
                        </span>
                      </div>

                      {/* Floating Audio & SFX Cues */}
                      <div className="relative z-10 flex flex-wrap gap-2 mt-2">
                        <div key={`sound-${pulseKey}`} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] text-yellow-300 font-bold border border-white/20 animate-pulse">
                          <Volume2 className="w-3 h-3" />
                          <span>Whoosh SFX + 808 Bass</span>
                        </div>
                        <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#7C3AED]/40 backdrop-blur-md text-[10px] text-white font-semibold border border-purple-400/30">
                          <Zap className="w-3 h-3 text-emerald-400" />
                          <span>Kinetic Zoom 1.2x</span>
                        </div>
                      </div>

                      {/* Center Hook & Captions with Sound Impact */}
                      <div className="relative z-10 self-center text-center max-w-xs my-auto">
                        <div className="inline-block p-1 mb-2">
                          <span className="text-[11px] uppercase tracking-widest font-extrabold text-purple-300 font-mono">
                            Hook Retention Lock
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-3 leading-tight drop-shadow-lg">
                          "Stop losing{' '}
                          <span className="inline-block px-2.5 py-0.5 rounded-lg bg-[#f7be00] text-black shadow-lg transform -rotate-1 scale-105 border border-yellow-200 animate-pulse">
                            clients
                          </span>{' '}
                          in the first 3 seconds!"
                        </h3>

                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 backdrop-blur-md">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>88.4% Watch Retention (Top 1%)</span>
                        </div>
                      </div>

                      {/* Live Animated Audio Waveform */}
                      <div className="relative z-10 flex items-center justify-center gap-1 my-2 h-7">
                        {[40, 75, 95, 60, 100, 85, 45, 90, 100, 70, 85, 55, 95, 65, 40].map((h, i) => (
                          <span
                            key={i}
                            className="w-1 rounded-full bg-gradient-to-t from-purple-500 to-pink-400 transition-all duration-300"
                            style={{
                              height: `${h}%`,
                              animation: `pulse 0.8s ease-in-out infinite alternate ${i * 0.05}s`
                            }}
                          />
                        ))}
                      </div>

                      {/* Bottom Footer & Engagement Overlays */}
                      <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#4F46E5] flex items-center justify-center text-white font-black text-xs shadow-sm">
                            a
                          </div>
                          <div>
                            <span className="font-bold text-white block leading-none">@aimoads</span>
                            <span className="text-[10px] text-emerald-400 font-medium">+480% Inbound Leads</span>
                          </div>
                        </div>

                        {/* Social Metrics Counter */}
                        <div className="flex items-center gap-2.5 text-neutral-300 text-[11px] font-semibold">
                          <span className="flex items-center gap-1 text-pink-400">
                            <Heart className="w-3.5 h-3.5 fill-pink-400" />
                            142K
                          </span>
                          <span className="flex items-center gap-1 text-sky-400">
                            <MessageCircle className="w-3.5 h-3.5" />
                            3.8K
                          </span>
                          <span className="flex items-center gap-1 text-emerald-400">
                            <Share2 className="w-3.5 h-3.5" />
                            28K
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* ------------------ STANDARD RAW CLIP (UNCUT, MONOTONE, FLAT) ------------------ */
                    <>
                      {/* Dull Dark Background with Noise Grain */}
                      <div className="absolute inset-0 bg-[#1c1c1f]" />
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />

                      {/* Top HUD / Warning Bar */}
                      <div className="relative z-10 flex items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-400 font-mono text-[11px] flex items-center gap-1.5 border border-neutral-700">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                          <span>REC · 1080p Static</span>
                        </span>

                        <span className="text-[10px] font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">
                          ⚠️ 74% Drop-off
                        </span>
                      </div>

                      {/* Center Raw Monotone Footage Message */}
                      <div className="relative z-10 self-center text-center max-w-xs my-auto opacity-70">
                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-2">
                          [Unedited Raw Footage]
                        </span>

                        <p className="text-lg sm:text-xl font-normal text-neutral-400 line-through decoration-red-500/70 mb-3 leading-relaxed">
                          "So today I wanted to introduce my business and explain what we do..."
                        </p>

                        <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-800/40 text-red-300 text-xs text-center">
                          <span className="font-bold block">Viewer Swiped Away at 0:02s</span>
                          <span className="text-[10px] text-red-400/80">No visual hook · Monotone sound · Static angle</span>
                        </div>
                      </div>

                      {/* Flat Audio Waveform */}
                      <div className="relative z-10 flex items-center justify-center gap-1 my-2 h-7 opacity-30">
                        {[15, 20, 18, 15, 22, 18, 20, 15, 18, 20, 15, 18, 15, 18, 15].map((h, i) => (
                          <span key={i} className="w-1 rounded-full bg-neutral-500" style={{ height: `${h}%` }} />
                        ))}
                      </div>

                      {/* Bottom Footer (Dull Metrics) */}
                      <div className="relative z-10 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-500">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 text-xs">
                            ?
                          </div>
                          <span>Ordinary Clip</span>
                        </div>

                        <div className="flex items-center gap-3 text-[11px] text-neutral-600">
                          <span>84 likes</span>
                          <span>3 comments</span>
                          <span>0 shares</span>
                        </div>
                      </div>
                    </>
                  )}

                </div>
              </div>

            </div>

          </div>

          {/* Key Feature Checkpoints Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-6 border-t border-neutral-100">
            {/* Raw Limitations */}
            <div className={`p-5 rounded-2xl border transition-all ${
              activeMode === 'raw' ? 'bg-red-50/50 border-red-200' : 'bg-neutral-50 border-neutral-200/60 opacity-80'
            }`}>
              <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span>{t.beforeAfter.rawLabel}</span>
              </h4>
              <ul className="space-y-2.5">
                {t.beforeAfter.rawPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* aimo Advantages */}
            <div className={`p-5 rounded-2xl border transition-all ${
              activeMode === 'aimo' ? 'bg-purple-50/80 border-[#7C3AED]/40 shadow-sm' : 'bg-neutral-50 border-neutral-200/60 opacity-80'
            }`}>
              <h4 className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t.beforeAfter.aimoLabel}</span>
              </h4>
              <ul className="space-y-2.5">
                {t.beforeAfter.aimoPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-900 font-medium">
                    <Check className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action CTA */}
          <div className="mt-8 text-center">
            <button
              onClick={onOpenInquiry}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] hover:brightness-110 text-white font-extrabold text-sm transition-all duration-200 active:scale-95 shadow-md hover:shadow-lg cursor-pointer inline-flex items-center gap-2"
            >
              <span>{isRtl ? 'دریافت آنالیز رایگان ویدیو و ایده‌های هوک' : 'Get Your Free Video Audit & Hook Concepts'}</span>
              <span className="rtl:rotate-180">→</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
