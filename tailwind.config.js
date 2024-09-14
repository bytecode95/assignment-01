/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#0D1A3E',
          400: '#1C9BDD',
          150: '#0C89CA',
        },
        yellow: {
          100: '#FFC327',
          200: '#EFBF04',
        },
        red: {
          100: '#FF5656',
          200: '#FF2D2D',
          300: '#FF6767',
          400: '#FFBEBE',
          500: '#FFBDBD',
        },
        green: {
          100: '#62D9E2',
          200: '#CAD84A',
        },
      },
    },
  },
  plugins: [],
};
