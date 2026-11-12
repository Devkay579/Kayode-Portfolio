/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      // The existing palette, named so it can be used consistently.
      colors: {
        paper: { DEFAULT: '#F5F2E8', deep: '#E8E2D5', cream: '#FDF8E7' },
        ink: { DEFAULT: '#2D2D2D', soft: '#4A4A4A', muted: '#6B6B6B', faint: '#8B8B8B' },
        forest: { DEFAULT: '#2C5F4A', dark: '#1E4A3A' },
      },
      maxWidth: {
        page: '72rem',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px #8B5CF6' },
          '50%': { boxShadow: '0 0 40px #00F5FF' },
        },
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.1)' },
          '66%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
