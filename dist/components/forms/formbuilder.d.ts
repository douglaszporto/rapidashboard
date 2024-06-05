/// <reference types="react" />
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
export type QuestionOptionType = {
    id: number;
    label: string;
};
export type QuestionsType = {
    type: QuestionTypesType;
    title: string;
    order: number;
    id: number;
    options?: QuestionOptionType[];
};
export declare const FormBuilder: React.FC<FormBuilderType>;
export {};
