import TeamModel from '../../database/models/team.model';
import MatchModel from '../../database/models/match.model';
import { IMatch } from '../entities/Match';

export default class MatchService {
  private matchModel: typeof MatchModel;

  constructor() {
    this.matchModel = MatchModel;
  }

  public getMatches = async (): Promise<IMatch[]> => {
    const matches = await this.matchModel.findAll({
      include: [
        { model: TeamModel,
          as: 'teamHome',
          attributes: {
            exclude: ['id'],
          } },
        { model: TeamModel,
          as: 'teamAway',
          attributes: {
            exclude: ['id'],
          } },
      ],
    });
    return matches as IMatch[];
  };

  public getMatchesFilter = async (inProgress: boolean): Promise<IMatch[]> => {
    const matches = await this.matchModel.findAll({
      where: { inProgress },
      include: [
        { model: TeamModel,
          as: 'teamHome',
          attributes: {
            exclude: ['id'],
          } },
        { model: TeamModel,
          as: 'teamAway',
          attributes: {
            exclude: ['id'],
          } },
      ],
    });
    return matches as IMatch[];
  };
}
