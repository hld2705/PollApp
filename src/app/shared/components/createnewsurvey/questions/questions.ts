
import { Component, input } from '@angular/core';
import { ReactiveFormsModule, FormArray } from '@angular/forms';
import { numberToLetter } from '../../../pipes/numberToLetter';
import { createSurveyForm, createAnswerForm, createQuestionForm, } from '../../../forms/forms';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-questions',
    imports: [numberToLetter, ReactiveFormsModule],
    templateUrl: './questions.html',
    styleUrl: './questions.scss',
})
export class Questions {
    deleteInput(input: AbstractControl) {
        input.setValue('');
    }

    surveyForm = input.required<ReturnType<typeof createSurveyForm>>();

    addQuestion() {
        this.surveyForm().controls.questions.push(createQuestionForm());
    }

    addAnswer(questionIndex: number) {
    this.surveyForm().controls.questions
        .at(questionIndex)
        .controls.answers.push(createAnswerForm());
}
}
