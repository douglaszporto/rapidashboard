import { HTMLProps } from 'react';
import styled from 'styled-components';

const GridTimeHeaderRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    border-bottom: 1px solid var(--theme-color-line2);
`;
const GridTimeHeaderCell = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    padding: 0.3rem;

    &:not(:first-child) {
        border-left: 1px solid var(--theme-color-line2);
    }

    &.today {
        background-color: var(--theme-color-primary);
    }

    &.otherMonth {
        opacity: .3;
    }
`;
const GridTimeHeaderDay = styled.div`
    font-size: 1rem;
    width: 100%;
    text-align: left;
    opacity: .5;

    .today & {
        opacity: 1;
        color: #fff;
    }
`;
const GridTimeHeaderName = styled.div`
    font-size: 1.3rem;
    width: 100%;
    text-align: center;

    .today & {
        color: #fff;
    }
`;

type GridTypeHeaderProps = Omit<HTMLProps<HTMLDivElement>,'start'> & {
    start: Date,
    viewmode: 'MONTH'|'2WEEK'|'WEEK',
    labelDayName?: string[],
    refDate: Date,
}

const getDay = (dt:Date, add:number) => {
    let d = new Date(dt);
    d.setDate(d.getDate()+add);
    return d.getDate();
}

const isToday = (dt:Date, add:number,  refDate:Date, viewmode:'MONTH'|'2WEEK'|'WEEK') => {
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

export const GridTimeHeader:React.FC<GridTypeHeaderProps> = ({start, viewmode, refDate, labelDayName}:GridTypeHeaderProps) => {
    return <GridTimeHeaderRow>
        {viewmode === 'WEEK' ? <div style={{width:"3rem"}}></div> : null}
        {Array(7).fill(1).map((_,i)=> <GridTimeHeaderCell key={i} className={isToday(start,i, refDate, viewmode)}>
            <GridTimeHeaderDay>{getDay(start,i)}</GridTimeHeaderDay>
            <GridTimeHeaderName>{labelDayName ? labelDayName[i] : ""}</GridTimeHeaderName>
        </GridTimeHeaderCell>)}
    </GridTimeHeaderRow>
};