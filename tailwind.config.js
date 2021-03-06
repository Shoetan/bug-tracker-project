module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{js, jsx, ts, tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#f2f2f2',
        'white-color' : '#ffffff',
        'secondary-color': '#00c6cf',
        'accent-color': '#7fd1ae',
        'dark-color': '#1b1c1e'
      },

      fontFamily: {
        'nunito':['Nunito', 'sans-serif'],
      },

    },
  },
  plugins: [],
}
