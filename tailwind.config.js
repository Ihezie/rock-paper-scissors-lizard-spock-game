/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
      },
      backgroundImage: {
        radialGradient:
          "radial-gradient(circle at center, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
        scissorsGradient:
          "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
        paperGradient:
          "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
        rockGradient: "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
        lizardGradient:
          "linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%))",
        cyan: "linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))",
      },
      boxShadow: {
        inner: "inset 0 4px rgba(0, 0, 0, .2)",
        outer: "0 4px currentColor",
        inner2: "inset 0 8px rgba(0, 0, 0, .2)",
        outer2: "0 10px currentColor",
      },
      animation: {
        "wave-1": "waves 3s linear infinite .1s",
        "wave-2": "waves 3s linear infinite .7s",
        "wave-3": "waves 3s linear infinite 1.3s",
        "wave-4": "waves 3s linear infinite 1.9s",
      },
      keyframes: {
        waves: {
          from: {
            transform: "scale(1)",
            opacity: "1",
          },
          to: {
            transform: "scale(4)",
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
};
