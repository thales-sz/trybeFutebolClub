import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { TeamService } from '../domain/services';

export default class TeamController {
  private teamService: TeamService;

  constructor() {
    this.teamService = new TeamService();
  }

  public getTeams = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | undefined> => {
    try {
      const teams = await this.teamService.getTeams();
      return res.status(StatusCodes.OK).json(teams);
    } catch (error) {
      next(error);
    }
  };

  public getTeamById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | undefined> => {
    try {
      const { id } = req.params;
      const team = await this.teamService.getTeamById(Number(id));
      return res.status(StatusCodes.OK).json(team);
    } catch (error) {
      next(error);
    }
  };
}
