import type { StoryObj, Meta } from "@storybook/react";
import { Label } from "../../../components/forms/label";

const meta = {
    title: 'Forms/Label',
    component: Label,
    parameters: {
        layout: 'centered',
    },
    args: {
      children: "Label Content"
    },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};