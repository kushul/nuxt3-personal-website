/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  purge: {
    enabled: false,
    // content: ['./src/**/*.html'],
  },
  theme: {
    darkSelector: '.dark-mode',
    fontFamily: {
      display: ['Nunito', 'sans-serif'],
    },
    screens: {
      sm: "640px",
      md: "769px",
      lg: "1024px",
      xl: "1280px"
    },
    colors: {
      black: "#000",
      white: "#fff",
      background: {
        'primary': 'var(--bg-background-primary)',
        'secondary': 'var(--bg-background-secondary)',
        'invert': 'var(--bg-background-invert)',
      },
      copy: {
        'primary': 'var(--text-copy-primary)',
        'secondary': 'var(--text-copy-secondary)',
        'invert': 'var(--text-copy-invert)',
        'invert': 'var(--border-copy-invert)',
      },
      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c"
      },
      red: {
        100: "#fff5f5",
        200: "#fed7d7",
        300: "#feb2b2",
        400: "#fc8181",
        500: "#f56565",
        600: "#e53e3e",
        700: "#c53030",
        800: "#9b2c2c",
        900: "#742a2a"
      },
      orange: {
        100: "#fffaf0",
        200: "#feebc8",
        300: "#fbd38d",
        400: "#f6ad55",
        500: "#ed8936",
        600: "#dd6b20",
        700: "#c05621",
        800: "#9c4221",
        900: "#7b341e"
      },
      yellow: {
        100: "#fffff0",
        200: "#fefcbf",
        300: "#faf089",
        400: "#f6e05e",
        500: "#ecc94b",
        600: "#d69e2e",
        700: "#b7791f",
        800: "#975a16",
        900: "#744210"
      },
      green: {
        100: "#f0fff4",
        200: "#c6f6d5",
        300: "#9ae6b4",
        400: "#68d391",
        500: "#48bb78",
        600: "#38a169",
        700: "#2f855a",
        800: "#276749",
        900: "#22543d"
      },
      teal: {
        100: "#e6fffa",
        200: "#b2f5ea",
        300: "#81e6d9",
        400: "#4fd1c5",
        500: "#38b2ac",
        600: "#319795",
        700: "#2c7a7b",
        800: "#285e61",
        900: "#234e52"
      },
      indigo: {
        100: "#ebf4ff",
        200: "#c3dafe",
        300: "#a3bffa",
        400: "#7f9cf5",
        500: "#667eea",
        600: "#5a67d8",
        700: "#4c51bf",
        800: "#434190",
        900: "#3c366b"
      },
      purple: {
        100: "#faf5ff",
        200: "#e9d8fd",
        300: "#d6bcfa",
        400: "#b794f4",
        500: "#9f7aea",
        600: "#805ad5",
        700: "#6b46c1",
        800: "#553c9a",
        900: "#44337a"
      },
      lexpress: {
        100: "#fff5f7",
        200: "#fed7e2",
        300: "#fbb6ce",
        400: "#f687b3",
        500: "#ed64a6",
        600: "#d53f8c",
        700: "#b83280",
        800: "#97266d",
        900: "#702459"
      },
      blue: {
        100: "#E6EDF4",
        200: "#BFD2E3",
        300: "#99B7D2",
        400: "#4D80B1",
        500: "#004A8F",
        600: "#004381",
        700: "#002C56",
        800: "#002140",
        900: "#00162B"
      },
      pink: {
        200: "#FED7E2",
        500: "#ED64A6",
        700: "#B83280"
      }
    }
  },
  variants: {
    backgroundColor: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd"],
    borderColor: ["dark", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active"]
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ]
}
