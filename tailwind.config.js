/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss}",
  ],
  safelist: [
    "shiny-text",
    "animate-shine", // Good to have, though 'shiny-text' already has the animation property
    "fade-in-up",
    "animate-brain",
    "animate-float",
    "font-bold",
    "text-7xl",
    "text-center",
  ],
  theme: {
    extend: {
      animation: {
        float: "float 5s ease-in-out infinite",
        brain: "blurFadeInUp 1.4s ease-out forwards, floatSmoothly 3s ease-in-out infinite",
        shine: "shine 3s linear infinite",
        fadeInSlow: "fadeInSlow 0.8s ease-out forwards",
        fadeInUp: "fadeInUp 1.5s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatSmoothly: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-23px)" },
          "100%": { transform: "translateY(0)" },
        },
        blurFadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
            filter: "blur(8px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },
        shine: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInSlow: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
