import type { StoryObj, Meta } from "@storybook/react";
import { DueMonthInput } from "../../../components/forms/duemonthinput";

const meta = {
    title: 'Forms/DueMonthInput',
    component: DueMonthInput,
    parameters: {
        layout: 'centered',
    },
    args: {
      uid:"DueMonthInput1",
    },
} satisfies Meta<typeof DueMonthInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};