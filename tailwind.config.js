module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Clash Display"'],
        sans: ["Inter"],
        mono: ["'JetBrains Mono'"],
      },
      height: {
        "screen-1/3": "33vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss"],
};
