/** @type {import('tailwindcss').Config} */
import themeStyles from './src/lib/theme/themeStyles.json';
import containerQueries from '@tailwindcss/container-queries';

export default {
  prefix: 'sui-',
  darkMode: 'selector',
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    colors: themeStyles.colors,
    screens: themeStyles.screens,
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      boxShadow: themeStyles.boxShadows,
    },
  },

  plugins: [containerQueries],
};