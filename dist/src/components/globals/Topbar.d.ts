import { MouseEvent, ReactNode } from "react";
export interface TopbarProps {
    helpLabel?: string;
    items?: Array<{
        action: (e: MouseEvent<HTMLAnchorElement>) => void;
        label: string;
    }>;
    photo?: string;
    search?: {
        label: string;
        items: {
            element?: ReactNode;
            action: () => void;
        }[];
    }[];
    searchPlaceholder?: string;
    userName?: string;
    onSearch?: (value: string) => void;
    onMenuOpen?: Function;
    onOpenHelp?: Function;
}
export declare const Topbar: React.FC<TopbarProps>;
