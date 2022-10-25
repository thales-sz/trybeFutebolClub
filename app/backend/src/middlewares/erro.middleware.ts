import { ErrorRequestHandler as Erro, NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const erroMiddleware: Erro = (err, _req: Request, res: Response, next: NextFunction) => {
  const { name, message } = err;

  switch (name) {
    case 'ValidationError':
      res.status(StatusCodes.BAD_REQUEST).json({ message: 'All fields must be filled' });
      break;
    case 'NotFoundError':
      res.status(StatusCodes.NOT_FOUND).json({ message });
      break;
    case 'ConflictError':
      res.status(StatusCodes.CONFLICT).json({ message });
      break;
    default:
      res.status(500).json({ message });
  }
  next();
};

export default erroMiddleware;
