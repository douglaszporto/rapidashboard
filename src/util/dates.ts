import { TimeFromUTCToView } from './time';

let DateLocale = 'pt-BR';

export const SetDateLocale = (locale:string): void => {
    DateLocale = locale;
}

export const DateStrFromUTCToView = (value?: string, showTime?: boolean): string => {
    if (!value) {
        return '';
    }
    
    let [date, time] = value.substring(0, 19).split('T');
    let [year, month, day] = (date ?? '1970-01-01').split('-').map(i=>parseInt(i,10));
    let [hour, minute, second] = (time ?? '00:00:00').split(':').map(i=>parseInt(i,10));

    let dt = new Date(Date.UTC(year, month-1, day, hour, minute, second, 0));

    let config:any = {
        dateStyle: 'short'
    };

    if (showTime === true) {
        config = {
            dateStyle: 'short',
            timeStyle: 'short'
        };
    }

    return Intl.DateTimeFormat(DateLocale ?? 'pt-BR',  config).format(dt);
}

export const DateFromUTCToView = (value: Date | undefined, showTime?: boolean, options?:{noValue?:string}): string => {
    if (!value || isNaN(value.getTime())) {
        return options?.noValue ?? '';
    }
    
    let config:any = {
        dateStyle: 'short'
    };

    if (showTime === true) {
        config = {
            dateStyle: 'short',
            timeStyle: 'short'
        };
    }

    return Intl.DateTimeFormat(DateLocale ?? 'pt-BR',  config).format(value);
}

export const DateFromISOToDayMonth = (value: string | undefined): string => {
    if (!value || value.length === 0) {
        return '';
    }    
    let dt = new Date(value);
    return Intl.DateTimeFormat(DateLocale ?? 'pt-BR',  {day:"2-digit", month:"2-digit"}).format(dt);
}

export const DateFromDateToMonthView = (value?: Date): string => {
    if (!value || isNaN(value.getTime())) {
        return '';
    }
    
    let config:any = {
        month: 'long',
        year: 'numeric',
    };

    let result = Intl.DateTimeFormat(DateLocale ?? 'pt-BR',  config).format(value);

    return result.substring(0,1).toUpperCase() + result.substring(1);
}

export const DateFromDateToMonthYearView = (value?: Date): string => {
    if (!value || isNaN(value.getTime())) {
        return '';
    }
    
    let month = "0" + (value.getMonth()+1);
    let year = "0000" + value.getFullYear();

    month = month.substring(month.length-2, month.length);
    year = year.substring(year.length-4, year.length);

    return `${month}/${year}`;
}

const month_i18n = ["01","02","03","04","05","06","07","08","09","10","11","12"] as const;
type MonthI18n = typeof month_i18n[number];
export const DateFromMonthAndYearToMonthView = (month: number, year: number, i18n:{[K in MonthI18n]?:string}={}): string => {
    if (!month || month < 1 || month > 11) {
        return "";
    }

    let defaultMonth = {
        "01": "Jan",
        "02": "Fev",
        "03": "Mar",
        "04": "Abr",
        "05": "Mai",
        "06": "Jun",
        "07": "Jul",
        "08": "Ago",
        "09": "Set",
        "10": "Out",
        "11": "Nov",
        "12": "Dez",
    };

    let monthStr = String(month).padStart(2, '0');
    let monthName = i18n[monthStr as MonthI18n] ?? defaultMonth[monthStr as MonthI18n] ?? monthStr;

    return `${monthName}/${year}`;
}

export const DateFromViewToUTC = (value: string): string | undefined => {
    if (!value || !value.length || value.length < 10) {
        return undefined;
    }
    
    let [day, month, year] = value.substring(0, 10).split('/').map(i=>parseInt(i,10));

    let dt = new Date(year, month-1, day, 0, 0, 0, 0);
    return DateFromDateToUTC(dt);
}

export const DateFromDateToUTC = (dt?: Date | undefined): string | undefined => {
    if (!dt || isNaN(dt.getTime())) {
        return undefined;
    }
    
    return dt.toISOString();
}

export const DateFromUTCToDate = (value: string | undefined): Date | undefined => {
    if (!value) {
        return undefined;
    }
    
    const [date, time] = value.split("T");

    if (!date || !time) return undefined;

    return new Date(value);
}

export const DateFromViewToDate = (value: string | undefined | null): Date | undefined => {
    if (!value || !value.length || value.length < 10) {
        return undefined;
    }
    
    let [day, month, year] = value.substring(0, 10).split('/').map(i=>parseInt(i,10));

    return new Date(year, month-1, day, 0, 0, 0, 0);
}

