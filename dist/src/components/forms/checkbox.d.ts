import { HTMLProps } from 'react';

type CheckboxProps = HTMLProps<HTMLDivElement> & {
    uid: string;
    label: string;
    isVertical?: boolean;
    noWrap?: boolean;
    checked?: boolean;
    onCheck?: Function;
};
export declare const Checkbox: React.FC<CheckboxProps>;
export {};
