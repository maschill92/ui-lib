import type { Meta, StoryObj } from "@storybook/vue3";

import UiBanner, { BannerTypes } from "./UiBanner.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Banner",
  component: UiBanner,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    title: { description: "Banner title" },
    type: {
      options: BannerTypes,
      control: { type: "radio" },
    },
  },
  args: {
    default: "Content for the banner",
  }, // default value
} satisfies Meta<typeof UiBanner>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    title: "Default Banner",
  },
};

export const Information: Story = {
  args: {
    title: "Information Banner",
    type: "info",
  },
};

export const Success: Story = {
  args: {
    title: "Success Banner",
    type: "success",
  },
};

export const Warning: Story = {
  args: {
    title: "Warning Banner",
    type: "warning",
  },
};

export const Critical: Story = {
  args: {
    title: "Critical Banner",
    type: "critical",
  },
};
