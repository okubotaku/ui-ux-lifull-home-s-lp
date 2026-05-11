/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lifull: {
          DEFAULT: "#ED6103",
          hover: "#D95703",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.09)",
        glow: "0 24px 80px rgba(237, 97, 3, 0.22)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "Noto Sans JP",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
