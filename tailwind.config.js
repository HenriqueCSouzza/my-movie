/** @type {import('tailwindcss').Config} */
import gradeColor from "./src/theme/grade-color";
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        trending: 'url("/images/trending-bg.svg")',
      },
      backgroundColor: gradeColor,
      borderColor: gradeColor,

      maxWidth: {
        maxPrimaryPageWidth: "1400px",
      },
    },
  },
  plugins: [],
};
