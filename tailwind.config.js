/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F29F05",
        black: "#363636",
        coreblack: "#000000",
        gray: "#cfcfcf",
        base: "#f2f5f8",
        slate: "#838485",
      },
      backgroundImage: {
        hero: "url(assets/images/herobg.png)",
      },
      boxShadow: {
        xl: "0px -1px 30px 4px rgba(0,0,0,0.05)",
        lg: "-1px 15px 26px -4px rgba(161,151,151,0.15)",
        ms: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
      },
      keyframes: {
        bgLine: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        fadeInOut: {
          "0%": {
            opacity: 0,
            transform: "translateY(100px)",
          },
          "20%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "80%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(-100px)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(100px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        fadeOut: {
          "0%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(-100px)",
          },
        },
        skew: {
          "0%": {
            transform: "scaleY(0)",
          },
          "100%": {
            transform: "scaleY(1)",
          },
        },
        boxAnimation: {
          "0%": {
            transform: "translateX(-140px) scaleX(0)",
          },
          "50%": {
            transform: "translateX(140px) scaleX(1)",
          },

          "100%": {
            transform: "translateX(-140px) scaleX(0)",
          },
        },
        boxAnimationText: {
          "0%": {
            transform: "translateX(-140px)",
            opacity: 0,
          },
          "50%": {
            transform: "translateX(140px)",
            opacity: 0,
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0) ",
          },
        },
        spin2: {
          "0%": {
            transform: "translate(-50%, -50%) rotate(0)",
          },
          "100%": {
            transform: " translate(-50%, -50%) rotate(1turn)",
          },
        },
      },
      animation: {
        fadeIn1: "fadeIn 400ms ease-in-out",
        fadeIn2: "fadeIn 800ms ease-in-out",
        fadeIn3: "fadeIn 1200ms ease-in-out",
        fadeOut: "fadeOut 400ms ",
        bgLine: "bgLine 8s linear infinite",
        fadeInOut1: "fadeInOut 500ms ease-in-out ",
        fadeInOut2: "fadeInOut 1000ms ease-in-out",
        fadeInOut3: "fadeInOut 1500ms ease-in-out",
        spin2: "spin2 10s linear infinite",
        skew: "skew 300ms ease-in-out",
        box: "boxAnimation 1500ms ease-in-out",
        boxText: "boxAnimationText 1500ms ease-in-out",
      },
    },
  },
  plugins: [],
};
