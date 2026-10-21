import { FormArray, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

/**
 * Form for validating questions
 */
export function createQuestionForm() {
  return new FormGroup({
    question: new FormControl('', {
      nonNullable: true,
      validators: [],
    }),
    multipleAnswers: new FormControl(false, { nonNullable: true }),
    answers: new FormArray([
      createAnswerForm(),
      createAnswerForm(),
    ]),
  });
}

/**
 * Form for validating answers
 */
export function createAnswerForm() {
  return new FormControl('', {
    nonNullable: true,
    validators: [Validators.pattern(/.*\p{L}.*/u)],
  });
}

/**
 * Form for validating survey
 */
export function createSurveyForm() {
  return new FormGroup({
    survey_name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3), noWhiteSpaceValidator, Validators.pattern(/.*\p{L}.*/u)],
    }),
    description: new FormControl('', { nonNullable: true }),
    category: new FormControl('', { nonNullable: true }),
    end_date: new FormControl('', { nonNullable: true }),
    questions: new FormArray([createQuestionForm()]),
  });
}

/**
 * Custom validator for whitespaces
 */
export function noWhiteSpaceValidator(control: AbstractControl) {
  return control.value?.trim() ? null : { whitespace: true };
}


