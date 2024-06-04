import { HTMLProps, useEffect, useState } from 'react';

import { GridTimeTable } from './gridtimetable';
import { GridTimeHeader } from './gridtimeheader';

type GridTimeProps<T=any> = Omit<HTMLProps<HTMLDivElement>,'start'|'end'> & {
    start: Date;
    end: Date;
    refDate: Date;
    starttime: number;
    endtime: number;
    viewmode: 'MONTH'|'2WEEK'|'WEEK';
    events: T[];
    navigate: (url:string, options?:any) => void;
    drag: (fn: () => any) => [{ isDragging:boolean }, drag: any];
    drop: (fn: () => any, deps:any) => [{ isOver:boolean }, drop: any];
    onMoveItem: (params: any, item: T) => Promise<any>,
}

export const GridTime:React.FC<GridTimeProps> = ({start, end, refDate, starttime, endtime, viewmode, events, drag, drop, navigate, onMoveItem}:GridTimeProps) => {

    const [weeks, setWeeks] = useState<Date[]>([]);

    useEffect(()=>{
        let result:Date[] = [start];
        let dt = new Date(start);

        if (viewmode === '2WEEK') {
            dt.setDate(dt.getDate() + 7);
            result.push(dt);
        } else if (viewmode === 'MONTH') {
            dt.setDate(dt.getDate() + 7);
            while(dt.getTime() < end.getTime()) {
                result.push(new Date(dt));
                dt.setDate(dt.getDate() + 7);
            }
        }

        setWeeks(result);
    }, [start, viewmode]);

    return <>
        {weeks.map((day,i) => <div key={i}>
            <GridTimeHeader start={day} viewmode={viewmode} refDate={refDate} />
            <GridTimeTable navigate={navigate} drag={drag} drop={drop} onMoveItemFn={onMoveItem} startDate={day} events={events} starttime={starttime} endtime={endtime} viewmode={viewmode} refDate={refDate} />
        </div>)}
    </>
};