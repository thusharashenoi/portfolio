/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          400: '#9F7AEA',
          500: '#805AD5',
          600: '#6B46C1',
          900: '#322659',
        },
      },
      animation: {
        wave: 'wave 3s linear infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-25%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};