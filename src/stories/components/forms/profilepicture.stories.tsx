import type { StoryObj, Meta } from "@storybook/react";
import { ProfilePicture } from "../../../components/forms/profilepicture";

const meta = {
    title: 'Forms/ProfilePicture',
    component: ProfilePicture,
    parameters: {
        layout: 'centered',
    },
    render: (args) => <div style={{width:250}}><ProfilePicture {...args} /></div>,
    args: {
      labelDrag: "Drag yout photo here",
      labelOr: "or",
      labelMaxSize: "Max size: 1Mb",
      labelSearch: "Search file",
      uid: "ProfilePicture1",
      value: "",
    },
} satisfies Meta<typeof ProfilePicture>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};