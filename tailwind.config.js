module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{js, jsx, ts, tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#f2f2f2',
        'secondary-color': '#00c6cf',
        'accent-color': '#7fd1ae',
        'dark-color': '#474554'
      },

      fontFamily: {
        'nunito':['Nunito', 'sans-serif'],
      },

    },
  },
  plugins: [],
}
