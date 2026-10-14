import {FormArray,FormControl,FormGroup,Validators,
} from '@angular/forms';

export function createQuestionForm() {
  return new FormGroup({
    question: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    multipleAnswers: new FormControl(false, { nonNullable: true }),
    answers: new FormArray([
      createAnswerForm(),
      createAnswerForm(),
    ]),
  });
}

export function createAnswerForm() {
  return new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(1)],
  });
}

export function createSurveyForm() {
  return new FormGroup({
    survey_name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    description: new FormControl('', { nonNullable: true }),
    category: new FormControl('', { nonNullable: true }),
    end_date: new FormControl('', { nonNullable: true }),
    questions: new FormArray([createQuestionForm()]),
  });
}

