import type { StoryObj, Meta } from "@storybook/react";
import { TimeInput } from "../../../components/forms/timeinput";

const meta = {
    title: 'Forms/TimeInput',
    component: TimeInput,
    parameters: {
        layout: 'centered',
    },
    args: {
      uid: "TimeInput1",
      value: "",
    },
} satisfies Meta<typeof TimeInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};