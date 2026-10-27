export interface QuestionInterface {
  questionNumber: number;
  text: string;
  multiple_answers: boolean;
  answerNumber:number;
  answers: string[];
}

export interface Category{
  category: string[];
}