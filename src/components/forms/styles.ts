import styled from "styled-components";
import { Row, Column, RowProps, ColumnProps } from "../layout";

export const InputWrapper = styled.div<{width?:string|number}>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    margin-bottom: 10px;
    flex: 1;
    min-height: ${p => p.width ? (typeof p.width === 'number' ? String(p.width)+'px' : p.width ) : '50px'};

    &.noMargin {
        margin-bottom: 0;
    }

    &.fullWidthMobile {
        width: 300px;
        
        @media (max-width: 1000px) {
            width: 100%;
        }
    }
`;

export const InputCopyWrapper = styled.div<{width?:string|number}>`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
    margin-bottom: 10px;
    flex: 1;
    min-height: ${p => p.width ? (typeof p.width === 'number' ? String(p.width)+'px' : p.width ) : '50px'};
`;

export const TextareaWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    margin-bottom: 10px;
    min-height: 150px;
    height: 150px;

    &.noMargin {
        margin-bottom: 0;
    }
`;

export const CheckboxWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-height: 50px;
    height: 50px;
    color: var(--theme-color-font, #000);
    cursor: pointer;
    margin-bottom: 10px;

    &.column {
        flex-direction: column;
    }
    
    &.row {
        flex-direction: row-reverse;
    }

    &.compact {
        height: 1rem;
        min-height: 1rem;
    }
`;


export const RadioWrapper = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    min-height: 30px;
    color: var(--theme-color-font, #000);
    cursor: pointer;

    &.column {
        flex-direction: column;
    }
    
    &.row {
        flex-direction: row-reverse;
    }

    &.spaced-left {
        margin-left: 0.75rem;
    }
`;

type InputContentPropsType = {width?:string | number};
export const InputContent = styled.div<InputContentPropsType>`
    width: ${p => p.width ?? '100%'};
    min-width: ${p => p.width ?? '100%'};
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    height: 50px;
    color: var(--theme-color-font-input, #000);
    //border: 1px solid var(--theme-color-border-input, #ddd);;
    border-radius: 5px;
    background: var(--theme-color-background-input, #fff);
`;

export const CopyContent = styled(InputContent)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
`;

export const InputElement = styled.input.attrs(p => ({
    type: p.type ?? 'text'
}))`
    width: 100%;
    height: 50px;
    padding: 0 10px 0;
    font-size: .9rem;
    background: var(--theme-color-background-input, #fff);
    color: var(--theme-color-font-input, #000);
    border: 1px solid var(--theme-color-border-input, #ddd);;
    border-radius: 5px;
`;

export const TextareaElement = styled.textarea`
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: .9rem;
    background: var(--theme-color-background-input, #fff);
    color: var(--theme-color-font-input, #000);
    border: 1px solid var(--theme-color-border-input, #ddd);;
    border-radius: 5px;
`;

export const DateInputElement = styled.input`
    width: 100%;
    height: 50px;
    padding: 0 10px 0;
    font-size: .9rem;
    background: transparent;
    color: var(--theme-color-font-input, #000);
    border: 1px solid var(--theme-color-border-input, #ddd);;
    border-radius: 5px;
`;

export const MonthInputElement = styled.input`
    width: 100%;
    height: 50px;
    padding: 0 10px 0;
    font-size: .9rem;
    background: transparent;
    color: var(--theme-color-font-input, #000);
    border: 1px solid var(--theme-color-border-input, #ddd);;
    border-radius: 5px;
`;

export const SelectElement = styled.select<{width?:string|number}>`
    width: 100%;
    height: ${p => p.width ? (typeof p.width === 'number' ? String(p.width)+'px' : p.width ) : '50px'};
    padding: 0 10px 0;
    font-size: .9rem;
    box-sizing: border-box;
    background: var(--theme-color-background-input, #fff);
    color: var(--theme-color-font-input, #000);
    border: 1px solid var(--theme-color-border-input, #ddd);;
    border-radius: 5px;
`;

export const ReadOnlyElement = styled.div`
    width: 100%;
    height: 50px;
    padding: 0 10px 0;
    font-size: 1.1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background: var(--theme-color-background-input, #fff);
    color: var(--theme-color-font-input, #000);
    border: 1px solid var(--theme-color-border-input, #ddd);;
    border-radius: 5px;
`;

export const ErrorMessage = styled.label`
    position: absolute;
    top: calc(100% - 1.1rem);
    right: 3px;
    text-align: right;
    font-size: 0.9rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    line-height: 1rem;
    color: var(--theme-color-font-error, #f00);
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 400;

    &.hasIcon {
        right: 30px;
    }
    &.hasDrop {
        right: 18px;
    }
`;

export const ErrorIcon = styled.div`
    position: absolute;
    top: 10px;
    right: 3px;
    width: 22px;
    height: 22px;
    background-color: var(--theme-color-font-error, #f00);
    -webkit-mask: url('/img/icon/alert.svg') no-repeat center;
    mask: url('/img/icon/alert.svg') no-repeat center;

    &.hasIcon {
        right: 30px;
    }
    &.hasDrop {
        right: 18px;
    }

    &.big {
        width: 25px;
        height: 25px;
        top: 12px;
        right: 3px;
    }

    &.hasIcon.big {
        right: 30px;
    }
`;

export const FieldTypeIcon = styled.div`
    position: absolute;
    top: 7px;
    right: 3px;
    width: 30px;
    height: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    opacity: 0.4;
`;

export const ButtonRowElement = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;

    & > *:not(:last-child) {
        margin-right: 10px;
    }
`;

export const ButtonElement = styled.button<{size?: number | string}>`
    height: 2.5rem;
    background-color: ${props => props.color ?? '#999'};
    border: 1px solid transparent;
    border-radius: 3px;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 0.75rem;
    line-height: 1rem;
    width: ${props => props.size ? (String(props.size) === props.size ? props.size : (props.size+'rem')) : 'auto'};

    &.disabled {
        cursor: default;
        opacity: 0.4;
    }

    &.border {
        background-color: transparent;
        border: 1px solid ${props => props.color ?? '#999'};
        color: ${props => props.color ?? '#999'};
    }

    & > .btnLabel {
        display: none;
    }
    
    @media (min-width: 1000px) {
        font-size: 1rem;

        & > .btnLabel {
            display: flex;
        }
    }
`;


export const CheckboxItem = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    border: 1px solid var(--theme-color-border-input, #ddd);
    background-color: var(--theme-color-background-input, #fff);
    position: relative;

    .row & {
        margin-right: 0.625rem;
    }

    &.checked:before {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        right: 2px;
        bottom: 2px;
        background-color: var(--theme-color-font, #fff);
    }
`;

export const RadioItem = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    border: 1px solid var(--theme-color-border-input, #ddd);
    border-radius: 5px;
    border-radius: 50%;
    background-color: var(--theme-color-background-input, #fff);
    position: relative;
    
    .row & {
        margin-right: 0.625rem;
    }
    
    &.checked:before {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        right: 2px;
        bottom: 2px;
        border-radius: 50%;
        background-color: var(--theme-color-font, #fff);
    }
`;

export const ProfilePictureWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
`;

export const ProfilePhoto = styled.div`
    width: 100%;
    aspect-ratio: 1;
    border: 3px dashed var(--theme-color-border-input, #ddd);
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const ProfilePhotoDragText = styled.div`
    color: var(--theme-color-font-weak, #666);
`;

export const ProfilePhotoExtraText = styled.div`
    margin: 0.25rem 0;
    font-size: 0.75rem;
    color: var(--theme-color-font-empty, #999);
    text-transform: uppercase;
`;

export const ProfilePhotoFileInput = styled.input.attrs(()=>({
    type: "file"
}))`
    display: none;
    visibility: hidden;
    height: 0;
    position: fixed;
    top: -10000%;
    left: -10000%;
`;

export const ButtonLabel = styled.label`
    height: 2.5rem;
    background-color: ${props => props.color ?? '#999'};
    border: solid transparent 0px;
    border-radius: 3px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 0.75rem;
    width: 'auto';
    padding: 0 0.5rem;
    
    @media (min-width: 1000px) {
        flex-direction: row;
        font-size: 1rem;
    }
`;

export const ProfileDragOver = styled.div`
    position: absolute;
    inset: 0;
`;

export const ProfilePreview = styled.div`
    position: absolute;
    inset: 0;
    overflow: hidden;
    background-color: #000;
    
    & img {
        margin: 0 auto;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;

export const ProfilePhotoRemove = styled.div`
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const CalendarWrapper = styled.div`
    position: fixed;
    top: -10000%;
    left: -10000%;
    z-index: 700;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    background-color: var(--theme-color-background-input, #fff);
    border: 1px solid var(--theme-color-border-input, #ddd);

    &.show {
        position: absolute;
        top: calc(100% - 1px);
        left: 0;
        width: 100%;
        min-width: 200px;
    }

    &.showtop {
        position: absolute;
        top: auto;
        bottom: calc(100% - 1px);
        left: 0;
        width: 100%;
        min-width: 200px;
    }
`;

export const TimePickerWrapper = styled.div`
    position: absolute;
    top: calc(100% - 1px);
    right: 0;
    left: 0;
    z-index: 700;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
    background-color: var(--theme-color-background-input, #fff);
    border: 1px solid var(--theme-color-border-input, #ddd);
`;

export const TimeRoll = styled.div`
    width: 50%;
    height: 120px;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    -ms-overflow-style: none;
    scrollbar-width: none;
    box-sizing: border-box;

    &::-webkit-scrollbar {
        display: none;
    }    
`;

export const TimeValue = styled.div`
    width: 100%;
    padding: 0;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 1.3rem;
    cursor: pointer;
    
    :hover {
        background-color: var(--theme-color-background-aux2, "#aaa");
    }

    &:first-child {
        margin-top: 40px;
    }
    &:last-child {
        margin-bottom: 40px;
    }
    
    &.selected {
        color: var(--theme-color-primary-font);
        background-color: var(--theme-color-primary, "#999");
    }
`;

export const OptionsWrapper = styled.div`
    position: absolute;
    top: calc(100% - 1px);
    right: 0;
    left: 0;
    z-index: 700;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    background-color: var(--theme-color-background-input, #fff);
    border: 1px solid var(--theme-color-border-input, #ddd);
`;

export const Option = styled.div`
    width: 100%;
    padding: 0 1rem;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;

    &.over {
        background-color: var(--theme-color-background-aux, #999);
    }
`;

export const PagesWrapper = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: var(--theme-color-background-aux, #999);

    &.over {
        background-color: var(--theme-color-background-aux2, #999);
    }
`;

export const FormBuilderContent = styled.div`
    margin-top:0.5rem;
`;

export const ButtonRow = styled(Row)<RowProps>`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;

    @media (min-width: 1000px) {
        align-items: center;
        justify-content: flex-start;
    }
`;

export const ButtonNew = styled.button`
    height: 2.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    background-color: transparent;
    cursor: pointer;
    margin: 0 0.3rem 0 0;
    border: 0;
    color: var(--theme-color-font);
    width: calc(50% - 0.15rem);

    &:nth-child(2n) {
        margin-right: 0;
    }

    &:hover {
        background-color: var(--theme-color-background-aux2, #999);
    }

    & > span {
        margin-left:0.3rem;
        width: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        text-align: left;
    }

    @media (min-width: 1000px) {
        width: auto;

        & > span {
            flex: 1;
        }
    }
`;

    
export const ColumnTemplate = styled(Column)<ColumnProps>`
    width:"100%";

    @media (min-width: 1000px) {
        width:"10rem";
    }
`;

export const QuestionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    margin-bottom: 1rem;
    `;
    
    export const QuestionBar = styled.div`
    padding: 0.5rem 0;
    width: 2rem;
    box-sizing: border-box;
    background-color: var(--theme-color-background-aux3);
    color: var(--theme-color-font);
    //background-color: var(--theme-color-background-aux4, #666);
    border-right: 1px solid var(--theme-color-background-aux, #aaa);
    `;

export const NoQuestions = styled.div`
    padding: 0.5rem 0;
    color: var(--theme-color-font-empty);
    `;

export const ButtonQuestion = styled.button`
    width: 2rem;
    height: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    cursor: pointer;
    margin: 0;
    border: 0;
    color: var(--theme-color-font);

    &:not(.disabled):hover {
        background-color: var(--theme-color-background-aux2, #999);
    }

    &.disabled {
        opacity: 0.2;
        cursor: default;
    }
`;

export const QuestionNumber = styled.div`
    height: 40px;
    line-height: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const QuestionContent = styled.div`
    padding: 0.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
`;

export const FormBuilderTextArea = styled.div`
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    height: 80px;
    color: var(--theme-color-font-empty, #666);
    border: 1px solid var(--theme-color-border-input, #f00);
    background-color: var(--theme-color-background-input, #f00);
`;

export const FormBuilderCheckbox = styled.div`
    padding: 0 0.5rem;
    height: 20px;
    width: 20px;
    border: 1px solid var(--theme-color-border-input, #666);
    background-color: var(--theme-color-background-input, #f00);

    &.radio {
        border-radius: 10px;
    }
`;

export const FormBuilderRating = styled.div`
    width: calc(75% + 20px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

export const FormBuilderRatingOption = styled.div`
    height: 20px;
    width: 20px;
    border: 1px solid var(--theme-color-border-input, #666);
    background-color: var(--theme-color-background-input, #f00);
    border-radius: 10px;
    position: relative;
    cursor: pointer;

    &:hover {
        background-color: var(--theme-color-background-aux);
    }

    &.checked:after {
        content: '';
        position: absolute;
        inset: 3px;
        border-radius: 50%;
        background-color: var(--theme-color-font);
    }
`;

export const FormBuilderRatingColor = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    margin-top: -5px;
    height: 10px;
    background: linear-gradient(270deg, var(--theme-color-primary,#fff) 0%, #000 100%);
    border: 1px solid var(--theme-color-border-input, #666);
`;

export const Label = styled.div`
    font-size: 1rem;
    flex: none;
    text-align:center;
    width:25%;
`;

export const UploadArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    flex: 1;
    width: 100%;

    &.horizontal {
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
    }
`;

export const FileItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
    border-radius: 3px;
    background-color: var(--theme-color-background-aux2);
    margin: 0.5rem 0 0 0;
    padding: 0 0.5rem;
    height: 40px;

    &.horizontal {
        margin: 0 0.5rem 0.5rem 0;
    }
`;

export const FileName = styled.div`
    margin-left: 0.5rem;
    flex: 1;
    font-size: 1rem;
`;

export const FileRemove = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px;

    &:hover {
        background-color: var(--theme-color-background-aux4)
    }
`;

export const QuestionTitle = styled.div`
    font-size: 1rem;
    color: var(--theme-color-font);
`;

export const QuestionTitleResult = styled.div`
    font-size: 1rem;
    color: var(--theme-color-font-weak);
`;

export const QuestionResult = styled.div`
    font-size: 1rem;
    color: var(--theme-color-font);
    
    & p:first-child {
        margin-top: 0;
    }
    & p:last-child {
        margin-bottom: 0;
    }
`;

export const CopyButton = styled.div`
    position: absolute;
    top: 1px;
    right: 1px;
    bottom: 1px;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--theme-color-value-blue);
    background-color: var(--theme-color-background);
    cursor: pointer;
`;