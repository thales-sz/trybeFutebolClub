import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import MatchService from '../domain/services/match.service';

export default class MatchController {
  private matchService: MatchService;

  constructor() {
    this.matchService = new MatchService();
  }

  public getMatches = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | undefined> => {
    try {
      const { inProgress } = req.query;
      if (!inProgress) {
        const matches = await this.matchService.getMatches();
        return res.status(StatusCodes.OK).json(matches);
      }
      const condition = (inProgress === 'true');
      const filteredMatches = await this.matchService.getMatchesFilter(condition);
      return res.status(StatusCodes.OK).json(filteredMatches);
    } catch (error) {
      console.log(error);

      next(error);
    }
  };

  public createMatch = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;
      const newMatch = await this.matchService.createMatch(body);
      return res.status(StatusCodes.CREATED).json(newMatch);
    } catch (error) {
      next(error);
    }
  };

  public finishMatch = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      await this.matchService.finishMatch(Number(id));
      return res.status(StatusCodes.OK).json({ message: 'Finished' });
    } catch (error) {
      next(error);
    }
  };

  public updateMatch = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;
      const { id } = req.params;
      const match = await this.matchService.updateMatch(body, Number(id));
      return res.status(StatusCodes.OK).json(match);
    } catch (error) {
      next(error);
    }
  };
}
