import styled from "styled-components"

export const FilterBar = styled.div`
    width: 100%;
    background-color: var(--theme-color-background-filter);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    font-size: 1rem;
    padding: 1rem;
    box-sizing: border-box;
    margin-bottom: 1rem;
`;

export const FilterRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1rem;
    padding: 0;
    box-sizing: border-box;
`;