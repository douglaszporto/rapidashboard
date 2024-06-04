import type { StoryObj, Meta } from "@storybook/react";
import { CreditCardInput } from "../../../src/components/forms/creditcardinput";

const meta = {
    title: 'Forms/CreditCardInput',
    component: CreditCardInput,
    parameters: {
        layout: 'centered',
    },
    args: {
      uid:"CreditCardInput1",
      value: "",
    },
} satisfies Meta<typeof CreditCardInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};