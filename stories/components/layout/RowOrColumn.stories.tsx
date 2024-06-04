import type { StoryObj, Meta } from "@storybook/react";
import { RowOrColumn } from "../../../src/components/layout/RowOrColumn";

const meta = {
    title: 'Layout/RowOrColumn',
    component: RowOrColumn,
    parameters: {
        layout: 'centered',
    },
    render: (args) => <div style={{backgroundColor:"var(--theme-color-background-aux)"}}>
      <RowOrColumn {...args} />
    </div>,
    args: {
      children: [
        <div>Data 1</div>,
        <div>Data 2</div>,
        <div>Data 3</div>,
        <div>Data 4</div>
      ]
    },
} satisfies Meta<typeof RowOrColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
export const Centred: Story = {
  args: {
    rowAlign: "center",
    rowJustify: "center",
    columnAlign: "center",
    columnJustify: "center",
    style: {flex: 1, height:"100%"}
  }
};
export const Spaced: Story = {
  args: {
    rowAlign: "center",
    rowJustify: "space-between",
    columnAlign: "center",
    columnJustify: "space-between",
    style: {flex: 1, height:"100%"}
  }
};
