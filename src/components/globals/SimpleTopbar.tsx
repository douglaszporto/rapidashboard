import { MouseEvent, useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import * as Tags from './styles';
import { Translate } from '../i18n/Translate';
import { Row } from "../layout";


interface SimpleTopbarProps {
    onLogout: Function,
    onMenuOpen: Function,
    getImage: Function,
}

export const SimpleTopbar: React.FC<SimpleTopbarProps> = ({onLogout, onMenuOpen, getImage}:SimpleTopbarProps) => {

    const [photo, setPhoto] = useState<string>();
    const [showProfile, setShowProfile] = useState<boolean>(false);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const auth = useSelector<any,string>(s => s.auth.type);
    const userName = useSelector<any, string>(s => s.auth.name);
    const userPhoto = useSelector<any>(s => s.auth.photo);

    const handleLogout = () => {
        dispatch(onLogout());
    };

    const handleGoToProfile = () => {
        navigate(`config/profile`);
    };

    const handleGoToTherapistMode = () => {
        window.location = import.meta.env.VITE_THERAPISTAREA_URL;
    };

    const handleShowProfile = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        setShowProfile(true);
    }

    const handleMenuState = () => {
        onMenuOpen();
    };

    useEffect(()=>{
        let update = true;

        (async () => {
            if (!userPhoto) {
                setPhoto(undefined);
                return;
            }
            let photo = await getImage(`photo/thumb_${userPhoto}`);
            if (update && photo) {
                setPhoto(photo);
            }
        })();

        return ()=>{update = false;};
    }, [userPhoto]);

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
                <Row align="center" justify="flex-left" style={{padding:"1rem"}}>
                    <Tags.UserName>{userName}</Tags.UserName>
                    <Tags.UserBadge className='compact'>
                        {photo ? <Tags.Image src={photo} /> : <span>{String(userName ?? '').substring(0,1)}</span>}
                    </Tags.UserBadge>
                </Row>
                <Tags.ProfileBtn href="#" onClick={handleGoToProfile}><Translate path="topbar.profile" /></Tags.ProfileBtn>
                {auth === 'BOTH' ? <Tags.ProfileBtn href="#" onClick={handleGoToTherapistMode}><Translate path="topbar.changeProfile" /></Tags.ProfileBtn> : null}
                <Tags.ProfileBtn href="#" onClick={handleLogout}><Translate path="topbar.logout" /></Tags.ProfileBtn>
            </Tags.ProfileWrapper> : <Tags.UserBadge onClick={handleShowProfile}>
                {photo ? <Tags.Image src={photo} /> : <span>{String(userName ?? '').substring(0,1)}</span>}
            </Tags.UserBadge>}
        </Tags.TopbarUser >
    </Tags.TopbarElement>
}