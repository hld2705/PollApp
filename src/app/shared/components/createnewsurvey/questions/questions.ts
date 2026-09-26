import { Component } from '@angular/core';
import { QuestionInterface } from '../../../interfaces/questionanswersinterface';

@Component({
  selector: 'app-questions',
  imports: [],
  templateUrl: './questions.html',
  styleUrl: './questions.scss',
})
export class Questions {

  questions: QuestionInterface[] = [
    {
      questionNumber: 1,
      text: '',
      multipleAnswers: false,
      answerNumber: 1,
      answers: ['']
    }
  ];


}
