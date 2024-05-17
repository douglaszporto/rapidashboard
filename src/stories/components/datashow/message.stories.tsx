import type { StoryObj, Meta } from "@storybook/react";
import { Message } from "../../../components/datashow/message";
import { mdiControllerOff } from "@mdi/js";

const meta = {
    title: 'Datashow/Message',
    component: Message,
    parameters: {
        layout: 'centered',
    },
    args: {
      messages: [
        {content: 'Message', messageType: 'success'}
      ],
    },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SuccessMessage: Story = {
  args: {}
};

export const ErrorMessage: Story = {
  args: {
    messages: [
      {content: 'Message', messageType: 'error'}
    ],
  }
};