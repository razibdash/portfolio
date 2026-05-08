import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './mdx-components.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'Poppins', 'Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        ink: 'rgb(var(--ink) / <alpha-value>)',
        paper: 'rgb(var(--paper) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a'
        }
      },
      boxShadow: {
        soft: '0 24px 80px -32px rgba(15, 23, 42, 0.28)',
        glow: '0 0 80px rgba(37, 99, 235, 0.18)'
      },
      animation: {
        aurora: 'aurora 18s ease-in-out infinite alternate',
        float: 'float 12s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite'
      },
      keyframes: {
        aurora: {
          '0%': { transform: 'translate3d(-8%, -4%, 0) scale(1)' },
          '50%': { transform: 'translate3d(6%, 4%, 0) scale(1.08)' },
          '100%': { transform: 'translate3d(4%, -6%, 0) scale(1.02)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' }
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      }
    }
  },
  plugins: [typography]
};

export default config;
