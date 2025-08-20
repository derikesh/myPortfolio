/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        clash: ['var(--font-clash)', 'sans-serif'], 
        grotesk: ['var(--font-grotesk-sans)', 'sans-serif'], 
        karantina:['var(--font-karantina-sans)','sans-serif']
      }
    },
  },
  plugins: [],
}