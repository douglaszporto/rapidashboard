import type { StoryObj, Meta } from "@storybook/react";
import { FormAnswer } from "../../../src/components/forms/formanswer";

const meta = {
    title: 'Forms/FormAnswer',
    component: FormAnswer,
    parameters: {
        layout: 'centered',
    },
    render: (args) => <div style={{width:500}}><FormAnswer {...args} /></div>,
    args: {
      value: undefined,
      form: [{
        type: 'TEXT',
        title: "This is a text question A",
        order: 1,
        id: 100
      }, {
        type: 'CHECK',
        title: "This is a check question B",
        order: 3,
        id: 101,
        options: [{
          id: 1,
          label: "Option 1"
        }, {
          id: 2,
          label: "Option 2"
        }, {
          id: 3,
          label: "Option 3"
        }]
      }, {
        type: 'RADIO',
        title: "This is a radio question C",
        order: 2,
        id: 102,
        options: [{
          id: 1,
          label: "Option 1"
        }, {
          id: 2,
          label: "Option 2"
        }, {
          id: 3,
          label: "Option 3"
        }]
      }, {
        type: 'RATING',
        title: "This is a rating question D",
        order: 4,
        id: 103,
        options: [{
          id: 1,
          label: "Option 1"
        }, {
          id: 2,
          label: "Option 2"
        }, {
          id: 3,
          label: "Option 3"
        }, {
          id: 4,
          label: "Option 4"
        }, {
          id: 5,
          label: "Option 5"
        }]
      }],
      onChange: () => {},
    },
} satisfies Meta<typeof FormAnswer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};