export const DateFromISOToTimeAt = (value: string | undefined | null, i18n:string = ""): string | undefined => {
    if (!value || !value.length || value.length < 10) {
        return undefined;
    }
    
    const dt = new Date(value);
    return i18n.replace("$1", DateFromUTCToView(dt) ?? '').replace("$2", TimeFromUTCToView(dt) ?? '')
}

export const CalculateYearsFromDate = (value: string): number => {
    if (!value || value.length === 0) {
        return 0;
    }
    let [year, month, day] = value.split('-').map(i=>parseInt(i,10));
    let dtDiff = Date.now() - Date.UTC(year, month, day, 0, 0, 0, 0);

    return Math.floor(dtDiff/31536000000);
}

export const CalculateYearsFromISO = (value: string): number => {
    if (!value || value.length === 0) {
        return 0;
    }

    let dt = new Date(value);
    if (isNaN(dt.getTime())) {
        return 0;
    }

    let dtDiff = Date.now() - dt.getTime();

    return Math.floor(dtDiff/31536000000);
}

/**
 * @deprecated 
*/
export const DayFromInternal = (value: string): string => {
    const dt = value.split('-');

    if(dt.length !== 3) {
        return '';
    }

    return dt[2];
}

export const MonthNameShortFromInternal = (value: string, i18n: Function): string => {
    const dt = value.split('-');

    if(dt.length !== 3) {
        return '';
    }

    return i18n('dates.monthShort.'+dt[1]);
}

export const DayNameFromInternal = (value: string, i18n: Function): string => {
    const dt = value.split('-').map(i=>parseInt(i,10));
    
    if(dt.length !== 3) {
        return '';
    }

    const date = new Date(dt[0], dt[1]-1, dt[2], 0, 0, 0, 0);

    return i18n('dates.dayname.'+date.getUTCDay());
}

const days = ["0","1","2","3","4","5","6"] as const;
type Days = typeof days[number];
export const DayNameFromISO = (value?: string, i18n:{[K in Days]?:string}={}): string => {
    if (!value) {
        return "";
    }

    const defaultDay = {
        "0": "Domingo",
        "1": "Segunda",
        "2": "Terça",
        "3": "Quarta",
        "4": "Quinta",
        "5": "Sexta",
        "6": "Sábado",
    };

    const dt = new Date(value);
    const day = String(dt.getUTCDay()) as Days;
    return i18n[day] ?? defaultDay[day] ?? '';
}

export const DateIsSameDay = (dt1:Date, dt2:Date): boolean => {
    return dt1.getUTCFullYear() === dt2.getUTCFullYear() &&
           dt1.getMonth() === dt2.getMonth() &&
           dt1.getDate() === dt2.getDate();
}

export const DateIntervalString = (dt1?:Date, dt2?:Date, i18n:string = "De $1 até $2"): string => {
    if (!dt1 || isNaN(dt1.getTime()) || !dt2 || isNaN(dt2.getTime())) {
        return "";
    }

    const str = i18n;
    if (!str || typeof str !== 'string') {
        return "";
    }

    let dateStyle:any = 'long';
    let showMonth:any = undefined;
    let showDay:any = undefined;

    if (dt1.getFullYear() === dt2.getFullYear() && dt1.getFullYear() === (new Date()).getFullYear()) {
        dateStyle = undefined;
        showMonth = 'long';
        showDay = 'numeric';
    }

    const formater = Intl.DateTimeFormat(DateLocale ?? 'pt-BR', {dateStyle, month:showMonth, day:showDay});
    
    const part1 = formater.format(dt1);
    const part2 = formater.format(dt2);

    return str.replace('$1', part1).replace('$2', part2);
}

export const DateSplitParts = (dt?:Date): number[] => {
    if (!dt || isNaN(dt.getTime())) {
        return [0,0,0,0,0];
    }

    return [
        dt.getFullYear(),
        dt.getMonth()+1,
        dt.getDate(),
        dt.getHours(),
        dt.getMinutes()
    ];
}

export const DaysUntil = (dt?:string): number => {
    if (!dt || dt.length!==10) {
        return -1;
    }

    let date1 = new Date(dt+'T00:00:00.000Z');
    let date2 = new Date();
    date2.setHours(0);
    date2.setMinutes(0);
    date2.setSeconds(0);
    date2.setMilliseconds(0);

    console.log(date1);
    console.log(date2);

    if (isNaN(date1.getTime())) {
        return -1;
    }

    return Math.round((date1.getTime() - date2.getTime())/86400000);
}

export const DateFromISOToWeekday = (dt?:string): string => {
    if (!dt || !dt.length) {
        return "";
    }

    let date = new Date(dt);

    if (isNaN(date.getTime())) {
        return "";
    }

    return Intl.DateTimeFormat(DateLocale ?? 'pt-BR',  {day:"2-digit", month:"2-digit", year:"numeric", weekday:"long"}).format(date);
}