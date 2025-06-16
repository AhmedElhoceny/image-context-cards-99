/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A6CF7',
          50: '#F0F4FF',
          100: '#E6EFFF',
          500: '#4A6CF7',
          600: '#3B5CE6',
          700: '#2C4CD5',
          800: '#1D3CC4',
          900: '#0E2CB3'
        },
        health: {
          blue: '#4A6CF7',
          lightBlue: '#E6EFFF',
          darkBlue: '#2C4CD5',
          gray: '#6B7280',
          lightGray: '#F3F4F6',
          success: '#10B981',
          warning: '#F59E0B',
          danger: '#EF4444'
        }
      },
      backgroundImage: {
        'gradient-health': 'linear-gradient(135deg, #4A6CF7 0%, #E6EFFF 100%)',
        'gradient-card': 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)'
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'scale-in': {
          '0%': {
            transform: 'scale(0.95)',
            opacity: '0'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'scale-in': 'scale-in 0.2s ease-out'
      }
    },
  },
  plugins: [],
}