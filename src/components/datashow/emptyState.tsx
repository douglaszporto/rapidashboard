import Icon from '@mdi/react';
import * as Tags from './styles';
import { ReactElement } from 'react';

type EmptyStateProps = {
    title: string | ReactElement | ReactElement[];
    icon: string;
    size?: number;
    margin?: string;
    padding?: string;
}

export const EmptyState:React.FC<EmptyStateProps> = ({title, size, margin, icon, padding}: EmptyStateProps) => {
    return <Tags.EmptyStateWrapper margin={margin} $padding={padding}>
        <Icon path={icon} size={size ?? 5} style={{opacity: .4}} />
        <div>{title}</div>
    </Tags.EmptyStateWrapper>
    
}