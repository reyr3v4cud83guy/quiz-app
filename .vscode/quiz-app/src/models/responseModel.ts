class ResponseModel {
    userId: string;
    questionId: string;
    answer: string;

    constructor(userId: string, questionId: string, answer: string) {
        this.userId = userId;
        this.questionId = questionId;
        this.answer = answer;
    }
}