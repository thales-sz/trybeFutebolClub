import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IMatch } from '../domain/entities/Match';

const validateMatch = (req: Request, res: Response, next: NextFunction): Response | undefined => {
  const { homeTeam, awayTeam }: IMatch = req.body;
  try {
    if (homeTeam === awayTeam) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }
    if (homeTeam > 16 || homeTeam <= 0 || awayTeam <= 0 || awayTeam > 16) {
      return res.status(StatusCodes.NOT_FOUND)
        .json({ message: 'There is no team with such id!' });
    }
    next();
  } catch (err) {
    next(err);
  }
};

export default validateMatch;
