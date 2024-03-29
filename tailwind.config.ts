import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    borderRadius: {
      none: '0',
      px: '1px',
      '0.5': '2px',
      1: '4px',
      '1.5': '6px',
      2: '8px',
      '2.5': '10px',
      3: '12px',
      '3.5': '14px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      13: '52px',
      14: '56px',
      15: '60px',
      16: '64px',
      full: '9999px',
    },
    boxShadow: {
      none: 'none',
      'btn-light': '0px 0px 12px 4px rgba(0, 0, 0, 0.05)',
      'btn-dark': '0px 0px 12px 4px rgba(255, 255, 255, 0.05)',
      'btn-md-light': '0px 0px 12px 4px rgba(0, 0, 0, 0.20)',
      'btn-md-dark': '0px 0px 12px 4px rgba(255, 255, 255, 0.20)',
      'card-light': '0px 0px 12px 8px rgba(0, 0, 0, 0.05)',
      'card-dark': '0px 0px 12px 8px rgba(255, 255, 255, 0.05)',
      'card-md-light': '0px 0px 16px 8px rgba(0, 0, 0, 0.09)',
      'card-md-dark': '0px 0px 16px 8px rgba(255, 255, 255, 0.09)',
    },
    colors: {
      transparent: 'transparent',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      secondary: {
        foreground: 'hsl(var(--secondary-foreground))',
      },
      muted: {
        foreground: 'hsl(var(--muted-foreground))',
      },
      accent: 'hsl(var(--accent))',
      border: 'hsl(var(--border))',
      ring: 'hsl(var(--ring))',
      destructive: {
        DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
        foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        border: 'hsl(var(--destructive-border) / <alpha-value>)',
      },
      warning: {
        DEFAULT: 'hsl(var(--warning) / <alpha-value>)',
        foreground: 'hsl(var(--warning-foreground) / <alpha-value>)',
        border: 'hsl(var(--warning-border) / <alpha-value>)',
      },
      success: {
        DEFAULT: 'hsl(var(--success) / <alpha-value>)',
        foreground: 'hsl(var(--success-foreground) / <alpha-value>)',
        border: 'hsl(var(--success-border) / <alpha-value>)',
      },
    },
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
      display: ['var(--font-inter-display)', 'sans-serif'],
    },
    fontSize: {
      3: ['12px', '20px'],
      3.5: ['14px', '24px'],
      4: ['16px', '28px'],
      4.5: ['18px', '32px'],
      5: ['20px', '36px'],
      5.5: ['22px', '36px'],
      6: ['24px', '40px'],
      7: ['28px', '44px'],
      8: ['32px', '44px'],
      9: ['36px', '48px'],
      10: ['40px', '52px'],
      11: ['44px', '56px'],
      12: ['48px', '60px'],
      16: ['64px', '88px'],
    },
    lineHeight: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      13: '52px',
      14: '56px',
      15: '60px',
      16: '64px',
      17: '68px',
      18: '72px',
      19: '76px',
      20: '80px',
    },
    screens: {
      '3xs': '300px',
      '2xs': '360px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '840px',
      xl: '1024px',
      '2xl': '1280px',
      '3xl': '1400px',
      '4xl': '1600px',
      '5xl': '1800px',
    },
    extend: {
      animation: {
        'scale-in': 'scale-in 0.2s ease',
        'scale-out': 'scale-out 0.2s ease',
        'fade-in': 'fade-in 200ms ease',
        'fade-out': 'fade-out 200ms ease',
      },
      backgroundImage: {
        'light-text-gradient':
          'linear-gradient(90deg, #616974 0%, #07080C 50%, #616974 100%)',
        'light-border-gradient':
          'linear-gradient(45deg, #C5CAD1 0%, #202225 50%, #C5CAD1 100%)',
        'light-button-gradient':
          'linear-gradient(180deg, #F7F7F7 0%, #F7F7F7 50%, #E2DEDE 100%)',
        'light-contact-gradient':
          'linear-gradient(180deg, #F2F2F2 0%, #F7F7F7 100%)',
        'light-card-bottom-gradient':
          'linear-gradient(180deg, rgba(230, 230, 230, 0.00) 0%, rgba(230, 230, 230, 0.00) 50%, #E6E6E6 100%)',
        'dark-text-gradient':
          'linear-gradient(90deg, #808A98 0%, #F7F7F7 50%, #808A98 100%)',
        'dark-border-gradient':
          'linear-gradient(45deg, #232528 0%, #CBD2DC 50%, #232528 100%)',
        'dark-button-gradient':
          'linear-gradient(180deg, #0F0F0F 0%, #0F0F0F 50%, #2F2F2F 100%)',
        'dark-contact-gradient':
          'linear-gradient(180deg, #0F0F0F 0%, #07080C 100%)',
        'dark-card-bottom-gradient':
          'linear-gradient(180deg, rgba(30, 30, 31, 0.00) 0%, rgba(30, 30, 31, 0.00) 50%, #1E1E1F 100%)',
      },
      keyframes: {
        'scale-in': {
          from: { opacity: '0', transform: 'rotateX(-10deg) scale(0.9)' },
          to: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
        },
        'scale-out': {
          from: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
          to: { opacity: '0', transform: 'rotateX(-10deg) scale(0.95)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-out': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
      },
      spacing: {
        5.5: '22px',
        18: '72px',
        21: '84px',
        25: '100px',
        30: '120px',
        34: '136px',
        36: '144px',
        49: '196px',
        50: '200px',
      },
    },
  },
  plugins: ['prettier-plugin-tailwind', require('tailwindcss-animate')],
};
export default config;
