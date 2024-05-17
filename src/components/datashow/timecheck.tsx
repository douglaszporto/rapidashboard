import { useEffect, useState } from 'react'

import { MinMax } from '../../util/util';
import { TimeDiffInHoursPercent, TimeFromIntMinutesToTime } from '../../util/time';
import * as Tags from './styles';

type TimecheckProps = {
    start?: number;
    end?: number;
    date: Date;
    eventName?: string;
    location?: string;
    events: {
        id: string;
        date: string;
        time: number;
        timeend: number;
        location_id: string;
        event_name: string;
    }[];
    locationList?: {
        id?: string;
        name: string;
    }[];
    onConflict?: Function;
}

type TimecheckEvent = {
    time: number,
    offset: string,
    height: string,
    heightVal: number,
    name?: string,
    clock?: string;
    location?: string,
    conflict: boolean,
    overflow?: boolean,
}

const seekForConflictTime = (ev1TimeStart: number, ev1TimeEnd: number, ev2TimeStart: number, ev2TimeEnd: number) => {
    return (ev1TimeStart >= ev2TimeStart && ev1TimeStart < ev2TimeEnd) ||
           (ev1TimeEnd > ev2TimeStart && ev1TimeEnd <= ev2TimeEnd) ||
           (ev2TimeStart >= ev1TimeStart && ev2TimeStart < ev1TimeEnd) ||
           (ev2TimeEnd > ev1TimeStart && ev2TimeEnd <= ev1TimeEnd)

}

const Timecheck:React.FC<TimecheckProps> = ({start, end, date, eventName, location, locationList, events}: TimecheckProps) => {

    const [startTime, setStartTime] = useState<number>();
    const [endTime, setEndTime] = useState<number>();
    const [firstTime, setFirstTime] = useState<number>(0);
    const [otherEvents, setOtherEvents] = useState<TimecheckEvent[]>();


    const timerows = (() => {
        let hs = (startTime ?? 0)/60;
        let he = (endTime ?? 0)/60;
        let s = Math.floor(hs) - Math.min(hs,2);
        let e = Math.floor(he) + Math.min(24-he,2);

        if (s > 19) {
            s = 19;
        }

        if (e < 5) {
            e = 5;
        }

        const len = MinMax(e-s, 5, 10);

        return Array(len).fill(0).map((time,index) => ({
            time,
            hour: s+index,
            timestring: TimeFromIntMinutesToTime((s+index)*60),
        }))
    })();
    
    const timestart = (():TimecheckEvent => {
        const hDiff = startTime && endTime ? TimeDiffInHoursPercent(startTime, endTime) : 0;
        const h = Math.min(hDiff, 5) * 3.5;
        return {
            time: Math.floor((startTime ?? 0)/60),
            offset: (((startTime ?? 0) % 60)/60)*3.5+"rem",
            height: h+"rem",
            heightVal: h,
            conflict: false,
            overflow: hDiff > 5,
        };
    })();


    useEffect(() => {
        if (start) {
            setStartTime(start ?? 0);

            let hs = start/60;
            let s = Math.min(Math.floor(hs) - Math.min(hs,2), 19);
            setFirstTime(s);
        }   
        if (end) {
            setEndTime(end ?? 0);
        }
    }, [start, end]);

    useEffect(()=>{
        if (!startTime || !endTime || !date) {
            return;
        }

        setOtherEvents(events?.map((item) => {
            let time = Math.floor(item.time/60);
            let h = item.time ? (Math.min(TimeDiffInHoursPercent(item.time, item.timeend), 5) - (firstTime > time ? firstTime-time : 0) ) * 3.5 : 0;
            let ev:TimecheckEvent = {
                time: time,
                clock: TimeFromIntMinutesToTime(item.time),
                offset: (((item.time ?? 0) % 60)/60)*3.5+"rem",
                height: h+"rem",
                heightVal: h,
                name: item.event_name,
                location: locationList?.filter(loc=>loc.id === item.location_id)[0]?.name,
                conflict: seekForConflictTime(item.time, item.time+120, startTime, endTime)
            };
            return ev;
        }) ?? []);

    }, [startTime, endTime, events]);

    return <Tags.TimecheckContainer>
        {timerows.map((row, index) => <Tags.TimechackRow key={row.timestring}>
            <Tags.TimecheckRowTime>{row.timestring}</Tags.TimecheckRowTime>
            <Tags.TimecheckRowContent>
                {index === 0 ? otherEvents?.filter(ev => row.hour > ev.time && row.hour <= (ev.time+120) && ev.heightVal > 0 ).map(ev => <Tags.TimecheckEventOther className={ev.conflict ? 'conflict' : ''}
                    style={{
                        top: ev.offset,
                        height: ev.height,
                    }}>
                        <Tags.TimecheckEventName className="other"><Tags.TimecheckEventTime>{ev.clock}</Tags.TimecheckEventTime> {ev.name}</Tags.TimecheckEventName>    
                        <Tags.TimecheckEventLocation>{ev.location}</Tags.TimecheckEventLocation>
                    </Tags.TimecheckEventOther>
                ) : null}
                {otherEvents?.filter(ev => row.hour === ev.time).map(ev => <Tags.TimecheckEventOther className={ev.conflict ? 'conflict' : ''}
                    style={{
                        top: ev.offset,
                        height: ev.height,
                    }}>
                        <Tags.TimecheckEventName className="other">{ev.name}</Tags.TimecheckEventName>    
                        <Tags.TimecheckEventLocation>{ev.location}</Tags.TimecheckEventLocation>
                    </Tags.TimecheckEventOther>
                )}
                {timestart.time === row.hour && startTime !== undefined && endTime !== undefined ? <Tags.TimecheckEventCurrent 
                    style={{
                        top: timestart.offset,
                        height: timestart.height,
                    }}>
                        <Tags.TimecheckEventName>{eventName ?? ''}</Tags.TimecheckEventName>
                        <Tags.TimecheckEventLocation>{location ?? ''}</Tags.TimecheckEventLocation>
                        {timestart.overflow ? <Tags.TimechackOverflow></Tags.TimechackOverflow> : null}
                    </Tags.TimecheckEventCurrent> : null}
            </Tags.TimecheckRowContent>
        </Tags.TimechackRow>)}
    </Tags.TimecheckContainer>
    
}

export {Timecheck};