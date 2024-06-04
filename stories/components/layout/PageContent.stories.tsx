import type { StoryObj, Meta } from "@storybook/react";
import { PageContent } from "../../../src/components/layout/PageContent";

const meta = {
    title: 'Layout/PageContent',
    component: PageContent,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
      children: [
        <div>Data 1</div>,
        <div>Data 2</div>,
        <div>Data 3</div>,
        <div>Data 4</div>
      ],
      padding: "30px",
      style: {border: "1px dashed #fff"},

    },
} satisfies Meta<typeof PageContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
