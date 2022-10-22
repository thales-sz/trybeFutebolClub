import { ErrorRequestHandler as Erro, NextFunction, Request, Response } from 'express';

const erroMiddleware: Erro = (err, _req: Request, res: Response, next: NextFunction) => {
  const { name, message } = err;

  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message: 'All fields must be filled' });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflictError':
      res.status(409).json({ message });
      break;
    default:
      res.sendStatus(500);
  }
  next();
};

export default erroMiddleware;
