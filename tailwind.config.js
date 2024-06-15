/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary))",
          lighter: "rgb(var(--color-primary-lighter))",
          darker: "rgb(var(--color-primary-darker))",
          darkest: "rgb(var(--color-primary-darkest))",
        },

        secondary: {
          DEFAULT: "rgb(var(--color-secondary))",
          lighter: "rgb(var(--color-secondary-lighter))",
          darker: "rgb(var(--color-secondary-darker))",
        },

        black: "rgb(var(--color-black))",
        dark: "rgb(var(--color-dark))",
        light: "rgb(var(--color-light))",
        muted: "rgb(var(--color-muted))",
      },
      borderRadius: {
        DEFAULT: "1rem",
      },
      transitionDuration: {
        DEFAULT: "0.5s",
      },
    },
  },
  plugins: [],
};
