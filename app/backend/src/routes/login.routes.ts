import * as express from 'express';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();

router
  .post('/login', (req: express.Request, res: express.Response) => {
    res.status(StatusCodes.OK).json({ message: 'login' });
  });

export default router;
