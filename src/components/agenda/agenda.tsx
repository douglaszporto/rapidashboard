import React, { useEffect } from 'react';
import styled from 'styled-components';

import { DateIsSameDay, DaysBetween } from '../../util/dates';

const AgendaWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
`;

const AgendaTimeColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    width: 3rem;
    height: 100%;
    border-right: 1px solid var(--theme-color-border-weak);
`;

const AgendaDayColumn = styled.div`
    flex: 1;
    min-width: 6rem;
    border-right: 1px solid var(--theme-color-border-weak);
    position: relative;

    &:last-child {
        border-right: none;
    }
`;

const AgendaHeader = styled.div<{bgColor?:string|false}>`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    width: 100%;
    height: 4rem;
    border-bottom: 1px solid var(--theme-color-border-weak);

    &.today {
        background-color: ${p => p.bgColor === false ? 'transparent' : (p.bgColor ?? 'var(--theme-color-primary)') } ;
    }

    .blocked &:not(.today) {
        color: var(--theme-color-font-empty);
    }
`;

const AgendaHeaderName = styled.div`
    font-size: 0.8rem;
    line-height: 1rem;
    padding: 0;
    margin: 0.3rem;
    color: var(--theme-color-font);
    height: 1.5rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
`;

const AgendaHeaderNumber = styled.div`
    font-size: 1.5rem;
    line-height: 1.5rem;
    padding: 0;
    margin: 0.3rem;
    color: var(--theme-color-font);
    height: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-end;
    text-align: right;
`;


const AgendaTime = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    width: 100%;
    height: 2rem;
    font-size: 0.8rem;
    line-height: 1rem;
    padding: 0 0.1rem;
    margin: 0;
    color: var(--theme-color-font-empty);
    border-bottom: 1px solid var(--theme-color-border-weak);

    &:last-child {
        border-bottom: none;
    }
`;

const AgendaSlot = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2rem;
    padding: 0.1rem;
    box-sizing: border-box;
    margin: 0;
    cursor: pointer;
    border-bottom: 1px solid var(--theme-color-border-weak);

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background-color: var(--theme-color-background-aux);
        color: var(--theme-color-font);
    }

    .blocked & {
        cursor: default;
        background: repeating-linear-gradient(
            45deg,
            var(--theme-color-background-aux2),
            var(--theme-color-background-aux2) 10px,
            var(--theme-color-background-aux3) 10px,
            var(--theme-color-background-aux3) 20px
        );
    }
`;

const AgemdaEvent = styled.div<{bgColor?:string|false}>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    width: 100%;
    padding: 0;
    margin: 0;
    cursor: pointer;
    border-bottom: 1px solid var(--theme-color-border-weak);
    background-color: ${p => p.bgColor === false ? 'transparent' : p.bgColor ?? 'var(--theme-color-primary)'};
    color: var(--theme-color-font);
`;



export interface EventItem {
    date: Date;
    hour: number;
    duration: number;
    title: string;
    description?: string;
    color?: string|false;
}

export interface AgendaProps {
    dateStart?: Date;
    dateEnd?: Date;
    events?: EventItem[];
    eventAdapter?: (event: any) => JSX.Element;
    labelDay?: Record<string,string>;
    lockedWeekdays?: number[];
    disableBefore?: Date;
    onClick?: (date: Date, hour: number) => void;
    onEventClick?: (event: EventItem) => void;
}

const createArray = (length: number) => Array.from({length}, (_, index) => index);
const today = new Date();

export const Agenda: React.FC<AgendaProps> = ({dateStart, dateEnd, labelDay, lockedWeekdays, disableBefore, events, eventAdapter, onEventClick, onClick}) => {

    const [times, setTimes] = React.useState<number>(0);
    const [hourStart, setHourStart] = React.useState<number>(0);
    const [days, setDays] = React.useState<Date[]>([]);


    const handleClick = (date: Date, hour: number) => {
        if (disableBefore && DaysBetween(date, disableBefore) < 1) {
            return;
        }

        onClick && onClick(date, hour);
    }

    const handleClickEvent = (e: EventItem) => {
        onEventClick && onEventClick(e);
    }


    useEffect(() => {
        const dtStart = dateStart ? dateStart : new Date();
        const dtEnd = dateEnd ? dateEnd : new Date();

        const start = dtStart.getHours();
        const end = dtEnd.getHours();

        setTimes(end - start);
        setHourStart(start);

        const firstDay = new Date(dtStart);
        firstDay.setHours(start, 0, 0, 0);
        firstDay.setDate(firstDay.getDate() - firstDay.getDay() - 1);

        const days = [];

        for (let i=0; i<7; i++) {
            firstDay.setDate(firstDay.getDate() + 1);
            days.push(new Date(firstDay));
        }

        setDays(days);
    }, [dateStart, dateEnd, disableBefore, events]);	


    return (
        <AgendaWrapper>
            <AgendaTimeColumn>
                <AgendaHeader bgColor={false}></AgendaHeader>
                {createArray(times).map((time, index) => (
                    <AgendaTime key={index}>{String(hourStart + time).padStart(2,'0')}:00</AgendaTime>
                ))}
            </AgendaTimeColumn>
            {days.map((day, index) => (
                <AgendaDayColumn key={index} className={((disableBefore && DaysBetween(day, disableBefore) < 1) || (lockedWeekdays && lockedWeekdays.includes(day.getUTCDay()))) ? 'blocked' : ''}>
                    <AgendaHeader className={DateIsSameDay(day, today) ? 'today' : ''}>
                        <AgendaHeaderName>{(labelDay ? labelDay[day.getDay()] : '') ?? ''}</AgendaHeaderName>
                        <AgendaHeaderNumber>{String(day.getDate()).padStart(2,'0')}</AgendaHeaderNumber>
                    </AgendaHeader>
                    {createArray(times).map((time, index) => (
                        <AgendaSlot key={index} onClick={()=>handleClick(day,hourStart + time)}></AgendaSlot>
                    ))}
                    {events && events.length ? events.filter(event => DateIsSameDay(day, event.date)).map(e => <AgemdaEvent bgColor={e.color} style={{
                        top: `${4 + (e.hour - hourStart) * 2}rem`,
                        height: `${e.duration * 2}rem`
                    }} onClick={()=>handleClickEvent(e)}>
                        {eventAdapter ? eventAdapter(e) : <>
                            <div>{e.title}</div>
                            <div>{e.description}</div>
                        </>}
                        
                    </AgemdaEvent>) : null}
                </AgendaDayColumn>
            ))}
        </AgendaWrapper>
    );
};