/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#f3f4f6',
        'app-bg': '#ffffff',
        'brand-primary': '#111827',
        'brand-secondary': '#4f46e5',
        'brand-text': '#1f2937',
        'brand-muted': '#6b7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'float': '0 20px 40px -10px rgba(0,0,0,0.12)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
