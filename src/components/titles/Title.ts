import styled from "styled-components"

export const Title = styled.h1`
    font-size: 1.5rem;
    color: var(--theme-color-font, #000);
    font-weight: 400;
    line-height: 2rem;
    margin: 0;

    &.uppercase {
        text-transform: uppercase;
    }
`

export const TitleBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    margin-bottom: 1.25rem;
    width: 100%;
    max-width: 100%;

    @media (min-width: 1000px) {
        margin-top: 0;
    }
`;