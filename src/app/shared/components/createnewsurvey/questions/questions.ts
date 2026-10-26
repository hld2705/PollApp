
import { Component, input } from '@angular/core';
import { ReactiveFormsModule, FormArray } from '@angular/forms';
import { numberToLetter } from '../../../pipes/pipes';
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

    addAnswer(answers: FormArray) {
        if (answers.length < 6) {
            answers.push(createAnswerForm());
        }
    }
}
