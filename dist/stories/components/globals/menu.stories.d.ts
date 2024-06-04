import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('react').FC<import('../../../src/components/globals/Menu').MenuProps>;
    parameters: {
        layout: string;
    };
    args: {
        items: {
            key: string;
            label: string;
            icon: string;
        }[];
        logoUrl: string;
        location: {
            pathname: string;
        };
        menuOpened: true;
        navigate: () => void;
        onClose: () => void;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const OtherSelected: Story;
