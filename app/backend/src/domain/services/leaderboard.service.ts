import { IMatch } from '../entities/Match';
import { ITeam } from '../entities/Team';
import {
  handleHomePoints,
  handleAwayPoints,
  handleGeneralPoints,
} from '../../utils/generateLeaderboard';
import sortLeaderboardPosition from '../../utils/sortLeaderboardPosition';

export default class LeaderboardService {
  public getHomeLeaderboard = async (teams: ITeam[], matches: IMatch[]) => {
    const unsortedLeaderboard = teams.map((team) => handleHomePoints(team, matches));
    const leaderboard = unsortedLeaderboard.sort(sortLeaderboardPosition);
    return leaderboard;
  };

  public getAwayLeaderboard = async (teams: ITeam[], matches: IMatch[]) => {
    const unsortedLeaderboard = teams.map((team) => handleAwayPoints(team, matches));
    const leaderboard = unsortedLeaderboard.sort(sortLeaderboardPosition);
    return leaderboard;
  };

  public getLeaderboard = async (teams: ITeam[], matches: IMatch[]) => {
    const unsortedLeaderboard = teams.map((team) => handleGeneralPoints(team, matches));
    const leaderboard = unsortedLeaderboard.sort(sortLeaderboardPosition);
    return leaderboard;
  };
}
