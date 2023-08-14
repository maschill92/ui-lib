import type { Meta, StoryObj } from "@storybook/vue3";

import UIButton from "./UiButton.vue";
import { h } from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Example/Button",
  component: UIButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],

  render(args, { argTypes }) {
    return {
      props: Object.keys(argTypes),
      components: { UIButton },
      setup(props, { slots, attrs }) {
        return () =>
          h(UIButton, { ...props, ...attrs }, [
            Object.entries(slots).map(([slotName, slotFn]) =>
              slotFn ? slotFn() : undefined,
            ),
          ]);
      },
    };
  },
  argTypes: {
    block: { description: "Display button as a full width, block element." },
    default: { type: "string", defaultValue: "this is the value" },
  },
  args: {}, // default value
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

export const Block: Story = {
  args: {
    block: true,
  },
};
