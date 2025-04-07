import { Request, Response } from "express";
import { QuizQuestion, UserResponse, QuizResult } from "../types";
import { GradingService } from "../services/gradingService";
import { DatabaseService } from "../services/databaseService";

class QuizController {
  private gradingService: GradingService;
  private databaseService: DatabaseService;
  private readonly quizQuestions: QuizQuestion[] = [
    {
      id: "q1",
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
      correctAnswer: "Mitochondria",
      timer: 30,
      points: 10
    },
    {
      id: "q2",
      question: "Which process converts sunlight into chemical energy?",
      options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"],
      correctAnswer: "Photosynthesis",
      timer: 30,
      points: 10
    }
  ];

  constructor() {
    this.gradingService = new GradingService();
    this.databaseService = new DatabaseService();
  }

  public async getQuizQuestions(req: Request, res: Response): Promise<void> {
    try {
      const sanitizedQuestions = this.quizQuestions.map(({ id, question, options, timer }) => ({
        id,
        question,
        options,
        timer
      }));

      res.status(200).json({
        success: true,
        data: sanitizedQuestions
      });
    } catch (error) {
      this.handleError(res, error);
    }
  }

  public async submitQuiz(req: Request, res: Response): Promise<void> {
    try {
      const { userId, answers } = this.validateQuizSubmission(req.body);
      
      const quizResult = await this.gradingService.gradeQuiz(answers, this.quizQuestions);
      await this.databaseService.saveQuizResult(userId, answers, quizResult);

      res.status(200).json({
        success: true,
        data: quizResult
      });
    } catch (error) {
      this.handleError(res, error);
    }
  }

  private validateQuizSubmission(body: any): UserResponse {
    if (!body.userId || !Array.isArray(body.answers)) {
      throw new Error('Invalid quiz submission format');
    }

    body.answers.forEach((answer: any, index: number) => {
      if (!answer.questionId || !answer.selectedAnswer) {
        throw new Error(`Invalid answer format at position ${index}`);
      }
    });

    return body as UserResponse;
  }

  private handleError(res: Response, error: unknown): void {
    console.error('Quiz Controller Error:', error);
    
    if (error instanceof Error) {
      res.status(400).json({
        success: false,
        error: error.message
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Internal server error'
      });
    }
  }
}

export default QuizController;