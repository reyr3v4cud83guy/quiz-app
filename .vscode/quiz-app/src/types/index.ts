export interface UserResponse {
  userId: string;
  answers: {
    questionId: string;
    answer: string;
  }[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}