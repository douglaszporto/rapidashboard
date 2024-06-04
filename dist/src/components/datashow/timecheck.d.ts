/// <reference types="react" />
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
};
declare const Timecheck: React.FC<TimecheckProps>;
export { Timecheck };
