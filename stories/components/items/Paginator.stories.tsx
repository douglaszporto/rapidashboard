import type { StoryObj, Meta } from "@storybook/react";
import { Paginator } from "../../../src/components/items/Paginator";

const meta = {
    title: 'Items/Paginator',
    component: Paginator,
    parameters: {
        layout: 'centered',
    },
    args: {
      page: 1,
      total: 5,
      onPageChange: ()=>{}
    },
} satisfies Meta<typeof Paginator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};