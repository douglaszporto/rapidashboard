import { MouseEvent, useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";

import * as Tags from './styles';
import { Row } from "../layout";


interface SimpleTopbarProps {
    items: Array<{action: (e: MouseEvent<HTMLAnchorElement>)=>void, label:string}>,
    photo?: string,
    userName?: string,
    onMenuOpen?: Function,
}

export const SimpleTopbar: React.FC<SimpleTopbarProps> = ({photo, items, userName, onMenuOpen}:SimpleTopbarProps) => {

    const [showProfile, setShowProfile] = useState<boolean>(false);
    

    const handleAction = (e: MouseEvent<HTMLAnchorElement>, action?: (e: MouseEvent<HTMLAnchorElement>)=>void) => {
        e.preventDefault();
        e.stopPropagation();

        setShowProfile(false);
        action && action(e);
    }

    const handleShowProfile = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        setShowProfile(true);
    }

    const handleMenuState = () => {
        onMenuOpen && onMenuOpen();
    };

    
    useEffect(()=>{
        const fnProfile = ()=> {
            setShowProfile(false);
        }

        document.querySelector("body")?.addEventListener("click", fnProfile);

        return ()=>{
            document.querySelector("body")?.removeEventListener("click", fnProfile);
        };
    }, []);


    return <Tags.TopbarElement>
        <Tags.MenuButton onClick={handleMenuState}>
            <Icon size={1} path={mdiMenu} />
        </Tags.MenuButton>
        <Tags.TopbarUser >
            {showProfile ? <Tags.ProfileWrapper>
                <Row align="center" justify="flex-left" style={{padding:"0.85rem"}}>
                    <Tags.UserName>{userName}</Tags.UserName>
                    <Tags.UserBadge className='compact'>
                        {photo ? <Tags.Image src={photo} /> : <span>{String(userName ?? '').substring(0,1)}</span>}
                    </Tags.UserBadge>
                </Row>
                {items && items.length ? items.filter(i => i !== null && i !== undefined).map((item, index) => <Tags.ProfileBtn key={index} href="#" onClick={(e) => handleAction(e,item.action)}>{item.label}</Tags.ProfileBtn>) : null}
            </Tags.ProfileWrapper> : <Tags.UserBadge onClick={handleShowProfile}>
                {photo ? <Tags.Image src={photo} /> : <span>{String(userName ?? '').substring(0,1)}</span>}
            </Tags.UserBadge>}
        </Tags.TopbarUser >
    </Tags.TopbarElement>
}