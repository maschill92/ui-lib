import type { Meta, StoryObj } from "@storybook/vue3";
import { UiTab, UiTabGroup, UiTabList, UiTabPanel, UiTabPanels } from "./";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Tabs",
  component: UiTabGroup,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  render: (args) => {
    return {
      components: { UiTab, UiTabGroup, UiTabList, UiTabPanel, UiTabPanels },
      setup() {
        return { args };
      },
      template: `
    <UiTabGroup v-bind="args"  >
      <UiTabList>
        <UiTab>Tab 1</UiTab>
        <UiTab>Tab 2</UiTab>
      </UiTabList>
      <UiTabPanels>
        <UiTabPanel>Tab 1 Content</UiTabPanel>
        <UiTabPanel>Tab 2 Content</UiTabPanel>
      </UiTabPanels>
    </UiTabGroup>`,
    };
  },
  argTypes: {},
  args: {}, // default value
} satisfies Meta<typeof UiTabGroup>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {};
