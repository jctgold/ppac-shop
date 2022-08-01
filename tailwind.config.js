/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-slide': "url('/images/home-main.jpg')",
      },
      translate: {
        'neg-1/2': '-50%',
      },
      aspectRatio: {
        '3/4': '3 / 4',
      },
    },
  },
  plugins: [],
};
