/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        "2500" : "2500ms",
        "3000" : "3000ms",
        "4000" : "4000ms",
        "5000" : "5000ms"
      },
      height: {
        '0.1': '1px',
        '0.2': '2px',
      }
    },
    colors: {

      //Modo Oscuro:

      "fondo": "#011631",
      "black": "#000000",
      "white": "#FFFFFF",
      "lila": "rgba(126, 122, 172, 0.9)",
      "violeta": "rgba(52, 48, 98, 0.94)",
      "gradiante1": "#0c1a43",
      "gradiante2": "#3b1993",
      "gradiante3": "#7b1dfd",
      "gradiante4": "#824ACF",
      "gray": "#D9D9D9",
      "lineaNavbar": "#011631",

      //Modo claro:

      "Lfondo": "#4966BC",
      "Llila": "#6F8DE4",
      "Lvioleta": "#6F8DE4",
      "Lgradiante1": "#6F8DE4",
      "Lgradiante2": "#775EB7",
      "Lgradiante3": "#7B1DFD",
      "Lgradiante4": "#824ACF",
      "LlineaNavbar": "rgba(1, 22, 49, 0.69)",
    },
    screens: {
      "s":"320px",
      "m":"375px",
      "l":"425px",

      'sm': {'max': '640px'},
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '2560px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
  ],
}
