import type { StoryObj, Meta } from "@storybook/react";
import { Loading } from "../../../components/datashow/loading";
import { mdiControllerOff } from "@mdi/js";

const meta = {
    title: 'Datashow/Loading',
    component: Loading,
    parameters: {
        layout: 'centered',
    },
    args: {
      loading: ['loading']
    },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};