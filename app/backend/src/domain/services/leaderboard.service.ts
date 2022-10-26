import { IMatch } from '../entities/Match';
import { ITeam } from '../entities/Team';

export default class LeaderboardService {
  public getHomeLeaderboard = async (teams: ITeam[], matches: IMatch[]) => {
    teams.forEach(team => generateTeamPoints(team, matches));
  };
}
