import React, { useState, useEffect } from 'react';
import { Translations } from '../translations';
import { AimoLogo } from './AimoLogo';
import { 
  X, 
  MessageCircle, 
  Instagram, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import { saveInquiry } from '../utils/inquiries';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translations;
  initialService?: string;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
  t,
  initialService,
}) => {
  const isRtl = t.dir === 'rtl';

  const defaultServices = isRtl
    ? [
        'ریلز اینستاگرام و تدوین اختصاصی',
        'تولید و تدوین ویدیوهای یوتیوب',
        'موشن‌گرافیک و جلوه‌های ویژه سه‌بعدی',
        'طراحی وب‌سایت‌های منحصربه‌فرد و لندینگ پیج',
      ]
    : [
        'Instagram Reels & Video Editing',
        'YouTube Long-Form Production',
        'Motion Graphics & 3D VFX',
        'Bespoke Websites & Landing Pages',
      ];

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [instagram, setInstagram] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync initial services when modal opens
  useEffect(() => {
    if (isOpen) {
      if (initialService) {
        setSelectedServices([initialService]);
      } else {
        setSelectedServices([defaultServices[0]]);
      }
      setSubmitted(false);
      setIsSubmitting(false);
    }
  }, [isOpen, initialService, isRtl]);

  if (!isOpen) return null;

  const handleToggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== service));
      }
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Save to inquiries storage for the Admin panel
    saveInquiry({
      name: name.trim(),
      contact: contactInfo.trim(),
      instagram: instagram.trim() || undefined,
      services: selectedServices,
      notes: notes.trim() || undefined,
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  // WhatsApp direct link generator with +98 9999927201
  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      isRtl
        ? `سلام تیم استودیو ایمو!\nدرخواست همکاری دارم:\nخدمات: ${selectedServices.join(', ')}\nنام/برند: ${name || instagram || 'کاربر سایت'}\nشماره تماس: ${contactInfo}\nتوضیحات: ${notes || 'بررسی اولیه'}`
        : `Hello aimo Content Studio!\nI would like to start a project:\nServices: ${selectedServices.join(', ')}\nName/Brand: ${name || instagram || 'Website Client'}\nContact: ${contactInfo}\nNotes: ${notes || 'Initial inquiry'}`
    );
    return `https://wa.me/989999927201?text=${text}`;
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      dir={t.dir}
    >
      <div 
        className="w-full max-w-lg max-h-[92vh] overflow-y-auto bg-white rounded-3xl p-5 sm:p-7 shadow-2xl border border-neutral-200 relative text-neutral-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label={t.contactModal.close}
          className="absolute top-4 end-4 p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-black transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header with Aimo Logo */}
        <div className="flex items-center gap-3 mb-5 pe-8">
          <AimoLogo size="sm" showText={false} />
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-neutral-950 font-sans tracking-tight">
              {t.contactModal.title}
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5">
              {t.contactModal.subtitle}
            </p>
          </div>
        </div>

        {submitted ? (
          /* Confirmation Success Screen */
          <div className="py-6 text-center flex flex-col items-center animate-in fade-in">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="text-xl font-extrabold text-neutral-950 mb-2">
              {t.contactModal.successTitle}
            </h4>

            <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mb-6 leading-relaxed">
              {t.contactModal.successMessage}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.contactModal.chatWhatsApp}</span>
              </a>

              <a
                href="https://instagram.com/aimoads"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:brightness-110 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>{t.contactModal.dmInstagram}</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="mt-6 text-xs text-neutral-500 hover:text-black font-semibold underline cursor-pointer"
            >
              {t.contactModal.close}
            </button>
          </div>
        ) : (
          /* Clean & Streamlined Inquiry Form (without Volume slider as requested) */
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Step 1: Content Type / Service */}
            <div>
              <label className="text-xs font-bold text-neutral-800 uppercase tracking-wider block mb-2">
                {t.contactModal.step1Title}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {defaultServices.map((service) => {
                  const isChecked = selectedServices.includes(service);
                  return (
                    <button
                      type="button"
                      key={service}
                      onClick={() => handleToggleService(service)}
                      className={`text-left rtl:text-right p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        isChecked
                          ? 'border-[#7C3AED] bg-purple-50/70 text-[#7C3AED] ring-1 ring-[#7C3AED]/20'
                          : 'border-neutral-200 hover:bg-neutral-50 text-neutral-700'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span>{service}</span>
                        {isChecked && <Check className="w-3.5 h-3.5 shrink-0" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Contact Details */}
            <div className="space-y-3 pt-3 border-t border-neutral-100">
              <label className="text-xs font-bold text-neutral-800 uppercase tracking-wider block">
                {t.contactModal.step2Title}
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <input
                    type="text"
                    required
                    placeholder={t.contactModal.namePlaceholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#7C3AED] transition-all"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder={t.contactModal.instagramPlaceholder}
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#7C3AED] transition-all"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  required
                  placeholder={t.contactModal.whatsappPlaceholder}
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#7C3AED] transition-all"
                />
              </div>

              <div>
                <textarea
                  rows={2}
                  placeholder={t.contactModal.notesPlaceholder}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#7C3AED] resize-none transition-all"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] hover:brightness-110 text-white font-extrabold text-sm flex items-center justify-center gap-2 transition-all active:scale-98 shadow-md cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>{t.contactModal.submitting}</span>
              ) : (
                <>
                  <span>{t.contactModal.submitButton}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </>
              )}
            </button>

            {/* Micro reassurance */}
            <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-neutral-500">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>
                {isRtl
                  ? 'پاسخگویی سریع کمتر از ۲ ساعت · مشاوره رایگان استراتژی محتوا'
                  : 'Guaranteed response within 2 hours · Free creative consultation'}
              </span>
            </div>

            {/* Direct Connect Options */}
            <div className="pt-3 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-500">
              <span className="font-medium">{t.contactModal.orDirect}</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/989999927201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span dir="ltr">+98 999 992 7201</span>
                </a>
                <span className="text-neutral-300">·</span>
                <a
                  href="https://instagram.com/aimoads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>@aimoads</span>
                </a>
              </div>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};
