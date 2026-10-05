import { Language } from './types';

export interface Translations {
  dir: 'ltr' | 'rtl';
  brand: {
    name: string;
    studio: string;
    domain: string;
    tagline: string;
  };
  announcement: {
    pill: string;
    text: string;
    link: string;
  };
  nav: {
    services: string;
    reels: string;
    workflow: string;
    calculator: string;
    caseStudies: string;
    contact: string;
    getStarted: string;
  };
  hero: {
    badge1: string;
    badge2: string;
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    microTrust: string;
    floatingCards: {
      card1Title: string;
      card1Meta: string;
      card1Badge: string;
      card2Title: string;
      card2Meta: string;
      card2Badge: string;
      card3Title: string;
      card3Meta: string;
      card3Badge: string;
      card4Title: string;
      card4Meta: string;
      card4Badge: string;
    };
  };
  phoneMockup: {
    creatorHandle: string;
    verified: string;
    audio: string;
    viewsCount: string;
    likesCount: string;
    commentsCount: string;
    sharesCount: string;
    hookText: string;
    caption: string;
    statusActive: string;
    viewInInstagram: string;
  };
  servicesSection: {
    kicker: string;
    title: string;
    subtitle: string;
    tabLabels: {
      instagram: string;
      youtube: string;
      motion: string;
      web: string;
    };
    services: {
      instagram: {
        number: string;
        title: string;
        tagline: string;
        description: string;
        metricValue: string;
        metricLabel: string;
        turnaround: string;
        idealFor: string;
        deliverables: string[];
      };
      youtube: {
        number: string;
        title: string;
        tagline: string;
        description: string;
        metricValue: string;
        metricLabel: string;
        turnaround: string;
        idealFor: string;
        deliverables: string[];
      };
      motion: {
        number: string;
        title: string;
        tagline: string;
        description: string;
        metricValue: string;
        metricLabel: string;
        turnaround: string;
        idealFor: string;
        deliverables: string[];
      };
      web: {
        number: string;
        title: string;
        tagline: string;
        description: string;
        metricValue: string;
        metricLabel: string;
        turnaround: string;
        idealFor: string;
        deliverables: string[];
      };
    };
  };
  beforeAfter: {
    kicker: string;
    title: string;
    subtitle: string;
    rawLabel: string;
    aimoLabel: string;
    dragHint: string;
    rawPoints: string[];
    aimoPoints: string[];
  };
  calculator: {
    kicker: string;
    title: string;
    subtitle: string;
    sliderLabel1: string;
    sliderLabel2: string;
    resultViews: string;
    resultLeads: string;
    resultRevenue: string;
    note: string;
    cta: string;
  };
  controlRoom: {
    kicker: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: {
      stat1Val: string;
      stat1Label: string;
      stat2Val: string;
      stat2Label: string;
      stat3Val: string;
      stat3Label: string;
      stat4Val: string;
      stat4Label: string;
    };
    pipelineSteps: {
      step1Title: string;
      step1Desc: string;
      step2Title: string;
      step2Desc: string;
      step3Title: string;
      step3Desc: string;
      step4Title: string;
      step4Desc: string;
    };
  };
  caseStudiesSection: {
    kicker: string;
    title: string;
    subtitle: string;
    studies: Array<{
      client: string;
      category: string;
      stat: string;
      label: string;
      desc: string;
      impact: string;
    }>;
  };
  contactModal: {
    title: string;
    subtitle: string;
    step1Title: string;
    step2Title: string;
    servicesSelect: string;
    volumeSelect: string;
    namePlaceholder: string;
    instagramPlaceholder: string;
    whatsappPlaceholder: string;
    notesPlaceholder: string;
    submitButton: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    orDirect: string;
    chatWhatsApp: string;
    dmInstagram: string;
    close: string;
  };
  footer: {
    rights: string;
    domain: string;
    tagline: string;
    linksTitle: string;
    socialTitle: string;
    privacy: string;
    terms: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    dir: 'ltr',
    brand: {
      name: 'aimo',
      studio: 'Content Studio',
      domain: 'aimoads.site',
      tagline: 'High-Converting Content Studio'
    },
    announcement: {
      pill: 'SPECIAL OFFER',
      text: '30% off long-form video editing (YouTube, podcasts & master content)',
      link: 'Claim 30% Off'
    },
    nav: {
      services: 'Services',
      reels: 'Reels & Video',
      workflow: 'Workflow',
      calculator: 'Growth ROI',
      caseStudies: 'Case Studies',
      contact: 'Contact',
      getStarted: 'Start Project'
    },
    hero: {
      badge1: 'Content Studio of the Year · 2024',
      badge2: '120M+ Organic Views Delivered',
      headlinePart1: 'Content that turns viewers into',
      headlineHighlight: 'paying clients',
      headlinePart2: 'at scale.',
      subheadline: 'aimo is the content studio for modern brands and creators. We engineer high-retention Instagram Reels, 4K YouTube edits, kinetic motion graphics, and bespoke websites designed to elevate your brand.',
      ctaPrimary: 'Start Your Project',
      ctaSecondary: 'Watch Reel Showcase',
      microTrust: 'No cookie-cutter templates · 48h turnaround · Dedicated revisions until achieving the ideal result',
      floatingCards: {
        card1Title: 'Instagram Reel Reached 1,420,000 Views',
        card1Meta: '+480% Organic reach boost within 72 hours',
        card1Badge: 'VIRAL HOOK',
        card2Title: 'Hook Retention Optimized: 86.4%',
        card2Meta: 'First 3-second dropoff reduced by 3.4x',
        card2Badge: 'PACING 2.0',
        card3Title: '42 Direct DM Inquiries Converted',
        card3Meta: 'High-intent client funnel via Instagram bio link',
        card3Badge: 'CONVERSION',
        card4Title: 'YouTube 4K Timeline Rendered',
        card4Meta: '60 FPS · Master Sound Design · Custom B-Roll',
        card4Badge: 'PRODUCTION'
      }
    },
    phoneMockup: {
      creatorHandle: '@aimoads',
      verified: 'Verified Studio',
      audio: 'Original Audio — aimo Sound Hook',
      viewsCount: '1.4M',
      likesCount: '142K',
      commentsCount: '3.8K',
      sharesCount: '28.4K',
      hookText: 'Stop losing 90% of your viewers in the first 3 seconds.',
      caption: 'Swipe to see how our micro-animations and psychological pacing keep watch time above 85%...',
      statusActive: 'LIVE REEL PERFORMANCE',
      viewInInstagram: 'Open Instagram'
    },
    servicesSection: {
      kicker: 'FULL-STACK CREATIVE PRODUCTION',
      title: 'Four focused disciplines. One standard: measurable conversion.',
      subtitle: 'Most content gets scrolled past in 0.8 seconds. We craft videos, visuals, and websites engineered to capture attention and convert it into customer revenue.',
      tabLabels: {
        instagram: 'Instagram Reels & Posts',
        youtube: 'YouTube Production',
        motion: 'Motion Graphics',
        web: 'Conversion Web Design'
      },
      services: {
        instagram: {
          number: '01',
          title: 'Instagram Reels & Conversion Graphics',
          tagline: 'Turn casual profile visitors into loyal buyers.',
          description: 'Custom short-form video editing crafted for Instagram algorithm dynamics: psychological hook design, kinetic captions, rhythm-matched cuts, sound effects, and high-engagement carousel graphics.',
          metricValue: '+340%',
          metricLabel: 'Average 30-Day View Increase',
          turnaround: '24-48 Hours',
          idealFor: 'E-commerce brands, coaches, personal brands & creators',
          deliverables: [
            'Psychological 3-second hook variations',
            'Kinetic word-by-word animated subtitles',
            'Dynamic sound design & audio mastering',
            'Seamless B-roll & 3D graphic overlays',
            'High-converting multi-slide carousels',
            'Optimized thumbnails & cover designs'
          ]
        },
        youtube: {
          number: '02',
          title: 'YouTube Long-Form Production',
          tagline: 'High-retention editing that builds deep authority.',
          description: 'Complete YouTube post-production designed to maximize Average View Duration (AVD) and click-through rates. From raw talking-head footage to documentary-grade cinematic storytelling.',
          metricValue: '68.5%',
          metricLabel: 'Average Viewer Retention Rate',
          turnaround: '3-4 Days',
          idealFor: 'YouTubers, educational channels & corporate podcasts',
          deliverables: [
            'Master narrative pacing & dead-air removal',
            'Curated cinematic B-roll and zooms',
            'Soundscape layering and custom SFX',
            'Pattern interrupts every 4-7 seconds',
            'Click-winning A/B thumbnail concepts',
            'Full 4K 60FPS color grading'
          ]
        },
        motion: {
          number: '03',
          title: 'Motion Graphics & Visual Effects',
          tagline: 'Bespoke animations that elevate brand perception.',
          description: 'Sleek, Apple-grade motion design. We animate complex data, product features, kinetic typography, and 3D visual assets that turn abstract ideas into memorable visual experiences.',
          metricValue: '100%',
          metricLabel: 'Custom Bespoke Motion Assets',
          turnaround: '48 Hours',
          idealFor: 'SaaS companies, luxury brands & digital products',
          deliverables: [
            'Kinetic typography & title sequences',
            '3D device mockups & app UI animations',
            'Custom animated logos & lower thirds',
            'Infographic & data visualization',
            'Social media animated ad creatives',
            'Lottie / WebGL web animations'
          ]
        },
        web: {
          number: '04',
          title: 'High-Converting Web & Landing Pages',
          tagline: 'Where Instagram traffic lands and takes action.',
          description: 'Mobile-first, lightning-fast web pages built specifically to convert traffic coming from Instagram and social bio links. 99+ Google PageSpeed score, frictionless checkouts, and clean Apple-inspired minimalism.',
          metricValue: '14.8%',
          metricLabel: 'Average Bio-Link Conversion Rate',
          turnaround: '5-7 Days',
          idealFor: 'Brands needing a high-converting digital storefront',
          deliverables: [
            'Mobile-first responsive architecture',
            'Sub-second load times (<0.6s FCP)',
            'Direct WhatsApp & Instagram integration',
            'High-converting checkout & lead funnels',
            'Full analytics & pixel tracking setup',
            'Domain configuration (aimoads.site)'
          ]
        }
      }
    },
    beforeAfter: {
      kicker: 'THE CRAFT OF ENGAGEMENT',
      title: 'The Retention Breakthrough: Before & After aimo Edit',
      subtitle: 'Slide across to see how precision rhythm, master sound design, and hook engineering transform ordinary footage into captivating, high-converting content.',
      rawLabel: 'Standard Raw Clip',
      aimoLabel: 'aimo Master Edit',
      dragHint: 'Drag slider to compare',
      rawPoints: [
        'Monotone voice without sound cues',
        'Static camera angle causes 70% dropoff',
        'Bland generic fonts without rhythm',
        'Zero conversion trigger or bio link CTA'
      ],
      aimoPoints: [
        'Psychological audio whoosh & bass hook at 0:01s',
        'Dynamic camera punch-ins every 2.5 seconds',
        'Kinetic animated text matching spoken cadence',
        'Clear conversion path yielding 4x inbound leads'
      ]
    },
    calculator: {
      kicker: 'POTENTIAL IMPACT CALCULATOR',
      title: 'Calculate your projected brand growth with aimo',
      subtitle: 'See what happens when you combine algorithm-optimized video pacing with high-converting bio link landing pages.',
      sliderLabel1: 'Current Monthly Content Pieces',
      sliderLabel2: 'Average Views Per Video',
      resultViews: 'Projected Monthly Views',
      resultLeads: 'Est. Inbound Client Inquiries',
      resultRevenue: 'Projected Monthly Pipeline Impact',
      note: 'Based on average performance across 45+ aimo creator and brand partnerships in 2023-2024.',
      cta: 'Claim Your Strategy Call'
    },
    controlRoom: {
      kicker: 'STUDIO CONTROL ROOM',
      title: 'A continuous production line for your content.',
      subtitle: 'Think of aimo as your dedicated in-house video production department, operating 24/7 with zero overhead.',
      ctaPrimary: 'Start A Production Sprint',
      ctaSecondary: 'Chat on WhatsApp',
      stats: {
        stat1Val: '< 48h',
        stat1Label: 'Average First Draft Turnaround',
        stat2Val: '120M+',
        stat2Label: 'Total Organic Views Generated',
        stat3Val: '99.4%',
        stat3Label: 'Client Satisfaction Rate',
        stat4Val: '4.2x',
        stat4Label: 'Average Lead Volume Surge'
      },
      pipelineSteps: {
        step1Title: '1. Raw Upload & Brief',
        step1Desc: 'Drop your raw video clips or voice notes into your private dedicated portal in 30 seconds.',
        step2Title: '2. Psychological Hook & Edit',
        step2Desc: 'Our senior editors craft the hook, pacing, color, sound, and animations.',
        step3Title: '3. Rapid Feedback & Polish',
        step3Desc: 'Review with frame-by-frame comments. Unlimited revisions included until perfection.',
        step4Title: '4. Ready-to-Publish & Convert',
        step4Desc: 'Download 4K mastered files with ready-to-paste captions, hashtags, and thumbnail variants.'
      }
    },
    caseStudiesSection: {
      kicker: 'DOCUMENTED RESULTS',
      title: 'Real creators and brands. Measurable conversion.',
      subtitle: 'Here is how our content production transformed visibility into revenue for our partners.',
      studies: [
        {
          client: 'Aura Lifestyle & Apparel',
          category: 'E-Commerce / Instagram Reels',
          stat: '+480%',
          label: 'Organic Reach Jump',
          desc: 'Revamped brand Instagram reels with rhythmic pacing, lifestyle B-roll, and micro-influencer hooks.',
          impact: '$340,000 in direct Instagram checkout revenue in 90 days'
        },
        {
          client: 'Dr. Daniel Vance',
          category: 'Personal Brand / YouTube',
          stat: '850K',
          label: 'New Subscribers Added',
          desc: 'Documentary-style YouTube video editing with custom motion graphics, sound design, and viral packaging.',
          impact: 'Average watch time increased from 3:12 to 11:45 per video'
        },
        {
          client: 'Nexus Growth Capital',
          category: 'B2B Agency / Landing Page & Reels',
          stat: '14.8%',
          label: 'Bio Link Conversion',
          desc: 'Custom high-speed landing page paired with high-converting short-form case study reels.',
          impact: '62 qualified B2B client applications generated in the first month'
        }
      ]
    },
    contactModal: {
      title: 'Start Your Project with aimo',
      subtitle: 'Fill out this brief or connect directly with our creative team.',
      step1Title: '1. Select the services you need:',
      step2Title: '2. Your Contact & Brand Details:',
      servicesSelect: 'Select Services',
      volumeSelect: 'Estimated Monthly Volume',
      namePlaceholder: 'Your Name or Brand *',
      instagramPlaceholder: 'Instagram Handle (e.g. @yourbrand)',
      whatsappPlaceholder: 'WhatsApp Number or Email *',
      notesPlaceholder: 'Briefly describe your project, timeline, or goals...',
      submitButton: 'Send Project Request',
      submitting: 'Submitting Request...',
      successTitle: 'Project Request Received!',
      successMessage: 'Your brief has been logged in our studio queue. Our creative team will review your account and message you within 2 hours.',
      orDirect: 'Or connect with our team directly:',
      chatWhatsApp: 'Chat on WhatsApp',
      dmInstagram: 'Direct Message on Instagram',
      close: 'Close Window'
    },
    footer: {
      rights: 'All rights reserved.',
      domain: 'aimoads.site',
      tagline: 'aimo Content Studio · Built for conversion, speed, and scale.',
      linksTitle: 'Navigation',
      socialTitle: 'Connect',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  },
  fa: {
    dir: 'rtl',
    brand: {
      name: 'آیمو',
      studio: 'استودیو تولید محتوا aimo',
      domain: 'aimoads.site',
      tagline: 'استودیو تخصصی تولید محتوا و ساخت وب‌سایت‌های اختصاصی'
    },
    announcement: {
      pill: 'تخفیف ویژه',
      text: '۳۰٪ تخفیف ویژه روی تدوین و ادیت ویدیوهای بلند (یوتیوب، پادکست و دوره)',
      link: 'مشاهده جزئیات'
    },
    nav: {
      services: 'خدمات تخصصی',
      reels: 'ریلز و ویدیو',
      workflow: 'مراحل همکاری',
      calculator: 'محاسبه رشد',
      caseStudies: 'نمونه‌کارها',
      contact: 'تماس با ما',
      getStarted: 'شروع پروژه'
    },
    hero: {
      badge1: 'استودیو برتر تولید محتوا و رشد پیج',
      badge2: 'بیش از ۱۲۰ میلیون بازدید ارگانیک ثبت‌شده',
      headlinePart1: 'تولید محتوایی که مخاطبان را به',
      headlineHighlight: 'مشتریان دست‌به‌نقد',
      headlinePart2: 'تبدیل می‌کند.',
      subheadline: 'استودیو تولید محتوای aimo متخصص ساخت ریلزهای جذاب و با نرخ نگه‌داشت بالا، تدوین ویدیوهای باکیفیت یوتیوب، موشن‌گرافیک‌های حرفه‌ای و ساخت وب‌سایت‌های منحصر‌به‌فرد برای ارتقای برند شماست.',
      ctaPrimary: 'شروع پروژه و مشاوره رایگان',
      ctaSecondary: 'مشاهده نمونه ریلزها',
      microTrust: 'بدون قالب‌های تکراری و آماده · تحویل ۴۸ ساعته · ادیت تا زمان رسیدن به نتیجه درست',
      floatingCards: {
        card1Title: 'ریلز اینستاگرام به ۱،۴۲۰،۰۰۰ بازدید رسید',
        card1Meta: 'رشد ۴۸۰ درصدی تعامل ارگانیک طی ۷۲ ساعت',
        card1Badge: 'قلاب وایرال',
        card2Title: 'نرخ ماندگاری ثانیه اول: ۸۶.۴٪',
        card2Meta: 'کاهش ۳.۴ برابری ریزش مخاطب در ثانیه‌های اول',
        card2Badge: 'ریتم و پیسینگ',
        card3Title: '۴۲ دایرکت و لید آماده خرید ثبت شد',
        card3Meta: 'قیف فروش هوشمند از طریق لینک بیو اینستاگرام',
        card3Badge: 'فروش مستقیم',
        card4Title: 'رندر نهایی ویدیوی یوتیوب 4K',
        card4Meta: '۶۰ فریم · طراحی صدای سینمایی · اصلاح رنگ پیشرفته',
        card4Badge: 'تولید سینمایی'
      }
    },
    phoneMockup: {
      creatorHandle: '@aimoads',
      verified: 'استودیو تایید شده',
      audio: 'صدای اختصاصی aimo Sound Hook',
      viewsCount: '۱.۴M',
      likesCount: '۱۴۲K',
      commentsCount: '۳.۸K',
      sharesCount: '۲۸.۴K',
      hookText: 'چرا ۹۰٪ مخاطبان تو ۳ ثانیه اول ویدیوت رو رد می‌کنن؟',
      caption: 'اسلاید رو بکشید تا ببینید چطور ریتم‌دهی کلمات و موشن‌گرافی اختصاصی ماندگاری ویدیو رو تا ۸۵٪ بالا می‌بره...',
      statusActive: 'عملکرد زنده ویدیوی ریلز',
      viewInInstagram: 'مشاهده در اینستاگرام'
    },
    servicesSection: {
      kicker: 'خدمات تخصصی استودیو خلاقیت آیمو',
      title: 'چهار ستون اصلی برای تبدیل مخاطب به مشتری وفادار',
      subtitle: 'اکثر ویدیوها تو کمتر از ۱ ثانیه اسکرول می‌شن. ما ویدیوها، گرافیک‌ها و وب‌سایت‌هایی طراحی می‌کنیم که توجه مخاطب رو قفل کرده و اون رو به درآمد تبدیل می‌کنه.',
      tabLabels: {
        instagram: 'ریلز و پست‌های اینستاگرام',
        youtube: 'تولید و تدوین یوتیوب',
        motion: 'موشن‌گرافیک و جلوه‌های ویژه',
        web: 'طراحی سایت و لندینگ فروش'
      },
      services: {
        instagram: {
          number: '۰۱',
          title: 'تولید محتوا و ریلزهای فوق‌حرفه‌ای اینستاگرام',
          tagline: 'بازدیدکننده معمولی رو به مشتری وفادار تبدیل کن.',
          description: 'تدوین ویدیوهای کوتاه بر اساس رفتار الگوریتم اینستاگرام: طراحی قلاب‌های روانی (Hook)، زیرنویس‌های متحرک جذاب، برش‌های هماهنگ با ریتم موزیک، افکت‌های صوتی و پست‌های اسلایدی جذاب که نرخ سیو و شیر رو منفجر می‌کنه.',
          metricValue: '+۳۴۰٪',
          metricLabel: 'میانگین افزایش ایمپرشن ۳۰ روزه',
          turnaround: '۲۴ تا ۴۸ ساعت',
          idealFor: 'کسب‌وکارهای اینستاگرامی، مدرسان، برندهای شخصی و فروشگاه‌ها',
          deliverables: [
            'طراحی ۳ نوع قلاب متنی و بصری برای شروع ویدیو',
            'زیرنویس‌های کلمه‌به‌کلمه و متحرک سبک یوتیوبرهای بزرگ',
            'صداگذاری اختصاصی (SFX) و مسترینگ صدا',
            'وارد کردن ویدیوهای فوتیج B-roll و افکت‌های سه‌بعدی',
            'طراحی پست‌های کاروسل و اسلایدی با گرافیک بالا',
            'طراحی کاورهای جذاب و نرخ کلیک بالا (CTR)'
          ]
        },
        youtube: {
          number: '۰۲',
          title: 'تولید و ادیت ویدیوهای طولانی یوتیوب',
          tagline: 'تدوین با ماندگاری بالا که مخاطب رو تا آخر نگه می‌داره.',
          description: 'مراحل کامل پس‌تولید ویدیوهای یوتیوب با هدف حداکثر کردن واچ‌تایم و میانگین زمان تماشا (AVD). تبدیل فایل‌های خام به ویدیوهای حرفه‌ای، بدون مکث اضافی و با داستان‌پردازی بصری.',
          metricValue: '۶۸.۵٪',
          metricLabel: 'میانگین حفظ مخاطب (Retention)',
          turnaround: '۳ الی ۴ روز',
          idealFor: 'یوتیوبرها، کانال‌های آموزشی و پادکست‌های ویدیویی',
          deliverables: [
            'حذف سکوت‌ها و ریتم‌دهی پیوسته به صحبت‌ها',
            'تصاویر و ویدیوهای مکمل سینمایی و زوم‌های دینامیک',
            'صداگذاری چندلایه و موسیقی پس‌زمینه بدون کپی‌رایت',
            'تغییر الگوی بصری هر ۴ تا ۶ ثانیه برای رفع خستگی چشم',
            'ایده‌پردازی و طراحی تامبنیل‌های جذاب و برنده',
            'اصلاح رنگ سینمایی و خروجی با کیفیت 4K 60FPS'
          ]
        },
        motion: {
          number: '۰۳',
          title: 'موشن‌گرافیک و انیمیشن‌های اختصاصی',
          tagline: 'انیمیشن‌هایی با کلاس جهانی که ارزش برند شما رو چند برابر می‌کنه.',
          description: 'طراحی موشن با ظرافت و تم استانداردهای شرکت‌های پیشرو دنیا نظیر اپل. ما مفاهیم پیچیده، آمارها، ویژگی‌های محصول و لوگوی شما رو به حرکات بصری فراموش‌نشدنی تبدیل می‌کنیم.',
          metricValue: '۱۰۰٪',
          metricLabel: 'طراحی اختصاصی بدون قالب آماده',
          turnaround: '۴۸ ساعت',
          idealFor: 'استارتاپ‌ها، محصولات دیجیتال و تیزرهای تبلیغاتی',
          deliverables: [
            'تایپوگرافی متحرک (Kinetic Typography) هیجان‌انگیز',
            'موکاپ‌های سه‌بعدی گوشی و انیمیشن محیط نرم‌افزارها',
            'انیمیشن لوگو و المان‌های شروع و پایان ویدیو',
            'موشن‌های داده‌محور و نمودارهای اطلاعاتی متحرک',
            'ویدیوهای تبلیغاتی کوتاه مخصوص کمپین‌های اینستاگرام',
            'انیمیشن‌های سبک و کدنویسی‌شده وب (Lottie/SVG)'
          ]
        },
        web: {
          number: '۰۴',
          title: 'طراحی سایت و لندینگ پیج‌های با تبدیل بالا',
          tagline: 'نقطه‌ای که فالوور اینستاگرام به مشتری پرداخت‌کننده تبدیل میشه.',
          description: 'طراحی سایت فوق‌سریع و موبایل‌محور که دقیقا برای هدایت ترافیک اینستاگرام و لینک بایو ساخته شده. لود زیر یک ثانیه، ساختار بدون پیچیدگی و دکمه‌های مستقیم واتساپ و درگاه پرداخت.',
          metricValue: '۱۴.۸٪',
          metricLabel: 'نرخ تبدیل ورودی‌های لینک بیو',
          turnaround: '۵ تا ۷ روز',
          idealFor: 'کسب‌وکارهایی که می‌خواهند فروش بی‌واسطه و ۲۴ ساعته داشته باشند',
          deliverables: [
            'معماری کاملاً بهینه‌شده برای نمایشگر موبایل',
            'سرعت لود موشکی (امتیاز بالای ۹۵ در تست سرعت)',
            'اتصال مستقیم به پیام‌رسان‌ها (واتساپ و دایرکت)',
            'فرم‌های لیدگیری ساده و بدون افت ترافیک',
            'طراحی مینیمال و لوکس با الهام از رابط‌های کاربری مدرن',
            'تنظیم دامنه اختصاصی (همانند aimoads.site)'
          ]
        }
      }
    },
    beforeAfter: {
      kicker: 'هنر نگه‌داشت مخاطب',
      title: 'تفاوت چشمگیر خروجی: قبل و بعد از تدوین اختصاصی ایمو',
      subtitle: 'اسلایدر را حرکت دهید تا ببینید چطور ریتم دقیق، رنگ‌آمیزی حرفه‌ای و چینش هوشمندانه صدا، یک ویدیوی معمولی را به محتوایی گیرا و اثرگذار برای برند شما تبدیل می‌کند.',
      rawLabel: 'ویدیوی خام و معمولی',
      aimoLabel: 'تدوین اختصاصی آیمو',
      dragHint: 'اسلایدر را بکشید',
      rawPoints: [
        'صدای یکنواخت بدون افکت‌های جلب توجه',
        'زاویه دوربین ثابت که ۷۰٪ مخاطبان را در ابتدا می‌پراند',
        'فونت‌های ساده بدون هماهنگی با بیان گوینده',
        'نبود دعوت به اقدام (CTA) مشخص برای فروش'
      ],
      aimoPoints: [
        'قلاب صوتی و بأس هیجان‌انگیز در همان ثانیه اول',
        'زوم‌ها و برش‌های زاویه هر ۲.۵ ثانیه برای تداوم توجه',
        'زیرنویس کلمه به کلمه با رنگ‌بندی تأکیدی روانشناسی',
        'هدایت هوشمندانه کاربر به دایرکت و سایت با نرخ تبدیل ۴ برابری'
      ]
    },
    calculator: {
      kicker: 'محاسبه‌گر پتانسیل رشد پیج',
      title: 'رشد و درآمد پیج خود را با محتوای آیمو تخمین بزنید',
      subtitle: 'ببینید ترکیب تدوین تخصصی ریلز با لندینگ پیج اختصاصی چه تغییری در میزان فروش و ورودی مشتریان شما ایجاد می‌کند.',
      sliderLabel1: 'تعداد ویدیو در ماه:',
      sliderLabel2: 'میانگین فعلی ویوی هر پست:',
      resultViews: 'پیش‌بینی ویوی ماهانه',
      resultLeads: 'تعداد مشتریان بالقوه ورودی',
      resultRevenue: 'تخمین رشد درآمد ماهانه',
      note: 'این آمار بر اساس میانگین نتایج واقعی بیش از ۴۵ مشتری و سازنده محتوا با استودیو آیمو در سال‌های اخیر استخراج شده است.',
      cta: 'رزرو جلسه مشاوره رشد'
    },
    controlRoom: {
      kicker: 'اتاق فرمان استودیو آیمو',
      title: 'کارخانه تولید محتوای اختصاصی برای برند شما',
      subtitle: 'استودیو آیمو مانند دپارتمان تولید محتوای درون‌سازمانی شماست؛ با کیفیت ۲۴ ساعته و بدون هزینه‌های سنگین استخدام نیروی حضوری.',
      ctaPrimary: 'آغاز همکاری با استودیو',
      ctaSecondary: 'گفتگوی مستقیم در واتساپ',
      stats: {
        stat1Val: 'کمتر از ۴۸ ساعت',
        stat1Label: 'زمان ارسال اولین پیش‌نویس',
        stat2Val: '+۱۲۰ میلیون',
        stat2Label: 'مجموع بازدیدهای خلق‌شده',
        stat3Val: '۹۹.۴٪',
        stat3Label: 'رضایت صددرصدی مشتریان',
        stat4Val: '۴.۲ برابر',
        stat4Label: 'جهش ورودی دایرکت و لید'
      },
      pipelineSteps: {
        step1Title: '۱. ارسال فایل و ایده اولیه',
        step1Desc: 'ویدیوهای خام یا صداهای ضبط‌شده خود را ظرف ۳۰ ثانیه داخل پوشه اختصاصی خود آپلود کنید.',
        step2Title: '۲. تدوین، قلاب و موشن‌گرافی',
        step2Desc: 'تیم حرفه‌ای ما شروع به تدوین، اصلاح رنگ، صداگذاری و افزودن جلوه‌های بصری می‌کنند.',
        step3Title: '۳. بازبینی سریع و نامحدود',
        step3Desc: 'ویدیو را ببینید و نظراتتان را ثبت کنید؛ اصلاحات نامحدود تا رسیدن به نتیجه ایده‌آل ادامه دارد.',
        step4Title: '۴. دریافت فایل 4K و انتشار',
        step4Desc: 'فایل نهایی با بالاترین کیفیت همراه با متن کپشن پیشنهادی و کاور جذاب تحویل شما می‌شود.'
      }
    },
    caseStudiesSection: {
      kicker: 'نتایج مستند مشتریان آیمو',
      title: 'کسب‌وکارها و کریتورهای واقعی؛ نتایج ملموس در فروش',
      subtitle: 'ببینید چطور تولید محتوای هدفمند توانست بازدید اینستاگرام را به مشتریان پرداخت‌کننده تبدیل کند.',
      studies: [
        {
          client: 'برند پوشاک و استایل لایف‌استایل',
          category: 'فروشگاه اینستاگرامی / ریلز',
          stat: '+۴۸۰٪',
          label: 'افزایش بازدید ارگانیک',
          desc: 'بازطراحی کامل ریلزهای پیج با ریتم سریع، موزیک ترند و قلاب‌های متناسب با سلیقه خریدار ایرانی.',
          impact: 'فروش ۳۴۰ هزار دلاری از طریق ثبت سفارشات اینستاگرام در ۳ ماه'
        },
        {
          client: 'کانال آموزشی تکنولوژی و بیزینس',
          category: 'تولید محتوای یوتیوب',
          stat: '۸۵۰K',
          label: 'دنبال‌کننده جدید',
          desc: 'ادیت مستندگونه با موشن‌گرافیک‌های روان، اصلاح صدای حرفه‌ای و کاورهای با نرخ کلیک بالا.',
          impact: 'افزایش میانگین مدت تماشای هر ویدیو از ۳ دقیقه به بیش از ۱۱ دقیقه'
        },
        {
          client: 'شرکت خدمات سرمایه‌گذاری و دیجیتال',
          category: 'لندینگ پیج و ریلزهای فروش',
          stat: '۱۴.۸٪',
          label: 'نرخ تبدیل لینک بیو',
          desc: 'طراحی سایت تک‌صفحه‌ای سبک و سریع متصل به ریلزهای معرفی خدمات در بیو اینستاگرام.',
          impact: 'جذب ۶۲ لید شرکتی و مشتری درجه یک تنها در ماه اول آغاز همکاری'
        }
      ]
    },
    contactModal: {
      title: 'شروع همکاری با استودیو تولید محتوا aimo',
      subtitle: 'ثبت سریع مشخصات و ارسال بریف به تیم تولید محتوای ایمو',
      step1Title: '۱. خدمات مورد نظر خود را انتخاب کنید:',
      step2Title: '۲. اطلاعات تماس و برند شما:',
      servicesSelect: 'انتخاب خدمات (ریلز اینستاگرام، ویدیو یوتیوب، موشن‌گرافی، طراحی سایت)',
      volumeSelect: 'تعداد محتوای تقریبی در ماه',
      namePlaceholder: 'نام شما یا برند شما *',
      instagramPlaceholder: 'آیدی اینستاگرام (مثال: yourbrand@)',
      whatsappPlaceholder: 'شماره واتساپ یا موبایل *',
      notesPlaceholder: 'توضیحات کوتاه درباره هدف پروژه یا نیازمندی‌ها (اختیاری)...',
      submitButton: 'ثبت درخواست و شروع همکاری',
      submitting: 'در حال ارسال اطلاعات...',
      successTitle: 'درخواست شما با موفقیت ثبت شد!',
      successMessage: 'اطلاعات شما در پنل استودیو قرار گرفت. کارشناسان ما تا حداکثر ۲ ساعت آینده با شما تماس خواهند گرفت.',
      orDirect: 'یا ارتباط مستقیم و فوری با ما:',
      chatWhatsApp: 'پیام مستقیم در واتساپ',
      dmInstagram: 'ارسال دایرکت اینستاگرام',
      close: 'بستن پنجره'
    },
    footer: {
      rights: 'تمامی حقوق برای استودیو تولید محتوا aimo محفوظ است.',
      domain: 'aimoads.site',
      tagline: 'استودیو تولید محتوا aimo · ساخته‌شده برای رشد، سرعت و فروش.',
      linksTitle: 'دسترسی سریع',
      socialTitle: 'شبکه‌های اجتماعی',
      privacy: 'حریم خصوصی',
      terms: 'قوانین و شرایط'
    }
  },
  ar: {
    dir: 'rtl',
    brand: {
      name: 'آيمو',
      studio: 'استوديو الإبداع aimo',
      domain: 'aimoads.site',
      tagline: 'استوديو إنتاج المحتوى والمواقع ذات التحويل العالي'
    },
    announcement: {
      pill: 'تحديث جديد',
      text: 'محرك الريلز عالي الاحتفاظ بالجمهور لعام 2024 متاح الآن',
      link: 'شاهد النتائج'
    },
    nav: {
      services: 'الخدمات',
      reels: 'الريلز والفيديو',
      workflow: 'آلية العمل',
      calculator: 'حاسبة العائد',
      caseStudies: 'دراسات الحالة',
      contact: 'تواصل معنا',
      getStarted: 'ابدأ مشروعك'
    },
    hero: {
      badge1: 'استوديو الإبداع الأول لعام 2024',
      badge2: 'أكثر من 120 مليون مشاهدة حقيقية',
      headlinePart1: 'محتوى يحوّل المشاهدين إلى',
      headlineHighlight: 'عملاء حقيقيين يدفعون',
      headlinePart2: 'باستمرار.',
      subheadline: 'استوديو aimo هو الشريك الإبداعي لصناع المحتوى والعلامات التجارية. نصنع ريلز إنستغرام فيروسية، ومونتاج يوتيوب بجودة 4K، وموشن جرافيك احترافي، ومواقع تحويل تزيد مبيعاتك.',
      ctaPrimary: 'ابدأ مشروعك واستشارة مجانية',
      ctaSecondary: 'شاهد نماذج الأعمال',
      microTrust: 'بدون قوالب مكررة · تسليم خلال 48 ساعة · تعديلات غير محدودة حتى الرضا التام',
      floatingCards: {
        card1Title: 'ريلز إنستغرام تجاوز 1,420,000 مشاهدة',
        card1Meta: '+480% قفزة في الوصول الطبيعي خلال 72 ساعة',
        card1Badge: 'هوك فيروسي',
        card2Title: 'معدل الاحتفاظ بالثانية الأولى: 86.4%',
        card2Meta: 'انخفاض ارتداد المشاهدين بمعدل 3.4 أضعاف',
        card2Badge: 'إيقاع ديناميكي',
        card3Title: '42 محادثة مباشرة تحولت لعملاء',
        card3Meta: 'مسار مبيعات ذكي عبر رابط البايو في إنستغرام',
        card3Badge: 'تحويل مباشر',
        card4Title: 'رندر نهائي لفيديو يوتيوب بدقة 4K',
        card4Meta: '60 إطار · هندسة صوتية سينمائية · تصحيح ألوان متقن',
        card4Badge: 'إنتاج متكامل'
      }
    },
    phoneMockup: {
      creatorHandle: '@aimoads',
      verified: 'استوديو موثق',
      audio: 'الصوت الأصلي — aimo Sound Hook',
      viewsCount: '1.4M',
      likesCount: '142K',
      commentsCount: '3.8K',
      sharesCount: '28.4K',
      hookText: 'لماذا يتخطى 90% من الجمهور أول 3 ثوانٍ من مقطعك؟',
      caption: 'اسحب لرؤية كيف يرفع التعديل النفسي والموشن معدل المشاهدة لأكثر من 85%...',
      statusActive: 'أداء مباشر للريلز',
      viewInInstagram: 'فتح إنستغرام'
    },
    servicesSection: {
      kicker: 'خدمات الإنتاج الإبداعي المتكامل',
      title: 'أربعة تخصصات تصب في هدف واحد: المبيعات والتحويل',
      subtitle: 'أغلب المقاطع يتم تجاوزها في أقل من ثانية. نحن نصمم المحتوى الذي يجذب الانتباه ويحوله لأرباح وعقود حقيقية.',
      tabLabels: {
        instagram: 'ريلز وبوستات إنستغرام',
        youtube: 'إنتاج ومونتاج يوتيوب',
        motion: 'موشن جرافيك ومؤثرات',
        web: 'تصميم مواقع التحويل'
      },
      services: {
        instagram: {
          number: '01',
          title: 'ريلز إنستغرام والرسومات ذات التحويل المرتفع',
          tagline: 'حوّل متابعي حسابك إلى عملاء يدفعون فوراً.',
          description: 'مونتاج فيديو قصير مصمم ليتوافق تماماً مع خوارزميات إنستغرام: خطافات بصرية مشوقة، نصوص متحركة سريعة، وإيقاع يمنع الملل.',
          metricValue: '+340%',
          metricLabel: 'متوسط زيادة المشاهدات في 30 يوماً',
          turnaround: '24-48 ساعة',
          idealFor: 'المتاجر الإلكترونية، المدربون، والعلامات التجارية',
          deliverables: [
            'صياغة خطافات نفسية (Hook) متعددة لبداية الفيديو',
            'نصوص متحركة متزامنة مع نبرة المتحدث',
            'مؤثرات صوتية محفزة للانتباه (SFX)',
            'إدراج لقطات داعمة B-roll وتأثيرات ثلاثية الأبعاد',
            'تصميم منشورات كاروسيل احترافية',
            'أغلفة ريلز مصممة لزيادة معدل النقر'
          ]
        },
        youtube: {
          number: '02',
          title: 'إنتاج ومونتاج فيديوهات يوتيوب الطويلة',
          tagline: 'مونتاج يرفع مدة المشاهدة ويبني ولاء المتابع.',
          description: 'مرحلة ما بعد الإنتاج الكاملة لفيديوهات يوتيوب لزيادة زمن المشاهدة (AVD). نحول المقاطع العادية إلى تجارب سينمائية وثائقية مبهرة.',
          metricValue: '68.5%',
          metricLabel: 'متوسط الاحتفاظ بالمشاهدين',
          turnaround: '3-4 أيام',
          idealFor: 'صناع محتوى يوتيوب، البرامج التدريبية والبودكاست',
          deliverables: [
            'إزالة فترات الصمت وسرد قصصي جذاب',
            'لقطات سينمائية وتقريب ديناميكي للعدسة',
            'هندسة صوتية وموسيقى مرخصة',
            'تغيير النمط البصري كل 5 ثوانٍ لتجنب الملل',
            'تصميم صور مصغرة (Thumbnails) فائقة الجاذبية',
            'تلوين سينمائي وتصدير بدقة 4K فائقة'
          ]
        },
        motion: {
          number: '03',
          title: 'موشن جرافيك ومؤثرات بصرية خاصة',
          tagline: 'رسوم متحركة راقية تعكس فخامة علامتك التجارية.',
          description: 'موشن ديزاين على طريقة أبل العالمية. نحرك البيانات، واجهات التطبيقات، والشعارات لتصبح تجربة بصرية لا تُنسى.',
          metricValue: '100%',
          metricLabel: 'تصميم خاص بدون قوالب جاهزة',
          turnaround: '48 ساعة',
          idealFor: 'شركات التقنية والمنتجات الرقمية والحملات التسويقية',
          deliverables: [
            'تايبوجرافي متحرك ملهم',
            'مواد عرض ثلاثية الأبعاد للأجهزة والبرامج',
            'تحريك الشعار ومقدمات وخواتم الفيديو',
            'رسوم بيانية متحركة لشرح البيانات',
            'إعلانات قصيرة مصممة لحملات السوشيال ميديا',
            'رسوم متحركة خفيفة للمواقع الإلكترونية (Lottie)'
          ]
        },
        web: {
          number: '04',
          title: 'تصميم مواقع وصفحات هبوط سريعة التحويل',
          tagline: 'المكان الذي يستقبل جمهور إنستغرام ليشتري فوراً.',
          description: 'مواقع مصممة للموبايل أولاً وبسرعة فائقة مخصصة لاستقبال الزوار من رابط البايو في إنستغرام. لود خلال ثوانٍ معدودة وبنية سلسة لطلب المنتجات والتواصل.',
          metricValue: '14.8%',
          metricLabel: 'متوسط معدل تحويل رابط البايو',
          turnaround: '5-7 أيام',
          idealFor: 'العلامات التي تحتاج متجراً أو واجهة رقمية تبيع 24 ساعة',
          deliverables: [
            'تصميم متجاوب بالكامل لشاشات الهواتف',
            'سرعة تحميل فائقة (أقل من ثانية واحدة)',
            'ربط فوري ومباشر بالواتساب وإنستغرام',
            'نماذج تسجيل طلبات سهلة ومباشرة',
            'تصميم نظيف وأنيق بأسلوب أبل الحديث',
            'ربط الدومين الرسمي (مثل aimoads.site)'
          ]
        }
      }
    },
    beforeAfter: {
      kicker: 'فارق الجودة مع آيمو',
      title: 'قارن بين الفيديو العادي ومونتاج آيمو الاحترافي',
      subtitle: 'حرّك الشريط لتشاهد كيف يحول المونتاج المتقن والهندسة الصوتية مقطعاً خاماً إلى فيديو وساحر للمبيعات.',
      rawLabel: 'فيديو خام عادي',
      aimoLabel: 'مونتاج استوديو آيمو',
      dragHint: 'اسحب للمقارنة',
      rawPoints: [
        'صوت باهت يفتقر للمؤثرات الجاذبة',
        'زاوية تصوير ثابتة تجعل 70% من المشاهدين يغادرون فوراً',
        'خطوط نصية تقليدية بدون تفاعل حركي',
        'غياب دعوة واضحة لاتخاذ إجراء والشراء'
      ],
      aimoPoints: [
        'مؤثر صوتي خاطف في الثانية الأولى يمنع التخطي',
        'تقريب وتغيير زوايا كل 2.5 ثانية لإبقاء المشاهد مشدوداً',
        'نصوص متزامنة ذكية بألوان نفسية لترسيخ الرسالة',
        'دعوة واضحة للبايو والواتساب ترفع المبيعات 4 أضعاف'
      ]
    },
    calculator: {
      kicker: 'حاسبة العائد المتوقع',
      title: 'احسب نمو أرباحك وتفاعلك مع خدمات آيمو',
      subtitle: 'اكتشف النتيجة عندما تدمج المونتاج المدروس مع صفحات الهبوط الموجهة للتحويل.',
      sliderLabel1: 'عدد الفيديوهات الشهرية:',
      sliderLabel2: 'متوسط المشاهدات الحالي لكل فيديو:',
      resultViews: 'المشاهدات الشهرية المتوقعة',
      resultLeads: 'العملاء المحتملون الجدد',
      resultRevenue: 'الأثر التقديري على الإيرادات',
      note: 'بناءً على نتائج واقعية لأكثر من 45 عميل وصانع محتوى تعاملوا مع استوديو آيمو.',
      cta: 'احجز استشارة نمو مجانية'
    },
    controlRoom: {
      kicker: 'غرفة تحكم الاستوديو',
      title: 'خط إنتاج متواصل لمحتوى علامتك التجارية',
      subtitle: 'اعتبر آيمو قسم الإنتاج الفني الخاص بك؛ يعمل على مدار الساعة بجودة عالية وبدون تكاليف توظيف باهظة.',
      ctaPrimary: 'ابدأ الإنتاج الآن',
      ctaSecondary: 'محادثة عبر واتساب',
      stats: {
        stat1Val: '< 48 ساعة',
        stat1Label: 'متوسط تسليم المسودة الأولى',
        stat2Val: '+120 مليون',
        stat2Label: 'إجمالي المشاهدات المحققة',
        stat3Val: '99.4%',
        stat3Label: 'نسبة رضا العملاء',
        stat4Val: '4.2x',
        stat4Label: 'زيادة استفسارات الشراء والليدز'
      },
      pipelineSteps: {
        step1Title: '1. رفع الملفات والفكرة',
        step1Desc: 'ارفع مقاطعك الخام أو تسجيلاتك الصوتية في ثوانٍ داخل مجلدك السحابي الخاص.',
        step2Title: '2. المونتاج والخطاف والمؤثرات',
        step2Desc: 'يقوم خبراؤنا بالقص الموزون، هندسة الصوت، الألوان، والمؤثرات الحركية.',
        step3Title: '3. مراجعة وتعديلات غير محدودة',
        step3Desc: 'شاهد الفيديو واطرح ملاحظاتك؛ نعدل بلا حدود حتى تحصل على النتيجة المثالية.',
        step4Title: '4. استلام بجودة 4K والنشر',
        step4Desc: 'تحصل على الفيديو بأعلى دقة وجاهز للنشر مع نص مقترح وغلاف جذاب.'
      }
    },
    caseStudiesSection: {
      kicker: 'نتائج مثبتة بالأرقام',
      title: 'صناع محتوى وشركات حقيقية، وأثر مباشر على المبيعات',
      subtitle: 'إليك كيف ساهم إنتاجنا في تحويل المتابعين على إنستغرام إلى عملاء فعليين.',
      studies: [
        {
          client: 'علامة أزياء ونمط حياة كبرى',
          category: 'متجر إلكتروني / ريلز إنستغرام',
          stat: '+480%',
          label: 'قفزة في المشاهدات الطبيعية',
          desc: 'إعادة تصميم ريلز الحساب بإيقاع حيوي ولقطات منتج جذابة وخطافات تسويقية.',
          impact: '340,000 دولار مبيعات مباشرة عبر إنستغرام خلال 90 يوماً'
        },
        {
          client: 'د. دانيال فانس - خبير تقني',
          category: 'قناة يوتيوب متخصصة',
          stat: '850K',
          label: 'مشترك جديد بالقناة',
          desc: 'مونتاج وثائقي متقن مع موشن جرافيك سلس وتصميم صور مصغرة مبتكرة.',
          impact: 'ارتفاع متوسط المشاهدة من 3 دقائق إلى أكثر من 11 دقيقة للفيديو'
        },
        {
          client: 'شركة استشارات ونمو للأعمال',
          category: 'صفحة هبوط وريلز استقطاب',
          stat: '14.8%',
          label: 'تحويل زوار رابط البايو',
          desc: 'صفحة هبوط فائقة السرعة مربوطة بمقاطع ريلز موجهة مباشرة للعملاء المحتملين.',
          impact: 'تسجيل 62 عميلاً من الفئة الأولى في الشهر الأول فقط'
        }
      ]
    },
    contactModal: {
      title: 'ابدأ مشروعك الإبداعي مع استوديو آيمو',
      subtitle: 'املأ هذه الاستمارة السريعة أو تواصل مباشرة مع المديرين الإبداعيين.',
      step1Title: 'ما نوع المحتوى الذي تحتاجه؟',
      step2Title: 'تفاصيل وأهداف المشروع',
      servicesSelect: 'اختر الخدمة (ريلز إنستغرام، يوتيوب، موشن، تصميم موقع)',
      volumeSelect: 'العدد الشهري التقريبي',
      namePlaceholder: 'اسمك أو اسم علامتك التجارية',
      instagramPlaceholder: 'حساب إنستغرام (مثال: yourbrand@)',
      whatsappPlaceholder: 'رقم الواتساب أو البريد الإلكتروني',
      notesPlaceholder: 'اكتب باختصار عن أهدافك وجمهورك المستهدف...',
      submitButton: 'إرسال طلب المشروع',
      submitting: 'جارٍ إرسال الطلب...',
      successTitle: 'تم استلام طلبك بنجاح!',
      successMessage: 'سيقوم فريقنا بدراسة حسابك والتواصل معك خلال ساعتين بأفكار واقتراحات أولية.',
      orDirect: 'أو تحدث معنا مباشرة الآن:',
      chatWhatsApp: 'محادثة عبر واتساب',
      dmInstagram: 'رسالة خاصة عبر إنستغرام',
      close: 'إغلاق'
    },
    footer: {
      rights: 'جميع الحقوق محفوظة لاستوديو آيمو الإبداعي.',
      domain: 'aimoads.site',
      tagline: 'استوديو الإبداع aimo · صُمم للسرعة، النمو، والمبيعات.',
      linksTitle: 'روابط هامة',
      socialTitle: 'تواصل معنا',
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام'
    }
  },
  es: {
    dir: 'ltr',
    brand: {
      name: 'aimo',
      studio: 'Estudio Creativo',
      domain: 'aimoads.site',
      tagline: 'Estudio de Contenido de Alta Conversión'
    },
    announcement: {
      pill: 'aimo 2.4',
      text: 'Motor de Retención de Reels 2024 activo para todos los creadores',
      link: 'Ver Resultados'
    },
    nav: {
      services: 'Servicios',
      reels: 'Reels y Vídeo',
      workflow: 'Proceso',
      calculator: 'Calculadora ROI',
      caseStudies: 'Casos de Éxito',
      contact: 'Contacto',
      getStarted: 'Iniciar Proyecto'
    },
    hero: {
      badge1: 'Estudio Creativo del Año · 2024',
      badge2: '+120M Vistas Orgánicas Entregadas',
      headlinePart1: 'Contenido que convierte espectadores en',
      headlineHighlight: 'clientes que compran',
      headlinePart2: 'a gran escala.',
      subheadline: 'aimo es el estudio creativo para marcas y creadores modernos. Producimos Reels virales para Instagram, ediciones en 4K para YouTube, gráficos en movimiento y páginas web de alta conversión.',
      ctaPrimary: 'Iniciar Mi Proyecto',
      ctaSecondary: 'Ver Reels de Muestra',
      microTrust: 'Sin plantillas repetitivas · Entrega en 48h · Revisiones ilimitadas',
      floatingCards: {
        card1Title: 'Reel de Instagram alcanzó 1.420.000 vistas',
        card1Meta: '+480% de alcance orgánico en 72 horas',
        card1Badge: 'HOOK VIRAL',
        card2Title: 'Retención de gancho optimizada: 86.4%',
        card2Meta: 'Caída inicial reducida 3.4 veces',
        card2Badge: 'RITMO 2.0',
        card3Title: '42 DMs convertidos en clientes de pago',
        card3Meta: 'Embudo de conversión desde el enlace de biografía',
        card3Badge: 'CONVERSIÓN',
        card4Title: 'Línea de tiempo YouTube 4K renderizada',
        card4Meta: '60 FPS · Diseño de sonido · B-Roll a medida',
        card4Badge: 'PRODUCCIÓN'
      }
    },
    phoneMockup: {
      creatorHandle: '@aimoads',
      verified: 'Estudio Verificado',
      audio: 'Audio Original — aimo Sound Hook',
      viewsCount: '1.4M',
      likesCount: '142K',
      commentsCount: '3.8K',
      sharesCount: '28.4K',
      hookText: 'Deja de perder al 90% de tus espectadores en los primeros 3 segundos.',
      caption: 'Desliza para ver cómo nuestras micro-animaciones y ritmo psicológico mantienen la atención sobre el 85%...',
      statusActive: 'RENDIMIENTO DE REEL EN VIVO',
      viewInInstagram: 'Abrir Instagram'
    },
    servicesSection: {
      kicker: 'PRODUCCIÓN CREATIVA INTEGRAL',
      title: 'Cuatro disciplinas enfocadas en un solo fin: conversión medible.',
      subtitle: 'La mayoría del contenido se salta en menos de 1 segundo. Diseñamos vídeos, gráficos y sitios web concebidos para atrapar y vender.',
      tabLabels: {
        instagram: 'Reels y Posts Instagram',
        youtube: 'Producción YouTube',
        motion: 'Motion Graphics',
        web: 'Diseño Web de Conversión'
      },
      services: {
        instagram: {
          number: '01',
          title: 'Reels y Gráficos de Conversión para Instagram',
          tagline: 'Convierte visitantes ocasionales en compradores recurrentes.',
          description: 'Edición de vídeo vertical optimizada para el algoritmo de Instagram: ganchos psicológicos, subtítulos dinámicos y carruseles de alta interacción.',
          metricValue: '+340%',
          metricLabel: 'Aumento promedio de vistas en 30 días',
          turnaround: '24-48 Horas',
          idealFor: 'Marcas de e-commerce, formadores, marcas personales',
          deliverables: [
            'Variaciones de ganchos (hooks) psicológicos de 3 segundos',
            'Subtítulos dinámicos palabra por palabra',
            'Diseño de sonido envolvente y efectos sonoros',
            'Inserción de metraje B-roll y animaciones 3D',
            'Diseño de carruseles de alta conversión',
            'Portadas optimizadas para maximizar el CTR'
          ]
        },
        youtube: {
          number: '02',
          title: 'Producción Completa para YouTube',
          tagline: 'Edición de alta retención que consolida tu autoridad.',
          description: 'Postproducción para maximizar el tiempo promedio de visualización (AVD) y clics en miniaturas.',
          metricValue: '68.5%',
          metricLabel: 'Tasa promedio de retención de audiencia',
          turnaround: '3-4 Días',
          idealFor: 'Creadores de YouTube, canales educativos y podcasts',
          deliverables: [
            'Ritmo narrativo maestro y eliminación de silencios',
            'B-roll cinemático y zooms dinámicos',
            'Banda sonora y efectos de sonido personalizados',
            'Interrupciones de patrón cada 5 segundos',
            'Conceptos A/B de miniaturas de alto impacto',
            'Graduación de color 4K 60FPS'
          ]
        },
        motion: {
          number: '03',
          title: 'Motion Graphics y Efectos Visuales',
          tagline: 'Animaciones de nivel Apple que elevan el valor de tu marca.',
          description: 'Animamos datos complejos, interfaces de software y logotipos para crear una experiencia visual imborrable.',
          metricValue: '100%',
          metricLabel: 'Animaciones hechas a medida',
          turnaround: '48 Horas',
          idealFor: 'Empresas SaaS, marcas prémium y productos digitales',
          deliverables: [
            'Tipografía cinética y secuencias de títulos',
            'Mockups 3D de dispositivos y UI de aplicaciones',
            'Animación de logos e intros/outros',
            'Infografías y visualización animada de datos',
            'Creatividades de vídeo para anuncios publicitarios',
            'Animaciones ligeras para web (Lottie)'
          ]
        },
        web: {
          number: '04',
          title: 'Páginas Web y Landing Pages de Alta Conversión',
          tagline: 'El lugar donde el tráfico de Instagram se convierte en ventas.',
          description: 'Páginas web ultrarrápidas pensadas para móviles, diseñadas específicamente para convertir el tráfico del link en la bio en compras y leads.',
          metricValue: '14.8%',
          metricLabel: 'Tasa promedio de conversión en bio-link',
          turnaround: '5-7 Días',
          idealFor: 'Marcas que quieren monetizar el tráfico de Instagram 24/7',
          deliverables: [
            'Arquitectura móvil ultrarrápida (menos de 0.8s)',
            'Puntuación 99+ en Google PageSpeed',
            'Integración directa con WhatsApp e Instagram DM',
            'Embudos de registro y checkout sin fricción',
            'Diseño minimalista y prémium',
            'Configuración de dominio (aimoads.site)'
          ]
        }
      }
    },
    beforeAfter: {
      kicker: 'LA DIFERENCIA AIMO',
      title: 'Compara la retención: Clip básico vs. Edición aimo',
      subtitle: 'Arrastra el control deslizante para descubrir cómo el ritmo y la ingeniería de sonido transforman un vídeo aburrido en un imán de clientes.',
      rawLabel: 'Clip Sin Editar',
      aimoLabel: 'Edición Maestra aimo',
      dragHint: 'Arrastra para comparar',
      rawPoints: [
        'Voz monótona sin pistas sonoras',
        'Cámara estática que provoca un 70% de abandono',
        'Tipografía básica sin dinamismo ni ritmo',
        'Sin llamada a la acción (CTA) clara hacia el producto'
      ],
      aimoPoints: [
        'Gancho auditivo y golpe sonoro en el segundo 0:01',
        'Cambios de plano y zooms dinámicos cada 2.5 segundos',
        'Subtítulos animados palabra por palabra con énfasis de color',
        'Llamada a la acción orientada a biografía que multiplica clientes x4'
      ]
    },
    calculator: {
      kicker: 'CALCULADORA DE POTENCIAL',
      title: 'Calcula tu crecimiento proyectado con aimo',
      subtitle: 'Descubre el impacto de combinar edición de alta retención con páginas web orientadas a la venta.',
      sliderLabel1: 'Piezas de contenido mensuales:',
      sliderLabel2: 'Vistas promedio actuales por vídeo:',
      resultViews: 'Vistas Mensuales Proyectadas',
      resultLeads: 'Contactos y Clientes Estimados',
      resultRevenue: 'Impacto Estimado en Facturación',
      note: 'Basado en resultados reales de más de 45 colaboraciones con marcas y creadores.',
      cta: 'Agendar Consulta de Estrategia'
    },
    controlRoom: {
      kicker: 'SALA DE CONTROL AIMO',
      title: 'Una línea de producción continua para tu contenido.',
      subtitle: 'aimo funciona como tu departamento interno de vídeo, activo 24/7 sin complicaciones de contratación.',
      ctaPrimary: 'Iniciar Sprint de Producción',
      ctaSecondary: 'Conversar por WhatsApp',
      stats: {
        stat1Val: '< 48h',
        stat1Label: 'Entrega del primer borrador',
        stat2Val: '+120M',
        stat2Label: 'Vistas orgánicas acumuladas',
        stat3Val: '99.4%',
        stat3Label: 'Satisfacción de clientes',
        stat4Val: '4.2x',
        stat4Label: 'Incremento en clientes potenciales'
      },
      pipelineSteps: {
        step1Title: '1. Sube tu material bruto',
        step1Desc: 'Sube tus grabaciones o audios en 30 segundos a tu carpeta privada.',
        step2Title: '2. Gancho psicológico y edición',
        step2Desc: 'Nuestros editores sénior trabajan el ritmo, color, sonido y gráficos.',
        step3Title: '3. Revisión rápida ilimitada',
        step3Desc: 'Revisa cuadro por cuadro; revisiones ilimitadas incluidas.',
        step4Title: '4. Archivos 4K listos para publicar',
        step4Desc: 'Descarga archivos en máxima calidad con copys y portadas listas.'
      }
    },
    caseStudiesSection: {
      kicker: 'CASOS DOCUMENTADOS',
      title: 'Marcas y creadores reales. Conversión medible.',
      subtitle: 'Así transformamos la visibilidad en facturación para nuestros socios.',
      studies: [
        {
          client: 'Aura Lifestyle & Moda',
          category: 'E-Commerce / Reels de Instagram',
          stat: '+480%',
          label: 'Aumento de alcance orgánico',
          desc: 'Reestructuración de Reels con ritmo dinámico y ganchos de alta retención.',
          impact: '$340,000 en ventas directas por Instagram en 90 días'
        },
        {
          client: 'Dr. Daniel Vance',
          category: 'Marca Personal / Canal de YouTube',
          stat: '850K',
          label: 'Nuevos suscriptores captados',
          desc: 'Edición estilo documental con motion graphics elegantes y sonido inmersivo.',
          impact: 'Tiempo promedio de visualización pasó de 3:12 a 11:45 minutos'
        },
        {
          client: 'Nexus Growth Capital',
          category: 'Servicios B2B / Web y Reels',
          stat: '14.8%',
          label: 'Conversión de enlace en bio',
          desc: 'Página de aterrizaje ultrarrápida sincronizada con Reels explicativos.',
          impact: '62 solicitudes de clientes B2B cualificados en el primer mes'
        }
      ]
    },
    contactModal: {
      title: 'Comienza tu proyecto creativo con aimo',
      subtitle: 'Rellena este breve formulario de 60 segundos o escríbenos directamente.',
      step1Title: '¿Qué tipo de contenido necesitas?',
      step2Title: 'Tus datos y objetivos',
      servicesSelect: 'Selecciona servicio (Instagram, YouTube, Motion, Web)',
      volumeSelect: 'Volumen mensual aproximado',
      namePlaceholder: 'Tu nombre o marca',
      instagramPlaceholder: 'Usuario de Instagram (@tuusuario)',
      whatsappPlaceholder: 'Número de WhatsApp o correo',
      notesPlaceholder: 'Cuéntanos brevemente sobre tu público objetivo...',
      submitButton: 'Enviar Solicitud de Proyecto',
      submitting: 'Transmitiendo a aimo...',
      successTitle: '¡Solicitud recibida!',
      successMessage: 'Revisaremos tu cuenta y te contactaremos en menos de 2 horas con ideas y propuestas.',
      orDirect: 'O habla de inmediato con nuestros directores:',
      chatWhatsApp: 'Escribir por WhatsApp',
      dmInstagram: 'Enviar mensaje en Instagram',
      close: 'Cerrar'
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      domain: 'aimoads.site',
      tagline: 'aimo Content Studio · Diseñado para la velocidad y la conversión.',
      linksTitle: 'Navegación',
      socialTitle: 'Conectar',
      privacy: 'Privacidad',
      terms: 'Términos'
    }
  },
  de: {
    dir: 'ltr',
    brand: {
      name: 'aimo',
      studio: 'Content Studio',
      domain: 'aimoads.site',
      tagline: 'High-Converting Content Studio'
    },
    announcement: {
      pill: 'aimo 2.4',
      text: 'Unsere 2024 High-Retention Reel Engine ist jetzt live',
      link: 'Ergebnisse ansehen'
    },
    nav: {
      services: 'Leistungen',
      reels: 'Reels & Video',
      workflow: 'Ablauf',
      calculator: 'ROI-Rechner',
      caseStudies: 'Fallstudien',
      contact: 'Kontakt',
      getStarted: 'Projekt starten'
    },
    hero: {
      badge1: 'Kreativstudio des Jahres · 2024',
      badge2: 'Über 120 Mio. organische Aufrufe',
      headlinePart1: 'Content, der Zuschauer in',
      headlineHighlight: 'zahlende Kunden',
      headlinePart2: 'verwandelt.',
      subheadline: 'aimo ist das Kreativstudio für moderne Marken und Creator. Wir produzieren virale Instagram Reels, 4K YouTube-Edits, Motion Graphics und Landing Pages mit maximaler Konversion.',
      ctaPrimary: 'Projekt starten & Beratung',
      ctaSecondary: 'Showcase ansehen',
      microTrust: 'Keine Standard-Vorlagen · 48h Durchlaufzeit · Unbegrenzte Revisionen',
      floatingCards: {
        card1Title: 'Instagram Reel erreicht 1.420.000 Aufrufe',
        card1Meta: '+480% organische Reichweite in 72 Stunden',
        card1Badge: 'VIRAL HOOK',
        card2Title: 'Hook-Retention optimiert: 86.4%',
        card2Meta: 'Absprungrate in den ersten 3 Sekunden um 3.4x gesenkt',
        card2Badge: 'PACING 2.0',
        card3Title: '42 qualifizierte Kundenanfragen konvertiert',
        card3Meta: 'Direkter Trichter über den Instagram-Biolink',
        card3Badge: 'CONVERSION',
        card4Title: 'YouTube 4K Timeline gerendert',
        card4Meta: '60 FPS · Cinematic Sound Design · Individuelles B-Roll',
        card4Badge: 'PRODUKTION'
      }
    },
    phoneMockup: {
      creatorHandle: '@aimoads',
      verified: 'Verifiziertes Studio',
      audio: 'Original Audio — aimo Sound Hook',
      viewsCount: '1.4M',
      likesCount: '142K',
      commentsCount: '3.8K',
      sharesCount: '28.4K',
      hookText: 'Verliere nicht 90% deiner Zuschauer in den ersten 3 Sekunden.',
      caption: 'Wische, um zu sehen, wie unser psychologisches Pacing die Sehdauer über 85% hält...',
      statusActive: 'LIVE REEL LEISTUNG',
      viewInInstagram: 'Instagram öffnen'
    },
    servicesSection: {
      kicker: 'FULL-STACK KREATIVPRODUKTION',
      title: 'Vier präzise Disziplinen. Ein Ziel: messbarer Umsatz.',
      subtitle: '90% aller Videos werden in 0.8 Sekunden weggewischt. Wir erstellen Content, der Aufmerksamkeit fesselt und messbar verkauft.',
      tabLabels: {
        instagram: 'Instagram Reels & Posts',
        youtube: 'YouTube Produktion',
        motion: 'Motion Graphics',
        web: 'Conversion Webdesign'
      },
      services: {
        instagram: {
          number: '01',
          title: 'Instagram Reels & Conversion Grafiken',
          tagline: 'Verwandle Profilbesucher in treue Käufer.',
          description: 'Kurzformat-Videoschnitt abgestimmt auf den Instagram-Algorithmus: psychologische Hook-Gestaltung, kinetische Untertitel und hochkonvertierende Karussells.',
          metricValue: '+340%',
          metricLabel: 'Durchschnittliches 30-Tage View-Wachstum',
          turnaround: '24-48 Stunden',
          idealFor: 'E-Commerce Marken, Coaches, Creator & Agenturen',
          deliverables: [
            'Psychologische 3-Sekunden Hook-Variationen',
            'Wort-für-Wort animierte kinetische Untertitel',
            'Professionelles Sound Design & Mastering',
            'Nahtloses B-Roll Footage & 3D Overlays',
            'Hochkonvertierende Karussell-Grafiken',
            'Klickstarke Cover & Thumbnail-Designs'
          ]
        },
        youtube: {
          number: '02',
          title: 'YouTube Long-Form Produktion',
          tagline: 'High-Retention Schnitt, der Autorität aufbaut.',
          description: 'Komplette YouTube-Postproduktion zur Maximierung der durchschnittlichen Wiedergabedauer (AVD).',
          metricValue: '68.5%',
          metricLabel: 'Durchschnittliche Zuschauer-Retention',
          turnaround: '3-4 Tage',
          idealFor: 'YouTuber, Bildungskanäle & Unternehmens-Podcasts',
          deliverables: [
            'Narratives Pacing & Schnitt ohne Pausen',
            'Cinematisches B-Roll & dynamische Zooms',
            'Mehrschichtiges Sound Design & SFX',
            'Musterunterbrechungen alle 4-6 Sekunden',
            'Klickstarke Thumbnail A/B-Konzepte',
            'Vollständiges 4K 60FPS Color Grading'
          ]
        },
        motion: {
          number: '03',
          title: 'Motion Graphics & Visuelle Effekte',
          tagline: 'Maßgeschneiderte Animationen auf Apple-Niveau.',
          description: 'Eleganter Motion-Design-Workflow. Wir animieren komplexe Daten, Software-Interfaces und Markenlogos in unvergessliche Erlebnisse.',
          metricValue: '100%',
          metricLabel: 'Individuelle Maßanfertigung',
          turnaround: '48 Stunden',
          idealFor: 'SaaS-Unternehmen, Luxusmarken & digitale Produkte',
          deliverables: [
            'Kinetische Typografie & Titelsequenzen',
            '3D Geräte-Mockups & UI-Animationen',
            'Animierte Markenlogos & Overlays',
            'Datenvisualisierung & animierte Grafiken',
            'Werbevideo-Creatives für Social Ads',
            'Leichte Web-Animationen (Lottie/SVG)'
          ]
        },
        web: {
          number: '04',
          title: 'High-Converting Web & Landing Pages',
          tagline: 'Hier landet Instagram-Traffic und kauft.',
          description: 'Mobile-first, blitzschnelle Webseiten, die Social-Media-Traffic direkt in Kunden und Anfragen konvertieren.',
          metricValue: '14.8%',
          metricLabel: 'Durchschnittliche Bio-Link Conversion Rate',
          turnaround: '5-7 Tage',
          idealFor: 'Marken, die ihren Bio-Link maximal monetarisieren wollen',
          deliverables: [
            'Mobile-first responsive Architektur',
            'Ladezeiten unter 1 Sekunde (<0.6s FCP)',
            'Direkte WhatsApp & Instagram DM Anbindung',
            'Reibungslose Lead- und Checkout-Funnel',
            'Minimalistisches, modernes Apple-Design',
            'Domain-Einrichtung (aimoads.site)'
          ]
        }
      }
    },
    beforeAfter: {
      kicker: 'DER AIMO UNTERSCHIED',
      title: 'Vergleiche die Retention: Rohclip vs. aimo Schnitt',
      subtitle: 'Schiebe den Regler und erlebe, wie Sounddesign, kinetisches Pacing und Hook-Engineering aus einem übersehenen Video einen Kundenmagneten machen.',
      rawLabel: 'Standard Rohvideo',
      aimoLabel: 'aimo Master Edit',
      dragHint: 'Schieberegler bewegen',
      rawPoints: [
        'Eintönige Stimme ohne auditive Signale',
        'Statischer Kamerawinkel führt zu 70% Absprung',
        'Standard-Schriftarten ohne visuelle Dynamik',
        'Kein klarer Call-to-Action zum Biolink'
      ],
      aimoPoints: [
        'Psychologischer Sound-Whoosh in Sekunde 0:01',
        'Dynamische Zooms und Schnitte alle 2.5 Sekunden',
        'Kinetische Untertitel mit Farb-Akzentuierung',
        'Klarer Konversionstrichter für 4x mehr Kunden'
      ]
    },
    calculator: {
      kicker: 'WACHSTUMSRECHNER',
      title: 'Berechne deinen Content-ROI mit aimo',
      subtitle: 'Erfahre, was passiert, wenn optimiertes Videopacing auf hochkonvertierende Landing Pages trifft.',
      sliderLabel1: 'Monatliche Videoanzahl:',
      sliderLabel2: 'Durchschnittliche Aufrufe pro Video:',
      resultViews: 'Prognostizierte monatliche Views',
      resultLeads: 'Geschätzte Kundenanfragen',
      resultRevenue: 'Geschätzter Umsatz-Impakt',
      note: 'Basierend auf den Durchschnittswerten aus über 45 Kooperationen mit Creators und Brands.',
      cta: 'Strategiegespräch vereinbaren'
    },
    controlRoom: {
      kicker: 'STUDIO CONTROL ROOM',
      title: 'Eine kontinuierliche Content-Pipeline für dein Business.',
      subtitle: 'aimo agiert als deine interne Videoproduktionsabteilung – rund um die Uhr, ohne lästigen Einstellungsaufwand.',
      ctaPrimary: 'Sprint starten',
      ctaSecondary: 'WhatsApp Chat',
      stats: {
        stat1Val: '< 48h',
        stat1Label: 'Lieferung des ersten Entwurfs',
        stat2Val: '120M+',
        stat2Label: 'Organische Gesamtaufrufe',
        stat3Val: '99.4%',
        stat3Label: 'Kundenzufriedenheit',
        stat4Val: '4.2x',
        stat4Label: 'Steigerung der Kundenanfragen'
      },
      pipelineSteps: {
        step1Title: '1. Upload & Briefing',
        step1Desc: 'Lade deine Clips oder Sprachnotizen in 30 Sekunden in dein Kundenportal.',
        step2Title: '2. Hook & Master-Edit',
        step2Desc: 'Unsere Editoren schneiden, vertonen und animieren deinen Content.',
        step3Title: '3. Feedback & Feinschliff',
        step3Desc: 'Prüfe dein Video framegenau mit unbegrenzten Korrekturschleifen.',
        step4Title: '4. 4K Master & Veröffentlichung',
        step4Desc: 'Erhalte fertige 4K-Dateien mit vorgeschlagenen Captions und Thumbnails.'
      }
    },
    caseStudiesSection: {
      kicker: 'DOKUMENTIERTE ERGEBNISSE',
      title: 'Echte Brands und Creator. Messbarer Erfolg.',
      subtitle: 'So haben wir organische Reichweite in echten Umsatz transformiert.',
      studies: [
        {
          client: 'Aura Lifestyle & Fashion',
          category: 'E-Commerce / Instagram Reels',
          stat: '+480%',
          label: 'Anstieg organischer Reichweite',
          desc: 'Komplette Neuausrichtung der Reels mit rhythmischem Pacing und Hook-Fokus.',
          impact: '340.000 $ direkter Umsatz über Instagram in 90 Tagen'
        },
        {
          client: 'Dr. Daniel Vance',
          category: 'Personal Brand / YouTube',
          stat: '850K',
          label: 'Neue Abonnenten gewonnen',
          desc: 'Dokumentarischer Schnittstil mit eleganten Animationen und Soundscape.',
          impact: 'Durchschnittliche Sehdauer von 3:12 auf 11:45 Minuten gesteigert'
        },
        {
          client: 'Nexus Growth Capital',
          category: 'B2B Dienstleister / Web & Reels',
          stat: '14.8%',
          label: 'Bio-Link Conversion Rate',
          desc: 'Blitzschnelle Landing Page abgestimmt auf Kurzvideo-Fallstudien.',
          impact: '62 qualifizierte B2B-Kundenanfragen im ersten Monat'
        }
      ]
    },
    contactModal: {
      title: 'Starte dein Projekt mit aimo',
      subtitle: 'Fülle dieses 60-Sekunden-Formular aus oder schreibe uns direkt.',
      step1Title: 'Welche Art von Content benötigst du?',
      step2Title: 'Deine Kontaktdaten & Ziele',
      servicesSelect: 'Leistung wählen (Instagram, YouTube, Motion, Web)',
      volumeSelect: 'Geschätztes monatliches Volumen',
      namePlaceholder: 'Dein Name oder Brand',
      instagramPlaceholder: 'Instagram Handle (@deinbrand)',
      whatsappPlaceholder: 'WhatsApp Nummer oder E-Mail',
      notesPlaceholder: 'Beschreibe kurz deine Zielgruppe oder Ziele...',
      submitButton: 'Projektanfrage senden',
      submitting: 'Wird an aimo übertragen...',
      successTitle: 'Anfrage erhalten!',
      successMessage: 'Unser Kreativteam analysiert deinen Account und meldet sich innerhalb von 2 Stunden mit ersten Ideen.',
      orDirect: 'Oder direkt mit unseren Creative Directors sprechen:',
      chatWhatsApp: 'Chat via WhatsApp',
      dmInstagram: 'Instagram DM senden',
      close: 'Schließen'
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
      domain: 'aimoads.site',
      tagline: 'aimo Content Studio · Gebaut für Geschwindigkeit und Konversion.',
      linksTitle: 'Navigation',
      socialTitle: 'Netzwerk',
      privacy: 'Datenschutz',
      terms: 'AGB'
    }
  },
  fr: {
    dir: 'ltr',
    brand: {
      name: 'aimo',
      studio: 'Content Studio',
      domain: 'aimoads.site',
      tagline: 'Studio de Contenu à Haute Conversion'
    },
    announcement: {
      pill: 'aimo 2.4',
      text: 'Notre moteur de Reels à haute rétention 2024 est en ligne',
      link: 'Voir les résultats'
    },
    nav: {
      services: 'Services',
      reels: 'Reels & Vidéo',
      workflow: 'Processus',
      calculator: 'Calculateur ROI',
      caseStudies: 'Études de Cas',
      contact: 'Contact',
      getStarted: 'Lancer un Projet'
    },
    hero: {
      badge1: 'Studio Créatif de l’Année · 2024',
      badge2: '+120M de Vues Organiques Générées',
      headlinePart1: 'Du contenu qui transforme vos spectateurs en',
      headlineHighlight: 'clients payants',
      headlinePart2: 'à grande échelle.',
      subheadline: 'aimo est le studio de création pour les marques et créateurs modernes. Nous produisons des Reels Instagram viraux, des montages YouTube en 4K, du motion design et des sites web à haute conversion.',
      ctaPrimary: 'Démarrer Votre Projet',
      ctaSecondary: 'Voir les Démonstrations',
      microTrust: 'Aucun template générique · Livraison en 48h · Révisions illimitées',
      floatingCards: {
        card1Title: 'Reel Instagram a atteint 1 420 000 vues',
        card1Meta: '+480% de portée organique en 72 heures',
        card1Badge: 'HOOK VIRAL',
        card2Title: 'Rétention de l’accroche : 86.4%',
        card2Meta: 'Baisse d’audience initiale réduite de 3.4x',
        card2Badge: 'RYTHME 2.0',
        card3Title: '42 DMs convertis en clients payants',
        card3Meta: 'Tunnel direct via le lien en bio Instagram',
        card3Badge: 'CONVERSION',
        card4Title: 'Timeline YouTube 4K exportée',
        card4Meta: '60 FPS · Sound Design cinématique · B-Roll dédié',
        card4Badge: 'PRODUCTION'
      }
    },
    phoneMockup: {
      creatorHandle: '@aimoads',
      verified: 'Studio Vérifié',
      audio: 'Audio Original — aimo Sound Hook',
      viewsCount: '1.4M',
      likesCount: '142K',
      commentsCount: '3.8K',
      sharesCount: '28.4K',
      hookText: 'Arrêtez de perdre 90% de vos spectateurs dans les 3 premières secondes.',
      caption: 'Glissez pour découvrir comment notre rythme psychologique maintient le temps de visionnage au-dessus de 85%...',
      statusActive: 'PERFORMANCE EN DIRECT',
      viewInInstagram: 'Ouvrir Instagram'
    },
    servicesSection: {
      kicker: 'PRODUCTION CRÉATIVE INTÉGRALE',
      title: 'Quatre expertises ciblées. Un seul objectif : la conversion.',
      subtitle: 'La plupart des contenus sont ignorés en moins d’une seconde. Nous concevons des vidéos et des sites taillés pour capter et convertir.',
      tabLabels: {
        instagram: 'Reels & Posts Instagram',
        youtube: 'Production YouTube',
        motion: 'Motion Graphics',
        web: 'Design Web de Conversion'
      },
      services: {
        instagram: {
          number: '01',
          title: 'Reels Instagram & Graphismes de Conversion',
          tagline: 'Transformez les visiteurs de votre profil en clients fidèles.',
          description: 'Montage vidéo court taillé pour l’algorithme Instagram : hooks percutants, sous-titres animés et carrousels engageants.',
          metricValue: '+340%',
          metricLabel: 'Hausse moyenne des vues en 30 jours',
          turnaround: '24-48 Heures',
          idealFor: 'Marques e-commerce, coachs, créateurs et agences',
          deliverables: [
            'Hooks psychologiques variés pour les 3 premières secondes',
            'Sous-titres cinétiques mot par mot',
            'Sound design dynamique et mixage audio',
            'Footage B-roll fluide et incrustations 3D',
            'Carrousels multi-slides à forte conversion',
            'Miniatures et couvertures optimisées'
          ]
        },
        youtube: {
          number: '02',
          title: 'Production YouTube Long Format',
          tagline: 'Un montage à haute rétention qui assoit votre autorité.',
          description: 'Postproduction complète pour maximiser la durée moyenne de visionnage (AVD) et le taux de clic des miniatures.',
          metricValue: '68.5%',
          metricLabel: 'Rétention moyenne de l’audience',
          turnaround: '3-4 Jours',
          idealFor: 'YouTubers, chaînes éducatives et podcasts',
          deliverables: [
            'Rythme narratif continu et suppression des blancs',
            'B-roll cinématographique et zooms dynamiques',
            'Ambiance sonore multicouche et bruitages SFX',
            'Ruptures visuelles régulières pour relancer l’attention',
            'Concepts A/B de miniatures à fort impact',
            'Étalonnage couleur 4K 60FPS'
          ]
        },
        motion: {
          number: '03',
          title: 'Motion Graphics & Effets Visuels',
          tagline: 'Des animations au standard Apple pour sublimer votre marque.',
          description: 'Nous animons vos données, interfaces logicielles et identités de marque pour créer une impression visuelle inoubliable.',
          metricValue: '100%',
          metricLabel: 'Créations sur-mesure',
          turnaround: '48 Heures',
          idealFor: 'Entreprises SaaS, marques premium et produits digitaux',
          deliverables: [
            'Typographie cinétique et génériques percutants',
            'Mockups 3D et animations d’interfaces d’applications',
            'Logos animés et transitions de marque',
            'Infographies et visualisations animées de données',
            'Créations publicitaires pour réseaux sociaux',
            'Animations web légères (Lottie)'
          ]
        },
        web: {
          number: '04',
          title: 'Design Web & Landing Pages à Haute Conversion',
          tagline: 'Le point d’atterrissage idéal pour votre trafic Instagram.',
          description: 'Des sites ultra-rapides et pensés pour le mobile, créés pour transformer directement les clics de la bio en ventes réelles.',
          metricValue: '14.8%',
          metricLabel: 'Taux de conversion moyen du bio-link',
          turnaround: '5-7 Jours',
          idealFor: 'Marques souhaitant monétiser leur audience Instagram 24/7',
          deliverables: [
            'Architecture mobile-first réactive',
            'Temps de chargement inférieur à une seconde',
            'Intégration directe WhatsApp et Instagram DM',
            'Tunnels de capture et paiement simplifiés',
            'Design épuré et moderne d’inspiration Apple',
            'Configuration de domaine (aimoads.site)'
          ]
        }
      }
    },
    beforeAfter: {
      kicker: 'LA DIFFÉRENCE AIMO',
      title: 'Comparez la rétention : Vidéo brute vs. Montage aimo',
      subtitle: 'Faites glisser pour voir comment le rythme, le sound design et les hooks transforment une vidéo banale en machine à convertir.',
      rawLabel: 'Vidéo Brute',
      aimoLabel: 'Montage Master aimo',
      dragHint: 'Faites glisser pour comparer',
      rawPoints: [
        'Voix monotone sans repères sonores',
        'Cadre fixe entraînant 70% de désengagement',
        'Polices basiques sans dynamisme',
        'Aucun appel à l’action orienté vers la bio'
      ],
      aimoPoints: [
        'Whoosh sonore et impact dès 0:01s',
        'Zooms et variations de plan toutes les 2.5 secondes',
        'Sous-titres dynamiques mot par mot avec accents visuels',
        'Tunnel d’engagement clair multipliant les leads par 4'
      ]
    },
    calculator: {
      kicker: 'CALCULATEUR DE CROISSANCE',
      title: 'Estimez votre impact commercial avec aimo',
      subtitle: 'Découvrez les résultats quand des vidéos à haute rétention dirigent vers un site optimisé pour la vente.',
      sliderLabel1: 'Nombre de contenus par mois :',
      sliderLabel2: 'Vues moyennes actuelles par vidéo :',
      resultViews: 'Vues mensuelles projetées',
      resultLeads: 'Prospects et demandes estimés',
      resultRevenue: 'Impact mensuel estimé sur le CA',
      note: 'Basé sur les performances moyennes observées auprès de plus de 45 partenaires.',
      cta: 'Planifier un Appel Stratégique'
    },
    controlRoom: {
      kicker: 'SALLE DE CONTRÔLE AIMO',
      title: 'Une chaîne de production continue pour votre marque.',
      subtitle: 'aimo agit comme votre studio de production interne : disponible 24/7 sans les contraintes d’embauche.',
      ctaPrimary: 'Lancer un Sprint',
      ctaSecondary: 'Discuter sur WhatsApp',
      stats: {
        stat1Val: '< 48h',
        stat1Label: 'Délai moyen de la première version',
        stat2Val: '+120M',
        stat2Label: 'Vues organiques cumulées',
        stat3Val: '99.4%',
        stat3Label: 'Taux de satisfaction client',
        stat4Val: '4.2x',
        stat4Label: 'Augmentation des demandes clients'
      },
      pipelineSteps: {
        step1Title: '1. Envoi des rushs & brief',
        step1Desc: 'Déposez vos rushs ou notes vocales en 30 secondes dans votre espace dédié.',
        step2Title: '2. Hook & montage de précision',
        step2Desc: 'Nos monteurs seniors rythment, étalonnent, sonorisent et animent.',
        step3Title: '3. Retours rapides & révisions',
        step3Desc: 'Commentez image par image avec révisions illimitées jusqu’à satisfaction.',
        step4Title: '4. Fichiers 4K prêts à publier',
        step4Desc: 'Téléchargez vos vidéos masterisées avec textes et vignettes optimisés.'
      }
    },
    caseStudiesSection: {
      kicker: 'RÉSULTATS PROUVÉS',
      title: 'De vraies marques, des créateurs concrets, du chiffre d’affaires.',
      subtitle: 'Découvrez comment notre production transforme l’audience en revenus pérennes.',
      studies: [
        {
          client: 'Aura Lifestyle & Mode',
          category: 'E-Commerce / Reels Instagram',
          stat: '+480%',
          label: 'Bond de portée organique',
          desc: 'Refonte des Reels avec un rythme percutant et des hooks calibrés pour le panier d’achat.',
          impact: '340 000 $ de chiffre d’affaires direct sur Instagram en 90 jours'
        },
        {
          client: 'Dr. Daniel Vance',
          category: 'Marque Personnelle / Chaîne YouTube',
          stat: '850K',
          label: 'Nouveaux abonnés acquis',
          desc: 'Montage immersif façon documentaire avec animations graphiques épurées.',
          impact: 'Temps moyen de visionnage passé de 3:12 à 11:45 minutes'
        },
        {
          client: 'Nexus Growth Capital',
          category: 'Services B2B / Web & Reels',
          stat: '14.8%',
          label: 'Conversion du lien en bio',
          desc: 'Landing page ultra-rapide connectée à des Reels d’études de cas ciblés.',
          impact: '62 demandes qualifiées de clients B2B dès le premier mois'
        }
      ]
    },
    contactModal: {
      title: 'Démarrez votre projet créatif avec aimo',
      subtitle: 'Remplissez ce court brief de 60 secondes ou contactez directement notre équipe.',
      step1Title: 'Quel type de contenu recherchez-vous ?',
      step2Title: 'Vos coordonnées et objectifs',
      servicesSelect: 'Sélectionnez un service (Instagram, YouTube, Motion, Web)',
      volumeSelect: 'Volume mensuel estimé',
      namePlaceholder: 'Votre nom ou nom de marque',
      instagramPlaceholder: 'Identifiant Instagram (@votremarque)',
      whatsappPlaceholder: 'Numéro WhatsApp ou e-mail',
      notesPlaceholder: 'Décrivez brièvement votre public ou vos objectifs...',
      submitButton: 'Envoyer ma Demande de Projet',
      submitting: 'Transmission à aimo en cours...',
      successTitle: 'Brief bien reçu !',
      successMessage: 'Notre équipe analysera votre compte et vous répondra sous 2 heures avec des premières propositions.',
      orDirect: 'Ou échangez directement avec un directeur de création :',
      chatWhatsApp: 'Discuter sur WhatsApp',
      dmInstagram: 'Envoyer un DM Instagram',
      close: 'Fermer'
    },
    footer: {
      rights: 'Tous droits réservés.',
      domain: 'aimoads.site',
      tagline: 'aimo Content Studio · Conçu pour la vitesse et la conversion.',
      linksTitle: 'Navigation',
      socialTitle: 'Réseaux',
      privacy: 'Confidentialité',
      terms: 'Conditions Générales'
    }
  }
};
