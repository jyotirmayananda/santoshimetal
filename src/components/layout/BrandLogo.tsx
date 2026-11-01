'use client';

import Image from 'next/image';
import Link from 'next/link';

interface BrandLogoProps {
  className?: string;
  variant?: 'horizontal' | 'full-image' | 'mark-only';
  size?: 'sm' | 'md' | 'lg';
}

export function BrandLogo({
  className = '',
  variant = 'horizontal',
  size = 'md',
}: BrandLogoProps) {
  // Variant: Full Official 3D Logo Graphic Image
  if (variant === 'full-image') {
    const heightMap = {
      sm: 'h-10',
      md: 'h-14 sm:h-16',
      lg: 'h-20 sm:h-24',
    };

    return (
      <Link
        href="/"
        className={`group inline-flex items-center focus:outline-none select-none transition-transform duration-300 hover:scale-[1.02] ${className}`}
        aria-label="Santoshi Metal Industries Private Limited Home"
      >
        <div className={`relative ${heightMap[size]} w-auto aspect-[1024/682]`}>
          <Image
            src="/images/logo-full.jpg"
            alt="Santoshi Metal Industries Private Limited Official Logo"
            fill
            sizes="(max-width: 768px) 240px, 320px"
            className="object-contain mix-blend-multiply"
            priority
          />
        </div>
      </Link>
    );
  }

  // Variant: Standalone 3D Metallic Emblem Mark Only
  if (variant === 'mark-only') {
    const sizeMap = {
      sm: 'w-8 h-8',
      md: 'w-11 h-11',
      lg: 'w-16 h-16',
    };

    return (
      <Link
        href="/"
        className={`group inline-flex items-center focus:outline-none select-none transition-transform duration-300 hover:scale-105 ${className}`}
        aria-label="Santoshi Metal Industries Private Limited Home"
      >
        <div className={`relative ${sizeMap[size]} rounded-xl overflow-hidden`}>
          <Image
            src="/images/logo-mark.jpg"
            alt="Santoshi Metal Industries 3D Emblem Mark"
            fill
            sizes="64px"
            className="object-contain mix-blend-multiply"
            priority
          />
        </div>
      </Link>
    );
  }

  // Default: Horizontal Responsive Lockup (3D Emblem Mark + Official Brand Typography)
  const emblemSizes = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11 sm:w-12 sm:h-12',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
  };

  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 focus:outline-none select-none ${className}`}
      aria-label="Santoshi Metal Industries Private Limited Home"
    >
      {/* Official 3D Metallic Emblem Mark */}
      <div
        className={`relative ${emblemSizes[size]} shrink-0 rounded-xl bg-white p-0.5 shadow-subtle border border-slate-100/80 transition-all duration-300 group-hover:scale-105 group-hover:shadow-copper group-hover:border-brand-copper/30 flex items-center justify-center overflow-hidden`}
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/logo-mark.jpg"
            alt="Santoshi Metal Industries 3D Emblem"
            fill
            sizes="64px"
            className="object-contain mix-blend-multiply"
            priority
          />
        </div>
      </div>

      {/* Official Typography Lockup matching the brand design */}
      <div className="flex items-center">
        <span className="font-heading font-extrabold tracking-tight text-lg sm:text-xl text-brand-navy leading-none transition-colors group-hover:text-brand-blue">
          SANTOSHI
        </span>
      </div>
    </Link>
  );
}
