import type { StoryObj, Meta } from "@storybook/react";
import { MonthInput } from "../../../components/forms/monthinput";

const meta = {
    title: 'Forms/MonthInput',
    component: MonthInput,
    parameters: {
        layout: 'centered',
    },
    args: {
      uid: "MonthInput1",
    },
} satisfies Meta<typeof MonthInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};