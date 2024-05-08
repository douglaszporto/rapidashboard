import { ComponentType, HTMLProps } from "react";
import styled from "styled-components"

export interface RowProps extends HTMLProps<HTMLDivElement> {
    align?: string;
    justify?: string;
    margin?: string;
}

interface RowTransientProps extends HTMLProps<HTMLDivElement> {
    $align?: string;
    $justify?: string;
    $margin?: string;
}

export const RowElement = styled.div<RowTransientProps>`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: ${(p:RowTransientProps) => p.$align ?? 'center'};
    justify-content: ${(p:RowTransientProps) => p.$justify ?? 'stretch'};

    & > * {
        margin-right: ${(p:RowTransientProps) => p.$margin ?? '0.625rem'};
    }
    & > *:last-child {
        margin-right: 0;
    }
`;

type ReactChild = string | ComponentType<any>;

export const Row:React.FC<RowProps> = ({align, justify, margin, children, ...props}: RowProps) => {
    return <RowElement<ReactChild> $align={align} $justify={justify} $margin={margin} {...props}>{children}</RowElement>
}