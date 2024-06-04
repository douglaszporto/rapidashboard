import { HTMLProps } from 'react';

interface EventProps {
    id: string;
    status: string;
    event_name: string;
    date: string;
    timeend: number;
    time: number;
}
type GridTimeTableProps<T extends EventProps> = Omit<HTMLProps<HTMLDivElement>, "start"> & {
    startDate: Date;
    starttime: number;
    endtime: number;
    viewmode: 'MONTH' | '2WEEK' | 'WEEK';
    events: T[];
    navigate: (to: string, options?: any) => void;
    drag: (fn: () => any) => [{
        isDragging: boolean;
    }, drag: any];
    drop: (fn: () => any, deps: any) => [{
        isOver: boolean;
    }, drop: any];
    onMoveItemFn: (params: any, item: T) => Promise<any>;
    refDate: Date;
};
export declare const GridTimeTable: React.FC<GridTimeTableProps<EventProps>>;
export {};
