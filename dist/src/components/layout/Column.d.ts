import { HTMLProps } from 'react';

export interface ColumnProps extends HTMLProps<HTMLDivElement> {
    align?: string;
    justify?: string;
    margin?: string;
}
export declare const Column: React.FC<ColumnProps>;
