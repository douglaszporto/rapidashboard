import { StoryFn, Meta } from "@storybook/react";
import { Title, TitleBar } from "../Title";
import '../../../index.css';

export default {
  title: "Rapidashboard/TitleBar",
  component: TitleBar,
} as Meta<typeof TitleBar>;

const Template: StoryFn<typeof Title> = (args) => <Title {...args} />;

export const TitleBarTest = Template.bind({});
TitleBarTest.args = {
  children: "Dashboard Title",
};
