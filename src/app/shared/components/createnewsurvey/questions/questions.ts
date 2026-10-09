import { Component,input } from '@angular/core';
import { QuestionInterface } from '../../../interfaces/interfaces';
import { numberToLetter } from '../../../pipes/pipes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-questions',
  imports: [numberToLetter, FormsModule],
  templateUrl: './questions.html',
  styleUrl: './questions.scss',
})

export class Questions {

    questions = input.required<QuestionInterface[]>();

    addAnswer(question: QuestionInterface) {
        if (question.multipleAnswers && question.answers.length < 6) {
            question.answers.push('');
        }
    }
}
