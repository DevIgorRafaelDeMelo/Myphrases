/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cardone: "url('./src/img/card-one.jpg')",
        slade: "url('./src/img/slide-1-1.jpg')",
        cardtwo: "url('./src/img/card-two.jpg')",
        cardtree: "url('./src/img/card-tree.jpg')",
        shopone: "url('./src/img/shop-one.jpg')",
        shoptwo: "url('./src/img/shop-two.jpg')",
        shoptree: "url('./src/img/shop-tree.jpg')",
        shopfour: "url('./src/img/shop-four.jpg')",
        shopfive: "url('./src/img/shop-five.jpg')",
        shopsix: "url('./src/img/shop-six.jpg')",
        shopseven: "url('./src/img/shop-seven.jpg')",
        shopeight: "url('./src/img/shop-eight.jpg')",
        shopnine: "url('./src/img/shop-nine.jpg')",
        Bannerone: "url('./src/img/banner0one.jpg')",
        Bannertwo: "url('./src/img/banner-two.jpg')",
        Bannertree: "url('./src/img/banner-tree.jpg')",
      },
      backgroundColor: {
        trans: "rgba(0, 125, 251, 0.734);",
      },
      height: {
        500: "500px",
        203: "253px",
        458: "458px",
        100: "100px",
      },
      width: {
        298: "358px",
        20: "24%",
        100: "100px",
        170: "170px",
      },
    },
  },
  plugins: [],
};
