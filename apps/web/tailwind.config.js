/** @type {import('tailwindcss').Config} */
const sharedConfig = require('tailwind-config/tailwind.config.js');

module.exports = {
  presets: [sharedConfig],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: ['bg-[#73F69D]', 'bg-[#E2F981]', 'bg-[#FFA8A5]', 'bg-[#C29DF6]'],
  plugins: [],
};
