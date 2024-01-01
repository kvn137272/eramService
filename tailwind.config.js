/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.{js,vue,ts}", "./pages/**/*.vue", "./app.vue"],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        black:"#090100",
        whiteColor:{
          50:"#E7E7E7",
          100:"#FAFAFA"
        },
        blueColor: {
          100: "#F5F5F7",
          200:"#F6F6F6",
          500: "#243B81",
        },
        greyColor:{
          100: "#969494",
          200:"#616161",
          300:'#DDE1EF'
        },
        primaryColor: "#181929",
      },
    },
    screens: {
      xs: "370px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
    },
    plugins:{
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};
