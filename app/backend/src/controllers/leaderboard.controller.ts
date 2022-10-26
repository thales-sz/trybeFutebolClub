import { NextFunction, Request, Response } from 'express';
import generateLeaderboard from '../utils/generateLeaderboard';
import { MatchService, TeamService, LeaderboardService } from '../domain/services';

export default class LeaderboardController {
  private matchService: MatchService;
  private teamService: TeamService;
  private leaderboardService: LeaderboardService;

  constructor() {
    this.matchService = new MatchService();
    this.teamService = new TeamService();
    this.leaderboardService = new LeaderboardService();
  }

  public getHomeLeaderboard = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teams = await this.teamService.getTeams();
      const matches = await this.matchService.getMatchesFilter(false);
      const leaderboard = await this.leaderboardService.getHomeLeaderboard(teams, matches);
      return res.status(200).json(leaderboard);
    } catch (error) {
      next(error);
    }
  };
}
