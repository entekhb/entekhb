export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  summary: string;
  deliverables: string[];
  metricLabel: string;
  metricValue: string;
  iconName: 'video' | 'carousel' | 'globe' | 'sparkles';
}

export interface CarouselSlide {
  id: number;
  badge: string;
  headline: string;
  subtext: string;
  visualNote: string;
  engagementStat: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  niche: string;
  challenge: string;
  solution: string;
  results: {
    primary: string;
    primaryLabel: string;
    secondary: string;
    secondaryLabel: string;
  };
  highlightQuote: string;
  author: string;
  role: string;
}

export interface ProjectInquiry {
  name: string;
  handleOrWebsite: string;
  contactMethod: 'whatsapp' | 'telegram' | 'email';
  contactValue: string;
  selectedServices: string[];
  monthlyBudget: string;
  notes?: string;
}
