/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./home.html",
    "./login.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "2xl": "1440px",
    },
  },
  plugins: {
    daisyui: {},
  },
};
