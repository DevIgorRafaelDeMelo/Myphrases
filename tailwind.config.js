/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-mobile": "url('./src/img/BGmobile.jpeg')",
        "login-desktop": "url('./src/img/BGdescktop.webp')",
      },
      backgroundColor: {
        trans: " rgba(231, 231, 231, 0.281);",
      },
      width: {
        1000: "100%",
      },
    },
  },
  plugins: [],
};
