import { QuestionsType } from './formbuilder';

type FormAnswerType = {
    value: any;
    onChange: Function;
    form: QuestionsType[];
};
export declare const FormAnswer: React.FC<FormAnswerType>;
export {};
