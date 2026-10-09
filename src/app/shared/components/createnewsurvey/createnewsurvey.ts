import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Questions } from './questions/questions';
import { QuestionInterface } from '../../interfaces/interfaces';
import { Category } from '../../interfaces/interfaces';

@Component({
  selector: 'app-createnewsurvey',
  imports: [RouterLink, Questions],
  templateUrl: './createnewsurvey.html',
  styleUrl: './createnewsurvey.scss',
})
export class Createnewsurvey {

  categories: string[] = [
    'All Surveys',
    'Team Activities',
    'Health & Wellness',
    'Gaming & Entertainment',
    'Education & Learning',
    'Lifestyle & Preferences',
    'Technology & Innovation'
  ];

  questions: QuestionInterface[] = [
    {
      questionNumber: 1,
      text: '',
      multipleAnswers: false,
      answerNumber: 0,
      answers: ['', '']
    }
  ];

  addQuestion() {
    this.questions.push({
      questionNumber: this.questions.length + 1,
      text: '',
      multipleAnswers: false,
      answerNumber: 0,
      answers: ['', '']
    });
  }

  menuOpen = false;
  category = '';

  chooseCategory(category: string) {
    this.category = category
    this.menuOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
