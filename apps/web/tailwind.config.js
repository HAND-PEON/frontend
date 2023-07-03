/** @type {import('tailwindcss').Config} */
const sharedConfig = require('tailwind-config/tailwind.config.js');

module.exports = {
  presets: [sharedConfig],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main1: '#1E1C1C',
        gold: '#ffd700',
      },
      fontSize: {
        xl2: '22px',
        '15px': '15px',
      },
      width: {
        '1px': '1px',
        '3px': '3px',
        '7px': '7px',
      },
      spacing: {
        '2px': '2px',
        '4px': '4px',
        '7px': '7px',
        '5px': '5px',
        '9px': '9px',
        '10px': '10px',
        '15px': '15px',
        '17px': '17px',
        '21px': '21px',
        '40px': '40px',
      },
    },
  },
  safelist: ['bg-[#73F69D]', 'bg-[#E2F981]', 'bg-[#FFA8A5]', 'bg-[#C29DF6]'],
  plugins: [],
};
