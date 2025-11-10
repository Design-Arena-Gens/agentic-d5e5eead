/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"]
      },
      colors: {
        dusk: {
          900: "#07040a",
          800: "#15111b",
          700: "#1d1724",
          600: "#2a1e31"
        },
        accent: {
          100: "#f6f0e9",
          200: "#e3c9a5",
          400: "#c89b5b"
        }
      },
      backgroundImage: {
        grain: "url('/textures/grain.png')",
        "sunrise-glow":
          "radial-gradient(circle at 20% 20%, rgba(248, 233, 210, 0.35), transparent 55%), radial-gradient(circle at 80% 30%, rgba(165, 125, 179, 0.4), transparent 60%)"
      },
      boxShadow: {
        frame: "0 25px 50px -12px rgba(0, 0, 0, 0.45)"
      }
    }
  },
  plugins: []
};
