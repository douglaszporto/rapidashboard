import type { StoryObj, Meta } from "@storybook/react";
import { Column } from "../../../src/components/layout/Column";

const meta = {
    title: 'Layout/Column',
    component: Column,
    parameters: {
        layout: 'centered',
    },
    render: (args) => <div style={{width:300, height:300, backgroundColor:"var(--theme-color-background-aux)"}}>
      <Column {...args} />
    </div>,
    args: {
      children: [
        <div>Line 1</div>,
        <div>Line 2</div>
      ]
    },
} satisfies Meta<typeof Column>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
export const Centred: Story = {
  args: {
    align: "center",
    justify: "center",
    style: {flex: 1, height:"100%"}
  }
};
export const Spaced: Story = {
  args: {
    align: "center",
    justify: "space-between",
    style: {flex: 1, height:"100%"}
  }
};
