/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F3D2B',
        darkgreen: '#13261C',
        gold: '#B88A2B',
        softgold: '#D4AF37'
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 30px -18px rgba(15, 23, 42, 0.45)'
      }
    },
  },
  plugins: [],
}
