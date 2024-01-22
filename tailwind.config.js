/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,tsx}'],
  presets: [require('nativewind/preset')],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        mono: 'SpaceMono',
      },
    },
  },
};
