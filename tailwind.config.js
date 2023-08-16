/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cardUM: "url('./src/img/cardUm.jpg')",
        slade: "url('./src/img/slide-1-1.jpg')",
        cardDois: "url('./src/img/product-bg-1.jpg')",
        CardTreis: "url('./src/img/product-bg-1.jpg')",
      },
      height: {
        500: "500px",
        203: "203px",
      },
      width: {
        298: "358px",
      },
    },
  },
  plugins: [],
};
