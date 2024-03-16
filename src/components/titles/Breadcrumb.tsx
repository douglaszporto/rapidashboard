import { useMemo } from "react";
import Icon from "@mdi/react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { mdiArrowLeft, mdiChevronRight } from "@mdi/js";

const Container = styled.div`
    color: var(--theme-color-font, #000);
    font-weight: 400;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    flex: 1;
`;

const ItemsContent = styled.div`
    line-height: 2rem;
    min-height: 2.5rem;
    margin: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex: 1;
`;

const Button = styled.button`
    padding: 0;
    background-color: transparent;
    border: 0;
    height: 30px;
    width: 30px;
    margin-right:5px;
    cursor: pointer;
    transition: all .4s ease 0s;
    color: var(--theme-color-font, #000);

    &:hover {
        background-color: var(--theme-color-background-aux-hover,#cacaca);
    }
`;

const PreviousItem = styled.div`
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    color: var(--theme-color-font-empty);
`;

const ItemValue = styled.div`
    cursor: pointer;
`;

const CurrentItem = styled.div`
    font-size: 1.5rem;
`;

type BreadcrumbProps = {
    items: {[url:string]: string};
    current: string;
};

export const Breadcrumb:React.FC<BreadcrumbProps> = ({items, current}: BreadcrumbProps) => {

    const navigate = useNavigate();

    const handleGoBack = () => {
        if (!items) {
            return;
        }

        const urls = Object.keys(items);
        navigate(urls[urls.length-1], {replace: true});
    }

    const renderPrevious = useMemo(() => {
        const itemsURLs = Object.keys(items);

        if (itemsURLs && itemsURLs.length) {
            return itemsURLs.map((url, index) => <PreviousItem key={index}>
                <ItemValue onClick={()=>{navigate(url,{replace: true})}}>{items[url]}</ItemValue>
                <Icon path={mdiChevronRight} size={1} />
            </PreviousItem>)
        }

        return null;
    },[items]);

    return <Container>
        <Button onClick={handleGoBack}>
            <Icon path={mdiArrowLeft} size={1} />
        </Button>
        <ItemsContent>
            {renderPrevious}
            <CurrentItem>{current}</CurrentItem>
        </ItemsContent>
    </Container>
}