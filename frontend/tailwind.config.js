/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F1F2F4',
        surface: '#FFFFFF',
        ink: '#14171C',
        'ink-soft': '#4A505C',
        border: '#D8DBE0',
        signal: '#B8621B',
        'signal-soft': '#F3E4D3',
        live: '#1F8A4C',
        'dark-bg': '#0F1115',
        'dark-surface': '#171A20',
        'dark-ink': '#ECEDEF',
        'dark-ink-soft': '#A0A6B0',
        'dark-border': '#2A2E36',
        'dark-signal': '#E08A3C',
        'dark-signal-soft': '#2B2013',
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        prose: '760px',
        content: '900px',
      },
    },
  },
  plugins: [],
}
