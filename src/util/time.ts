/**
 * @deprecated Use TimeFromIntMinutesToTime instead
*/

import i18next from "i18next";

export const TimeFromIntToHour = (value: number): string => {
    let hour = String("0"+value);
    hour = hour.substring(hour.length - 2, hour.length);

    return `${hour}:00`;
}

export const TimeDiffFromStringsInHours = (value1: string, value2: string): string => {

    let [h1, m1] = value1.split(":").map(i=>parseInt(i,10));
    let [h2, m2] = value2.split(":").map(i=>parseInt(i,10));
    let v1 = h1*60 + m1;
    let v2 = h2*60 + m2;
    let v3 = Math.abs(v1 - v2);
    let hours = Math.floor(v3/60);
    let minutes = v3 - hours*60;

    return String(hours*100 + (100*minutes/60)) + "%";
}

export const TimeDiffInHoursPercent = (value1: number, value2: number): number => {
    let v = Math.abs(value1 - value2);
    let hours = Math.floor(v/60);
    let minutes = v % 60;

    return hours + (minutes/60);
}

export const TimeFromTimeToIntMinutes = (time:string): number|undefined => {
    if (!time || time.length != 5) {
        return undefined;
    }

    let [hour, minute] = time.split(":");

    if (!hour || !minute) {
        return undefined;
    }

    return parseInt(hour, 10)*60 + parseInt(minute, 10);
};

export const TimeFromIntMinutesToTime = (time:number | undefined, separator?:string): string|undefined => {
    if (time === undefined || time < 0 || time >1440) {
        return undefined;
    }

    let [hour, min] = [Math.floor(time/60), time % 60];
    
    let h = String("0" + hour);
    let m = String("0" + min);
    
    h = h.substring(h.length-2, h.length);
    m = m.substring(m.length-2, m.length);
    
    return `${h}${separator ?? 'h'}${m}`;
};

export const TimeFromUTCToView = (dt:Date | undefined, separator?:string): string | undefined => {
    if (dt === undefined || isNaN(dt.getTime())) {
        return undefined;
    }

    let [hour, min] = [dt.getHours(), dt.getMinutes()];
    
    let h = String("0" + hour);
    let m = String("0" + min);
    
    h = h.substring(h.length-2, h.length);
    m = m.substring(m.length-2, m.length);
    
    return `${h}${separator ?? 'h'}${m}`;
};

export const TimeDiffAsText = (start:number, end:number) => {
    const diff = end-start;
    if (diff < 0) {
        return '';
    }

    const hours = Math.floor(diff/60);
    const minutes = diff % 60;

    if (hours > 0 && minutes === 0) {
        return hours + ' ' + i18next.t(`time.${hours === 1 ? 'hour' : 'hours'}`);
    }

    if (hours === 0 && minutes > 0) {
        return minutes + ' ' + i18next.t('time.minutes');
    }

    if (hours > 0 && minutes > 0) {
        return i18next.t('time.mix').replace('$1', String(hours)).replace('$2', String(minutes));
    }

    return '-';


};