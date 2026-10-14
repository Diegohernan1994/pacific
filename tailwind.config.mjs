/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1D2127',
          black: '#121212',
          charcoal: '#212529',
          red: '#AB0000',
          redHover: '#DE0000',
          slate: '#383F48',
          body: '#424242',
          muted: '#71717A',
          surface: '#F5F4F7',
          surfaceLight: '#FAFAFA',
          border: 'rgba(0, 0, 0, 0.08)',
          borderDark: 'rgba(255, 255, 255, 0.12)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
        wide: '0.04em',
        wider: '0.08em',
      },
      boxShadow: {
        minimal: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        card: '0 10px 30px -4px rgba(0, 0, 0, 0.08)',
        float: '0 20px 40px -10px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
};
