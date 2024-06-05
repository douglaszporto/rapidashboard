import { HTMLProps } from 'react';
type GridTypeHeaderProps = Omit<HTMLProps<HTMLDivElement>, 'start'> & {
    start: Date;
    viewmode: 'MONTH' | '2WEEK' | 'WEEK';
    labelDayName?: string[];
    refDate: Date;
};
export declare const GridTimeHeader: React.FC<GridTypeHeaderProps>;
export {};
