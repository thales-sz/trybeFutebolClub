import { IMatch } from '../entities/Match';
import { ITeam } from '../entities/Team';
import handleTeamPoints from '../../utils/generateLeaderboard';

export default class LeaderboardService {
  public getHomeLeaderboard = async (teams: ITeam[], matches: IMatch[]) => {
    teams.forEach((team) => handleTeamPoints(team, matches));
  };
}
