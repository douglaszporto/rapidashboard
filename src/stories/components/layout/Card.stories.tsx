import type { StoryObj, Meta } from "@storybook/react";
import { Card } from "../../../components/layout/Card";

const meta = {
    title: 'Layout/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    render: (args) => <div style={{width:300}}>
      <Card {...args} />
    </div>,
    args: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    children: <div style={{width:300,height:200, display:"flex", alignItems:"center", justifyContent:"center"}}>Card content here</div>
  }
};

export const WithButton: Story = {
  args: {
    title: ['Card Title', <div style={{width:30, height:30, border:"1px solid #000", backgroundColor:"var(--theme-color-button-blue)"}}></div>],
    children: <div style={{width:300,height:200, display:"flex", alignItems:"center", justifyContent:"center"}}>Card content here</div>
  }
};