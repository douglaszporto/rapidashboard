import type { StoryObj, Meta } from "@storybook/react";
import { Tabs } from "../../../components/layout/Tabs";

const meta = {
    title: 'Layout/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
    render: (args) => <div style={{width:300}}>
      <Tabs {...args} />
    </div>,
    args: {
      items: [
        {label:"Tab 1", id:"tab-1"},
        {label:"Tab 2", id:"tab-2"},
        {label:"Tab 3", id:"tab-3"}
      ],
      value: "tab-2",
      onChange: () => {}
    },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};