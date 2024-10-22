/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeSlideIn: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeSlideRight: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeSlideLeft: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        'fadeSlideIn': 'fadeSlideIn 0.5s ease-out forwards',
        'fadeSlideRight': 'fadeSlideRight 0.5s ease-out forwards',
        'fadeSlideLeft': 'fadeSlideLeft 0.5s ease-out forwards',
        'fadeSlideUp': 'fadeSlideUp 0.5s ease-out forwards',
        'fadeIn': 'fadeIn 0.5s ease-out forwards'
      }
    }
  },
  plugins: [],
};