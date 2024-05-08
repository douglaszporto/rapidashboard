import * as styled_components from 'styled-components';
import * as styled_components_dist_types from 'styled-components/dist/types';
import * as react from 'react';

type BreadcrumbProps = {
    items: {
        [url: string]: string;
    };
    current: string;
    navigate?: (url: string, options: any) => void;
};
declare const Breadcrumb: React.FC<BreadcrumbProps>;

declare const Title: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, never>>;
declare const TitleBar: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;

export { Breadcrumb, Title, TitleBar };
