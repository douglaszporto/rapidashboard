/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<Omit<import("react").HTMLProps<HTMLDivElement>, "start" | "end"> & {
        start: Date;
        end: Date;
        refDate: Date;
        starttime: number;
        endtime: number;
        viewmode: "MONTH" | "2WEEK" | "WEEK";
        events: any[];
        navigate: (url: string, options?: any) => void;
        drag: (fn: () => any) => [{
            isDragging: boolean;
        }, drag: any];
        drop: (fn: () => any, deps: any) => [{
            isOver: boolean;
        }, drop: any];
        onMoveItem: (params: any, item: any) => Promise<any>;
    }>;
    parameters: {
        layout: string;
    };
    render: (args: Omit<import("react").HTMLProps<HTMLDivElement>, "start" | "end"> & {
        start: Date;
        end: Date;
        refDate: Date;
        starttime: number;
        endtime: number;
        viewmode: "MONTH" | "2WEEK" | "WEEK";
        events: any[];
        navigate: (url: string, options?: any) => void;
        drag: (fn: () => any) => [{
            isDragging: boolean;
        }, drag: any];
        drop: (fn: () => any, deps: any) => [{
            isOver: boolean;
        }, drop: any];
        onMoveItem: (params: any, item: any) => Promise<any>;
    }) => import("react/jsx-runtime").JSX.Element;
    args: {
        start: Date;
        end: Date;
        refDate: Date;
        starttime: number;
        endtime: number;
        viewmode: "WEEK";
        events: never[];
        navigate: () => void;
        drag: () => [{
            isDragging: false;
        }, {}];
        drop: () => [{
            isOver: false;
        }, {}];
        onMoveItem: () => Promise<void>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
