import * as express from 'express';
import validateJWT from '../middlewares/validateToken.middleware';
import { UserController } from '../controllers';
import validateBody from '../middlewares/validateBody.middleware';

const router = express.Router();
const userController = new UserController();

router.post('/', validateBody, userController.login);
router.get('/validate', validateJWT, userController.userRole);

export default router;
