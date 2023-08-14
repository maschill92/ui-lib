import type { Meta, StoryObj } from "@storybook/vue3";

import UIButton from "./UiButton.vue";
import AlertCircleOutline from "../icons/AlertCircleOutline";
import { h } from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Button",
  component: UIButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    block: { description: "Display button as a full width, block element." },
    default: { description: "Main button text" },
    prepend: { description: "Slot at the start of the component 12345" },
    append: { description: "Slot at the end of the component" },
  },
  args: {
    default: "Button",
  }, // default value
} satisfies Meta<typeof UIButton>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {},
};

export const WithIcon: Story = {
  name: "With Icons",
  args: {
    prepend: () => h(AlertCircleOutline),
  },
};

export const Block: Story = {
  args: {
    block: true,
    default: "Full Block Button",
  },
};
