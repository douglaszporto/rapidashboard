import {  FormEvent, useEffect, useState } from 'react';

import { Row } from '../layout/Row';
import { Radio } from './radio';
import { Column } from '../layout/Column';
import { Checkbox } from './checkbox';
import { Textarea } from './textarea';
import { QuestionsType } from './formbuilder';
import * as Tags from './styles';

type FormAnswerType = {
    value: any;
    onChange: Function;
    form: QuestionsType[];
}


export const FormAnswer:React.FC<FormAnswerType> = ({onChange, form}: FormAnswerType) => {

    const [questions, setQuestions] = useState<QuestionsType[]>([]);
    const [answers, setAnswers] = useState<any>({});

    useEffect(() => {
        setQuestions(form);
    }, [form]);

    const handleSetAnswer = (field:string[], value:any) => {
        const addIndex = (cur:any, field:string[], value:any):any => {
            if (!field[0]) return value;
        
            let index = field[0];
            if (cur[index] !== undefined) {
                return {...cur, [index]: addIndex(cur[index],field.slice(1), value)};
            } else {
                return {...cur, [index]: addIndex({},field.slice(1), value)}
            }
        }

        setAnswers((a:any) => {
            let result = addIndex(a, field, value);
            if (onChange) {
                onChange(result);
            }
            return result;
        });
    }

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
        return getIndex(answers, field);
    }

    return <Tags.FormBuilderContent>
        {questions.map(question => <Tags.QuestionContent key={question.id}>
            <Tags.QuestionTitle>
                {question.title}
            </Tags.QuestionTitle>
            

            {question.type === 'TEXT' ? <Textarea 
                uid={'question.'+question.id} 
                style={{height:"100px", minHeight:"100px"}}
                value={handleGetAnswer([String(question.id)])}
                onChange={(e:FormEvent) => handleSetAnswer([String(question.id)], (e.target as HTMLTextAreaElement).value)}
            /> : null}

            {question.type === 'CHECK' ? question.options?.filter(o => o.label.length > 0).map((option) => <Checkbox 
                key={option.id}
                uid={`question.${question.id}.option.${option.id}`}
                label={option.label}
                className='compact'
                checked={handleGetAnswer([String(question.id), String(option.id)])}
                onCheck={(e:boolean) => handleSetAnswer([String(question.id), String(option.id)], e)}
            />) : null}
            
            {question.type === 'RADIO' ? question.options?.filter(o => o.label.length > 0).map((option) => <Radio 
                key={option.id}
                uid={`question.${question.id}.option.${option.id}`}
                label={option.label}
                className='compact'
                checked={handleGetAnswer([String(question.id)]) === String(option.id)}
                onCheck={() => handleSetAnswer([String(question.id)], String(option.id))}
            />) : null}

            {question.type === 'RATING' ? <Column>
                <Row>
                    <Tags.Label style={{marginRight:'12.5%' }}>{question.options ? question.options[0].label : ''}</Tags.Label>
                    <Tags.Label style={{marginRight:'0' }}>{question.options ? question.options[2].label : ''}</Tags.Label>
                    <Tags.Label style={{marginRight:'0', marginLeft:'12.5%' }}>{question.options ? question.options[4].label : ''}</Tags.Label>
                </Row>
                <Tags.FormBuilderRating>
                    <Tags.FormBuilderRatingColor />
                    <Tags.FormBuilderRatingOption className={handleGetAnswer([String(question.id)]) === "1" ? 'checked' : ''} onClick={() => handleSetAnswer([String(question.id)], "1")}/>
                    <Tags.FormBuilderRatingOption className={handleGetAnswer([String(question.id)]) === "2" ? 'checked' : ''} onClick={() => handleSetAnswer([String(question.id)], "2")}/>
                    <Tags.FormBuilderRatingOption className={handleGetAnswer([String(question.id)]) === "3" ? 'checked' : ''} onClick={() => handleSetAnswer([String(question.id)], "3")}/>
                    <Tags.FormBuilderRatingOption className={handleGetAnswer([String(question.id)]) === "4" ? 'checked' : ''} onClick={() => handleSetAnswer([String(question.id)], "4")}/>
                    <Tags.FormBuilderRatingOption className={handleGetAnswer([String(question.id)]) === "5" ? 'checked' : ''} onClick={() => handleSetAnswer([String(question.id)], "5")}/>
                </Tags.FormBuilderRating>
                <Row>
                    <Tags.Label style={{marginRight:'0', marginLeft:'18.75%' }}>{question.options ? question.options[1].label : ''}</Tags.Label>
                    <Tags.Label style={{marginRight:'0', marginLeft:'12.5%' }}>{question.options ? question.options[3].label : ''}</Tags.Label>
                </Row>
            </Column> : null}
        </Tags.QuestionContent>)}
    </Tags.FormBuilderContent>        
}