import styled from "styled-components";

export const Loading = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--theme-color-font-input, #000);
    background-color: var(--theme-color-primary, #ddd);
    color: #fff;
    height: 50px;
    text-transform: uppercase;
    font-weight: 600;
    box-shadow: 0 3px 3px rgba(0,0,0,0.3);
    top: calc(100% + 20px);
    left: 50px;
    padding: 0 10px 0 40px;
    transition: all .3s ease 0s;

    &.active {
        top: calc(100% - 100px);
    }

    &:before {
        content: '';
        height: 20px;
        width: 20px;
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translate3d(-50%, -50%, 0);
        border: 2px solid transparent;
        border-top: 2px solid #fff;
        border-left: 2px solid #fff;
        border-radius: 50%;
        animation: loading-spinner infinite forwards linear 1s;
    }
`;

export const Message = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--theme-color-font-input, #000);
    background-color: var(--theme-color-primary, #ddd);
    color: #fff;
    min-height: 50px;
    min-width: 90%;
    max-width: 90%;
    box-shadow: 0 3px 3px rgba(0,0,0,0.3);
    bottom: 0;
    transform: translate3d(0, 110%, 0);
    left: 5%;
    padding: 0 10px 0 5px;
    transition: all .3s ease 0s;
    z-index: 1000;

    &.active {
        transform: translate3d(0, -50px, 0);
    }

    &.success {
        border-color: var(--theme-color-successmessage-border, #0f0);
        background-color: var(--theme-color-successmessage-background, #ddd);

        &>svg {
            color: var(--theme-color-successmessage-border, #0f0);
        }
    }

    &.error {
        border-color: var(--theme-color-errormessage-border, #0f0);
        background-color: var(--theme-color-errormessage-background, #ddd);

        &>svg {
            color: var(--theme-color-errormessage-border, #0f0);
        }
    }

    @media (min-width: 1000px) {
        min-width: 50px;
        max-width: 600px;
        left: 50px;
    }
`;

export const TimecheckContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    margin-bottom: 10px;
    flex: 1;
    min-height: 300px;
    overflow: hidden;
`;

export const TimechackRow = styled.div`
    height: 3.5rem;
    min-height: 3.5rem;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    box-sizing: border-box;
    border-top: 1px solid var(--theme-color-line, rgba(255,255,255, 0.3));
`;

export const TimecheckRowTime = styled.div`
    width: 3rem;
    min-width: 3rem;
    border-right: 1px solid var(--theme-color-line, rgba(255,255,255, 0.3));
`;

export const TimecheckRowContent = styled.div`
    position: relative;
    flex: 1;
`;

export const TimecheckEventCurrent = styled.div`
    position: absolute;
    background-color: var(--theme-color-primary, #863BD1);
    min-height: 1rem;
    left: 0;
    right: 3rem;
    box-shadow: 0 3px 5px rgba(0,0,0,0.3);
    padding: 0 0.2rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
`;

export const TimecheckEventOther = styled.div`
    position: absolute;
    background-color: var(--theme-color-background-event-other, #bbb);
    left: 0;
    right: 3rem;
    box-shadow: 0 3px 5px rgba(0,0,0,0.3);
    padding: 0 0.2rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;

    &.conflict {
        right: 0;
        left: 2rem;
    }
`;

export const TimecheckEventName = styled.div`
    font-size: 1.0rem;
    line-height: 1.3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: var(--theme-color-primary-font);
    
    &.other {
        align-items: stretch;
        color: var(--theme-color-font);
        padding-top: 0.3rem;
    }
`;
export const TimecheckEventLocation = styled.div`
    font-size: 0.8rem;
    opacity: 0.7;
    line-height: 0.8rem;
`;

export const TimecheckEventTime = styled.div`
    font-size: 0.8rem;
    opacity: 0.7;
    line-height: 0.8rem;
    color: var(--theme-color-font, "#000");
    border-right: 1px solid var(--theme-color-font, "#000");
    margin-right: 0.4rem;
    padding-right: 0.4rem;
`;

export const EmptyStateWrapper = styled.div<{margin?:string,$padding?:string}>`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    margin: ${(p:{margin?:string}) => p.margin !== undefined ? `${p.margin}` : '0'};
    padding: ${(p:{$padding?:string}) => p.$padding !== undefined ? `${p.$padding}` : '0'};
    color: var(--theme-color-font-empty, #888);
`;

export const TimechackOverflow = styled.div`
    width: 100%;
    min-height: 3.5rem;
    position:absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, var(--theme-color-background-aux) 0%, var(--theme-color-primary) 100%);
`;
