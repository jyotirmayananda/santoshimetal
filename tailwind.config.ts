import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#FFFFFF',
          ice: '#F4F7FA',
          'ice-subtle': '#F8FAFC',
          silver: '#DCE4EC',
          'silver-light': '#EDF2F7',
          border: '#E2E8F0',
          navy: '#123B68',
          'navy-dark': '#0B223D',
          blue: '#2878C8',
          'blue-light': '#EBF3FC',
          'blue-hover': '#1E64A8',
          text: '#172B4D',
          'text-secondary': '#64748B',
          'text-muted': '#94A3B8',
          // Luminous metallic accents inspired by official logo
          copper: '#EA6B1E',
          'copper-glow': '#FF8A3D',
          'copper-light': '#FFF3EB',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.14em',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(18, 59, 104, 0.04), 0 1px 2px -1px rgba(18, 59, 104, 0.04)',
        'premium': '0 10px 30px -5px rgba(18, 59, 104, 0.08), 0 4px 6px -2px rgba(18, 59, 104, 0.03)',
        'elevated': '0 20px 45px -10px rgba(18, 59, 104, 0.12), 0 8px 12px -4px rgba(18, 59, 104, 0.04)',
        'metallic': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.9), 0 8px 24px -4px rgba(40, 120, 200, 0.15)',
        'copper': '0 8px 24px -4px rgba(234, 107, 30, 0.25)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
