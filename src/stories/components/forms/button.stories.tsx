import type { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonRow } from "../../../components/forms/button";
import { mdiPlus } from "@mdi/js";

const meta = {
    title: 'Forms/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    render: (args) => <ButtonRow><Button {...args} /></ButtonRow>,
    args: {
      title: "Button Name"
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const Icon: Story = {
  args: {
    icon: mdiPlus,
    color: "#007700"
  },
};

export const IconAndText: Story = {
  args: {
    icon: mdiPlus,
    color: "#1155ff",
    title: "Add New Item",
    children: "New Item"
  },
};

export const Complete: Story = {
  args: {
    icon: mdiPlus,
    color: "#ffaa00",
    title: "Create a new event",
    children: "New Event",
    tooltip: "New Event",
    size: 15,
  },
};

export const Border: Story = {
  args: {
    color: "#ff3333",
    title: "Remove item",
    children: "Remove",
    border: true,
  },
};

export const Disabled: Story = {
  args: {
    icon: mdiPlus,
    color: "#1155ff",
    title: "Append new item",
    children: "New Item",
    disabled: true,
  },
};

export const HideOnMobile: Story = {
  args: {
    icon: mdiPlus,
    color: "#7733ff",
    title: "Hide text on mobile",
    children: "Hide on mobile",
    hideTextOnMobile: true
  },
};