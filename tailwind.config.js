/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cs-dark': '#abb2dd',
        'cs-blue': '#00d9ff',
        'cs-purple': '#b026ff',
        'cs-green': '#00ff88',
        'cs-yellow': '#ffd700',
      },
      fontFamily: {
        'mono': ['Courier New', 'monospace'],
        'code': ['Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

