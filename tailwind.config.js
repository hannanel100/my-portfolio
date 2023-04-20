/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(-360%)", opacity: 0 },
          "25%, 75%": { left: "translatX(0%)", opacity: 1 },
          "100%": { transform: "translateX(320%)", opacity: 0 },
        },
        crash: {
          "0%": { transform: "translateX(0%)", opacity: 0 },
          "25%": {
            transform: "translateX(300%) translateY(50%) rotate(45deg)",
            opacity: 1,
          },
          "26%": { opacity: 0 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        slideRight: "slideRight 3s linear infinite",
        crash: "crash 5s linear forwards 1",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
