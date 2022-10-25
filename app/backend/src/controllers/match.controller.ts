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
}
