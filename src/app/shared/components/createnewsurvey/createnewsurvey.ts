import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Questions } from './questions/questions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { createSurveyForm, createQuestionForm } from '../../forms/forms';
import { pushToSupabase } from '../../services/survey.service';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-createnewsurvey',
  imports: [RouterLink, Questions, FormsModule, ReactiveFormsModule],
  templateUrl: './createnewsurvey.html',
  styleUrl: './createnewsurvey.scss',
})
export class Createnewsurvey {

  submitted = false;

  survey = createSurveyForm();

  question = createQuestionForm();

  categories: string[] = [
    'All Surveys',
    'Team Activities',
    'Health & Wellness',
    'Gaming & Entertainment',
    'Education & Learning',
    'Lifestyle & Preferences',
    'Technology & Innovation'
  ];

  /**
   * Pushes the values to the question form
   */
  addQuestion() {
    this.survey.controls.questions.push(createQuestionForm());
  }

  menuOpen = false;
  category = '';

  /**
   * sets the category and updates if the user chooses 'All Surveys' the value is set to 'none'
   */
  chooseCategory(category: string) {
    this.category = category === 'All Surveys' ? '' : category;
    this.survey.controls.category.setValue(this.category);
    this.menuOpen = false;

  }

  /**
   * Small function for the category menu
   */
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  /**
   * Gets 'raw value' from survey forms, checks if the survey is valid, and pushes it to the next function that actually pushes the same values to supabase
   */
  publishSurvey() {
    const surveyData = this.survey.getRawValue();
    this.submitted = true;
    this.survey.markAllAsTouched();

    if (this.survey.invalid) {
      return
    } else {
      pushToSupabase(surveyData)
    }
  }

  deleteInput(input: AbstractControl) {
    input.setValue('');
  }
}