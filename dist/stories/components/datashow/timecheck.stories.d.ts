/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<{
        start?: number | undefined;
        end?: number | undefined;
        date: Date;
        eventName?: string | undefined;
        location?: string | undefined;
        events: {
            id: string;
            date: string;
            time: number;
            timeend: number;
            location_id: string;
            event_name: string;
        }[];
        locationList?: {
            id?: string | undefined;
            name: string;
        }[] | undefined;
        onConflict?: Function | undefined;
    }>;
    parameters: {
        layout: string;
    };
    render: (args: {
        start?: number | undefined;
        end?: number | undefined;
        date: Date;
        eventName?: string | undefined;
        location?: string | undefined;
        events: {
            id: string;
            date: string;
            time: number;
            timeend: number;
            location_id: string;
            event_name: string;
        }[];
        locationList?: {
            id?: string | undefined;
            name: string;
        }[] | undefined;
        onConflict?: Function | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    args: {
        start: number;
        end: number;
        date: Date;
        eventName: string;
        location: string;
        events: {
            id: string;
            date: string;
            time: number;
            timeend: number;
            location_id: string;
            event_name: string;
        }[];
        locationList: {
            id: string;
            name: string;
        }[];
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
