import { HTMLProps } from 'react';

type TabsProps = Omit<HTMLProps<HTMLDivElement>, 'value' | 'onChange'> & {
    items: {
        label: string;
        id: string;
    }[];
    value: string;
    onChange: (v: string) => void;
};
export declare const Tabs: React.FC<TabsProps>;
export {};
