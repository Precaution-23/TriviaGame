module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "next-hub" : {'min': '1280px', 'max': '1280px'},
        "ipad-pro" : {'min': '1024px', 'max': '1024px'},
        "ipad" : {'min': '768px', 'max': '1023px'},
        "mid" : {'min': '576px', 'max': '767px'},
        "small" : {'min': '100px', 'max': '575px'},
      }
    },
  },
  plugins: [],
}
