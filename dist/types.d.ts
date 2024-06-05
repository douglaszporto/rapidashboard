import * as styled_components from 'styled-components';
import * as styled_components_dist_types from 'styled-components/dist/types';
import * as react from 'react';
import { HTMLProps, ReactNode, ReactElement, MouseEvent, MutableRefObject, FocusEvent } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

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

type CardProps = Omit<HTMLProps<HTMLDivElement>, 'title'> & {
    title?: string | string[] | ReactNode | ReactNode[] | ReactElement | ReactElement[];
};
declare const Card: React.FC<CardProps>;

interface ColumnProps extends HTMLProps<HTMLDivElement> {
    align?: string;
    justify?: string;
    margin?: string;
}
declare const Column: React.FC<ColumnProps>;

interface GridProps {
    align?: string;
    justify?: string;
    margin?: string;
    desktopMargin?: string;
    mobileMargin?: string;
    columns?: number;
}
declare const Grid: styled_components.IStyledComponent<"web", styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, GridProps>>;

interface PageContentProps {
    align?: string;
    justify?: string;
    direction?: string;
    margin?: string;
    padding?: string;
}
declare const PageContent: styled_components.IStyledComponent<"web", styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, PageContentProps>>;

interface RowProps extends HTMLProps<HTMLDivElement> {
    align?: string;
    justify?: string;
    margin?: string;
}
interface RowTransientProps$1 extends HTMLProps<HTMLDivElement> {
    $align?: string;
    $justify?: string;
    $margin?: string;
}
declare const RowElement: styled_components.IStyledComponent<"web", styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, RowTransientProps$1>>;
declare const Row: React.FC<RowProps>;

interface RowOrColumnProps extends Omit<HTMLProps<HTMLDivElement>, 'children'> {
    rowAlign?: string;
    rowJustify?: string;
    rowMargin?: string;
    columnAlign?: string;
    columnJustify?: string;
    columnMargin?: string;
    children?: JSX.Element | JSX.Element[] | null;
}
interface RowTransientProps extends Omit<HTMLProps<HTMLDivElement>, 'children'> {
    $rowAlign?: string;
    $rowJustify?: string;
    $rowMargin?: string;
    $columnAlign?: string;
    $columnJustify?: string;
    $columnMargin?: string;
    children?: JSX.Element | JSX.Element[] | null;
}
declare const RowOrColumnElement: styled_components.IStyledComponent<"web", styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, RowTransientProps>>;
declare const RowOrColumn: React.FC<RowOrColumnProps>;

type TabsProps = Omit<HTMLProps<HTMLDivElement>, 'value' | 'onChange'> & {
    items: {
        label: string;
        id: string;
    }[];
    value: string;
    onChange: (v: string) => void;
};
declare const Tabs: React.FC<TabsProps>;

type PaginatorProps = HTMLProps<HTMLDivElement> & {
    page: number;
    total: number;
    labelPaginator?: string;
    onPageChange: Function;
};
declare const Paginator: ({ page, total, labelPaginator, onPageChange, ...props }: PaginatorProps) => react_jsx_runtime.JSX.Element;

type GridTimeProps<T = any> = Omit<HTMLProps<HTMLDivElement>, 'start' | 'end'> & {
    start: Date;
    end: Date;
    refDate: Date;
    starttime: number;
    endtime: number;
    viewmode: 'MONTH' | '2WEEK' | 'WEEK';
    events: T[];
    navigate: (url: string, options?: any) => void;
    drag: (fn: () => any) => [{
        isDragging: boolean;
    }, drag: any];
    drop: (fn: () => any, deps: any) => [{
        isOver: boolean;
    }, drop: any];
    onMoveItem: (params: any, item: T) => Promise<any>;
};
declare const GridTime: React.FC<GridTimeProps>;

type GridTypeHeaderProps = Omit<HTMLProps<HTMLDivElement>, 'start'> & {
    start: Date;
    viewmode: 'MONTH' | '2WEEK' | 'WEEK';
    labelDayName?: string[];
    refDate: Date;
};
declare const GridTimeHeader: React.FC<GridTypeHeaderProps>;

