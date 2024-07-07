/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],

      },
      colors: {
        primary: {
          50: '#991E66',
          100: '#D5BBB1',
          200: '#9CC4B2',
          300: '#C98CA7',
          400: '#426B69',
          500: '#D2D3CD'
        }
      }
    },
  },
  plugins: [],
}