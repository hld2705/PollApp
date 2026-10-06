import { Component } from '@angular/core';
import { QuestionInterface } from '../../../interfaces/questionanswersinterface';
import { numberToLetter } from '../../../pipes/pipes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-questions',
  imports: [numberToLetter, FormsModule],
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
      answers: ['', '']
    }
  ];


  addAnswer(question: QuestionInterface) {
    if (question.multipleAnswers == true && question.answers.length < 6) {
      question.answers.push('')
    }
  }
}
