/**
 * @deprecated Use TimeFromIntMinutesToTime instead
*/
export declare const TimeFromIntToHour: (value: number) => string;
export declare const TimeDiffFromStringsInHours: (value1: string, value2: string) => string;
export declare const TimeDiffInHoursPercent: (value1: number, value2: number) => number;
export declare const TimeFromTimeToIntMinutes: (time: string) => number | undefined;
export declare const TimeFromIntMinutesToTime: (time: number | undefined, separator?: string) => string | undefined;
export declare const TimeFromUTCToView: (dt: Date | undefined, separator?: string) => string | undefined;
export declare const TimeDiffAsText: (start: number, end: number) => string;
