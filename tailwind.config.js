module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
  // Ici vos couleurs exportées de Figma
      },
    },
    fontFamily: {
      "bebas":["'Bebas Neue'", 'cursive'],
      'sans': ['Inter', 'sans'],
      'serif': ['Inter', 'sans-serif'],
      'mono': ['Inter', 'sans-mono'],
      'body': ['Inter']
    }

  },
  plugins: [require('@tailwindcss/typography')],
}
