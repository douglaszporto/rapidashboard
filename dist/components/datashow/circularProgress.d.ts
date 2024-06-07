import React from 'react';
export interface CircularProgressProps {
    size: number;
    progress: number;
    width?: number;
    bgColor?: string;
    fgColor?: string;
}
export declare const CircularProgress: React.FC<CircularProgressProps>;
