import { NextFunction, Request, Response } from 'express';
import generateLeaderboard from '../utils/generateLeaderboard';
import MatchService from '../domain/services/match.service';

export default class LeaderboardController {
  private matchService: MatchService;

  constructor() {
    this.matchService = new MatchService();
  }

  public getLeaderboard = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teams = await this.matchService.getMatchesFilter(false);
      const leaderboard = generateLeaderboard(teams);
      return res.status(200).json(leaderboard);
    } catch (error) {
      next(error);
    }
  };
}
