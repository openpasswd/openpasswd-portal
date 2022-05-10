module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito'],
        others: ['Poppins']
      },
      colors: {
        'secure-blue': '#2c6ff3',
        'secure-orange': '#e87536'
      }
    },
  },
  plugins: [],
}
