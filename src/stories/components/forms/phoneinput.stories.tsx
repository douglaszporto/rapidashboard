import type { StoryObj, Meta } from "@storybook/react";
import { PhoneInput } from "../../../components/forms/phoneinput";

const meta = {
    title: 'Forms/PhoneInput',
    component: PhoneInput,
    parameters: {
        layout: 'centered',
    },
    args: {
      uid: "PhoneInput1",
      value: "",
    },
} satisfies Meta<typeof PhoneInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};