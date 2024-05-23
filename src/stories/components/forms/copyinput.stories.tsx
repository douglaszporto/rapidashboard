import type { StoryObj, Meta } from "@storybook/react";
import { CopyInput } from "../../../components/forms/copyinput";

const meta = {
    title: 'Forms/CopyInput',
    component: CopyInput,
    parameters: {
        layout: 'centered',
    },
    args: {
      uid:"CopyInput1",
      copyLabel: "Copy",
      value: "https://www.google.com",
    },
} satisfies Meta<typeof CopyInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};