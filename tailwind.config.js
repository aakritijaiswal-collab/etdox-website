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
          surface: '#FBFBFC',
          light: '#F8F9FA',
          border: '#E5E7EB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'chili-glow': '0 0 25px -5px rgba(205, 28, 24, 0.3)',
        'coral-glow': '0 0 25px -5px rgba(255, 168, 150, 0.3)',
        'card-subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
