/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-1': 'fade-in 1s ease-out forwards',
        'fade-in-2': 'fade-in 1s ease-out 0.5s forwards',
        'fade-in-3': 'fade-in 1s ease-out 1s forwards',
        'fade-in-4': 'fade-in 1s ease-out 1.5s forwards',
        'fade-in-5': 'fade-in 1s ease-out 1.6s forwards',
      }
    },
  },
  plugins: [],
}