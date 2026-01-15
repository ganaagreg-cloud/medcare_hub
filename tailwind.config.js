/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'var(--color-border)', /* Light gray - slate-200 */
        input: 'var(--color-input)', /* Light gray - slate-200 */
        ring: 'var(--color-ring)', /* Deep medical blue */
        background: 'var(--color-background)', /* Soft white - gray-50 */
        foreground: 'var(--color-foreground)', /* Deep blue-gray - slate-900 */
        primary: {
          DEFAULT: 'var(--color-primary)', /* Deep medical blue */
          foreground: 'var(--color-primary-foreground)', /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* Sage green */
          foreground: 'var(--color-secondary-foreground)', /* white */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* Warm coral */
          foreground: 'var(--color-accent-foreground)', /* white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* Muted red */
          foreground: 'var(--color-destructive-foreground)', /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* Subtle blue-gray - slate-100 */
          foreground: 'var(--color-muted-foreground)', /* Medium gray - slate-600 */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* white */
          foreground: 'var(--color-card-foreground)', /* Deep blue-gray - slate-900 */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* white */
          foreground: 'var(--color-popover-foreground)', /* Deep blue-gray - slate-900 */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* Forest green */
          foreground: 'var(--color-success-foreground)', /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* Warm amber */
          foreground: 'var(--color-warning-foreground)', /* Deep blue-gray */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* Muted red */
          foreground: 'var(--color-error-foreground)', /* white */
        },
        'trust-builder': {
          DEFAULT: 'var(--color-trust-builder)', /* Professional purple - purple-600 */
          foreground: 'var(--color-trust-builder-foreground)', /* white */
        },
        conversion: {
          DEFAULT: 'var(--color-conversion)', /* Warm orange - orange-600 */
          foreground: 'var(--color-conversion-foreground)', /* white */
        },
        emergency: {
          DEFAULT: 'var(--color-emergency)', /* Emergency red - red-600 */
          foreground: 'var(--color-emergency-foreground)', /* white */
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'var(--radius-sm)',
      },
      fontFamily: {
        sans: ['Source Sans Pro', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        heading: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        accent: ['Crimson Text', 'Georgia', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      spacing: {
        '13': '3.25rem', /* 52px - fibonacci */
        '21': '5.25rem', /* 84px - fibonacci */
        '34': '8.5rem', /* 136px - fibonacci */
        '55': '13.75rem', /* 220px - fibonacci */
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(43, 90, 135, 0.08)',
        'soft-lg': '0 4px 20px rgba(43, 90, 135, 0.08)',
        'interactive': '0 4px 12px rgba(43, 90, 135, 0.15)',
        'emergency': '0 4px 20px rgba(220, 38, 38, 0.3)',
      },
      keyframes: {
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'emergency-pulse': {
          '0%, 100%': { 
            boxShadow: '0 4px 20px rgba(220, 38, 38, 0.3)',
            opacity: '0.7'
          },
          '50%': { 
            boxShadow: '0 4px 30px rgba(220, 38, 38, 0.5)',
            opacity: '1'
          },
        },
      },
      animation: {
        'slide-in-right': 'slide-in-right 300ms ease-out',
        'fade-in': 'fade-in 300ms ease-out',
        'emergency-pulse': 'emergency-pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}