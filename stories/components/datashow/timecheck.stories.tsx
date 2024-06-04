import type { StoryObj, Meta } from "@storybook/react";
import { Timecheck } from "../../../src/components/datashow/timecheck";

const meta = {
    title: 'Datashow/Timecheck',
    component: Timecheck,
    parameters: {
        layout: 'centered',
    },
    render: (args) => <div style={{width:300}}>
      <Timecheck {...args} />
    </div>,
    args: {
      start: 660,
      end: 720,
      date: new Date("2024-01-10T10:00:00.000Z"),
      eventName: "Event Name",
      location: "Event Location",
      events: [{
          id: "100",
          date: "2024-01-10",
          time: 750,
          timeend: 810,
          location_id: "101",
          event_name: "Other Event Name",
      }],
      locationList: [{
          id: "101",
          name: "Other Location"
      }]
    },
} satisfies Meta<typeof Timecheck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
