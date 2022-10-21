import * as express from 'express';
import { StatusCodes } from 'http-status-codes';
import validateBody from '../middlewares/validateBody.middleware';

const router = express.Router();

router
  .post(
    '/login',
    validateBody,
    (req: express.Request, res: express.Response) => {
      res.status(StatusCodes.OK).json({ message: 'login' });
    },
  );

export default router;
