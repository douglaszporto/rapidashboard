import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('styled-components').IStyledComponent<"web", import('styled-components/dist/types').FastOmit<import('react').DetailedHTMLProps<import('react').LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, never>>;
    parameters: {
        layout: string;
    };
    args: {
        children: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
