import React from 'react';

export interface CircularProgressProps {
    size: number;
    progress: number;
    width?: number;
    bgColor?: string;
    fgColor?: string;
}

export const CircularProgress:React.FC<CircularProgressProps> = ({size, progress, width, bgColor, fgColor}:CircularProgressProps) => {
    const r = (size-(width ?? 20))/2;
    const circumference = 2 * Math.PI * r;
    const filled = circumference*progress/100;

    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="circular-progress" style={{transformOrigin:`${size/2} ${size/2}`, transform:"rotate(-90deg)"}} >
            <circle className="bg" cx={size/2} cy={size/2} r={r} fill="none" stroke={bgColor} stroke-width={width}></circle>
            <circle className="fg" cx={size/2} cy={size/2} r={r} fill="none" stroke={fgColor} stroke-linecap="round" stroke-width={width} stroke-dasharray={`${filled} ${circumference-filled}`}></circle>
        </svg>
    );
};