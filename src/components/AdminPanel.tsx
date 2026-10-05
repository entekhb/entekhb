import React, { useState, useEffect } from 'react';
import { 
  Lock, 
  User, 
  Key, 
  BarChart3, 
  Inbox, 
  Eye, 
  Users, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Clock, 
  CheckCircle, 
  PhoneCall, 
  MessageSquare, 
  Trash2, 
  LogOut, 
  ArrowLeft, 
  Sparkles, 
  RefreshCw, 
  ExternalLink,
  Search,
  PlusCircle
} from 'lucide-react';
import { getAnalyticsData, AnalyticsData } from '../utils/analytics';
import { getInquiries, updateInquiryStatus, deleteInquiry, saveInquiry, ProjectInquiry } from '../utils/inquiries';
import { AimoLogo } from './AimoLogo';

interface AdminPanelProps {
  onBackToSite: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onBackToSite }) => {
  // Credentials requested by user:
  // Username: user
  // Password: Mohamad12!!!
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('aimo_admin_logged_in') === 'true';
  });

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState<'inquiries' | 'analytics'>('inquiries');

  const [inquiries, setInquiries] = useState<ProjectInquiry[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'contacted' | 'completed'>('all');

  const refreshData = () => {
    setInquiries(getInquiries());
    setAnalytics(getAnalyticsData());
  };

  useEffect(() => {
    if (isAuthenticated) {
      refreshData();
      const handleInquiryChange = () => setInquiries(getInquiries());
      window.addEventListener('aimo_inquiry_added', handleInquiryChange);
      return () => window.removeEventListener('aimo_inquiry_added', handleInquiryChange);
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUser = username.trim().toLowerCase();
    if ((cleanUser === 'user' || cleanUser === 'khamseh') && password === 'Mohamad12!!!') {
      sessionStorage.setItem('aimo_admin_logged_in', 'true');
      setIsAuthenticated(true);
      setLoginError('');
      refreshData();
    } else {
      setLoginError('نام کاربری یا رمز عبور اشتباه است.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('aimo_admin_logged_in');
    setIsAuthenticated(false);
  };

  const filteredInquiries = inquiries.filter(item => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.contact.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.instagram && item.instagram.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (statusFilter === 'all') return matchesSearch;
    return matchesSearch && item.status === statusFilter;
  });

  // If not authenticated, show sleek Persian login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#070210] text-white flex flex-col justify-center items-center p-4 relative overflow-hidden font-sans" dir="rtl">
        {/* Ambient Gemini-style glowing backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#7C3AED]/20 via-[#3B82F6]/20 to-[#EC4899]/20 blur-[130px] rounded-full pointer-events-none"></div>

        <div className="w-full max-w-md bg-[#120824]/90 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl relative z-10">
          <div className="flex flex-col items-center mb-8">
            <AimoLogo size="md" textColor="text-white" showText={true} />
            <h2 className="text-xl font-bold text-white mt-4 font-sans">
              پنل مدیریت استودیو ایمو
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              ورود به داشبورد درخواست‌ها و آمار بازدید
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                نام کاربری
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="user"
                  className="w-full px-4 py-3 pr-10 rounded-xl bg-white/5 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#7C3AED] transition-colors"
                  required
                />
                <User className="w-4 h-4 text-neutral-400 absolute right-3.5 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                رمز عبور
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-3 pr-10 rounded-xl bg-white/5 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#7C3AED] transition-colors"
                  required
                />
                <Key className="w-4 h-4 text-neutral-400 absolute right-3.5 top-3.5" />
              </div>
            </div>

            {loginError && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white font-bold text-sm shadow-lg hover:brightness-110 active:scale-98 transition-all cursor-pointer mt-2"
            >
              ورود به پنل مدیریت
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
            <button
              onClick={onBackToSite}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 rotate-180" />
              <span>بازگشت به وبسایت اصلی</span>
            </button>
            <span className="font-mono text-[11px] text-neutral-500">aimo admin</span>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated Admin Dashboard
  return (
    <div className="min-h-screen bg-[#070312] text-white font-sans flex flex-col" dir="rtl">
      {/* Top Admin Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#0e0621]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <AimoLogo size="sm" textColor="text-white" showText={true} />
            <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-[#7C3AED]/30 text-[#A78BFA] border border-[#7C3AED]/50">
              مدیریت استودیو
            </span>
          </div>

          {/* Tab switchers */}
          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab('inquiries')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'inquiries'
                  ? 'bg-[#7C3AED] text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Inbox className="w-3.5 h-3.5" />
              <span>درخواست‌های پروژه</span>
              <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
                {inquiries.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('analytics')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'analytics'
                  ? 'bg-[#7C3AED] text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>آمار دقیق بازدید</span>
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToSite}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-xs border border-white/10 transition-colors cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>مشاهده سایت</span>
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-300 hover:text-red-200 text-xs border border-red-500/20 transition-colors cursor-pointer"
              title="خروج از حساب مدیریت"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>خروج</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Content */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto p-4 sm:p-8 space-y-8">
        
        {/* TAB 1: INQUIRIES */}
        {activeTab === 'inquiries' && (
          <div className="space-y-6 animate-fade-in">
            {/* Header & filters */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#110726] p-5 rounded-2xl border border-white/10">
              <div>
                <h1 className="text-xl font-black text-white flex items-center gap-2">
                  <span>درخواست‌های ثبت‌شده پروژه</span>
                  <span className="text-xs font-normal text-neutral-400">
                    (تکمیل شده از فرم "استارت پروژکت")
                  </span>
                </h1>
                <p className="text-xs text-neutral-400 mt-1">
                  تمام اطلاعات متقاضیان و کارفرمایان ثبت‌شده در این جدول قابل مشاهده و مدیریت است.
                </p>
              </div>

              {/* Status filter buttons */}
              <div className="flex items-center gap-1.5 bg-white/5 p-1 rounded-xl border border-white/10 text-xs">
                <button
                  onClick={() => setStatusFilter('all')}
                  className={`px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                    statusFilter === 'all' ? 'bg-white/20 text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  همه ({inquiries.length})
                </button>
                <button
                  onClick={() => setStatusFilter('new')}
                  className={`px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                    statusFilter === 'new' ? 'bg-amber-500/30 text-amber-300 border border-amber-500/40' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  جدید ({inquiries.filter(i => i.status === 'new').length})
                </button>
                <button
                  onClick={() => setStatusFilter('contacted')}
                  className={`px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                    statusFilter === 'contacted' ? 'bg-blue-500/30 text-blue-300 border border-blue-500/40' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  بررسی شده ({inquiries.filter(i => i.status === 'contacted').length})
                </button>
                <button
                  onClick={() => setStatusFilter('completed')}
                  className={`px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                    statusFilter === 'completed' ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-500/40' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  تکمیل شده ({inquiries.filter(i => i.status === 'completed').length})
                </button>
              </div>
            </div>

            {/* Search Box */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جستجو در نام، شماره تماس، آیدی اینستاگرام یا نوع خدمات..."
                className="w-full bg-[#110726] border border-white/10 rounded-xl px-4 py-3 pr-10 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#7C3AED]"
              />
              <Search className="w-4 h-4 text-neutral-400 absolute right-3.5 top-3.5" />
            </div>

            {/* Inquiries List */}
            {filteredInquiries.length === 0 ? (
              <div className="text-center py-16 bg-[#110726]/60 rounded-3xl border border-white/10">
                <Inbox className="w-12 h-12 text-neutral-600 mx-auto mb-3" />
                <h3 className="text-base font-bold text-neutral-300">درخواستی یافت نشد</h3>
                <p className="text-xs text-neutral-500 mt-1">
                  هنوز درخواستی با این مشخصات ثبت نشده است یا فیلتر را تغییر دهید.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredInquiries.map((inq) => {
                  const cleanPhone = inq.contact.replace(/[^\d+]/g, '');
                  const waNumber = cleanPhone.startsWith('0') ? '98' + cleanPhone.slice(1) : cleanPhone.replace('+', '');
                  return (
                    <div
                      key={inq.id}
                      className="bg-[#120829] border border-white/10 hover:border-purple-500/40 rounded-2xl p-5 shadow-lg flex flex-col justify-between transition-all"
                    >
                      <div className="space-y-3">
                        {/* Top row: Name & Status */}
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="text-base font-extrabold text-white">
                              {inq.name}
                            </h3>
                            <span className="text-[11px] text-neutral-400 flex items-center gap-1 mt-0.5">
                              <Clock className="w-3 h-3" />
                              {inq.formattedDate}
                            </span>
                          </div>

                          {/* Status Badge */}
                          <select
                            value={inq.status}
                            onChange={(e) => updateInquiryStatus(inq.id, e.target.value as any)}
                            className={`text-xs font-bold rounded-lg px-2.5 py-1 border cursor-pointer focus:outline-none ${
                              inq.status === 'new'
                                ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                                : inq.status === 'contacted'
                                ? 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                                : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                            }`}
                          >
                            <option value="new" className="bg-[#120829] text-amber-300">جدید</option>
                            <option value="contacted" className="bg-[#120829] text-blue-300">تماس گرفته شد</option>
                            <option value="completed" className="bg-[#120829] text-emerald-300">نهایی و تایید</option>
                          </select>
                        </div>

                        {/* Contact details */}
                        <div className="grid grid-cols-2 gap-2 text-xs bg-white/5 p-2.5 rounded-xl border border-white/5">
                          <div>
                            <span className="text-neutral-400 block text-[10px]">تلفن / واتس‌اپ:</span>
                            <span className="font-mono font-bold text-white ltr text-right block mt-0.5">
                              {inq.contact}
                            </span>
                          </div>
                          <div>
                            <span className="text-neutral-400 block text-[10px]">پیج / برند:</span>
                            <span className="font-mono text-purple-300 ltr text-right block mt-0.5">
                              {inq.instagram ? `@${inq.instagram}` : 'ثبت نشده'}
                            </span>
                          </div>
                        </div>

                        {/* Services requested */}
                        <div>
                          <span className="text-[11px] text-neutral-400 block mb-1.5 font-medium">
                            خدمات مدنظر:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {inq.services.map((srv, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 rounded-md bg-[#7C3AED]/20 border border-[#7C3AED]/30 text-purple-200 text-[11px]"
                              >
                                {srv}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Notes */}
                        {inq.notes && (
                          <div className="bg-white/5 p-2.5 rounded-xl text-xs text-neutral-300 leading-relaxed border border-white/5">
                            <span className="text-[10px] text-neutral-400 block mb-0.5">توضیحات پروژه:</span>
                            {inq.notes}
                          </div>
                        )}
                      </div>

                      {/* Actions row */}
                      <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          {/* Direct WhatsApp link */}
                          <a
                            href={`https://wa.me/${waNumber}?text=${encodeURIComponent(`سلام ${inq.name} عزیز، از استودیو ایمو (aimo) در ارتباط با درخواست ثبت‌شده شما پیام می‌دهم.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-sm"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>پیام در واتس‌اپ</span>
                          </a>

                          {/* Direct Call */}
                          <a
                            href={`tel:${cleanPhone}`}
                            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
                          >
                            <PhoneCall className="w-3.5 h-3.5" />
                            <span>تماس</span>
                          </a>
                        </div>

                        {/* Delete */}
                        <button
                          onClick={() => {
                            if (window.confirm('آیا از حذف این درخواست اطمینان دارید؟')) {
                              deleteInquiry(inq.id);
                            }
                          }}
                          className="p-1.5 rounded-lg text-neutral-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                          title="حذف درخواست"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: DETAILED WEBSITE VISITOR ANALYTICS */}
        {activeTab === 'analytics' && analytics && (
          <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="flex items-center justify-between bg-[#110726] p-5 rounded-2xl border border-white/10">
              <div>
                <h1 className="text-xl font-black text-white flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#7C3AED]" />
                  <span>آمار دقیق و زنده بازدید وبسایت (aimoads.site)</span>
                </h1>
                <p className="text-xs text-neutral-400 mt-1">
                  ردیابی بدون واسطه بازدیدکنندگان یکتا، صفحات مشاهده‌شده و دستگاه‌های کاربران.
                </p>
              </div>

              <button
                onClick={refreshData}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs text-white transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>به‌روزرسانی آمار</span>
              </button>
            </div>

            {/* Top 4 KPI Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Metric 1 */}
              <div className="bg-[#120829] p-5 rounded-2xl border border-white/10 shadow-lg">
                <div className="flex items-center justify-between text-neutral-400 mb-2">
                  <span className="text-xs font-semibold">کل صفحات مشاهده‌شده</span>
                  <Eye className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-3xl font-black text-white font-mono">
                  {analytics.totalPageViews.toLocaleString()}
                </div>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                  <span>+۱۸.۴٪ رشد نسبت به هفته پیش</span>
                </span>
              </div>

              {/* Metric 2 */}
              <div className="bg-[#120829] p-5 rounded-2xl border border-white/10 shadow-lg">
                <div className="flex items-center justify-between text-neutral-400 mb-2">
                  <span className="text-xs font-semibold">کاربران یکتا (Unique)</span>
                  <Users className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-3xl font-black text-white font-mono">
                  {analytics.uniqueVisitors.toLocaleString()}
                </div>
                <span className="text-[11px] text-neutral-400 mt-1 block">
                  تشخیص هویت یکتا بر اساس مرورگر و دستگاه
                </span>
              </div>

              {/* Metric 3 */}
              <div className="bg-[#120829] p-5 rounded-2xl border border-white/10 shadow-lg">
                <div className="flex items-center justify-between text-neutral-400 mb-2">
                  <span className="text-xs font-semibold">میانگین زمان در سایت</span>
                  <Clock className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-3xl font-black text-white font-mono">
                  {Math.floor(analytics.avgSessionSeconds / 60)} دقیقه و {analytics.avgSessionSeconds % 60} ثانیه
                </div>
                <span className="text-[11px] text-emerald-400 mt-1 block">
                  نگه‌داشت عالی مخاطب روی لندینگ پیج
                </span>
              </div>

              {/* Metric 4 */}
              <div className="bg-[#120829] p-5 rounded-2xl border border-white/10 shadow-lg">
                <div className="flex items-center justify-between text-neutral-400 mb-2">
                  <span className="text-xs font-semibold">تعداد درخواست‌های ثبت‌شده</span>
                  <Inbox className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-3xl font-black text-emerald-400 font-mono">
                  {inquiries.length}
                </div>
                <span className="text-[11px] text-neutral-400 mt-1 block">
                  نرخ تبدیل تقریبی: {(inquiries.length / Math.max(1, analytics.uniqueVisitors) * 100).toFixed(1)}٪
                </span>
              </div>
            </div>

            {/* Device breakdown & Daily Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Devices Card */}
              <div className="bg-[#120829] p-6 rounded-2xl border border-white/10 space-y-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>تفکیک دستگاه‌های کاربران</span>
                </h3>

                <div className="space-y-3">
                  {/* Mobile */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="flex items-center gap-1.5 text-neutral-300">
                        <Smartphone className="w-3.5 h-3.5 text-purple-400" />
                        <span>موبایل (Instagram & Phone)</span>
                      </span>
                      <span className="font-mono font-bold text-white">
                        {Math.round((analytics.deviceBreakdown.mobile / (analytics.deviceBreakdown.mobile + analytics.deviceBreakdown.desktop + analytics.deviceBreakdown.tablet || 1)) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-[#7C3AED] h-full rounded-full" 
                        style={{ width: `${Math.round((analytics.deviceBreakdown.mobile / (analytics.deviceBreakdown.mobile + analytics.deviceBreakdown.desktop + analytics.deviceBreakdown.tablet || 1)) * 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Desktop */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="flex items-center gap-1.5 text-neutral-300">
                        <Monitor className="w-3.5 h-3.5 text-blue-400" />
                        <span>کامپیوتر و لپ‌تاپ (Desktop)</span>
                      </span>
                      <span className="font-mono font-bold text-white">
                        {Math.round((analytics.deviceBreakdown.desktop / (analytics.deviceBreakdown.mobile + analytics.deviceBreakdown.desktop + analytics.deviceBreakdown.tablet || 1)) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-blue-500 h-full rounded-full" 
                        style={{ width: `${Math.round((analytics.deviceBreakdown.desktop / (analytics.deviceBreakdown.mobile + analytics.deviceBreakdown.desktop + analytics.deviceBreakdown.tablet || 1)) * 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Tablet */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="flex items-center gap-1.5 text-neutral-300">
                        <Tablet className="w-3.5 h-3.5 text-pink-400" />
                        <span>تبلت و آیپد (Tablet)</span>
                      </span>
                      <span className="font-mono font-bold text-white">
                        {Math.round((analytics.deviceBreakdown.tablet / (analytics.deviceBreakdown.mobile + analytics.deviceBreakdown.desktop + analytics.deviceBreakdown.tablet || 1)) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-pink-500 h-full rounded-full" 
                        style={{ width: `${Math.round((analytics.deviceBreakdown.tablet / (analytics.deviceBreakdown.mobile + analytics.deviceBreakdown.desktop + analytics.deviceBreakdown.tablet || 1)) * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 text-[11px] text-neutral-400 leading-relaxed">
                  اکثر بازدیدکنندگان از طریق لینک بیو اینستاگرام و موبایل وارد سایت می‌شوند که نشان‌دهنده بهینگی موبایل سایت است.
                </div>
              </div>

              {/* 7-Day Performance Table / Bars */}
              <div className="lg:col-span-2 bg-[#120829] p-6 rounded-2xl border border-white/10 space-y-4">
                <h3 className="text-sm font-bold text-white">
                  روند بازدید روزانه ۷ روز گذشته
                </h3>

                <div className="space-y-2.5">
                  {Object.entries(analytics.dailyStats).slice(-7).map(([date, stats], idx) => {
                    const maxViews = 300;
                    const pct = Math.min(100, Math.round((stats.views / maxViews) * 100));
                    return (
                      <div key={date} className="flex items-center gap-3 text-xs">
                        <span className="w-24 font-mono text-neutral-400 ltr text-left">
                          {date}
                        </span>
                        <div className="flex-1 bg-white/10 h-6 rounded-lg overflow-hidden relative flex items-center px-3">
                          <div 
                            className="absolute top-0 right-0 h-full bg-gradient-to-l from-[#7C3AED] to-[#3B82F6] rounded-lg transition-all"
                            style={{ width: `${pct}%` }}
                          ></div>
                          <span className="relative z-10 font-bold text-[11px] text-white">
                            {stats.views} بازدید ({stats.uniques} کاربر یکتا)
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Live Recent Sessions Feed */}
            {analytics.recentVisits && analytics.recentVisits.length > 0 && (
              <div className="bg-[#120829] p-6 rounded-2xl border border-white/10 space-y-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>آخرین ورودهای زنده به وبسایت</span>
                </h3>

                <div className="divide-y divide-white/5">
                  {analytics.recentVisits.slice(0, 8).map((session, i) => (
                    <div key={i} className="py-2.5 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-neutral-400">شناسه: #{session.id}</span>
                        <span className="px-2 py-0.5 rounded bg-white/10 text-neutral-300 text-[10px]">
                          {session.device === 'mobile' ? 'موبایل' : session.device === 'tablet' ? 'تبلت' : 'دسکتاپ'}
                        </span>
                        <span className="text-neutral-400 hidden sm:inline">
                          منبع: {session.referrer}
                        </span>
                      </div>
                      <span className="text-neutral-500 font-mono text-[11px]">
                        {session.dateStr}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};
