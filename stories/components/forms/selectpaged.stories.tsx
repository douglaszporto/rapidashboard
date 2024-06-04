import type { StoryObj, Meta } from "@storybook/react";
import { SelectPaged } from "../../../src/components/forms/selectpaged";

const meta = {
    title: 'Forms/SelectPaged',
    component: SelectPaged,
    parameters: {
        layout: 'centered',
    },
    args: {
      uid: "SelectPaged1",
      loader: () => new Promise((res) => {
        setTimeout(() => {
          res({
            data: {
              items: Array.from({length: 5}, (_, i) => ({value: i, label: `Option ${i}.${Math.ceil(Math.random()*1000)}`})),
              total: 1000
            }
          });
        },500);
      }),
      transform: (t:any, index:number) => ({...t, index}),
    },
} satisfies Meta<typeof SelectPaged>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};