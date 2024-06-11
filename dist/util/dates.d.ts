export declare const SetDateLocale: (locale: string) => void;
export declare const DateStrFromUTCToView: (value?: string, showTime?: boolean) => string;
export declare const DateFromUTCToView: (value: Date | undefined, showTime?: boolean, options?: {
    noValue?: string;
}) => string;
export declare const DateFromISOToDayMonth: (value: string | undefined) => string;
export declare const DateFromDateToMonthView: (value?: Date) => string;
export declare const DateFromDateToMonthYearView: (value?: Date) => string;
declare const month_i18n: readonly ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
type MonthI18n = typeof month_i18n[number];
export declare const DateFromMonthAndYearToMonthView: (month: number, year: number, i18n?: {
    "01"?: string | undefined;
    "02"?: string | undefined;
    "03"?: string | undefined;
    "04"?: string | undefined;
    "05"?: string | undefined;
    "06"?: string | undefined;
    "07"?: string | undefined;
    "08"?: string | undefined;
    "09"?: string | undefined;
    10?: string | undefined;
    11?: string | undefined;
    12?: string | undefined;
}) => string;
export declare const DateFromViewToUTC: (value: string) => string | undefined;
export declare const DateFromDateToUTC: (dt?: Date | undefined) => string | undefined;
export declare const DateFromUTCToDate: (value: string | undefined) => Date | undefined;
export declare const DateFromViewToDate: (value: string | undefined | null) => Date | undefined;
export declare const DateFromISOToTimeAt: (value: string | undefined | null, i18n?: string) => string | undefined;
export declare const CalculateYearsFromDate: (value: string) => number;
export declare const CalculateYearsFromISO: (value: string) => number;
/**
 * @deprecated
*/
export declare const DayFromInternal: (value: string) => string;
export declare const MonthNameShortFromInternal: (value: string, i18n: Function) => string;
export declare const DayNameFromInternal: (value: string, i18n: Function) => string;
declare const days: readonly ["0", "1", "2", "3", "4", "5", "6"];
type Days = typeof days[number];
export declare const DayNameFromISO: (value?: string, i18n?: {
    0?: string | undefined;
    1?: string | undefined;
    2?: string | undefined;
    3?: string | undefined;
    4?: string | undefined;
    5?: string | undefined;
    6?: string | undefined;
}) => string;
export declare const DateIsSameDay: (dt1: Date, dt2: Date) => boolean;
export declare const DateIntervalString: (dt1?: Date, dt2?: Date, i18n?: string) => string;
export declare const DateSplitParts: (dt?: Date) => number[];
export declare const DaysUntil: (dt?: string | Date) => number;
export declare const DateFromISOToWeekday: (dt?: string) => string;
export declare const DaysBetween: (dt1: Date, dt2: Date) => number;
export {};
