import { FormEvent, MouseEvent, ReactNode, useEffect, useRef, useState } from "react";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";

import * as Tags from './styles';
import { Row } from "../layout/Row";

export interface TopbarProps {
    helpLabel?: string,
    items?: Array<{action: (e: MouseEvent<HTMLAnchorElement>)=>void, label:string}>,
    photo?: string,
    search?: {
        label:string, 
        items: {
            element?: ReactNode,
            action: ()=>void,
        }[]
    }[],
    searchPlaceholder?: string;
    userName?: string,
    onSearch?: (value:string) => void,
    onMenuOpen?: Function,
    onOpenHelp?: Function
}

export const Topbar: React.FC<TopbarProps> = ({helpLabel, items, photo, search, searchPlaceholder, userName, onSearch, onMenuOpen, onOpenHelp}:TopbarProps) => {

    const [searchVal, setSearchVal] = useState<string>("");
    const [showResults, setShowResults] = useState<boolean>(false);
    const [showProfile, setShowProfile] = useState<boolean>(false);

    const refTimer = useRef<NodeJS.Timeout>();

    
    const handleShowProfile = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        setShowProfile(true);
    }

    const handleChangeSearch = (e: FormEvent<HTMLInputElement>) => {
        let val = (e.target as HTMLInputElement).value;
        setSearchVal(val);
        setShowResults(true);

        if (refTimer.current) {
            clearTimeout(refTimer.current);
        }

        refTimer.current = setTimeout(()=>{
            onSearch && onSearch(val);
        }, 300);
    };

    const handleClick = (e: MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        e.stopPropagation();

        setShowResults(true);
    };

    const handleMenuState = () => {
        onMenuOpen && onMenuOpen();
    };

    const handleOpenHelp = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        onOpenHelp && onOpenHelp();        
    }

    const handleAction = (e: MouseEvent<HTMLAnchorElement>, action?: (e: MouseEvent<HTMLAnchorElement>)=>void) => {
        e.preventDefault();
        e.stopPropagation();

        setShowProfile(false);
        action && action(e);
    }

    
    useEffect(()=>{
        const fnResults = ()=> {
            setShowResults(false);
        }
        const fnProfile = ()=> {
            setShowProfile(false);
        }

        const body = document.querySelector("body");
        if (body) {
            body.addEventListener("click", fnResults);
            body.addEventListener("click", fnProfile);
        }
        return ()=>{
            const body = document.querySelector("body");
            if (body) {
                body.removeEventListener("click", fnResults);
                body.removeEventListener("click", fnProfile);
            }
        };
    }, []);


    return <Tags.TopbarElement>
        <Tags.MenuButton onClick={handleMenuState}>
            <Icon size={1} path={mdiMenu} />
        </Tags.MenuButton>
        <Tags.InputSearchWrapper>
            <Tags.InputSearch 
                id="topbar-search" 
                placeholder={searchPlaceholder ?? ''} 
                value={searchVal} 
                onClick={handleClick}
                onChange={handleChangeSearch} 
            />
            {showResults ? <Tags.SearchResult>
                {search && search.length ? search.map(s => {
                    if (s.items && s.items.length) {
                        return <>
                            <Tags.SearchHeader key={s.label}>{s.label}</Tags.SearchHeader>
                            {s.items.map((i, index) => <Tags.SearchItem key={index} onClick={i.action}>{i.element}</Tags.SearchItem>)}
                        </>
                    } else {
                        return null;
                    }
                }) : null}
            </Tags.SearchResult> : null}
        </Tags.InputSearchWrapper>
        <Tags.TopbarUser >
            {helpLabel ? <Tags.Link href="#" onClick={handleOpenHelp}>{helpLabel}</Tags.Link> : null }
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