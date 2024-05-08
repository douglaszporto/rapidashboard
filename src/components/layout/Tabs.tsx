import { HTMLProps, useEffect, useState } from "react";
import styled from "styled-components"
import { classSet } from "../../util/util";

const TabsRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: hidden;

    &:after {
        content: '';
        height: 2.5rem;
        flex: 1;
        border-bottom: 1px solid var(--theme-color-line);
    }
`;
const TabsItem = styled.div`
    height: 2.5rem;
    line-height: 2.5rem;
    word-wrap: none;
    padding: 0 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom:-1px;
    border: 1px solid transparent;
    cursor: pointer;
    white-space: nowrap;
    border-bottom: 1px solid var(--theme-color-line);
    
    &:hover {
        background-color: var(--theme-color-background-aux);
    }

    &.selected {
        background-color: var(--theme-color-background-aux);
        border: 1px solid var(--theme-color-line);
        border-bottom: 1px solid transparent;
    }
`;

type TabsProps = Omit<HTMLProps<HTMLDivElement>,'value'|'onChange'> & {
    items: {label:string, id:string}[];
    value: string;
    onChange: (v:string) => void;
}

export const Tabs:React.FC<TabsProps> = ({items, value, onChange}: TabsProps) => {

    const [selected, setSelected] = useState<string>();

    const handleClick = (id: string) => {
        setSelected(id);
        onChange(id);
    };

    useEffect(()=>{
        setSelected(value);
    }, [value]);

    return <TabsRow>
        {items.map((item,i) => <TabsItem className={classSet({selected:selected === item.id})} key={i} onClick={()=>{handleClick(item.id)}}>
            {item.label}
        </TabsItem>)}
    </TabsRow>
}