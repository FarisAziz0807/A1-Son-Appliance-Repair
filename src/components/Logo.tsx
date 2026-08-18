import React, { useState } from 'react';
import logoAsset from '../assets/logo.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'compact' | 'badge';
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);

  // Height sizing for mobile, tablet, desktop while strictly preserving natural aspect ratio
  const heightClasses = {
    sm: 'h-10 sm:h-11',
    md: 'h-12 sm:h-14 md:h-16',
    lg: 'h-16 sm:h-20 md:h-24',
    xl: 'h-20 sm:h-28 md:h-32',
  }[size];

  if (imgError) {
    // Elegant high-contrast brand emblem fallback if browser blocks image loading
    return (
      <div className={`inline-flex items-center gap-3 select-none ${className}`}>
        <div className="bg-red-600 rounded-xl px-3 py-2 flex items-center justify-center text-white font-black text-xl shadow-md border border-red-500">
          A1
        </div>
        <div className="leading-tight flex flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold tracking-tight text-slate-900 text-lg">
              A1 & Son
            </span>
            <span className="bg-red-50 text-red-700 text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded border border-red-100">
              Burien, WA
            </span>
          </div>
          <p className="text-red-600 font-bold uppercase tracking-wider text-xs">
            Appliance Repair
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoAsset || '/logo.png'}
        alt="A1 & Son Appliance Repair - Burien, WA"
        className={`${heightClasses} w-auto max-w-full object-contain transition-transform duration-200`}
        loading="eager"
        decoding="async"
        onError={() => setImgError(true)}
      />
    </div>
  );
};
