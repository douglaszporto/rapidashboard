import styled from "styled-components"

export const Tag = styled.div`
    padding: 0 4px;
    height: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 600;
    border-radius: 0.5rem;
    text-transform: uppercase;
    font-size: 0.8rem;
    min-width: 4rem;
    background-color: ${(p:{color?:string}) => p.color ?? '#999'}
`;
