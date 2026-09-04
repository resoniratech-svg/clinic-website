/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1857A6',
          blueDeep: '#0E3E7D',
          blueLight: '#EAF2FC',
          red: '#D62027',
          redDeep: '#A9151B',
          redLight: '#FDEBEC',
          ink: '#24313D',
          slate: '#5B6B79',
          bg: '#F7F9FC',
          border: '#E4E9F0',
        },
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px -6px rgba(24, 87, 166, 0.15)',
        cardHover: '0 10px 32px -8px rgba(24, 87, 166, 0.25)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
