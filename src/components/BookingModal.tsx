import React, { useState } from 'react';
import { X, Check, ArrowRight, Send, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { AimoLogo } from './AimoLogo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedService,
}) => {
  const [name, setName] = useState('');
  const [handle, setHandle] = useState('');
  const [contactMethod, setContactMethod] = useState<'whatsapp' | 'telegram' | 'email'>('telegram');
  const [contactDetail, setContactDetail] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(
    preSelectedService ? [preSelectedService] : ['High-Retention Reels & Video Editing']
  );
  const [budget, setBudget] = useState('flexible');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const serviceOptions = [
    'High-Retention Reels & Video Editing',
    'Instagram Carousels & Graphic Decks',
    'High-Converting Business Websites',
    'Complete Page & Brand Modernization',
  ];

  const toggleService = (svc: string) => {
    setSelectedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const telegramMsg = encodeURIComponent(
    `Hello aimo team! My name is ${name || 'Friend'}. My Instagram/Website is ${handle || 'N/A'}. I am interested in: ${selectedServices.join(', ')}. Budget: ${budget}.`
  );

  const whatsappMsg = encodeURIComponent(
    `Hello aimo team! I would like to book a content growth audit for my business (${handle || 'Website'}). Services: ${selectedServices.join(', ')}.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-[28px] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-black/[0.08] relative max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f2f2f3] flex items-center justify-center text-[#17191c] hover:bg-[#e4e4e7] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <AimoLogo size="sm" showWordmark={true} withDomain={true} />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#17191c] mb-2 leading-tight">
              Request Your Free <span className="italic text-[#5b21b6]">Growth Audit</span>.
            </h3>
            <p className="text-xs sm:text-sm text-[#777b86] mb-6">
              Get a diagnostic review of your current content, hook performance, and website conversion flow. Zero obligation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Multi-Select */}
              <div>
                <label className="text-xs font-semibold text-[#17191c] block mb-2 uppercase tracking-wider">
                  Services You Need:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {serviceOptions.map((svc) => {
                    const isSelected = selectedServices.includes(svc);
                    return (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => toggleService(svc)}
                        className={`p-2.5 rounded-xl text-left text-xs font-medium transition-all border flex items-center justify-between ${
                          isSelected
                            ? 'border-[#5b21b6] bg-[#fbf9fe] text-[#5b21b6]'
                            : 'border-black/[0.06] bg-[#fafafb] text-[#777b86] hover:bg-[#f2f2f3]'
                        }`}
                      >
                        <span className="truncate pr-2">{svc}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 shrink-0 text-[#5b21b6]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Handle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-[#17191c] block mb-1">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full h-11 px-3.5 bg-[#f2f2f3] rounded-xl text-xs sm:text-sm text-[#17191c] placeholder:text-[#a3a6af] focus:outline-none focus:ring-1 focus:ring-[#7c3aed]"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#17191c] block mb-1">
                    Instagram Handle or Website:
                  </label>
                  <input
                    type="text"
                    required
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    placeholder="@yourbusiness or domain.com"
                    className="w-full h-11 px-3.5 bg-[#f2f2f3] rounded-xl text-xs sm:text-sm text-[#17191c] placeholder:text-[#a3a6af] focus:outline-none focus:ring-1 focus:ring-[#7c3aed]"
                  />
                </div>
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="text-xs font-medium text-[#17191c] block mb-1.5">
                  How Should We Send Your Audit?
                </label>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  <button
                    type="button"
                    onClick={() => setContactMethod('telegram')}
                    className={`h-9 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 border ${
                      contactMethod === 'telegram'
                        ? 'bg-[#17191c] text-white border-[#17191c]'
                        : 'bg-[#fafafb] text-[#777b86] border-black/[0.06]'
                    }`}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Telegram</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactMethod('whatsapp')}
                    className={`h-9 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 border ${
                      contactMethod === 'whatsapp'
                        ? 'bg-[#17191c] text-white border-[#17191c]'
                        : 'bg-[#fafafb] text-[#777b86] border-black/[0.06]'
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactMethod('email')}
                    className={`h-9 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 border ${
                      contactMethod === 'email'
                        ? 'bg-[#17191c] text-white border-[#17191c]'
                        : 'bg-[#fafafb] text-[#777b86] border-black/[0.06]'
                    }`}
                  >
                    <span>Email</span>
                  </button>
                </div>

                <input
                  type="text"
                  required
                  value={contactDetail}
                  onChange={(e) => setContactDetail(e.target.value)}
                  placeholder={
                    contactMethod === 'telegram'
                      ? 'Telegram @username or phone'
                      : contactMethod === 'whatsapp'
                      ? 'WhatsApp phone number with country code'
                      : 'your@email.com'
                  }
                  className="w-full h-11 px-3.5 bg-[#f2f2f3] rounded-xl text-xs sm:text-sm text-[#17191c] placeholder:text-[#a3a6af] focus:outline-none focus:ring-1 focus:ring-[#7c3aed]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full h-12 rounded-full bg-[#17191c] text-white text-sm font-medium hover:bg-black transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Submit Audit Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#979799] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Your details remain 100% confidential. No spam.</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-[#fbe1d1] text-[#5d2a1a] flex items-center justify-center mx-auto mb-4">
              <Check className="w-7 h-7 stroke-[2.5]" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#17191c] mb-2">
              Audit Request Received!
            </h3>
            <p className="text-xs sm:text-sm text-[#777b86] mb-6 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-[#17191c]">{name}</span>. Our strategy lead is analyzing <span className="font-semibold text-[#17191c]">{handle}</span> and will deliver your customized roadmap within 24 hours.
            </p>

            <div className="p-4 bg-[#fafafb] rounded-2xl border border-black/[0.05] mb-6 text-left space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-[#777b86]">Assigned Agency:</span>
                <span className="font-semibold text-[#17191c]">aimo (aimoads.site)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#777b86]">Selected Pillars:</span>
                <span className="font-medium text-[#5b21b6]">{selectedServices.length} Services</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#777b86]">Delivery Channel:</span>
                <span className="font-medium text-[#17191c] uppercase">{contactMethod}</span>
              </div>
            </div>

            {/* Instant Fast-Track Links */}
            <div className="space-y-2">
              <span className="text-xs text-[#979799] block mb-2">
                Want immediate feedback? Connect with us directly now:
              </span>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`https://t.me/aimoads?text=${telegramMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 rounded-full bg-[#5b21b6] text-white text-xs font-medium flex items-center justify-center gap-1.5 shadow-sm hover:bg-[#4c1d95] transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Open in Telegram</span>
                </a>
                <a
                  href={`https://wa.me/?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 rounded-full bg-emerald-600 text-white text-xs font-medium flex items-center justify-center gap-1.5 shadow-sm hover:bg-emerald-700 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Open WhatsApp</span>
                </a>
              </div>
            </div>

            <button
              onClick={onClose}
              className="mt-6 text-xs text-[#777b86] hover:text-[#17191c] underline"
            >
              Back to site
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
