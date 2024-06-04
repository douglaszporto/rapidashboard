import styled from "styled-components"

export interface GridProps {
    align?: string;
    justify?: string;
    margin?: string;
    desktopMargin?: string;
    mobileMargin?: string;
    columns?: number;
}

export const Grid = styled.div<GridProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: ${(p:GridProps) => p.align ?? 'center'};
    justify-content: ${(p:GridProps) => p.justify ?? 'stretch'};

    & > * {
        margin: ${(p:GridProps) => p.margin ?? p.mobileMargin ?? '0 0 20px 0'};
    }
    
    @media (min-width: 1000px) {
        flex-direction: row;
        width: auto;

        & > * {
            margin: ${(p:GridProps) => p.margin ?? p.desktopMargin ?? '0 20px 20px 0'};
            width: calc(100% / ${(p:GridProps) => p.columns ?? 3} - ${(p:GridProps) => (((p.columns ?? 3)-1) * 20)/(p.columns ?? 3) }px);
            min-width: calc(100% / ${(p:GridProps) => p.columns ?? 3} - ${(p:GridProps) => (((p.columns ?? 3)-1) * 20)/(p.columns ?? 3) }px);
        }
        & > *:nth-child(${(p:GridProps) => p.columns ?? 3}n) {
            margin-right: 0;
        }
    }

`;