/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#FF8438',
          hover: '#e87228',
          light: '#FFF4ED',
          border: '#FFD6BE',
          dark: '#c95914',
        },
        dark: {
          DEFAULT: '#171717',
          card: '#222222',
          surface: '#1c1c1c',
          border: 'rgba(255, 255, 255, 0.1)',
        },
        charcoal: '#202020',
        muted: '#6B7280',
      },
      boxShadow: {
        'card': '0 2px 12px -2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 12px 28px -4px rgba(255, 132, 56, 0.15)',
        'orange-glow': '0 0 40px rgba(255, 132, 56, 0.25)',
      },
    },
  },
  plugins: [],
}
