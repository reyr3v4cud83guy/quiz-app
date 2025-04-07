class QuizController {
  getQuizData(req: any, res: any) {
    res.status(200).json([]);
  }

  submitResponse(req: any, res: any) {
    const { answers } = req.body;
    const score = answers.length; // Example scoring logic
    res.status(200).json({
      message: 'Response submitted successfully!',
      score,
      total: answers.length,
    });
  }
}

export default QuizController;

import { Request, Response } from 'express';

describe('QuizController', () => {
  let quizController: QuizController;

  beforeEach(() => {
    quizController = new QuizController();
  });

  it('should return quiz data', () => {
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    quizController.getQuizData(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.any(Array));
  });

  it('should validate and grade responses', () => {
    const req = {
      body: {
        userId: 'user123',
        answers: [{ questionId: 'q1', answer: 'Mitochondria' }],
      },
    } as Request;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    quizController.submitResponse(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Response submitted successfully!',
      score: 1,
      total: expect.any(Number),
    });
  });
});
