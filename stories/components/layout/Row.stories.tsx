import type { StoryObj, Meta } from "@storybook/react";
import { Row } from "../../../src/components/layout/Row";

const meta = {
    title: 'Layout/Row',
    component: Row,
    parameters: {
        layout: 'centered',
    },
    render: (args) => <div style={{width:300, height:300, backgroundColor:"var(--theme-color-background-aux)"}}>
      <Row {...args} />
    </div>,
    args: {
      children: [
        <div>Data 1</div>,
        <div>Data 2</div>
      ]
    },
} satisfies Meta<typeof Row>;

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
