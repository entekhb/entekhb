import React from 'react';

interface AimoLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
  withDomain?: boolean;
  className?: string;
}

export const AimoLogo: React.FC<AimoLogoProps> = ({
  size = 'md',
  showWordmark = true,
  withDomain = false,
  className = '',
}) => {
  const sizeMap = {
    sm: { icon: 'w-7 h-7', text: 'text-lg', domain: 'text-[10px]' },
    md: { icon: 'w-9 h-9', text: 'text-xl', domain: 'text-xs' },
    lg: { icon: 'w-12 h-12', text: 'text-2xl', domain: 'text-xs' },
    xl: { icon: 'w-16 h-16', text: 'text-3xl', domain: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Exact 3D Icon based on the provided branding */}
      <div
        className={`relative ${currentSize.icon} rounded-[24%] shadow-sm flex items-center justify-center overflow-hidden shrink-0 transition-transform duration-300 hover:scale-[1.03]`}
        style={{
          background: 'linear-gradient(140deg, #7c3aed 0%, #6022c4 45%, #4c1d95 100%)',
          boxShadow:
            '0 2px 8px -1px rgba(91, 33, 182, 0.45), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35)',
        }}
      >
        {/* Subtle radial ambient highlight */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay"
          style={{
            background: 'radial-gradient(circle at 35% 25%, #ffffff 0%, transparent 60%)',
          }}
        />

        {/* 3D Soft White "a" glyph */}
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[68%] h-[68%] relative z-10 drop-shadow-[0_3px_3px_rgba(46,16,101,0.5)]"
        >
          <defs>
            {/* 3D Tube Lighting Gradient */}
            <linearGradient id="tubeLight" x1="20%" y1="10%" x2="80%" y2="90%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="45%" stopColor="#f3f0fc" />
              <stop offset="85%" stopColor="#ded5f7" />
              <stop offset="100%" stopColor="#c7b8f2" />
            </linearGradient>
            {/* Top specular reflection */}
            <linearGradient id="specularGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            {/* Shadow filter */}
            <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#2e1065" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* Render 3D continuous loop of lowercase "a" */}
          <g filter="url(#softShadow)">
            {/* Main loop */}
            <path
              d="M 50 25 
                 C 64 25, 75 36, 75 50 
                 C 75 64, 64 75, 50 75 
                 C 36 75, 25 64, 25 50 
                 C 25 36, 36 25, 50 25 Z"
              fill="none"
              stroke="url(#tubeLight)"
              strokeWidth="14"
              strokeLinecap="round"
            />
            {/* Tail stem connecting smoothly */}
            <path
              d="M 68 45 
                 L 68 68 
                 C 68 73, 73 75, 76 73"
              fill="none"
              stroke="url(#tubeLight)"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Specular sheen over the top curve */}
            <path
              d="M 40 25 C 47 23, 53 23, 60 25"
              fill="none"
              stroke="url(#specularGlow)"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>

      {/* Wordmark */}
      {showWordmark && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1">
            <span
              className={`font-semibold tracking-[-0.03em] text-[#17191c] ${currentSize.text} leading-none`}
            >
              aimo
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] inline-block" />
          </div>
          {withDomain && (
            <span
              className={`text-[#777b86] font-normal tracking-tight ${currentSize.domain} mt-0.5 leading-none`}
            >
              aimoads.site
            </span>
          )}
        </div>
      )}
    </div>
  );
};
