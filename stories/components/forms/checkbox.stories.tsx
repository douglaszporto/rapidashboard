import type { StoryObj, Meta } from "@storybook/react";
import { Checkbox } from "../../../src/components/forms/checkbox";

const meta = {
    title: 'Forms/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    args: {
      uid:"checkbox1",
      label: "Label of Checkbox",
      isVertical: false,
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Vertical: Story = {
  args: {
    isVertical: true,
  },
};
