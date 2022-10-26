import { NextFunction, Request, Response } from 'express';
import { MatchService, LeaderboardService, TeamService } from '../domain/services';

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
      const finishedMatches = await this.matchService.getMatchesFilter(false);
      const leaderboard = await this.leaderboardService.getHomeLeaderboard(teams, finishedMatches);
      return res.status(200).json(leaderboard);
    } catch (error) {
      next(error);
    }
  };

  public getAwayLeaderboard = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teams = await this.teamService.getTeams();
      const finishedMatches = await this.matchService.getMatchesFilter(false);
      const leaderboard = await this.leaderboardService.getAwayLeaderboard(teams, finishedMatches);
      return res.status(200).json(leaderboard);
    } catch (error) {
      next(error);
    }
  };

  public getLeaderboard = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teams = await this.teamService.getTeams();
      const finishedMatches = await this.matchService.getMatchesFilter(false);
      const leaderboard = await this.leaderboardService.getLeaderboard(teams, finishedMatches);
      return res.status(200).json(leaderboard);
    } catch (error) {
      next(error);
    }
  };
}
