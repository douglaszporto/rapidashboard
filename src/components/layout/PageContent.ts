import styled from "styled-components"

interface PageContentProps {
    align?: string;
    justify?: string;
    direction?: string;
    margin?: string;
    padding?: string;
}

export const PageContent = styled.div<PageContentProps>`
    width: 100%;
    padding: ${(props: PageContentProps) => props.padding ?? '10px'};
    box-sizing: border-box;
    display: flex;
    flex-direction: ${(props: PageContentProps) => props.direction ?? 'column'};;
    align-items: ${(props: PageContentProps) => props.align ?? 'stretch'};;
    justify-content: ${(props: PageContentProps) => props.justify ?? 'flex-start'};;

    @media (min-width: 1000px) {
        padding: ${(props: PageContentProps) => props.padding ?? '30px'};
    }
`;