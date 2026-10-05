export type Language = 'en' | 'fa' | 'ar' | 'es' | 'de' | 'fr';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  metrics: {
    label: string;
    value: string;
  };
  turnaround: string;
  idealFor: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  metricLabel: string;
  metricValue: string;
  secondaryMetric: string;
  description: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  handle: string;
  avatarSeed: string;
  stats: string;
}

export interface FloatingCardData {
  id: string;
  avatarText: string;
  title: string;
  meta: string;
  statusColor?: 'blue' | 'amber' | 'green' | 'purple';
  angle: string;
  time: string;
  badge?: string;
}
