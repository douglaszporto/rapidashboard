import type { StoryObj, Meta } from "@storybook/react";
import { Tag } from "../../../src/components/datashow/tag";

const meta = {
    title: 'Datashow/Tag',
    component: Tag,
    parameters: {
        layout: 'centered',
    },
    args: {
      children: 'Tag',
      color: '#ffaa00'
    },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
export const LongText: Story = {
  args: {
    children: 'A long text inside a tag',
      color: '#007700'
  }
};
