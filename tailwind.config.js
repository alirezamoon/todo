/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        olive: {
          main: "#907c74",
        },
      },
      keyframes: {
        addTodo: {
          "0%": { opacity: 0, transform: "translateX(-500px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        opacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        addTodo: "addTodo 500ms ease-in-out",
        opacity: "opacity 500ms ease-in-out",
      },
    },
  },
  plugins: [],
}
