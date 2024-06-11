import React from 'react';
export interface EventItem {
    date: Date;
    hour: number;
    duration: number;
    title: string;
    description?: string;
    color?: string | false;
}
export interface AgendaProps {
    dateStart?: Date;
    dateEnd?: Date;
    events?: EventItem[];
    eventAdapter?: (event: any) => JSX.Element;
    labelDay?: Record<string, string>;
    disableBefore?: Date;
    onClick?: (date: Date, hour: number) => void;
    onEventClick?: (event: EventItem) => void;
}
export declare const Agenda: React.FC<AgendaProps>;
