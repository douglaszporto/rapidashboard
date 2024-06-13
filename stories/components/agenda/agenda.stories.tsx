import type { StoryObj, Meta } from "@storybook/react";
import styled from "styled-components";
import { Agenda, EventItem } from "../../../src/components/agenda/agenda";

let dateStart = new Date();
dateStart.setDate(dateStart.getDate() + 3);
dateStart.setHours(6, 0, 0, 0);

let dateEnd = new Date();
dateEnd.setHours(21, 0, 0, 0);

let date = new Date();
date.setDate(date.getDate() + 1);

const Item = styled.div`
  cursor: default;
  background: repeating-linear-gradient(
    45deg,
    var(--theme-color-background-aux2),
    var(--theme-color-background-aux2) 10px,
    var(--theme-color-background-aux3) 10px,
    var(--theme-color-background-aux3) 20px
  );
  width: 100%;
  height: 100%;
`;

const meta = {
    title: 'Agenda/Agenda',
    component: Agenda,
    parameters: {
        layout: 'fullscreen',
    },
    render: (args) => <div style={{width:"100%", height:"100%"}}>
      <Agenda {...args} />
    </div>,
    args: {
      dateStart: dateStart,
      dateEnd: dateEnd,
      disableBefore: new Date(),
      events: [
        { title: "Evento 1", date: date, hour: 8, duration: 1, color: "red" },
        { title: "Evento 2", date: date, hour: 12, duration: 1, color: false },
        { title: "Evento 3", date: date, hour: 16, duration: 2 },
      ],
      eventAdapter: () => <Item></Item>,
      labelDay: {
        0: "Dom",
        1: "Seg",
        2: "Ter",
        3: "Qua",
        4: "Qui",
        5: "Sex",
        6: "Sáb",
      },
      lockedWeekdays: [0,6],
      onClick: (date: Date, hour: number) => {
        console.log(date, hour);
      },
      onEventClick: (e: EventItem) => {
        console.log(e);
      },
    },
} satisfies Meta<typeof Agenda>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};