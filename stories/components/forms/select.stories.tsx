import type { StoryObj, Meta } from "@storybook/react";
import { Select } from "../../../src/components/forms/select";

const meta = {
    title: 'Forms/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    args: {
      uid: "Select1",
      children: [
        <option key="0" value=""></option>,
        <option key="1" value="1">Option 1</option>,
        <option key="2" value="2">Option 2</option>,
        <option key="3" value="3">Option 3</option>,
      ],
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};