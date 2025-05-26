/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans 3', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        // Light mode
        primary: {
          50: '#f0f9f1',
          100: '#dcf1df',
          200: '#bbe2c3',
          300: '#8ecca0',
          400: '#5cb177',
          500: '#3c9157',
          600: '#2b7444',
          700: '#225c38',
          800: '#1d4a2e',
          900: '#14532d',
          950: '#0b2b18',
        },
        secondary: {
          50: '#f2f0ea',
          100: '#e9e4d9',
          200: '#d8ceb9',
          300: '#c2b391',
          400: '#ac9772',
          500: '#9c8561',
          600: '#856c4f',
          700: '#6d5741',
          800: '#5a493a',
          900: '#4a3d33',
          950: '#292119',
        },
        accent: {
          50: '#f5f3ff',
          100: '#ede8ff',
          200: '#dcd5fe',
          300: '#c2b4fd',
          400: '#a487fc',
          500: '#875cf7',
          600: '#793dee',
          700: '#6926d1',
          800: '#5721af',
          900: '#491d8f',
          950: '#2e1166',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};