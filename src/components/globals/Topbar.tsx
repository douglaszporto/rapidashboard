import { FormEvent, MouseEvent, useEffect, useRef, useState } from "react";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import * as Tags from './styles';
import { Row } from "../layout/Row";
import { Translate, i18n } from '../i18n/Translate';
import { DateStrFromUTCToView } from "../../util/dates";
import { MoneyFromNumberToString } from "../../util/money";

interface PatientItemTopbarType {
    id: string;
    name?: string;
    surname?: string;
    birthdate?: string;
    fromBirthdate: string;
    fromAppointment: string;
}
interface PaymentItemTopbarType {
    id: string;
    description: string;
    value: number;
    due_date: string;
    patient: string;
}
interface ActivityItemTopbarType {
    id: string;
    name: string;
    patient: string;
    patient_id: string;
}
interface TopbarProps {
    onSearch: (value:string) => void,
    onLogout: Function,
    onMenuOpen: Function,
    opOpenHelp?: Function
    getImage: Function,
    search?: {
        patients?: PatientItemTopbarType[],
        payments?: PaymentItemTopbarType[]
        activities?: ActivityItemTopbarType[],
    }
}

export const Topbar: React.FC<TopbarProps> = ({onSearch, onMenuOpen, search, onLogout, opOpenHelp, getImage}:TopbarProps) => {

    const [photo, setPhoto] = useState<string>();
    const [searchVal, setSearchVal] = useState<string>("");
    const [showResults, setShowResults] = useState<boolean>(false);
    const [showProfile, setShowProfile] = useState<boolean>(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const auth = useSelector<any,string>(s => s.auth.type);
    const userName = useSelector<any, string>(s => s.auth.name);
    const userPhoto = useSelector<any>(s => s.auth.photo);

    const refTimer = useRef<number>();

    const handleLogout = () => {
        dispatch(onLogout());
    };

    const handleGoToProfile = () => {
        navigate(`config/profile`);
    };

    const handleGoToPatientMode = () => {
        window.location = import.meta.env.VITE_PATIENTAREA_URL;
    };

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
            onSearch(val);
        }, 300);
    };

    const handleClick = (e: MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        e.stopPropagation();

        setShowResults(true);
    };

    const handleMenuState = () => {
        onMenuOpen();
    };

    const handleOpenHelp = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (opOpenHelp) {
            opOpenHelp();
        }
    }

    const GoToPage = (type: string, id: string, patient_id?:string) => {
        if (type === 'patient') {
            navigate(`patients/${id}`);
        }
        if (type === 'payment') {
            navigate(`payments/${id}`);
        }
        if (type === 'activity') {
            navigate(`patients/${patient_id}/activity/${id}`);
        }
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

    const renderPatient = (p: PatientItemTopbarType) => {
        if (p.fromBirthdate === '0' && p.fromAppointment === '0') {
            return <Tags.SearchItem key={p.id} onClick={()=>{GoToPage('patient', p.id)}}>{`${p.name} ${p.surname}`}</Tags.SearchItem>
        }
        if (p.fromBirthdate === '1') {
            return <Tags.SearchItem key={p.id} onClick={()=>{GoToPage('patient', p.id)}}>
                <div>{`${p.name} ${p.surname}`}</div>
                <Tags.SearchItemDetail><Translate path={'topbar.birthdate'} /> <span className="highlight">{DateStrFromUTCToView(p.birthdate)}</span></Tags.SearchItemDetail>
            </Tags.SearchItem>
        }
        return <Tags.SearchItem key={p.id} onClick={()=>{GoToPage('patient', p.id)}}>
            <div>{`${p.name} ${p.surname}`}</div>
            <Tags.SearchItemDetail><Translate path={'topbar.appointment'} /> <span className="highlight">{DateStrFromUTCToView(p.birthdate)}</span></Tags.SearchItemDetail>
        </Tags.SearchItem>
    }

    const renderPayments = (p: PaymentItemTopbarType) => {
        return <Tags.SearchItem key={p.id} onClick={()=>{GoToPage('payment', p.id)}}>
            <div>{p.description}</div>
            <Row>
                <Tags.SearchItemDetail><Translate path={'topbar.dueDate'} /> <span className="highlight">{DateStrFromUTCToView(p.due_date)}</span></Tags.SearchItemDetail>
                <Tags.SearchItemDetail><Translate path={'topbar.value'} /> <span className="highlight">{MoneyFromNumberToString(p.value)}</span></Tags.SearchItemDetail>
            </Row>
        </Tags.SearchItem>
    }

    const renderActivities = (p: ActivityItemTopbarType) => {
        return <Tags.SearchItem key={p.id} onClick={()=>{GoToPage('activity', p.id, p.patient_id)}}>
            <div>{p.name}</div>
            <Tags.SearchItemDetail><Translate path={'topbar.patient'} /> <span className="highlight">{p.patient}</span></Tags.SearchItemDetail>
        </Tags.SearchItem>
    }

    return <Tags.TopbarElement>
        <Tags.MenuButton onClick={handleMenuState}>
            <Icon size={1} path={mdiMenu} />
        </Tags.MenuButton>
        <Tags.InputSearchWrapper>
            <Tags.InputSearch 
                id="topbar-search" 
                placeholder={i18n('topbar.search')} 
                value={searchVal} 
                onClick={handleClick}
                onChange={handleChangeSearch} 
            />
            {showResults ? <Tags.SearchResult>
                {search?.patients && search?.patients.length ? <>
                    <Tags.SearchHeader><Translate path="topbar.patients" /></Tags.SearchHeader>
                    {search.patients.map(p => renderPatient(p))}
                </> : null}
                {search?.payments && search?.payments.length ? <>
                    <Tags.SearchHeader><Translate path="topbar.payments" /></Tags.SearchHeader>
                    {search.payments.map(p => renderPayments(p))}
                </> : null}
                {search?.activities && search?.activities.length ? <>
                    <Tags.SearchHeader><Translate path="topbar.activities" /></Tags.SearchHeader>
                    {search.activities.map(p => renderActivities(p))}
                </> : null}
            </Tags.SearchResult> : null}
        </Tags.InputSearchWrapper>
        <Tags.TopbarUser >
            <Tags.Link href="#" onClick={handleOpenHelp}>{i18n('topbar.help')}</Tags.Link>
            {showProfile ? <Tags.ProfileWrapper>
                <Row align="center" justify="flex-left" style={{padding:"1rem"}}>
                    <Tags.UserName>{userName}</Tags.UserName>
                    <Tags.UserBadge className='compact'>
                        {photo ? <Tags.Image src={photo} /> : <span>{String(userName ?? '').substring(0,1)}</span>}
                    </Tags.UserBadge>
                </Row>
                <Tags.ProfileBtn href="#" onClick={handleGoToProfile}><Translate path="topbar.profile" /></Tags.ProfileBtn>
                {auth === 'BOTH' ? <Tags.ProfileBtn href="#" onClick={handleGoToPatientMode}><Translate path="topbar.changeProfile" /></Tags.ProfileBtn> : null}
                <Tags.ProfileBtn href="#" onClick={handleLogout}><Translate path="topbar.logout" /></Tags.ProfileBtn>
            </Tags.ProfileWrapper> : <Tags.UserBadge onClick={handleShowProfile}>
                {photo ? <Tags.Image src={photo} /> : <span>{String(userName ?? '').substring(0,1)}</span>}
            </Tags.UserBadge>}
        </Tags.TopbarUser >
    </Tags.TopbarElement>
}