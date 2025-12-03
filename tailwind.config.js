/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // 1. Setting Container Otomatis (Biar gak capek nulis mx-auto px-4 terus)
    container: {
      center: true,    // Otomatis rata tengah (mx-auto)
      padding: {
        DEFAULT: '1rem', // Padding kiri-kanan default (px-4)
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {
      colors: {
        // ... (Warna Kopi Mas yang kemarin tetap disini) ...
        primary: {
          50: '#F9F5F0',
          100: '#F0E6D9',
          200: '#DFC8B0',
          300: '#CBA886',
          400: '#A98060',
          500: '#8C6239',
          600: '#704E2E',
          700: '#563C23',
          800: '#3E2B19',
          900: '#2A1D11',
        },
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'], 
        body: ['Inter', 'sans-serif'],    
      },
      // ...
    },
  },
  plugins: [],
}