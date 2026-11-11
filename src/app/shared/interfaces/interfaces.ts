export interface QuestionInterface {
  questionNumber: number;
  text: string;
  multiple_answers: boolean;
  answerNumber:number;
  answers: string[];
}

export interface Category {
  category: string[];
}

export interface Survey {
  id: number;
  title: string;
  description: string;
  category_id: number | null;
  category_name: string;
  end_date: string;
  created_at: string;
}

export interface Question {
  id:number;
  survey_id:number;
  text:string;
  multiple_answers:boolean
}

export interface Answer{
  id: number;
  question_id: number;
  text: string
}