import type { StoryObj, Meta } from "@storybook/react";
import { Radio } from "../../../src/components/forms/radio";

const meta = {
    title: 'Forms/Radio',
    component: Radio,
    parameters: {
        layout: 'centered',
    },
    render: (args) => <div style={{width:250}}><Radio {...args} /></div>,
    args: {
      uid: "Radio1",
      labelContent: "Radio button",
      isVertical: false,
    },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const Vertical: Story = {
  args: {
    isVertical: true,
  }
};