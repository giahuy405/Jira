module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://colorlib.com/etc/lf/Login_v16/images/bg-01.jpg')",
      },
      colors: {
        'primary-dark': '#101010',
        'secondary-dark': '#1E1E1E',
        'third-dark': '#2D2D2D',
        'four-dark': '#29314b',
      },
    },
  },
  plugins: [],
  darkMode:'class'
}