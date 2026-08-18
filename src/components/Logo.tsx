import React from 'react';

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
  // Height sizing for desktop, tablet, mobile while strictly preserving 16:9 / original natural aspect ratio
  const heightClasses = {
    sm: 'h-10 sm:h-11',
    md: 'h-12 sm:h-14 md:h-16',
    lg: 'h-16 sm:h-20 md:h-24',
    xl: 'h-20 sm:h-28 md:h-32',
  }[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/logo.png"
        alt="A1 & Son Appliance Repair - Burien, WA"
        className={`${heightClasses} w-auto max-w-full object-contain transition-transform duration-200`}
        loading="eager"
        decoding="async"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
