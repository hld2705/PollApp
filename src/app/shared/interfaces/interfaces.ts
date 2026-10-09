export interface QuestionInterface {
  questionNumber: number;
  text: string;
  multipleAnswers: boolean;
  answerNumber:number;
  answers: string[];
}

export interface Category{
  category: string[];
}