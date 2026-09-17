/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chili: {
          primary: '#CD1C18',
          coral: '#FFA896',
          deep: '#9B1313',
          burgundy: '#38000A',
          'burgundy-dark': '#240006',
          'burgundy-darker': '#170004',
          'burgundy-card': 'rgba(78, 6, 18, 0.55)',
          'burgundy-border': 'rgba(255, 168, 150, 0.15)',
        },
        cream: {
          DEFAULT: '#FFF9F7',
          deep: '#FFF2EC',
          soft: '#FFEDE7',
          paper: '#FFFFFF',
        },
        ink: {
          DEFAULT: '#241016',
          soft: '#4A2A31',
          muted: '#7A5A60',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'chili-glow': '0 10px 30px -12px rgba(205, 28, 24, 0.45)',
        'coral-glow': '0 10px 30px -12px rgba(255, 168, 150, 0.5)',
        'card-subtle': '0 1px 2px rgba(56, 0, 10, 0.04), 0 8px 24px -16px rgba(56, 0, 10, 0.18)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 7s ease-in-out infinite',
        'dash': 'dash 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        dash: {
          to: { strokeDashoffset: '-24' },
        },
      },
    },
  },
  plugins: [],
}
