export default {
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001F",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        ovo: ["var(--font-ovo)", "serif"],
      },
      boxShadow: {
        'black' : '4px 4px 0 #000',
        'white' : '4px 4px 0 #fff'
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200, 1fr))'
      }
    },
  },
  darkMode: 'selector',
  plugins: []
};