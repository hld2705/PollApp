import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Questions } from './questions/questions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { createSurveyForm, createQuestionForm } from '../../forms/forms';
import { pushToSupabase } from '../../services/survey.service';

@Component({
  selector: 'app-createnewsurvey',
  imports: [RouterLink, Questions, FormsModule, ReactiveFormsModule],
  templateUrl: './createnewsurvey.html',
  styleUrl: './createnewsurvey.scss',
})
export class Createnewsurvey {

  submitted = false;

  survey = createSurveyForm();

  categories: string[] = [
    'All Surveys',
    'Team Activities',
    'Health & Wellness',
    'Gaming & Entertainment',
    'Education & Learning',
    'Lifestyle & Preferences',
    'Technology & Innovation'
  ];

  addQuestion() {
    this.survey.controls.questions.push(createQuestionForm());
  }

  menuOpen = false;
  category = '';

  chooseCategory(category: string) {
  this.category = category === 'All Surveys' ? '' : category;
  this.survey.controls.category.setValue(this.category);
  this.menuOpen = false;

}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

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

}
