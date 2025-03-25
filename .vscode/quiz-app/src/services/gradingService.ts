export class GradingService {
    private correctAnswers: { [key: string]: string };

    constructor(correctAnswers: { [key: string]: string }) {
        this.correctAnswers = correctAnswers;
    }

    public gradeResponse(userResponses: { [key: string]: string }): { score: number; total: number } {
        let score = 0;
        const total = Object.keys(this.correctAnswers).length;

        for (const questionId in this.correctAnswers) {
            if (userResponses[questionId] === this.correctAnswers[questionId]) {
                score++;
            }
        }

        return { score, total };
    }

    public calculatePercentage(score: number, total: number): number {
        return (score / total) * 100;
    }
}