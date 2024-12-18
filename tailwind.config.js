/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'header-color': '#2E1A47',
        'header-color_btn': '#6e57e0',
        'deep-purple': '#2E1A47',
        'turqoise': '#40E0D0',
        'body-color': '#504d71',
        'black-900_02': '#020100',
        'red_a700_99': '#ff0a0a99',
        'red_a700_01': '#FF0404',
        'blue-gray_100_19': '#d9d9d919'
    },

      backgroundImage: {
        'hero-pattern': "url('./media/Landing page.JPG'), linear-gradient(to bottom, rgba(2, 1, 0, 0.8), rgba(5, 3, 0, 0.3))",
        'games-pattern': "url('./media/OBSKLD0.jpg')"
      },

      keyframes: {
        imgFloat: {
          '50%': {transform: 'translateY(10px)'}
        }
      },

      animation: {
        'moving': 'imgFloat 7s ease-in-out infinite'
      }
  },
  plugins: [],
}
}
