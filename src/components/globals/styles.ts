import styled from "styled-components";

export const MenuElement = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    width: 90%;
    z-index: 2000;
    transform: translate3d(-100%, 0, 0);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    overflow: auto;
    justify-content: flex-start;
    transition: transform .3s ease 0s;
    background-color: var(--theme-color-background-aux);
    color: var(--theme-color-font, #000);

    &.opened {
        transform: translate3d(0, 0, 0);
    }

    @media (min-width: 1000px) {
        position: absolute;
        left: 0;
        width: 300px;
        transform: none;
        z-index: 2;
    }
`;

export const MenuBackground = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 2000;
    transform: translate3d(-100%, 0, 0);
    transition: opacity .3s ease 0s, transform 0s linear .3s;
    background-color: #000;
    opacity: 0;

    &.opened {
        transition: opacity .3s ease 0s, transform 0s linear 0s;
        opacity: 0.6;
        transform: translate3d(0, 0, 0);
    }

    @media (min-width: 1000px) {
        display: none;
    }
`;

export const Header = styled.div`
    width: 100%;
    height: 100px;
    border-bottom: 1px solid var(--theme-color-line, #000);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    @media (min-width: 1000px) {
        justify-content: center;
    }
    `

export const Logo = styled.img`
    width: calc(90% - 3rem);
    
    @media (min-width: 1000px) {
        width: 80%;
    }
`

export const BackButton = styled.div`
    height: 3rem;
    padding: 0 1rem 0 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    @media (min-width: 1000px) {
        display: none;
    }
`

export const MenuItems = styled.menu`
    margin-top: 10px;
    width: 100%;
    padding: 0;
`

export const Item = styled.li`
    width: 100%;
    height: 4rem;
    margin-bottom: 0.7rem;
    font-size: 1rem;
    text-transform: uppercase;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0 0 0 1.5rem;
    cursor: pointer;
    transition: all .4s ease 0s;

    &.active {
        background-color: var(--theme-color-primary, #fff);
        color: var(--theme-color-primary-font, #fff);
    }
    &.active:before {
        color: var(--theme-color-primary-font, #fff);
    }
    &:not(.active):hover {
        background-color: var(--theme-color-primary-transparent, rgba(255,255,255,0.5));
    }
`;




export const TopbarElement = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: var(--theme-color-font, #000);
    border-bottom: 1px solid var(--theme-color-line, #000);

    @media (min-width: 1000px) {
        top: 0;
        left: 0;
        right: 0;
        width: auto;
        height: 100px;
    }
`;

export const TopbarUser  = styled.div`
    height: 100%;
    display: flex;
    position: absolute;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 0;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 0 1rem;

    @media screen and (min-width: 1000px) {
        padding: 2rem;
    }
`;

export const InputSearchWrapper  = styled.div`
    display: inline;
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translate3d(0, -50%, 0);
    height: 40px;
    width: 50%;
    min-width: 150px;
    max-width: 250px;
    
    @media (min-width: 1000px) {
        left: 30px;
        width: 70%;
        max-width: 70%;
        height: 50px;
    }
`;

export const InputSearch  = styled.input.attrs(() => ({
    type: 'text'
}))`
    border: 1px solid var(--theme-color-line, #000);
    height: 40px;
    width: 100%;
    padding: 0 10px;
    font-size: 16px;
    background-color: var(--theme-color-background-input, #000);

    @media (min-width: 1000px) {
        height: 50px;
    }
`;

export const SearchResult  = styled.div`
    border: 1px solid var(--theme-color-line, #000);
    background-color: var(--theme-color-background-aux);
    min-height: 100px;
    max-height: 200px;
    overflow: auto;
    width: 100%;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: -1px;
    position: absolute;
    z-index: 10000;
`;

export const SearchHeader  = styled.div`
    height: 1.5rem;
    padding: 0 1rem;
    text-transform: uppercase;
    background-color: var(--theme-color-background-aux2);
    color: var(--theme-color-font-empty);
    width: 100%;
`;

export const SearchItem  = styled.div`
    height: 3rem;
    padding: 0 1rem;
    color: var(--theme-color-font);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: var(--theme-color-background-aux3);
    }
`;

export const SearchItemDetail  = styled.div`
    color: var(--theme-color-font-weak);
    display: flex;
    font-size: 0.8rem;
    line-height: 0.8rem;

    & .highlight {
        color: var(--theme-color-font);
        margin-left: 0.3rem;
    }
`;

export const Link  = styled.a`
    text-decoration: none;
    color: var(--theme-color-font);
    margin-right: 0.5rem;
    cursor: pointer;

    &:hover {
        color: var(--theme-color-primary);
    }

    @media (min-width: 1000px) {
        margin-right: 1rem;
    }
`;

export const ProfileBtn  = styled.a`
    text-decoration: none;
    color: var(--theme-color-font, #000);
    padding: 1rem;
    cursor: pointer;

    &:hover {
        background-color: var(--theme-color-background-aux3);
    }
`;

export const UserBadge  = styled.div`
    height: 30px;
    width: 30px;
    font-size: 15px;
    color: var(--theme-color-primary-font, #000);
    text-transform: uppercase;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-left: 10px;
    cursor: pointer;
    background-color: var(--theme-color-primary, #000);
    overflow: hidden;

    &.compact {
        height: 2rem;
        width: 2rem;
        font-size: 1rem;
        margin-left: 0;
    }

    @media (min-width: 1000px) {
        height: 50px;
        width: 50px;
        font-size: 25px;
    }
`;

export const UserName  = styled.div`
    font-size: 1.2rem;
    line-height: 1.2rem;
    color: var(--theme-color-font);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
`;

export const ProfileWrapper  = styled.div`
    position: absolute;
    top: 1rem;
    right: 2rem;
    width: 15rem;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    background-color: var(--theme-color-background-aux);
    border: 1px solid var(--theme-color-background-aux4);
`;

export const MenuButton  = styled.div`
    height: 30px;
    width: 30px;
    font-size: 15px;
    color: var(--theme-color-font);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    
    @media (min-width: 1000px) {
        display: none;
    }
`;



export const Modal  = styled.div`
    width: 90%;
    min-width: 90%;
    max-width: 90%;
    min-height: 200px;
    max-height: 90%;
    background-color: var(--theme-color-background, #dfdfdf);
    border: 1px solid var(--theme-color-background-aux2, #999);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    position: fixed;
    top: -10000%;
    left: -10000%;
    z-index: 999;
    transform: translate3d(-50%, -50%, 0);
    overflow: auto;

    &.active {
        top: 50%;
        left: 50%;
    }
    
    @media (min-width: 1000px) {
        width: auto;
        min-width: 400px;
        max-width: 90%;
    }
`;

export const Background  = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 100%;
    right: 100%;
    background-color: rgba(0,0,0, 0.8);
    z-index: 998;

    &.active {
        bottom: 0;
        right: 0;
    }
`;

export const Image = styled.img`
    min-width: 100%;
    min-height: 100%;
`;