import { Router } from 'express';
import QuizController from '../controllers/quizController';

const router = Router();
const quizController = new QuizController();

import { Application } from 'express';

export const setRoutes = (app: Application) => {
    app.use('/api/quiz', router);

    router.post('/submit', quizController.submitQuiz.bind(quizController));
    router.get('/questions', quizController.getQuizQuestions.bind(quizController));
};