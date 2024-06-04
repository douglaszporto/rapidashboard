import { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import { mdiArrowLeft, mdiHome } from '@mdi/js';

import { Translate, i18n } from '../i18n/Translate';
import { MenuElement, MenuBackground, Header, Logo, BackButton, MenuItems, Item } from './styles';

type MenuItemType = {key:string, label:string, icon:string};
export interface MenuProps {
    items:MenuItemType[];
    location: {pathname:string};
    logoUrl?: string;
    menuOpened: boolean;
    navigate: (url:string, options?: any) => void;
    onClose: Function;
}

export const Menu: React.FC<MenuProps> = ({items, onClose, menuOpened, location, logoUrl, navigate}:MenuProps) => {

    const [currentItem, setCurrentItem] = useState<string>('');


    const isSelected = (item: string) => {
        if (currentItem === item) {
            return 'active ';
        }
        return '';
    };

    const handleClick = (link:string) => {
        navigate(link);
        onClose();
    }


    useEffect(() => {
        let itemValue = "home";
        for(let item of items) {
            if (location.pathname.startsWith(item.key)) {
                itemValue = item.label;
                break;
            }
        }
        setCurrentItem(itemValue);
    }, [location]);


    return <>
        <MenuBackground className={menuOpened ? 'opened' : ''} onClick={()=>onClose()} />
        <MenuElement className={menuOpened ? 'opened' : ''}>
            <Header>
                <BackButton onClick={()=>onClose()}><Icon path={mdiArrowLeft} size={1} /></BackButton>
                <Logo src={logoUrl ?? "/img/logo.svg"} alt={i18n('menu.logo')} />
            </Header>
            <MenuItems>
                <Item className={isSelected('home')} onClick={()=>{handleClick('/')}}>
                    <Icon style={{marginRight:'0.5rem'}} size={1.2} path={mdiHome} />
                    <Translate path="menu.home" />
                </Item>
                {items.map((v,i) => <Item key={i} className={isSelected(v.label)} onClick={()=>{handleClick(v.key)}}>
                    <Icon style={{marginRight:'0.5rem'}} size={1.2} path={v.icon} />
                    <Translate path={`menu.${v.label}`} />
                </Item>)}
            </MenuItems>
        </MenuElement>
    </>
}