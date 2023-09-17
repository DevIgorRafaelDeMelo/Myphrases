/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
