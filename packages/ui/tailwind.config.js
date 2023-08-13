/** @type {import('tailwindcss').Config} */
export default {
  content: ["../ui/**/*.{vue,ts,html}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          // '"Open Sans"',
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      textColor: ({ colors }) => ({
        "on-color": colors.white,
        default: "rgb(var(--ui-color-text) / <alpha-value>)",
        subdued: "rgb(var(--ui-color-text-subdued) / <alpha-value>)",
      }),
      borderColor: ({ colors }) => ({
        DEFAULT: "rgb(var(--ui-color-border) / <alpha-value>)",
      }),
      backgroundColor: {
        default: "rgb(var(--ui-color-bg-default) / <alpha-value>)",
        "default-hover":
          "rgb(var(--ui-color-bg-default-hover) / <alpha-value>)",
        surface: "rgb(var(--ui-color-bg-surface) / <alpha-value>)",
        "surface-hover":
          "rgb(var(--ui-color-bg-surface-hover) / <alpha-value>)",
      },

      colors: ({ colors }) => ({
        info: "rgb(var(--ui-color-info) / <alpha-value>)",
        "info-subdued": "rgb(var(--ui-color-info-subdued) / <alpha-value>)",

        success: "rgb(var(--ui-color-success) / <alpha-value>)",
        "success-subdued":
          "rgb(var(--ui-color-success-subdued) / <alpha-value>)",

        warning: "rgb(var(--ui-color-warning) / <alpha-value>)",
        "warning-subdued":
          "rgb(var(--ui-color-warning-subdued) / <alpha-value>)",

        critical: "rgb(var(--ui-color-critical) / <alpha-value>)",
        "critical-subdued":
          "rgb(var(--ui-color-critical-subdued) / <alpha-value>)",

        // primary: {
        //   50: "rgb(var(--ui-color-primary-50) / <alpha-value>)",
        //   100: "rgb(var(--ui-color-primary-100) / <alpha-value>)",
        //   200: "rgb(var(--ui-color-primary-200) / <alpha-value>)",
        //   300: "rgb(var(--ui-color-primary-300) / <alpha-value>)",
        //   400: "rgb(var(--ui-color-primary-400) / <alpha-value>)",
        //   500: "rgb(var(--ui-color-primary-500) / <alpha-value>)",
        //   600: "rgb(var(--ui-color-primary-600) / <alpha-value>)",
        //   700: "rgb(var(--ui-color-primary-700) / <alpha-value>)",
        //   800: "rgb(var(--ui-color-primary-800) / <alpha-value>)",
        //   900: "rgb(var(--ui-color-primary-900) / <alpha-value>)",
        //   950: "rgb(var(--ui-color-primary-950) / <alpha-value>)",
        // },
      }),
    },
  },
  plugins: [],
};
