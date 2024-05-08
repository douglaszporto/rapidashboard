import { ComponentType, HTMLProps } from "react";
import styled from "styled-components"

export interface ColumnProps extends HTMLProps<HTMLDivElement> {
    align?: string;
    justify?: string;
    margin?: string;
}
interface ColumnTransientProps extends HTMLProps<HTMLDivElement> {
    $align?: string;
    $justify?: string;
    $margin?: string;
}

const ColumnElem = styled.div<ColumnTransientProps>`
    display: flex;
    flex-direction: column;
    align-items: ${(p:ColumnTransientProps) => p.$align ? p.$align : 'center'};
    justify-content: ${(p:ColumnTransientProps) => p.$justify ? p.$justify : 'stretch'};

    ${(p:ColumnTransientProps) => p.$margin ? 
        `& > * {margin: ${p.$margin};}
        & > *:last-child {margin: 0; }`
    : ''}
`;

type ReactChild = string | ComponentType<any>;

export const Column:React.FC<ColumnProps> = ({align, justify, margin, children, ...props}: ColumnProps) => {
    return <ColumnElem<ReactChild> $align={align} $justify={justify} $margin={margin} {...props}>{children}</ColumnElem>
}