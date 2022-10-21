import * as express from 'express';
import UserService from '../domain/services/user.service';
import UserController from '../controllers/user.controller';
import validateBody from '../middlewares/validateBody.middleware';

const router = express.Router();
const userService = new UserService();
const userController = new UserController(userService);

router.post('/login', validateBody, userController.login);

export default router;
