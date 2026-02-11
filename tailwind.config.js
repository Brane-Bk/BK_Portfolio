/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyber: {
          light: "#00f2ff",
          DEFAULT: "#00d4ff",
          dark: "#0088ff",
          bg: "#020617",
        },
      },
    },
  },
  plugins: [],
};
