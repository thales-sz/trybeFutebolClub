import * as express from 'express';
import validateJWT from '../middlewares/validateToken.middleware';
import UserController from '../controllers/user.controller';
import validateBody from '../middlewares/validateBody.middleware';

const router = express.Router();
const userController = new UserController();

router.post('/login', validateBody, userController.login);
router.get('/login/validate', validateJWT, userController.userRole);

export default router;
