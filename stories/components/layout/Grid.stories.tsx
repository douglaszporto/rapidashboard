import type { StoryObj, Meta } from "@storybook/react";
import { Grid } from "../../../src/components/layout/Grid";

const meta = {
    title: 'Layout/Grid',
    component: Grid,
    parameters: {
        layout: 'centered',
    },
    render: (args) => <div style={{width:300, height:300, backgroundColor:"var(--theme-color-background-aux)"}}>
      <Grid {...args} />
    </div>,
    args: {
      style: {width:"100%", height:"100%"},
      children: [
        <div style={{flex:1}}>Data 1</div>,
        <div style={{flex:1}}>Data 2</div>,
        <div style={{flex:1}}>Data 3</div>,
        <div style={{flex:1}}>Data 4</div>
      ]
    },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoColumns: Story = {
  args: {
    align: "strech",
    justify: "stretch",
    columns: 2,
  }
};
export const TreeColumns: Story = {
  args: {
    align: "strech",
    justify: "stretch",
    columns: 3,
  }
};
