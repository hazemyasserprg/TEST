import React from 'react';

interface BenaaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BenaaLogo: React.FC<BenaaLogoProps> = ({ className = '', size = 'md' }) => {
  const iconHeight = size === 'sm' ? 26 : size === 'lg' ? 44 : 34;

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {/* Arabic Geometric Logo */}
      <svg
        height={iconHeight}
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#1062fe]"
      >
        {/* Right branch / Baa & Nun */}
        <path
          d="M75 14H65V36H90V28H75V14Z"
          fill="currentColor"
        />
        {/* Left branch / Alif / Hamza */}
        <path
          d="M20 14H10V36H35V28H20V14Z"
          fill="currentColor"
        />
        {/* Middle connector */}
        <path
          d="M35 30H65V36H35V30Z"
          fill="currentColor"
        />
        {/* Upper dots */}
        <circle cx="20" cy="6" r="4.5" fill="currentColor" />
        <circle cx="75" cy="6" r="4.5" fill="currentColor" />
      </svg>

      {/* English Text below */}
      <div className="flex items-center gap-1 -mt-0.5">
        <span className="text-[#1062fe] font-black tracking-widest text-[13px] font-sans">
          benaa
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#1062fe]"></span>
      </div>
    </div>
  );
};