interface EventProps {
    id: string;
    status: string;
    event_name: string;
    date: string;
    timeend: number;
    time: number;
}
type GridTimeTableProps<T extends EventProps> = Omit<HTMLProps<HTMLDivElement>, "start"> & {
    startDate: Date;
    starttime: number;
    endtime: number;
    viewmode: 'MONTH' | '2WEEK' | 'WEEK';
    events: T[];
    navigate: (to: string, options?: any) => void;
    drag: (fn: () => any) => [{
        isDragging: boolean;
    }, drag: any];
    drop: (fn: () => any, deps: any) => [{
        isOver: boolean;
    }, drop: any];
    onMoveItemFn: (params: any, item: T) => Promise<any>;
    refDate: Date;
};
declare const GridTimeTable: React.FC<GridTimeTableProps<EventProps>>;

type MenuItemType = {
    key: string;
    label: string;
    icon: string;
};
interface MenuProps {
    items: MenuItemType[];
    location: {
        pathname: string;
    };
    logoUrl?: string;
    labelHome?: string;
    menuOpened: boolean;
    navigate: (url: string, options?: any) => void;
    onClose: Function;
}
declare const Menu: React.FC<MenuProps>;

type ReactContent = JSX.Element | JSX.Element[] | undefined;
interface ModalProps {
    content?: ReactContent;
    show?: boolean;
    onClose?: Function;
}
declare const Modal: React.FC<ModalProps>;

interface TopbarProps {
    helpLabel?: string;
    items?: Array<{
        action: (e: MouseEvent<HTMLAnchorElement>) => void;
        label: string;
    }>;
    photo?: string;
    search?: {
        label: string;
        items: {
            element?: ReactNode;
            action: () => void;
        }[];
    }[];
    searchPlaceholder?: string;
    userName?: string;
    onSearch?: (value: string) => void;
    onMenuOpen?: Function;
    onOpenHelp?: Function;
}
declare const Topbar: React.FC<TopbarProps>;

interface SimpleTopbarProps {
    items: Array<{
        action: (e: MouseEvent<HTMLAnchorElement>) => void;
        label: string;
    }>;
    photo?: string;
    userName?: string;
    onMenuOpen?: Function;
}
declare const SimpleTopbar: React.FC<SimpleTopbarProps>;

type ButtonProps = HTMLProps<HTMLButtonElement> & {
    icon?: string;
    onClick?: Function;
    color?: string;
    title?: string;
    tooltip?: string;
    hideTextOnMobile?: boolean;
    disabled?: boolean;
    border?: boolean;
    size?: number | string;
};
declare const Button: React.FC<ButtonProps>;
declare const ButtonRowElement: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;

type CheckboxProps = HTMLProps<HTMLDivElement> & {
    uid: string;
    label: string;
    isVertical?: boolean;
    noWrap?: boolean;
    checked?: boolean;
    onCheck?: Function;
};
declare const Checkbox: React.FC<CheckboxProps>;

type FormError = {
    message: string[];
    type?: string;
    path?: string;
};

type CreditCardInputProps = HTMLProps<HTMLInputElement> & {
    uid: string;
    formError?: FormError;
    onValidate?: ((value: string | null) => string | boolean) | null;
};
declare const CreditCardInput: React.FC<CreditCardInputProps>;

type CopyInputProps = HTMLProps<HTMLDivElement> & {
    uid: string;
    copyLabel?: string;
};
declare const CopyInput: React.FC<CopyInputProps>;

type CPFInputProps = HTMLProps<HTMLInputElement> & {
    uid: string;
    formError?: FormError;
    onValidate?: ((value: string | null) => string | boolean) | null;
};
declare const CPFInput: React.FC<CPFInputProps>;

type DateInputProps = HTMLProps<HTMLInputElement> & {
    uid: string;
    locale?: string;
    depencencies?: Array<any>;
    formError?: FormError;
    calendar?: boolean;
    minViewmode?: 'century' | 'decade' | 'year' | 'month';
    onValidate?: ((value: string | null) => string | boolean) | null;
};
declare const DateInput: React.FC<DateInputProps>;

