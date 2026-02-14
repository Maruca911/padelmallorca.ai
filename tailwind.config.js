/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f9f0',
          100: '#dbf0db',
          200: '#b8e0b8',
          300: '#86c986',
          400: '#52ab52',
          500: '#228B22',
          600: '#1a7a1a',
          700: '#166316',
          800: '#144f14',
          900: '#114111',
        },
        earth: {
          50: '#faf6f1',
          100: '#f0e6d8',
          200: '#e0ccb0',
          300: '#cba97d',
          400: '#b5874e',
          500: '#8B4513',
          600: '#7a3c11',
          700: '#653210',
          800: '#52290e',
          900: '#43220c',
        },
        sand: {
          50: '#fdfcf9',
          100: '#f9f5ed',
          200: '#f2ead8',
          300: '#e8d9b8',
          400: '#d9c290',
          500: '#c4a86a',
          600: '#a98c4e',
          700: '#8a7140',
          800: '#6e5a35',
          900: '#5a4a2e',
        },
        mint: {
          50: '#f5fdf5',
          100: '#e8fbe8',
          200: '#ccf5cc',
          300: '#90EE90',
          400: '#66e066',
          500: '#3dd43d',
          600: '#2ab82a',
          700: '#229922',
          800: '#1c7c1c',
          900: '#176517',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
