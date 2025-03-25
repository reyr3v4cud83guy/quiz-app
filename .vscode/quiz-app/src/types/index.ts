export interface UserResponse {
    userId: string;
    questionId: string;
    answer: string;
}

export interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
}