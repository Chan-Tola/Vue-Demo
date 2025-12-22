// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // Map Tailwind classes to your CSS variables
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
      },
      fontFamily: {
        english: ["DM Serif Display", "serif"],
        khmer: ["Preahvihear", "sans-serif"],
      },
      // Add custom background colors
      // backgroundColor: {
      //   main: "var(--color-background)",
      //   card: "#ffffff",
      //   hover: "color-mix(in srgb, var(--color-accent) 20%, transparent)",
      // },

      // // Add custom text colors
      // textColor: {
      //   primary: "var(--color-primary)",
      //   secondary: "var(--color-secondary)",
      //   inverse: "#ffffff",
      //   muted: "#6b7280",
      // },

      // // Add custom border colors
      // borderColor: {
      //   DEFAULT: "var(--color-accent)",
      //   strong: "var(--color-secondary)",
      // },

      // // Add ring colors for focus states
      // ringColor: {
      //   DEFAULT: "var(--color-accent)",
      // },

      // fontFamily: {
      //   english: ["Inter", "sans-serif"],
      //   khmer: ["Moul", "Khmer OS", "sans-serif"],
      // },
    },
  },
  plugins: [require("flowbite/plugin")],
};
