// Project Inquiries Manager for aimo Studio
export interface ProjectInquiry {
  id: string;
  name: string;
  contact: string; // Phone / WhatsApp / Email
  instagram?: string;
  services: string[];
  notes?: string;
  createdAt: string; // ISO
  formattedDate: string;
  status: 'new' | 'contacted' | 'completed';
}

const INQUIRIES_STORAGE_KEY = 'aimo_project_inquiries_db';

export const getInquiries = (): ProjectInquiry[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(INQUIRIES_STORAGE_KEY);
    if (!raw) {
      // Seed with initial realistic sample inquiries so admin panel has sample data
      const sample: ProjectInquiry[] = [
        {
          id: 'inq_1728014520',
          name: 'آرش علوی (برند پوشاک استایل)',
          contact: '09124567890',
          instagram: 'style.clothing',
          services: ['Instagram Reels & Graphics', 'Motion Graphics & 3D VFX'],
          notes: 'نیاز به ۱۰ ریلز ماهانه با هوک‌های قوی و ادیت پرانرژی برای فروش کالکشن پاییزه',
          createdAt: new Date(Date.now() - 3600000 * 3).toISOString(),
          formattedDate: new Date(Date.now() - 3600000 * 3).toLocaleString('fa-IR'),
          status: 'new'
        },
        {
          id: 'inq_1728009840',
          name: 'دکتر مریم شریفی',
          contact: '09123344556',
          instagram: 'dr.sharifi_clinic',
          services: ['YouTube 4K Production', 'High-Converting Landing Page / Web'],
          notes: 'تولید پادکست‌های پزشکی در یوتیوب و طراحی یک لندینگ پیج اختصاصی برای رزرو نوبت',
          createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
          formattedDate: new Date(Date.now() - 3600000 * 18).toLocaleString('fa-IR'),
          status: 'contacted'
        }
      ];
      localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(sample));
      return sample;
    }
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

export const saveInquiry = (inquiry: Omit<ProjectInquiry, 'id' | 'createdAt' | 'formattedDate' | 'status'>): ProjectInquiry => {
  const all = getInquiries();
  const now = new Date();
  const newRecord: ProjectInquiry = {
    ...inquiry,
    id: 'inq_' + Date.now().toString(),
    createdAt: now.toISOString(),
    formattedDate: now.toLocaleDateString('fa-IR') + ' - ' + now.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
    status: 'new'
  };

  const updated = [newRecord, ...all];
  localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event('aimo_inquiry_added'));
  return newRecord;
};

export const updateInquiryStatus = (id: string, status: ProjectInquiry['status']) => {
  const all = getInquiries();
  const updated = all.map(inq => inq.id === id ? { ...inq, status } : inq);
  localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event('aimo_inquiry_added'));
};

export const deleteInquiry = (id: string) => {
  const all = getInquiries();
  const updated = all.filter(inq => inq.id !== id);
  localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event('aimo_inquiry_added'));
};
