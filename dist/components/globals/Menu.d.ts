/// <reference types="react" />
type MenuItemType = {
    key: string;
    label: string;
    icon: string;
};
export interface MenuProps {
    items: MenuItemType[];
    location: {
        pathname: string;
    };
    logoUrl?: string;
    labelHome?: string;
    menuOpened: boolean;
    navigate: (url: string, options?: any) => void;
    onClose: Function;
}
export declare const Menu: React.FC<MenuProps>;
export {};
