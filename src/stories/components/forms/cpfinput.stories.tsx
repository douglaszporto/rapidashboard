import type { StoryObj, Meta } from "@storybook/react";
import { CPFInput } from "../../../components/forms/cpfinput";

const meta = {
    title: 'Forms/CPFInput',
    component: CPFInput,
    parameters: {
        layout: 'centered',
    },
    args: {
      uid:"CPFInput1",
      value: "",
    },
} satisfies Meta<typeof CPFInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};