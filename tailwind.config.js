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
        clash: ['var(--font-clash)', 'sans-serif'], // External font
        grotesk: ['var(--font-grotesk-sans)', 'sans-serif'], // Next.js font - ADD THIS
      }
    },
  },
  plugins: [],
}