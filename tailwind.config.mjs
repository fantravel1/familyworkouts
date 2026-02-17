/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary Colors (Energetic & Welcoming)
        sunshine: '#FFD93D',
        coral: '#FF6B6B',
        ocean: '#4ECDC4',
        forest: '#2ECC71',
        purple: '#9B59B6',
        // Neutrals
        navy: '#1A1A2E',
        'soft-gray': '#6B7280',
        cloud: '#F8FAFC',
      },
      fontFamily: {
        display: ['Inter var', 'system-ui', 'sans-serif'],
        body: ['Inter var', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(2.5rem, 2rem + 3vw, 4.5rem)',
        '4xl': 'clamp(2.25rem, 1.75rem + 2.5vw, 3.5rem)',
        '3xl': 'clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem)',
        '2xl': 'clamp(1.5rem, 1.25rem + 1.25vw, 2rem)',
        'xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
      },
      spacing: {
        'touch': '2.75rem', // 44px minimum touch target
      },
      backgroundImage: {
        'gradient-sunrise': 'linear-gradient(135deg, #FFD93D 0%, #FF6B6B 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)',
        'gradient-playful': 'linear-gradient(135deg, #9B59B6 0%, #FF6B6B 100%)',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-success': 'pulse-success 0.5s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'pop-in': 'pop-in 0.4s ease-out forwards',
        'slide-up': 'slide-up 0.5s ease-out forwards',
      },
      keyframes: {
        'pulse-success': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-3deg)' },
          '75%': { transform: 'rotate(3deg)' },
        },
        'pop-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
