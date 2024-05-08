import { ComponentType, HTMLProps } from "react";
import styled from "styled-components"

interface RowOrColumnProps extends Omit<HTMLProps<HTMLDivElement>,'children'> {
    rowAlign?: string;
    rowJustify?: string;
    rowMargin?: string;
    columnAlign?: string;
    columnJustify?: string;
    columnMargin?: string;
    children?: JSX.Element|JSX.Element[]|null;
}

interface RowTransientProps extends Omit<HTMLProps<HTMLDivElement>,'children'> {
    $rowAlign?: string;
    $rowJustify?: string;
    $rowMargin?: string;
    $columnAlign?: string;
    $columnJustify?: string;
    $columnMargin?: string;
    children?: JSX.Element|JSX.Element[]|null;
}

export const RowOrColumnElement = styled.div<RowTransientProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: ${(p:RowTransientProps) => p.$columnAlign ?? 'center'};
    justify-content: ${(p:RowTransientProps) => p.$columnJustify ?? 'stretch'};

    @media (max-width: 999px) {
        ${(p:RowTransientProps) => p.$columnMargin ? 
            `& > * {margin: ${p.$columnMargin};}
            & > *:last-child {margin: 0; }`
        : ''}
    }
    
    
    @media (min-width: 1000px) {
        flex-direction: row;
        align-items: ${(p:RowTransientProps) => p.$rowAlign ?? 'center'};
        justify-content: ${(p:RowTransientProps) => p.$rowJustify ?? 'stretch'};

        & > * {
            margin-right: ${(p:RowTransientProps) => p.$rowMargin ?? '0.625rem'};
        }
    
        & > *:last-child {
            margin-right: 0;
        }
    }


`;

type ReactChild = string | ComponentType<any>;

export const RowOrColumn:React.FC<RowOrColumnProps> = ({rowAlign, rowJustify, columnAlign, columnJustify, rowMargin, columnMargin, children, ...props}: RowOrColumnProps) => {
    return <RowOrColumnElement<ReactChild> $rowJustify={rowJustify} $rowAlign={rowAlign} $columnAlign={columnAlign} $columnJustify={columnJustify} $columnMargin={columnMargin} $rowMargin={rowMargin} {...props}>{children}</RowOrColumnElement>
}