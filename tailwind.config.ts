// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        deepblue: '#1C3D5A',
        teal: '#4ECDC4',
        orange: '#FF6B35',
        lightgray: '#F0F0F0',
      },
    },
  },
  plugins: [],
}