type DueMonthInputProps = Omit<HTMLProps<HTMLInputElement>, 'onChange' | 'value'> & {
    uid: string;
    value?: Date;
    formError?: FormError;
    onChange?: ((value?: Date) => any);
};
declare const DueMonthInput: React.FC<DueMonthInputProps>;

type FormBuilderType = {
    labelNew?: string;
    labelText?: string;
    labelCheck?: string;
    labelRadio?: string;
    labelRating?: string;
    labelTemplate?: string;
    labelTitle?: string;
    labelTextArea?: string;
    labelAnswer?: string;
    labelNoData?: string;
    value: any;
    templates?: {
        id: string;
        label: string;
    }[];
    onChange: Function;
    onTemplateSelect?: Function;
};
type QuestionTypesType = 'TEXT' | 'CHECK' | 'RADIO' | 'RATING';
type QuestionOptionType = {
    id: number;
    label: string;
};
type QuestionsType = {
    type: QuestionTypesType;
    title: string;
    order: number;
    id: number;
    options?: QuestionOptionType[];
};
declare const FormBuilder: React.FC<FormBuilderType>;

type FormAnswerType$1 = {
    value: any;
    onChange: Function;
    form: QuestionsType[];
};
declare const FormAnswer: React.FC<FormAnswerType$1>;

type FormAnswerType = {
    value: any;
    form: QuestionsType[];
};
declare const FormResult: React.FC<FormAnswerType>;

type InputProps = Omit<HTMLProps<HTMLInputElement>, 'ref'> & {
    uid: string;
    depencencies?: Array<any>;
    onValidate?: ((value: string | null) => string | boolean) | null;
    formError?: FormError;
    reference?: MutableRefObject<HTMLInputElement | null>;
};
declare const Input: ({ onValidate, depencencies, formError, reference, onKeyDown, ...props }: InputProps) => react_jsx_runtime.JSX.Element;

type IntegerInputProps = HTMLProps<HTMLInputElement> & {
    uid: string;
    formError?: FormError;
    min?: number;
    max?: number;
    onValidate?: ((value: string | null) => string | boolean) | null;
};
declare const IntegerInput: React.FC<IntegerInputProps>;

declare const Label: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, never>>;

type MoneyInputProps = Omit<HTMLProps<HTMLInputElement>, 'value' | 'onChange'> & {
    uid: string;
    value?: number;
    depencencies?: Array<any>;
    formError?: FormError;
    onValidate?: ((value: string | null) => string | boolean) | null;
    onChange?: (value?: number) => any;
};
declare const MoneyInput: React.FC<MoneyInputProps>;

type MonthInputProps = Omit<HTMLProps<HTMLInputElement>, 'onChange' | 'value'> & {
    uid: string;
    value?: Date;
    locale?: string;
    depencencies?: Array<any>;
    formError?: FormError;
    calendar?: boolean;
    onChange?: ((value?: Date) => any);
    onValidate?: ((value: string | null) => string | boolean) | null;
};
declare const MonthInput: React.FC<MonthInputProps>;

type PhoneInputProps = HTMLProps<HTMLInputElement> & {
    uid: string;
    depencencies?: Array<any>;
    formError?: FormError;
    onValidate?: ((value: string | null) => string | boolean) | null;
};
declare const PhoneInput: React.FC<PhoneInputProps>;

type ProfilePictureProps = Omit<HTMLProps<HTMLDivElement>, 'onChange'> & {
    labelDrag?: string;
    labelOr?: string;
    labelMaxSize?: string;
    labelSearch?: string;
    uid: string;
    value?: string;
    onChange?: Function;
};
declare const ProfilePicture: React.FC<ProfilePictureProps>;

type RadioProps = HTMLProps<HTMLDivElement> & {
    uid: string;
    labelContent?: any;
    isVertical?: boolean;
    checked?: boolean;
    onCheck?: Function;
};
declare const Radio: React.FC<RadioProps>;

type SelectProps = Omit<HTMLProps<HTMLSelectElement>, 'width'> & {
    uid: string;
    width?: string | number;
    formError?: FormError;
    onValidate?: ((value: string | null) => string | boolean) | null;
};
declare const Select: React.FC<SelectProps>;

