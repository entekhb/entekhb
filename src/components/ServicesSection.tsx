import React, { useState } from 'react';
import { Video, Layers, Globe, Sparkles, Check, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<string>('video');

  const services: ServiceItem[] = [
    {
      id: 'video',
      category: 'Video Production & Editing',
      title: 'High-Retention Reels & Video Editing',
      summary:
        'Transform raw footage into dynamic, scroll-stopping short-form videos with hypnotic pacing, custom sound design, and retention-focused hooks.',
      deliverables: [
        '0-3s Pattern-Interrupt Hook Crafting',
        'Kinetic Animated Subtitles & B-Roll Overlays',
        'Immersive Sound Design & SFX Transitions',
        'Color Grading & Mobile 4K Optimization',
        'Direct-Response CTA to trigger DMs and comments',
      ],
      metricLabel: 'Average Retention Lift',
      metricValue: '+78%',
      iconName: 'video',
    },
    {
      id: 'carousel',
      category: 'Social Slide Design',
      title: 'Instagram Carousels & Graphic Decks',
      summary:
        'Multi-slide editorial and educational graphics designed to establish deep authority, maximize saves and shares, and lead readers to buy.',
      deliverables: [
        'High-Contrast Typographic Cover Slides',
        'Step-by-Step Educational Framework Decks',
        'Saveable Cheat-Sheets & Infographics',
        'Custom Brand Color Palettes & Textures',
        'Lead Magnet Trigger Slides with Keyword CTAs',
      ],
      metricLabel: 'Average Save-to-Reach Ratio',
      metricValue: '4.6x',
      iconName: 'carousel',
    },
    {
      id: 'web',
      category: 'Web Design & Development',
      title: 'High-Converting Business Websites',
      summary:
        'Modern, lightning-fast landing pages and websites engineered specifically for mobile visitors to build trust and effortlessly close client bookings.',
      deliverables: [
        '100% Mobile-Optimized Responsive Architecture',
        'High-Speed Performance (Sub-1s Load Time)',
        'Direct WhatsApp, Telegram & Booking Integrations',
        'Editorial Typography & Minimalist Aesthetics',
        'SEO & OpenGraph Social Sharing Metadata',
      ],
      metricLabel: 'Mobile Conversion Rate',
      metricValue: '3.8x',
      iconName: 'globe',
    },
    {
      id: 'modernization',
      category: 'Full Brand Overhaul',
      title: 'Complete Page & Brand Modernization',
      summary:
        'A comprehensive visual upgrade that elevates your Instagram page and digital touchpoints into an irresistible, modern industry powerhouse.',
      deliverables: [
        'Bio Optimization with Conversion Hook',
        'Curated Highlight Architecture & Covers',
        'Cohesive Grid Strategy & Visual Identity',
        'Story Engagement Templates & Link In Bio Setup',
        'Customer Journey Audit & Messaging Overhaul',
      ],
      metricLabel: 'Inbound Inquiry Growth',
      metricValue: '+320%',
      iconName: 'sparkles',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#fafafb] border-y border-black/[0.04]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#979799] font-medium block mb-2">
            Targeted Services
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#17191c] leading-[1.2] mb-4">
            Everything your brand needs to look{' '}
            <span className="italic text-[#5b21b6]">modern and convert</span>.
          </h2>
          <p className="text-base sm:text-lg text-[#777b86] font-normal leading-relaxed">
            We don’t produce random content to fill space. Every reel, carousel slide, and website we build is reverse-engineered to attract qualified leads and turn attention into revenue.
          </p>
        </div>

        {/* Mobile Filter Tabs (80% Mobile Focus) */}
        <div className="flex md:hidden items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeTab === s.id
                  ? 'bg-[#17191c] text-white'
                  : 'bg-white text-[#777b86] border border-black/[0.05]'
              }`}
            >
              {s.title.split('&')[0].trim()}
            </button>
          ))}
        </div>

        {/* Services Grid (Desktop 2x2, Mobile Active or Full Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const isMobileHidden = activeTab !== service.id;

            return (
              <div
                key={service.id}
                className={`bg-[#ffffff] rounded-[24px] p-6 sm:p-8 border border-black/[0.06] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                  isMobileHidden ? 'hidden md:flex' : 'flex'
                }`}
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[13px] font-medium text-[#7c3aed] uppercase tracking-wider">
                      {service.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#f2f2f3] text-[12px] font-semibold text-[#17191c]">
                      {service.metricValue}{' '}
                      <span className="font-normal text-[#777b86]">{service.metricLabel}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#17191c] mb-3 leading-snug">
                    {service.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-[#777b86] text-sm sm:text-base leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 pt-4 border-t border-black/[0.04] mb-8">
                    <div className="text-xs font-semibold text-[#17191c] uppercase tracking-wider">
                      Included Deliverables:
                    </div>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#17191c]">
                        <div className="w-4 h-4 rounded-full bg-[#f2f2f3] text-[#5b21b6] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-black/[0.04] flex items-center justify-between">
                  <span className="text-xs text-[#979799]">
                    Engineered for <span className="text-[#17191c] font-medium">aimoads.site</span>
                  </span>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="h-10 px-5 rounded-full bg-[#f2f2f3] hover:bg-[#17191c] text-[#17191c] hover:text-white transition-all text-xs sm:text-sm font-medium flex items-center gap-1.5 group cursor-pointer"
                  >
                    <span>Inquire About This</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View All Switcher Helper */}
        <div className="md:hidden mt-4 text-center">
          <button
            onClick={() => {
              const ids = services.map((s) => s.id);
              const nextIndex = (ids.indexOf(activeTab) + 1) % ids.length;
              setActiveTab(ids[nextIndex]);
            }}
            className="text-xs text-[#5b21b6] font-medium inline-flex items-center gap-1 py-2"
          >
            <span>Tap to see next service ({activeTab === 'modernization' ? 'Reels' : 'Next'})</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
