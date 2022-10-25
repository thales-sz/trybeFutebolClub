import TeamModel from '../../database/models/team.model';
import MatchModel from '../../database/models/match.model';

export default class MatchService {
  private matchModel: typeof MatchModel;

  constructor() {
    this.matchModel = MatchModel;
  }

  public getMatches = async () => {
    const matches = await this.matchModel.findAll({
      include: [{
        model: TeamModel,
        attributes: ['teamName'],
      }],
    });
    return matches;
  };
}
