/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"], 
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',   // Biru yang cerah dan modern
        secondary: '#FACC15', // Kuning keemasan yang menonjol
        accent: '#14B8A6',    // Hijau toska untuk elemen pendukung
        neutral: '#1E293B',   // Abu gelap untuk elemen netral
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
        display: ['Merriweather', 'serif'], 
      },
    },
  },
  plugins: [],
}

