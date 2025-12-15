/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#8B5CF6",   // purple (main brand)
          secondary: "#F472B6", // pink
          accent: "#6366F1",    // indigo
        },
      },
    },
  },
  plugins: [],
};
