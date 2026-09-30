/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0E0611',
        'background-secondary': '#170A1C',
        'background-card': '#1F0E25',
        'surface-elevated': '#2A1432',
        border: '#3D1B3E',
        'border-light': '#5A2A5C',
        primary: '#FDF8F6',
        secondary: '#D6B8CE',
        muted: '#93748C',
        'accent-plum': '#542A52',
        'accent-plum-light': '#7E3D7B',
        'accent-peach': '#FFB39A',
        'accent-peach-light': '#FFD1C4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-subtle': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { opacity: 0.4 },
          '100%': { opacity: 0.8 },
        },
      },
    },
  },
  plugins: [],
}
