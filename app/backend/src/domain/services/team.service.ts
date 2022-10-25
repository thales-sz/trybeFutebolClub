import { log } from 'console';
import TeamModel from '../../database/models/team.model';
import { ITeam } from '../entities/Team';

class TeamService {
  private teamModel: typeof TeamModel;

  constructor() {
    this.teamModel = TeamModel;
  }

  public getTeams = async (): Promise<ITeam[]> => {
    const teams = await this.teamModel.findAll();
    log(teams);
    return teams as ITeam[];
  };

  public getTeamById = async (id: number): Promise<ITeam> => {
    const team = await this.teamModel.findOne({
      where: { id },
    });
    return team as ITeam;
  };
}

export default TeamService;
