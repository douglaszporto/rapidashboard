import type { StoryObj, Meta } from "@storybook/react";
import { Title, TitleBar } from "../../../src/components/titles/Title";

const meta = {
    title: 'Titles/Title',
    component: TitleBar,
    parameters: {
        layout: 'centered',
    },
    render: (args) => <TitleBar>
      <Title {...args} />
    </TitleBar>,
    args: {},
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Dashboard Title'
  }
};