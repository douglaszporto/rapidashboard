import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('react').FC<Omit<import('react').HTMLProps<HTMLDivElement>, "onChange" | "value"> & {
        items: {
            label: string;
            id: string;
        }[];
        value: string;
        onChange: (v: string) => void;
    }>;
    parameters: {
        layout: string;
    };
    render: (args: Omit<import('react').HTMLProps<HTMLDivElement>, "onChange" | "value"> & {
        items: {
            label: string;
            id: string;
        }[];
        value: string;
        onChange: (v: string) => void;
    }) => import("react/jsx-runtime").JSX.Element;
    args: {
        items: {
            label: string;
            id: string;
        }[];
        value: string;
        onChange: () => void;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
