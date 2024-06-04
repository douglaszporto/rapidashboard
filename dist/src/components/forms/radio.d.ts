import { HTMLProps } from 'react';

type RadioProps = HTMLProps<HTMLDivElement> & {
    uid: string;
    labelContent?: any;
    isVertical?: boolean;
    checked?: boolean;
    onCheck?: Function;
};
export declare const Radio: React.FC<RadioProps>;
export {};
