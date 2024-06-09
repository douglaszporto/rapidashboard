import { HTMLProps, ReactElement, ReactNode } from "react";
import styled from "styled-components";

const CardElement = styled.div`
    flex: 1;
    width: 100%;
    margin-bottom: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;

    @media (min-width: 1000px) {
        width: auto;
    }
`;

const Title = styled.h3`
    height: 3rem;
    font-size: 1rem;
    font-weight: 400;
    background-color: var(--theme-color-primary, #000);
    padding: 0 3px 0 10px;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--theme-color-primary-font, #fff);
    justify-content: space-between;
`;

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    background-color: var(--theme-color-background-aux, #fff);
`;


export type CardProps = Omit<HTMLProps<HTMLDivElement>, 'title'> & {
    title?: string | string[] | ReactNode | ReactNode[] | ReactElement | ReactElement[];
};

export const Card: React.FC<CardProps> = ({className, title, children, ...props}: CardProps) => {
    return <CardElement className={className} {...props}>
        {title ? <Title>{title}</Title> : null}
        <Content>{children}</Content>
    </CardElement>
}