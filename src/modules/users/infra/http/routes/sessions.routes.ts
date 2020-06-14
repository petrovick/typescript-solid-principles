import { Router } from 'express';
import SessionsController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessionsController = new SessionsController();
// Rota: Receber a requisição, chamar outro arquivo, devolver uma resposta
sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
