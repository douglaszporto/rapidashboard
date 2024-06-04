import type { StoryObj, Meta } from "@storybook/react";
import { MoneyInput } from "../../../src/components/forms/moneyinput";

const meta = {
    title: 'Forms/MoneyInput',
    component: MoneyInput,
    parameters: {
        layout: 'centered',
    },
    args: {
      uid: "moneyinput1",
    },
} satisfies Meta<typeof MoneyInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};