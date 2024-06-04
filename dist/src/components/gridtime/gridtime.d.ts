import { HTMLProps } from 'react';

type GridTimeProps<T = any> = Omit<HTMLProps<HTMLDivElement>, 'start' | 'end'> & {
    start: Date;
    end: Date;
    refDate: Date;
    starttime: number;
    endtime: number;
    viewmode: 'MONTH' | '2WEEK' | 'WEEK';
    events: T[];
    navigate: (url: string, options?: any) => void;
    drag: (fn: () => any) => [{
        isDragging: boolean;
    }, drag: any];
    drop: (fn: () => any, deps: any) => [{
        isOver: boolean;
    }, drop: any];
    onMoveItem: (params: any, item: T) => Promise<any>;
};
export declare const GridTime: React.FC<GridTimeProps>;
export {};
