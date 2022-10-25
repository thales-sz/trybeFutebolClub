import { NextFunction, Request, Response } from 'express';
import MatchService from '../domain/services/match.service';

export default class LeaderboardController {
  private matchService: MatchService;

  constructor() {
    this.matchService = new MatchService();
  }

  public getLeaderboard = (req: Request, res: Response, next: NextFunction) => {
    try {
      const teams = this.matchService.getMatchesFilter(true);
      return res.status(200).json(teams);
    } catch (error) {
      next(error);
    }
  };
}
