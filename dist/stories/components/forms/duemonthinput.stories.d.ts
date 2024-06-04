import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('react').FC<Omit<import('react').HTMLProps<HTMLInputElement>, "onChange" | "value"> & {
        uid: string;
        value?: Date | undefined;
        formError?: import('../../../src/types/FormError.type').FormError | undefined;
        onChange?: ((value?: Date | undefined) => any) | undefined;
    }>;
    parameters: {
        layout: string;
    };
    args: {
        uid: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
