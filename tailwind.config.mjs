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
      },
      keyframes: {
        'pulse-success': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
