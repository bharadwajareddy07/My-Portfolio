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
        background: '#070B14',
        'background-secondary': '#0D1321',
        'background-card': '#111827',
        'surface-elevated': '#162032',
        border: '#1E293B',
        'border-light': '#334155',
        primary: '#F8FAFC',
        secondary: '#94A3B8',
        'accent-blue': '#2F6BFF',
        'accent-cyan': '#00D4FF',
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
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 0%, rgba(47, 107, 255, 0.12), transparent 50%)',
        'radial-gradient-cyan': 'radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.08), transparent 40%)',
      }
    },
  },
  plugins: [],
}
