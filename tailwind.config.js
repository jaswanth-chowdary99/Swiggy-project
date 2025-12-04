export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        swiggy: {
          orange: '#FC8019',
          dark: '#02060C',
          gray: '#686B78',
          light: '#F0F0F5'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
};
