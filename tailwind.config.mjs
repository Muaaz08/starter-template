export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Inter", "sans-serif"],
      },
      colors: {
        "warm-gray": {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
        sage: {
          50: "#f6f7f6",
          100: "#e3e6e3",
          200: "#c7cdc7",
          300: "#a4aca4",
          400: "#7f8a7f",
          500: "#636e63",
          600: "#4f5a4f",
          700: "#424a42",
          800: "#373d37",
          900: "#2f332f",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        editorial:
          "linear-gradient(135deg, #fafaf9 0%, #f5f5f4 50%, #e7e5e4 100%)",
      },
    },
  },
  plugins: [],
};
