import type { StoryObj, Meta } from "@storybook/react";
import { Modal } from "../../../components/globals/Modal";

const meta = {
    title: 'Globals/Modal',
    component: Modal,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
      content: <div>Modal Content</div>,
      show: true,
      onClose: ()=>{}
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};