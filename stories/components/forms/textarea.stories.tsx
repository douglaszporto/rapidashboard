import type { StoryObj, Meta } from "@storybook/react";
import { Textarea } from "../../../src/components/forms/textarea";

const meta = {
    title: 'Forms/Textarea',
    component: Textarea,
    parameters: {
        layout: 'centered',
    },
    args: {
      uid: "Textarea1",
    },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};