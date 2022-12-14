import TeamModel from '../../database/models/team.model';
import MatchModel from '../../database/models/match.model';
import { IMatch, IMatchUpdate } from '../entities/Match';

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

  public createMatch = async (body: IMatch): Promise<IMatch> => {
    const newMatch = await this.matchModel.create({
      ...body,
    });
    return newMatch as IMatch;
  };

  public finishMatch = async (id: number): Promise<void> => {
    await this.matchModel.update({ inProgress: false }, { where: { id } });
  };

  public updateMatch = async (body: IMatchUpdate, id: number) => {
    await this.matchModel.update({ ...body }, { where: { id } });
    const match = await this.matchModel.findOne({ where: { id } });
    return match;
  };
}
