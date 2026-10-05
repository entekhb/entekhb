// Configuration for the official Aimo Studio logo
// When downloading the source code, simply place your logo image in:
//   public/logo/logo.png (or logo.svg / logo.jpg)

export const DEFAULT_LOGO_PATH = '/logo/logo.png?v=3';
export const SVG_LOGO_PATH = '/logo/logo.svg?v=3';
export const FALLBACK_LOGO_PATH = '/assets/aimo-logo.png?v=3';

// Local storage key for in-browser live testing/preview
export const CUSTOM_LOGO_STORAGE_KEY = 'aimo_custom_logo_data';

// Helper to get active logo URL
export const getActiveLogoUrl = (): string => {
  if (typeof window !== 'undefined') {
    const savedCustom = localStorage.getItem(CUSTOM_LOGO_STORAGE_KEY);
    if (savedCustom) return savedCustom;
  }
  return DEFAULT_LOGO_PATH;
};
