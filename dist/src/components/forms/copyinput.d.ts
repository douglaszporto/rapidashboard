import { HTMLProps } from 'react';

type CopyInputProps = HTMLProps<HTMLDivElement> & {
    uid: string;
    copyLabel?: string;
};
export declare const CopyInput: React.FC<CopyInputProps>;
export {};
