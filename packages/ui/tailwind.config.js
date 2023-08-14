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
        primary: colors.blue[500],

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
      }),
    },
  },
  plugins: [],
};
