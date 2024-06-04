import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('react').FC<import('../../../src/components/globals/Topbar').TopbarProps>;
    parameters: {
        layout: string;
    };
    args: {
        items: {
            action: () => void;
            label: string;
        }[];
        userName: string;
        onMenuOpen: () => void;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithPhoto: Story;
export declare const WithHelp: Story;
export declare const WithSearchValues: Story;
