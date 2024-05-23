import type { StoryObj, Meta } from "@storybook/react";
import { Upload } from "../../../components/forms/upload";

const meta = {
    title: 'Forms/Upload',
    component: Upload,
    parameters: {
        layout: 'centered',
    },
    args: {
      uid: "Upload1",
      labelUpload: "Upload",
      value: [],
      externalFiles: [],
      horizontal: false,
    },
} satisfies Meta<typeof Upload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const Multiple: Story = {
  args: {
    multiple: true
  }
};

export const Horizontal: Story = {
  args: {
    horizontal: true
  }
};

export const WithExternalFiles: Story = {
  args: {
    externalFiles: [
      {
        id: "1",
        name: "file1.jpg",
        size: 1000
      },
      {
        id: "2",
        name: "file2.jpg",
        size: 2000
      }
    ]
  }
};