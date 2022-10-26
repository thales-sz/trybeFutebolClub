import { IMatch } from '../entities/Match';
import { ITeam } from '../entities/Team';
import handleTeamPoints from '../../utils/generateLeaderboard';
import sortLeaderboardPosition from '../../utils/sortLeaderboardPosition';

export default class LeaderboardService {
  public getHomeLeaderboard = async (teams: ITeam[], matches: IMatch[]) => {
    const unsortedLeaderboard = teams.map((team) => handleTeamPoints(team, matches));
    const leaderboard = unsortedLeaderboard.sort(sortLeaderboardPosition);
    return leaderboard;
  };
}
