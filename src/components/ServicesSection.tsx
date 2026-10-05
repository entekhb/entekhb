import React, { useState } from 'react';
import { Translations } from '../translations';
import { 
  Instagram, 
  Youtube, 
  Sparkles, 
  Globe, 
  CheckCircle2, 
  Clock, 
  Users, 
  TrendingUp, 
  ArrowRight,
  Layers,
  Zap
} from 'lucide-react';

interface ServicesSectionProps {
  t: Translations;
  onOpenInquiry: (defaultService?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ t, onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<'instagram' | 'youtube' | 'motion' | 'web'>('instagram');

  const tabConfigs = [
    { key: 'instagram' as const, icon: Instagram, label: t.servicesSection.tabLabels.instagram },
    { key: 'youtube' as const, icon: Youtube, label: t.servicesSection.tabLabels.youtube },
    { key: 'motion' as const, icon: Sparkles, label: t.servicesSection.tabLabels.motion },
    { key: 'web' as const, icon: Globe, label: t.servicesSection.tabLabels.web },
  ];

  const currentService = t.servicesSection.services[activeTab];

  return (
    <section id="services" className="py-16 sm:py-24 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <span className="text-xs font-bold tracking-widest text-[#007bff] uppercase mb-2 block">
            {t.servicesSection.kicker}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight mb-4">
            {t.servicesSection.title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            {t.servicesSection.subtitle}
          </p>
        </div>

        {/* Interactive Segmented Control Tabs */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-2 mb-8 no-scrollbar">
          <div className="p-1 bg-neutral-100 rounded-full border border-neutral-200/80 inline-flex gap-1 shrink-0">
            {tabConfigs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-neutral-900 text-white shadow-xs'
                      : 'text-neutral-600 hover:text-black hover:bg-neutral-200/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#f7be00]' : 'text-neutral-500'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Service Showcase Card */}
        <div className="bg-[#faf8f7] rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-flighty-card transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Number, Title, Description, Metrics */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold text-neutral-400">
                  {currentService.number}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                <span className="text-xs font-semibold text-[#007bff] uppercase tracking-wider">
                  {currentService.tagline}
                </span>
              </div>

              <h3 className="text-xl sm:text-3xl font-extrabold text-neutral-950 mb-4 leading-tight">
                {currentService.title}
              </h3>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                {currentService.description}
              </p>

              {/* Quantified Metric Badge + Turnaround Block */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white border border-neutral-200 mb-6">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-neutral-950 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-[#007bff]" />
                    <span>{currentService.metricValue}</span>
                  </div>
                  <span className="text-[11px] text-neutral-500 font-medium">
                    {currentService.metricLabel}
                  </span>
                </div>

                <div>
                  <div className="text-xl sm:text-2xl font-black text-neutral-950 flex items-center gap-1">
                    <Clock className="w-4 h-4 text-[#f7be00]" />
                    <span>{currentService.turnaround}</span>
                  </div>
                  <span className="text-[11px] text-neutral-500 font-medium">
                    Turnaround Time
                  </span>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <div className="text-sm font-bold text-neutral-800 flex items-center gap-1 mt-1">
                    <Users className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Target Fit</span>
                  </div>
                  <span className="text-[11px] text-neutral-500 line-clamp-2">
                    {currentService.idealFor}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => onOpenInquiry(currentService.title)}
                  className="px-6 py-3 rounded-full bg-[#f7be00] hover:bg-[#e6b000] text-black font-bold text-xs sm:text-sm flex items-center gap-2 transition-all active:scale-95 shadow-xs cursor-pointer"
                >
                  <Zap className="w-4 h-4 fill-black" />
                  <span>Request This Service</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            </div>

            {/* Right Column: Complete Deliverables Checklist */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-5 sm:p-6 border border-neutral-200 shadow-xs">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-100">
                <Layers className="w-4 h-4 text-neutral-500" />
                <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wider">
                  Included in Every Sprint
                </h4>
              </div>

              <ul className="space-y-3">
                {currentService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
                    <CheckCircle2 className="w-4 h-4 text-[#007bff] shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
                <span>Direct Slack/WhatsApp Channel</span>
                <span className="font-mono text-emerald-600 font-bold">● Active 24/7</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
