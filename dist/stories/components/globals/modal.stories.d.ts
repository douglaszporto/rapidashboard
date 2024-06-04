import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('react').FC<import('../../../src/components/globals/Modal').ModalProps>;
    parameters: {
        layout: string;
    };
    args: {
        content: import("react/jsx-runtime").JSX.Element;
        show: true;
        onClose: () => void;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
