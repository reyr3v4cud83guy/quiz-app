import { Router } from 'express';
import QuizController from '../controllers/quizController';

const router = Router();
const quizController = new QuizController();

export const setRoutes = (app) => {
    app.use('/api/quiz', router);

    router.post('/submit', quizController.submitResponse.bind(quizController));
    router.get('/questions', quizController.getQuestions.bind(quizController));
};