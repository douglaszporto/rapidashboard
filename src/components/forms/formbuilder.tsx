import { FormEvent, useEffect, useState } from 'react';
import Icon from '@mdi/react';
import { mdiArrowDownBold, mdiArrowUpBold, mdiCheckboxMarkedCircleOutline, mdiCheckboxOutline, mdiCommentText, mdiRayStartVertexEnd, mdiTrashCan } from '@mdi/js';

import { Row } from '../layout/Row';
import { Input } from './input';
import { Column } from '../layout/Column';
import { Select } from './select';
import { RowOrColumn } from '../layout';
import * as Tags from './styles';

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
    templates?: {id:string, label:string}[];
    onChange: Function;
    onTemplateSelect?: Function;
}

type QuestionTypesType = 'TEXT'|'CHECK'|'RADIO'|'RATING';

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

export const FormBuilder:React.FC<FormBuilderType> = ({labelNew, labelText, labelCheck, labelRadio, labelRating, labelTemplate, labelTitle, labelTextArea, labelAnswer, labelNoData, value, onChange, templates, onTemplateSelect}: FormBuilderType) => {

    const [questions, setQuestions] = useState<QuestionsType[]>([]);
    const [template, setTemplate] = useState<string>('');

    const generateOptionsByType = (type: string) => {
        if (type === 'TEXT') {
            return undefined;
        }

        if (type === 'RATING') {
            return Array(5)
                .fill({id: 1, label: ""})
                .map((_,i) => ({id:i+1,label:""}));
        }

        return [{
            id: Date.now(),
            label: ""
        }]
    }

    const handleAddQuestion = (type:QuestionTypesType) => {
        const time = Date.now();
        let questionsObj = [...questions, {
            type,
            title: "",
            order: questions.length + 1,
            id: time,
            options: generateOptionsByType(type),
        }];

        onChange(questionsObj);
        setQuestions(questionsObj);
    }

    const handleSetQuestionTitle = (val: string, id: number) => {
        let questionsObj = questions.map(q => q.id === id ? {
            ...q,
            title: val
        } : q);

        onChange(questionsObj);
        setQuestions(questionsObj);
    }

    const handleGetQuestionTitle = (id: number) => {
        let quesiton = questions.find(q => q.id === id);
        return quesiton?.title ?? '';
    }

    const handleSetQuestionOption = (val: string, questionId: number, optionId: number) => {
        let quesiton = questions.find(q => q.id === questionId);
        let option = quesiton?.options?.find(o => o.id === optionId);
        if (quesiton?.options?.every(q => q.id === optionId ? true : q.label.length > 0) && (option?.label.length === 0 && val.length !== 0)) {
            handleAddQuestionOption(questionId, optionId, val);
        } else {
            let questionsObj = questions.map(q => q.id === questionId ? {
                ...q,
                options: (q.options ?? []).map(o => o.id === optionId ? {
                    id: o.id,
                    label: val,
                } : o)
            } : q);
    
            onChange(questionsObj);
            setQuestions(questionsObj);
        }
    }

    const handleGetQuestionOption = (questionId: number, optionId: number) => {
        let quesiton = questions.find(q => q.id === questionId);
        let option = quesiton?.options?.find(o => o.id === optionId);
        return option?.label ?? '';
    }

    const handleAddQuestionOption = (questionId: number, optionId: number, val: string) => {
        let newOption = {id: Date.now(), label: ''};
        let questionsObj = questions.map(q => q.id === questionId ? {
            ...q,
            options: q.options ? [...q.options.map(o => o.id === optionId ? {
                id: o.id,
                label: val,
            } : o), newOption] : [newOption]
        } : q);

        onChange(questionsObj);
        setQuestions(questionsObj);
    }

    const handleDeleteQuestion = (questionId: number) => {
        let questionsObj = questions.filter(q => q.id !== questionId).map((q,i) => ({...q, order:i+1}));
        onChange(questionsObj);
        setQuestions(questionsObj);
    }

    const handleMoveUpQuestion = (questionId: number) => {
        let currentPosition = questions.find(q => q.id === questionId)?.order ?? 0;

        if (!currentPosition || currentPosition <= 1) {
            return;
        }

        let questionsObj = questions.map(q => {
            if (q.order === (currentPosition-1)) {
                return {...q, order: currentPosition}
            }

            if (q.order === (currentPosition)) {
                return {...q, order: currentPosition - 1}
            }

            return q;
        }).sort((a,b)=> a.order - b.order);

        onChange(questionsObj);
        setQuestions(questionsObj);
    }

    const handleMoveDownQuestion = (questionId: number) => {
        let currentPosition = questions.find(q => q.id === questionId)?.order ?? Number.POSITIVE_INFINITY;

        if (!currentPosition || currentPosition >= questions.length) {
            return;
        }

        let questionsObj = questions.map(q => {
            if (q.order === (currentPosition+1)) {
                return {...q, order: currentPosition}
            }

            if (q.order === (currentPosition)) {
                return {...q, order: currentPosition + 1}
            }

            return q;
        }).sort((a,b)=> a.order - b.order);

        onChange(questionsObj);
        setQuestions(questionsObj);
    }

    const handleChangeTemplate = (e: FormEvent) => {
        const val = (e.target as HTMLSelectElement).value;
        setTemplate(val);
        if (onTemplateSelect) {
            onTemplateSelect(val);
        }
    }

    useEffect(() => {
        setQuestions(value);
    }, [value]);

    return <Tags.FormBuilderContent>
        <RowOrColumn rowJustify='space-between' columnAlign='stretch' columnJustify='flex-start' style={{marginBottom:"1rem"}}>
            <Column align='flex-start'>
                <div>{labelNew}</div>
                <Tags.ButtonRow justify='flex-start'>
                    <Tags.ButtonNew onClick={() => handleAddQuestion('TEXT')}><Icon path={mdiCommentText} size={1} /><span>{labelText}</span></Tags.ButtonNew>
                    <Tags.ButtonNew onClick={() => handleAddQuestion('CHECK')}><Icon path={mdiCheckboxOutline} size={1} /><span>{labelCheck?.split(" ").map((a,i)=><span key={i}>{a}</span>)}</span></Tags.ButtonNew>
                    <Tags.ButtonNew onClick={() => handleAddQuestion('RADIO')}><Icon path={mdiCheckboxMarkedCircleOutline } size={1} />{labelRadio?.split(" ").map((a,i)=><span key={i}>{a}</span>)}</Tags.ButtonNew>
                    <Tags.ButtonNew onClick={() => handleAddQuestion('RATING')}><Icon path={mdiRayStartVertexEnd } size={1} /><span>{labelRating}</span></Tags.ButtonNew>
                </Tags.ButtonRow>
            </Column>
            <>
                {templates && templates.length ? <Tags.ColumnTemplate align='flex-start'>
                    <div>{labelTemplate}</div>
                    <Row style={{width:"100%"}}>
                        <Select uid="formbuilder.template" value={template} onChange={handleChangeTemplate} width="2.5rem">
                            <option value=""></option>
                            {templates.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
                        </Select>
                    </Row>
                </Tags.ColumnTemplate> : null}
            </>
        </RowOrColumn>
        {questions && questions.length > 0 ? <>
            {questions.map(question => <Tags.QuestionWrapper key={question.id}>
                <Tags.QuestionBar>
                    <Tags.QuestionNumber>{question.order}</Tags.QuestionNumber>
                    <Tags.ButtonQuestion className={question.order === 1 ? 'disabled' : ''} onClick={() => handleMoveUpQuestion(question.id)}><Icon path={mdiArrowUpBold } size={1} /></Tags.ButtonQuestion>
                    <Tags.ButtonQuestion className={question.order === questions.length ? 'disabled' : ''} onClick={() => handleMoveDownQuestion(question.id)}><Icon path={mdiArrowDownBold } size={1} /></Tags.ButtonQuestion>
                    <Tags.ButtonQuestion onClick={() => handleDeleteQuestion(question.id)}><Icon path={mdiTrashCan } size={1} /></Tags.ButtonQuestion>
                </Tags.QuestionBar>
                <Tags.QuestionContent>
                    <Row align='flex-start' justify='stretch'>
                        <Input 
                            uid={'question.'+question.id} 
                            value={handleGetQuestionTitle(question.id)}
                            placeholder={labelTitle}
                            onChange={(e:FormEvent) => handleSetQuestionTitle((e.target as HTMLInputElement).value, question.id)}
                        />
                    </Row>

                    {question.type === 'TEXT' ? <Tags.FormBuilderTextArea>
                        {labelTextArea}
                    </Tags.FormBuilderTextArea> : null}

                    {question.type === 'CHECK' || question.type === 'RADIO'  ? question.options?.map((option:QuestionOptionType) => <Row key={option.id}>
                        <Tags.FormBuilderCheckbox className={question.type.toLocaleLowerCase()} />
                        <Input
                            uid={'question.'+question.id+'.option.'+option.id} 
                            value={handleGetQuestionOption(question.id, option.id)}
                            placeholder={labelAnswer}
                            style={{flex: 1, marginBottom:0}}
                            onChange={(e:FormEvent) => handleSetQuestionOption((e.target as HTMLInputElement).value, question.id, option.id)}
                        />
                    </Row>) : null}

                    {question.type === 'RATING' ? <Column>
                        <Row justify='space-between'>
                            <Input style={{flex:'none', width:'25%' }} uid={'question.'+question.id+'.option.1'} value={handleGetQuestionOption(question.id, 1)} onChange={(e:FormEvent) => handleSetQuestionOption((e.target as HTMLInputElement).value, question.id, 1)}/>
                            <Input style={{flex:'none', width:'25%' }} uid={'question.'+question.id+'.option.3'} value={handleGetQuestionOption(question.id, 3)} onChange={(e:FormEvent) => handleSetQuestionOption((e.target as HTMLInputElement).value, question.id, 3)}/>
                            <Input style={{flex:'none', width:'25%' }} uid={'question.'+question.id+'.option.5'} value={handleGetQuestionOption(question.id, 5)} onChange={(e:FormEvent) => handleSetQuestionOption((e.target as HTMLInputElement).value, question.id, 5)}/>
                        </Row>
                        <Tags.FormBuilderRating>
                            <Tags.FormBuilderRatingColor />
                            <Tags.FormBuilderRatingOption />
                            <Tags.FormBuilderRatingOption />
                            <Tags.FormBuilderRatingOption />
                            <Tags.FormBuilderRatingOption />
                            <Tags.FormBuilderRatingOption />
                        </Tags.FormBuilderRating>
                        <Row justify='space-between'>
                            <Input style={{flex:'none', width:'25%', marginTop:'0.5rem', marginLeft:'18.75%' }} uid={'question.'+question.id+'.option.2'} value={handleGetQuestionOption(question.id, 2)} onChange={(e:FormEvent) => handleSetQuestionOption((e.target as HTMLInputElement).value, question.id, 2)}/>
                            <Input style={{flex:'none', width:'25%', marginTop:'0.5rem', marginRight:'18.75%' }} uid={'question.'+question.id+'.option.4'} value={handleGetQuestionOption(question.id, 4)} onChange={(e:FormEvent) => handleSetQuestionOption((e.target as HTMLInputElement).value, question.id, 4)}/>
                        </Row>
                    </Column> : null}
                </Tags.QuestionContent>
            </Tags.QuestionWrapper>)}
        </> : <Tags.NoQuestions>{labelNoData?.split("\n").map((t,i)=><div key={i}>{t}</div>)}</Tags.NoQuestions>}
    </Tags.FormBuilderContent>        
}