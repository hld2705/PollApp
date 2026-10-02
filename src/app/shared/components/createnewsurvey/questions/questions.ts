import { Component } from '@angular/core';
import { QuestionInterface } from '../../../interfaces/questionanswersinterface';
import { numberToLetter } from '../../../pipes/pipes';

@Component({
  selector: 'app-questions',
  imports: [numberToLetter],
  templateUrl: './questions.html',
  styleUrl: './questions.scss',
})
export class Questions {

  questions: QuestionInterface[] = [
    {
      questionNumber: 1,
      text: '',
      multipleAnswers: false,
      answerNumber: 0,
      answers: ['']
    }
  ];


}
