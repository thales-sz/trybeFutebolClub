import * as express from 'express';
import UserController from '../controllers/user.controller';
import validateBody from '../middlewares/validateBody.middleware';

const router = express.Router();
const userController = new UserController();

router.post('/login', validateBody, userController.login);

export default router;
