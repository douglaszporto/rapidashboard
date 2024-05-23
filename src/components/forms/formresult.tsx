import * as Tags from './styles';
import { QuestionsType } from './formbuilder';

type FormAnswerType = {
    value: any;
    form: QuestionsType[];
}


export const FormResult:React.FC<FormAnswerType> = ({value, form}: FormAnswerType) => {

    const handleGetAnswer = (field:string[]) => {
        const getIndex = (cur:any, field:string[]):any => {
            if (field && field.length === 1) return cur[field[0]];
        
            let index = field[0];
            if (cur[index] !== undefined) {
                return getIndex(cur[index],field.slice(1));
            } else {
                return undefined;
            }
        }
        return getIndex(value, field);
    }

    return <Tags.FormBuilderContent>
        {form.map(question => <Tags.QuestionContent key={question.id}>
            <Tags.QuestionTitleResult>
                {question.title}
            </Tags.QuestionTitleResult>
            
            <Tags.QuestionResult>
                {question.type === 'TEXT' ? handleGetAnswer([String(question.id)]).replace(/[\r\n]{1,}/g,"\n").split("\n").map((text:string, i:number) => <p key={i}>{text}</p>) : null}
                {question.type === 'CHECK' ? question.options?.filter(o => handleGetAnswer([String(question.id), String(o.id)])).map((o) => o.label).join(", ") : null}
                {question.type === 'RADIO' ? question.options?.find(o => handleGetAnswer([String(question.id)]) === String(o.id))?.label : null}
                {question.type === 'RATING' ? question.options?.find(o => handleGetAnswer([String(question.id)]) === String(o.id))?.label : null}
            </Tags.QuestionResult>
        </Tags.QuestionContent>)}
    </Tags.FormBuilderContent>        
}