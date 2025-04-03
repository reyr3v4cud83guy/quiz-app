import { Request, Response } from "express";

class QuizController {
  submitResponse(req: Request, res: Response): void {
    const { userId, answers } = req.body;

    if (!userId || !Array.isArray(answers)) {
      res.status(400).json({ error: "Invalid request data" });
      return;
    }

    // Simulate saving the response (replace with actual database logic)
    console.log("Response received:", { userId, answers });

    res.status(200).json({ message: "Response submitted successfully!" });
  }

  getQuizData(_: Request, res: Response): void {
    const quizData = [
      {
        id: "q1",
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
      },
      {
        id: "q2",
        question: "Which process converts sunlight into chemical energy?",
        options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"],
      },
      // Add more questions as needed
    ];

    res.status(200).json(quizData);
  }
}

export default QuizController;