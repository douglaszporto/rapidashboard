import { HTMLProps, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { TimeFromIntMinutesToTime } from '../../util/time';
import { DateSplitParts } from '../../util/dates';

const GridTimeTableRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    height: 3rem;
`;
const GridTimeTableTime = styled.div`
    width: 3rem;
    font-size: 0.8rem;
    padding: 0 0.3rem;
    color: var(--theme-color-font-weak);
    border-bottom: 1px solid var(--theme-color-line2);
`;
const GridTimeTableContent = styled.div`
    border-bottom: 1px dashed var(--theme-color-line2);
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    
    &:not(:first-child) {
        border-left: 1px solid var(--theme-color-line2);
    }
`;
const GridTimeTableSpace = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    min-height: 8rem;
    width: 100%;
`;
const GridTimeTableCell = styled.div`
    position: relative;
    flex: 1;

    &.today {
        border: 1px solid var(--theme-color-primary);
    }
    .time &.today {
        border-bottom: 0;
        border-top: 0;
    }
    .lasttime &.today {
        border-top: 0;
    }

    &.otherMonth {
        opacity: .3;
    }
    
    &.compact {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: stretch;
        align-items: center;
        padding-bottom: 2rem;
    }
`;
const GridTimeTableEventElement = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
    width: 90%;
    position:relative;
    z-index: 10;
    overflow: hidden;
    cursor: pointer;

    &:hover {
        outline: 1px solid white;
    }
    
    &.full {
        position: absolute;
    }
    &.compact {
        margin-top: 0.4rem;
    }

    &.waiting {
        border: 1px solid var(--theme-color-primary);
        background-color: var(--theme-color-background-aux);
    }
    &.confirmed {
        border: 1px solid var(--theme-color-primary-transparent);
        background-color: var(--theme-color-primary-transparent);
        //color: var(--theme-color-primary-font);
    }
    &.done {
        border: 1px solid var(--theme-color-green);
        background-color: var(--theme-color-green);
    }
    &.cancelled {
        border: 1px solid var(--theme-color-gray);
        background-color: var(--theme-color-gray);
    }
    &.lost {
        border: 1px solid var(--theme-color-yellow);
        background-color: var(--theme-color-yellow);
    }
`;
const GridTimeTableNoEvent = styled.div`
    flex: 1;
    cursor: pointer;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;

    &.full {
    }

    &:hover {
        background-color: var(--theme-color-background-aux2);
    }
`;
const GridTimeTableEventTime = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    
`;
const GridTimeTableTimeVal = styled.div`
    font-size:0.7rem;
    line-height:0.7rem;
    padding: 0.3rem;
`;
const GridTimeTableEventName = styled.div`
    font-size:1rem;
    line-height:1rem;
    flex: 1;
    overflow: hidden;
`;

interface EventProps {
    id: string;
    status: string;
    event_name: string;
    date: string;
    timeend: number;
    time: number;
}

type GridTimeTableProps<T extends EventProps> = Omit<HTMLProps<HTMLDivElement>,"start"> & {
    startDate: Date;
    starttime: number;
    endtime: number;
    viewmode: 'MONTH'|'2WEEK'|'WEEK';
    events: T[];
    navigate: (to: string, options?: any) => void;
    drag: (fn: () => any) => [{ isDragging:boolean }, drag: any];
    drop: (fn: () => any, deps:any) => [{ isOver:boolean }, drop: any];
    onMoveItemFn: (params: any, item: T) => Promise<any>,
    refDate: Date;
}

type GridTimeItemsProps<T extends EventProps> = HTMLProps<HTMLDivElement> & {
    events: T[],
    full: boolean,
    conflicts?: number,
    dragHook: (fn: () => any) => [{ isDragging:boolean }, drag: any],
    navigate: (to: string, options?: any) => void;
}

type GridTimeTableEventProps<T extends EventProps> = HTMLProps<HTMLDivElement> & {
    event: T,
    dragHook: (fn: () => any) => [{ isDragging:boolean }, drag: any]
}

type GridTimeTableAvailableProps<T extends EventProps> = HTMLProps<HTMLDivElement> & {
    startDate: Date,
    nextDate: number,
    hour?: number,
    dropHook: (fn: () => any, deps:any) => [{ isOver:boolean }, drop: any],
    onMoveItemFn: (params: any, item: T) => Promise<any>,
}

const GridTimeTableEvent:React.FC<GridTimeTableEventProps<EventProps>> = ({event, style, onClick, className, dragHook, children}:GridTimeTableEventProps<EventProps>) => {
    
    const [{ isDragging }, drag] = dragHook(() => ({
        type: 'event',
        item: {...event},
        collect: (monitor:any) => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    return <GridTimeTableEventElement ref={drag} style={{...style, opacity: isDragging ? 0.3 : 1}} onClick={onClick} className={className}>
        {children}
    </GridTimeTableEventElement>;
};

const GridTimeTableAvailable = <T extends EventProps>({startDate, nextDate, hour, onClick, className, children, dropHook, onMoveItemFn}:GridTimeTableAvailableProps<EventProps>):JSX.Element => {
    
    const update = useRef<boolean>(true);

    const [{ isOver }, drop] = dropHook(() => ({
        accept: 'event',
        drop: async (item: T) => {
            let itemDt = new Date(item.date);
            let dt = new Date(startDate);
            dt.setDate(dt.getDate() + nextDate);
            dt.setHours(hour ?? itemDt.getHours());
            dt.setMinutes(0);
            dt.setSeconds(0);
            dt.setMilliseconds(0);

            let data = Object.fromEntries(Object.entries(item).filter(([_, v]) => v != null)) as EventProps;
            let itemResult = {...item};
            itemResult.timeend = (hour ? hour*60 : item.time) + (item.timeend-item.time);
            itemResult.time = hour ? hour*60 : item.time;

            await onMoveItemFn({...data, timeend: itemResult.timeend, time:itemResult.time, keep_time: !hour, move_to: dt.toISOString()}, itemResult);
        },
        collect: (monitor:any) => ({
            isOver: !!monitor.isOver(),
        }),
    }), [startDate, nextDate, hour]);

    useEffect(() => {
        return () => {update.current = false;};
    }, []);

    return <GridTimeTableNoEvent ref={drop} onClick={onClick} className={className} style={isOver ? {backgroundColor: 'var(--theme-color-primary)'} : {}}>
        {children}
    </GridTimeTableNoEvent>;
};

const GridTimeItems:React.FC<GridTimeItemsProps<EventProps>> = ({events, full, conflicts, dragHook, navigate}:GridTimeItemsProps<EventProps>) => {
    const goToEdit = (id:string) => {
        navigate(`/calendar/${id}`);
    }

    let style:any = {};
    if (events.length === 1 && full) {
        style = {
            position: 'absolute',
            height: ((events[0].timeend-events[0].time)*100/60)+"%",
            width: String(100 - (conflicts ?? 0)*10)+"%",
            top: String((events[0].time % 60)*100/60)+"%",
            left: String((conflicts ?? 0)*10)+"%",
        }
    }

    return <>
        {events.map((a,i) => <GridTimeTableEvent event={a} key={i} dragHook={dragHook} style={style} onClick={()=>{goToEdit(a.id)}} className={(full ? '' : 'compact ') + a.status.toLowerCase()}>
            <GridTimeTableEventTime>
                <GridTimeTableTimeVal>{TimeFromIntMinutesToTime(a.time)}</GridTimeTableTimeVal>
                <GridTimeTableTimeVal>{TimeFromIntMinutesToTime(a.timeend)}</GridTimeTableTimeVal>
            </GridTimeTableEventTime>
            <GridTimeTableEventName>
                {a.event_name}
            </GridTimeTableEventName>
        </GridTimeTableEvent>)}
    </>
}

export const GridTimeTable:React.FC<GridTimeTableProps<EventProps>> = ({starttime, endtime, viewmode, startDate, events, refDate, navigate, drag, drop, onMoveItemFn}:GridTimeTableProps<EventProps>) => {

    const [start, setStart] = useState<number>(1);
    const [end, setEnd] = useState<number>(1);

    useEffect(()=>{
        setStart(Math.floor(starttime/60));
    },[starttime]);

    useEffect(()=>{
        setEnd(Math.floor(endtime/60));
    },[endtime]);

    const isToday = (dt:Date, add:number) => {
        let d = new Date(dt);
        d.setDate(d.getDate()+add);
        d.setHours(0);
        d.setMinutes(0);
        d.setSeconds(0);
        d.setMilliseconds(0);
    
        let now = new Date();
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);
        now.setMilliseconds(0);

        let classes = d.getTime() === now.getTime() ? 'today ' : '';

        if(viewmode === 'MONTH') {
            classes += d.getMonth() === refDate.getMonth() ? '' : 'otherMonth'
        }

        return classes;
    }

    const handleGoToNewForm = (nextDay: number, hour?: number) => {
        let dt = new Date(startDate);
        dt.setDate(dt.getDate() + nextDay);

        navigate('/calendar/new', {replace: false, state: {date: dt, hour}});
    }

    const checkHasEvent = (nextDay: number, hour?: number) => {
        let dt = new Date(startDate);
        dt.setDate(dt.getDate() + nextDay);
        dt.setHours(hour ?? 0);

        let d = DateSplitParts(dt);

        if (hour) {
            let a = events.filter((a) => {
                let aDate = DateSplitParts(new Date(a.date));
                return (aDate[0] === d[0] && aDate[1] === d[1] && aDate[2] === d[2] && aDate[3] === d[3])
            });

            
            if (a && a.length) {
                let appts = [];
                for(let i in a){
                    let adt2 = DateSplitParts(new Date((a[i] as EventProps).date));
                    let tm2 = adt2[3]*60+adt2[4];
                    
                    let conflicts = events.filter(ap => {
                        if (ap.id === (a[i] as EventProps).id) {
                            return false;
                        }
                        let adt1 = DateSplitParts(new Date(ap.date));
                        let tm1 = adt1[3]*60+adt1[4];
                        let tme1 = tm1 + ap.timeend-ap.time;

                        return adt1[0] === adt2[0] && adt1[1] === adt2[1] && adt1[2] === adt2[2] && tm2 >= tm1 && tm2 < tme1;
                    });
                    appts.push(<GridTimeItems navigate={navigate} events={[a[i]]} full={true} dragHook={drag} conflicts={conflicts.length}/>);
                }
                return appts;
            }
        } else {
            let a = events.filter((a) => {
                let aDate = DateSplitParts(new Date(a.date));
                return (aDate[0] === d[0] && aDate[1] === d[1] && aDate[2] === d[2])
            });

            if (a) {
                return <GridTimeItems events={a} navigate={navigate} dragHook={drag} full={false} />
            }
        }
        return null;
    }

    return <>
        {viewmode === 'WEEK' ? Array(end-start).fill(0).map((_,i)=> <GridTimeTableRow key={i}>
            <GridTimeTableTime>{TimeFromIntMinutesToTime((start+i)*60)}</GridTimeTableTime>
            <GridTimeTableContent className={(start+i+1) === end ? 'lasttime' : 'time'}>
                {Array(7).fill(1).map((_,j)=> <GridTimeTableCell key={j} className={isToday(startDate,j)}>
                    <GridTimeTableAvailable onMoveItemFn={onMoveItemFn} dropHook={drop} onClick={()=>{handleGoToNewForm(j, start+i)}} startDate={startDate} nextDate={j} hour={start+i} />
                    {checkHasEvent(j, start+i)}
                </GridTimeTableCell>)}
            </GridTimeTableContent>
        </GridTimeTableRow>) : <GridTimeTableSpace>
            <GridTimeTableContent>
                {Array(7).fill(1).map((_,j)=> <GridTimeTableCell key={j} className={"compact " + isToday(startDate,j)}>
                    <GridTimeTableAvailable onMoveItemFn={onMoveItemFn} className="full" dropHook={drop} onClick={()=>{handleGoToNewForm(j)}} startDate={startDate} nextDate={j} />
                    {checkHasEvent(j)}
                </GridTimeTableCell>)}
            </GridTimeTableContent>
        </GridTimeTableSpace>}
    </>;
};