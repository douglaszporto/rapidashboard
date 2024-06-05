import { ComponentType, HTMLProps } from "react";
import Icon from '@mdi/react';
import styled from "styled-components";
import {mdiChevronLeft, mdiChevronRight} from '@mdi/js';


type ReactChild = string | ComponentType<any>;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;

    &.spaced {
        margin: 1rem 0;
    }

    @media (min-width: 1000px) {
        &.spaced {
            margin: 0;
        }
    }
`;

const Button = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 0;
    background-color: var(--theme-color-background-aux-hover);
    padding: 0;
    transition: all .4s ease 0s;
    height: 2rem;
    width: 2rem;

    &:not(.disabled):hover {
        background-color: var(--theme-color-background-aux-hover);
    }

    &:first-child {
        margin-right: 5px;
    }

    &:last-child {
        margin-left: 5px;
    }

    &.disabled {
        opacity: 0.5;
        cursor: default;
    }

    @media (min-width: 1000px) {
        background-color: transparent;
    }
`;

type PaginatorProps = HTMLProps<HTMLDivElement> & {
    page: number;
    total: number;
    labelPaginator?: string;
    onPageChange: Function;
}

export const Paginator = ({page, total, labelPaginator, onPageChange, ...props}: PaginatorProps) => {

    const handleChangePage = (newPage: number) => {
        if (newPage > 0 && newPage <= total) {
            onPageChange(newPage);
        }
    }

    return <Container<ReactChild> {...props}>
        <Button className={page <= 1 ? 'disabled' : ''} onClick={()=>{handleChangePage(page-1)}}>
            <Icon path={mdiChevronLeft} size={1} />
        </Button>
        {(labelPaginator ?? '$1 de $2')
            .replace("$1",String(page))
            .replace("$2",String(Math.max(total, 1)))
        }
        <Button className={page >= total ? 'disabled' : ''} onClick={()=>{handleChangePage(page+1)}}>
            <Icon path={mdiChevronRight} size={1} />
        </Button>
    </Container>
}
