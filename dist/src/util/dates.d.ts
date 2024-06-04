export declare const DateStrFromUTCToView: (value?: string, showTime?: boolean) => string;
export declare const DateFromUTCToView: (value: Date | undefined, showTime?: boolean, options?: {
    noValue?: string;
}) => string;
export declare const DateFromISOToDayMonth: (value: string | undefined) => string;
export declare const DateFromDateToMonthView: (value?: Date) => string;
export declare const DateFromDateToMonthYearView: (value?: Date) => string;
export declare const DateFromMonthAndYearToMonthView: (month: number, year: number) => string;
export declare const DateFromViewToUTC: (value: string) => string | undefined;
export declare const DateFromDateToUTC: (dt?: Date | undefined) => string | undefined;
export declare const DateFromUTCToDate: (value: string | undefined) => Date | undefined;
export declare const DateFromViewToDate: (value: string | undefined | null) => Date | undefined;
export declare const DateFromISOToTimeAt: (value: string | undefined | null) => string | undefined;
export declare const CalculateYearsFromDate: (value: string) => number;
export declare const CalculateYearsFromISO: (value: string) => number;
/**
 * @deprecated
*/
export declare const DayFromInternal: (value: string) => string;
export declare const MonthNameShortFromInternal: (value: string, i18n: Function) => string;
export declare const DayNameFromInternal: (value: string, i18n: Function) => string;
export declare const DayNameFromISO: (value?: string, fullname?: boolean) => string;
export declare const DateIsSameDay: (dt1: Date, dt2: Date) => boolean;
export declare const DateIntervalString: (dt1?: Date, dt2?: Date) => string;
export declare const DateSplitParts: (dt?: Date) => number[];
export declare const DaysUntil: (dt?: string) => number;
export declare const DateFromISOToWeekday: (dt?: string) => string;
