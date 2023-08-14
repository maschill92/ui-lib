import "../src/index.css";
import type { Preview } from "@storybook/vue3";
import { withThemeByClassName } from "@storybook/addon-styling";

export const decorators = [
  withThemeByClassName({
    themes: {
      Light: "",
      Dark: "dark",
    },
    defaultTheme: "Light",
    parentSelector: "html",
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
