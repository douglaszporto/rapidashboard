import type { StoryObj, Meta } from "@storybook/react";
import { GridTime } from "../../../components/gridtime/gridtime";

const meta = {
    title: 'GridTime/GridTime',
    component: GridTime,
    parameters: {
        layout: 'fullscreen',
    },
    render: (args) => <div style={{width:"100%", height:"100%"}}>
      <GridTime {...args} />
    </div>,
    args: {
      start: new Date('2021-01-03T00:00:00Z'),
      end: new Date('2021-01-09T00:00:00Z'),
      refDate: new Date('2021-01-05T00:00:00Z'),
      starttime: 480,
      endtime: 1320,
      viewmode: 'WEEK',
      events: [],
      navigate: ()=>{},
      drag: () => [{isDragging:false}, {}],
      drop: ()=> [{isOver:false}, {}],
      onMoveItem: ()=>Promise.resolve(),
    },
} satisfies Meta<typeof GridTime>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};