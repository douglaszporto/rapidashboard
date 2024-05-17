import type { StoryObj, Meta } from "@storybook/react";
import { EmptyState } from "../../../components/datashow/emptyState";
import { mdiControllerOff } from "@mdi/js";

const meta = {
    title: 'Datashow/EmptyState',
    component: EmptyState,
    parameters: {
        layout: 'centered',
    },
    args: {
      title: "There are no games to show",
      icon: mdiControllerOff
    },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
export const SizeChanged: Story = {
  args: {
    size: 8
  }
};