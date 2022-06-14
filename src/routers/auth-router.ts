import { Router } from 'express';
import { login, authenticate } from '../controllers/auth-controller';
import { authMiddleware } from '../middlewares/auth-middlewares';

const authRouter = Router();

authRouter.post('/login', login);
authRouter.post('/authenticate', authMiddleware, authenticate);

export default authRouter;
