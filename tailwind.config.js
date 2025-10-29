/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "work-sans": [
          '"Work Sans"',
          '"Google Sans"',
          '"Roboto"',
          '"Segoe UI"',
          "Tahoma",
          "Geneva",
          "Verdana",
          "sans-serif",
        ],
      },
      colors: {
        "google-blue": "#1a73e8",
        "google-gray": "#5f6368",
        "google-dark": "#202124",
        "google-light-gray": "#f8f9fa",
        "google-border": "#e8eaed",
        "google-light-blue": "#e8f0fe",
      },
      animation: {
        "slide-in-up": "slideInUp 0.8s ease-out",
        "fade-in-scale": "fadeInScale 1s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
        "fade-in": "fadeIn 0.6s ease-out",
      },
      keyframes: {
        slideInUp: {
          from: {
            opacity: "0",
            transform: "translateY(50px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInScale: {
          from: {
            opacity: "0",
            transform: "scale(0.8)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        slideIn: {
          from: {
            opacity: "0",
            transform: "translateX(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeIn: {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
