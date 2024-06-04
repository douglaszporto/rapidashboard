import type { StoryObj, Meta } from "@storybook/react";
import { Breadcrumb } from "../../../src/components/titles/Breadcrumb";

const meta = {
    title: 'Titles/Breadcrumb',
    component: Breadcrumb,
    parameters: {
        layout: 'centered',
    },
    args: {},
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleItem: Story = {
  args: {
    items: {},
    current: 'Home',
  },
};

export const TwoItems: Story = {
  args: {
    items: {'/':'Home'},
    current: 'Subpage 1',
  },
};

export const TreeItems: Story = {
  args: {
    items: {'/':'Home', '/subpage1':'Subpage 1'},
    current: 'Subpage 2',
  },
};
