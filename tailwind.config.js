/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#f6f3ee',
        ink: '#1d2628',
        sage: '#6c8f87',
        terracotta: '#cd6a4f',
        sky: '#b9d7e8',
        lavender: '#c8c1ee'
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        quicksand: ['Quicksand', 'sans-serif']
      },
      boxShadow: {
        card: '0 14px 40px -22px rgba(29, 38, 40, 0.45)'
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-12px) translateX(8px)' }
        }
      },
      animation: {
        drift: 'drift 8s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
