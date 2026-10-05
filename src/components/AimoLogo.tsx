import React, { useState, useEffect } from 'react';
import { DEFAULT_LOGO_PATH, FALLBACK_LOGO_PATH, SVG_LOGO_PATH, getActiveLogoUrl } from '../assets/logo';

export interface AimoLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showText?: boolean;
  showTagline?: boolean;
  textColor?: string;
  className?: string;
  variant?: 'icon' | 'horizontal' | 'stacked' | 'badge';
  interactive?: boolean;
}

export const AimoLogo: React.FC<AimoLogoProps> = ({
  size = 'md',
  showText = true,
  showTagline = false,
  textColor = 'text-neutral-950',
  className = '',
  variant = 'horizontal',
  interactive = true,
}) => {
  const [imgSrc, setImgSrc] = useState<string>(DEFAULT_LOGO_PATH);

  useEffect(() => {
    // Initial sync
    setImgSrc(getActiveLogoUrl());

    // Listen for custom logo change event
    const handleLogoChange = () => {
      setImgSrc(getActiveLogoUrl());
    };

    window.addEventListener('aimo_logo_changed', handleLogoChange);
    window.addEventListener('storage', handleLogoChange);

    return () => {
      window.removeEventListener('aimo_logo_changed', handleLogoChange);
      window.removeEventListener('storage', handleLogoChange);
    };
  }, []);

  const handleImgError = () => {
    // Progressive fallback: default -> SVG -> fallback asset
    if (imgSrc === DEFAULT_LOGO_PATH) {
      setImgSrc(SVG_LOGO_PATH);
    } else if (imgSrc === SVG_LOGO_PATH) {
      setImgSrc(FALLBACK_LOGO_PATH);
    }
  };

  const sizeMap = {
    xs: {
      box: 'w-7 h-7',
      title: 'text-sm font-bold tracking-tight',
      tagline: 'text-[9px]',
      gap: 'gap-2',
      radius: 'rounded-[8px]',
    },
    sm: {
      box: 'w-9 h-9',
      title: 'text-base font-bold tracking-tight',
      tagline: 'text-[10px]',
      gap: 'gap-2.5',
      radius: 'rounded-[10px]',
    },
    md: {
      box: 'w-12 h-12',
      title: 'text-xl font-extrabold tracking-tight',
      tagline: 'text-[11px]',
      gap: 'gap-3',
      radius: 'rounded-[14px]',
    },
    lg: {
      box: 'w-16 h-16',
      title: 'text-2xl font-black tracking-tight',
      tagline: 'text-xs',
      gap: 'gap-3.5',
      radius: 'rounded-[18px]',
    },
    xl: {
      box: 'w-24 h-24',
      title: 'text-3xl font-black tracking-tight',
      tagline: 'text-sm',
      gap: 'gap-4',
      radius: 'rounded-[24px]',
    },
    '2xl': {
      box: 'w-32 h-32',
      title: 'text-4xl font-black tracking-tight',
      tagline: 'text-base',
      gap: 'gap-5',
      radius: 'rounded-[30px]',
    },
  };

  const current = sizeMap[size];

  // Using the image asset directly from public/logo/
  const IconMark = (
    <div
      className={`${current.box} relative flex-shrink-0 flex items-center justify-center select-none transition-all duration-300 ${
        interactive ? 'hover:scale-105 active:scale-95 group' : ''
      }`}
    >
      <img
        src={imgSrc}
        alt="aimo"
        onError={handleImgError}
        className="w-full h-full object-contain rounded-[22%] shadow-sm select-none"
        loading="eager"
        decoding="async"
        referrerPolicy="no-referrer"
      />
    </div>
  );

  if (variant === 'icon' || !showText) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {IconMark}
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${current.gap} ${className}`}>
        {IconMark}
        <div className="flex flex-col items-center">
          <span className={`${current.title} ${textColor} font-sans leading-none tracking-tight`}>
            aimo
          </span>
          {showTagline && (
            <span className={`${current.tagline} text-neutral-400 font-semibold uppercase tracking-[0.2em] mt-1`}>
              Content Studio
            </span>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div
        className={`inline-flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-neutral-900/90 text-white border border-neutral-800 shadow-md backdrop-blur-md ${className}`}
      >
        {IconMark}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-sm tracking-tight text-white font-sans">aimo</span>
            <span className="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-[#7C3AED]/30 text-[#A78BFA] border border-[#7C3AED]/40">
              OFFICIAL
            </span>
          </div>
          <span className="text-[11px] text-neutral-400 font-medium tracking-wide">
            aimoads.site
          </span>
        </div>
      </div>
    );
  }

  // Default 'horizontal'
  return (
    <div className={`inline-flex items-center ${current.gap} select-none ${className}`}>
      {IconMark}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline gap-1">
          <span className={`${current.title} ${textColor} font-sans`}>
            aimo
          </span>
        </div>
        {showTagline ? (
          <span className={`${current.tagline} text-neutral-400 font-medium tracking-wider uppercase mt-0.5`}>
            Content Studio
          </span>
        ) : (
          <span className="text-[10px] text-neutral-400 font-medium tracking-wider uppercase leading-none hidden xs:inline mt-0.5">
            ads.site
          </span>
        )}
      </div>
    </div>
  );
};
