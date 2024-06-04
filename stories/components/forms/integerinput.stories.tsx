import type { StoryObj, Meta } from "@storybook/react";
import { IntegerInput } from "../../../src/components/forms/integerinput";

const meta = {
    title: 'Forms/IntegerInput',
    component: IntegerInput,
    parameters: {
        layout: 'centered',
    },
    args: {
      uid: "IntegerInput1",
      value: ""
    },
} satisfies Meta<typeof IntegerInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};