type SelectPagedProps = Omit<HTMLProps<HTMLSelectElement>, 'onClick' | 'onFocus' | 'onBlur' | 'onChange'> & {
    uid: string;
    labelValue?: string;
    loader?: (page?: number, filter?: string) => Promise<any>;
    transform?: (t: any, index: number) => any;
    formError?: FormError;
    onChange?: (option: {
        value: string;
        label: string;
    }) => any;
    onClick?: (e: FocusEvent) => any;
    onFocus?: (e: FocusEvent) => any;
    onBlur?: (e: FocusEvent) => any;
    onValidate?: ((value: string | null) => string | boolean) | null;
};
declare const SelectPaged: React.FC<SelectPagedProps>;

type TextareaProps = HTMLProps<HTMLTextAreaElement> & {
    uid: string;
    depencencies?: Array<any>;
    onValidate?: ((value: string | null) => string | boolean) | null;
    formError?: FormError;
};
declare const Textarea: React.FC<TextareaProps>;

type TimeInputProps = HTMLProps<HTMLInputElement> & {
    uid: string;
    depencencies?: Array<any>;
    timepicker?: boolean;
    formError?: FormError;
    onValidate?: ((value: string | null) => string | boolean) | null;
};
declare const TimeInput: React.FC<TimeInputProps>;

type UploadProps = Omit<HTMLProps<HTMLTextAreaElement>, 'value' | 'onChange'> & {
    uid: string;
    value?: any;
    labelUpload?: string;
    multiple?: boolean;
    externalFiles: FileItemExternal[];
    horizontal?: boolean;
    onChange?: Function;
    onRemoveFileExternal?: (id: string) => void;
};
type FileItem = {
    id: string;
    file: File;
};
type FileItemExternal = {
    id: string;
    name: string;
    size: number;
};
declare const Upload: React.FC<UploadProps>;

type EmptyStateProps = {
    title: string | ReactElement | ReactElement[];
    icon: string;
    size?: number;
    margin?: string;
    padding?: string;
};
declare const EmptyState: React.FC<EmptyStateProps>;

declare const FilterBar: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
declare const FilterRow: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;

interface LoadingProps {
    loading: string[];
    labelLoading?: string;
}
declare const Loading: React.FC<LoadingProps>;

interface MessageProps {
    messages?: {
        content: string;
        messageType: string;
    }[];
    onPop?: () => void;
}
declare const Message: React.FC<MessageProps>;

declare const Tag: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;

type TimecheckProps = {
    start?: number;
    end?: number;
    date: Date;
    eventName?: string;
    location?: string;
    events: {
        id: string;
        date: string;
        time: number;
        timeend: number;
        location_id: string;
        event_name: string;
    }[];
    locationList?: {
        id?: string;
        name: string;
    }[];
    onConflict?: Function;
};
declare const Timecheck: React.FC<TimecheckProps>;

export { Breadcrumb, Button, ButtonRowElement as ButtonRow, CPFInput, Card, type CardProps, Checkbox, Column, type ColumnProps, CopyInput, CreditCardInput, DateInput, DueMonthInput, EmptyState, type FileItem, type FileItemExternal, FilterBar, FilterRow, FormAnswer, FormBuilder, FormResult, Grid, type GridProps, GridTime, GridTimeHeader, GridTimeTable, Input, IntegerInput, Label, Loading, type LoadingProps, Menu, type MenuProps, Message, type MessageProps, Modal, type ModalProps, MoneyInput, MonthInput, PageContent, type PageContentProps, Paginator, PhoneInput, ProfilePicture, type QuestionOptionType, type QuestionsType, Radio, Row, RowElement, RowOrColumn, RowOrColumnElement, type RowOrColumnProps, type RowProps, Select, SelectPaged, SimpleTopbar, type SimpleTopbarProps, Tabs, Tag, Textarea, TimeInput, Timecheck, Title, TitleBar, Topbar, type TopbarProps, Upload };

declare module 'rapidashboard';