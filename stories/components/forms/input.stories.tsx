import type { StoryObj, Meta } from "@storybook/react";
import { Input } from "../../../src/components/forms/input";

const meta = {
    title: 'Forms/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    args: {
      uid: "Input1",
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};