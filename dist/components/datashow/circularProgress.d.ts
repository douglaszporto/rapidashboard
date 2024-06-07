import React from 'react';
interface CircularProgressProps {
    size: number;
    progress: number;
    width?: number;
    bgColor?: string;
    fgColor?: string;
}
declare const CircularProgress: React.FC<CircularProgressProps>;
export default CircularProgress;
