import { ITeam } from '../domain/entities/Team';
import objLeader from '../domain/entities/Leaderboard';
import { IMatch } from '../domain/entities/Match';

const getMatchWinner = (match: IMatch) => {
  const { homeTeamGoals, awayTeamGoals } = match;
  if (homeTeamGoals > awayTeamGoals) return [match.teamHome?.teamName];
  if (homeTeamGoals < awayTeamGoals) return [match.teamAway?.teamName];
  return [match.teamHome?.teamName, match.teamAway?.teamName];
};

const handleTeamPoints = (team: ITeam, matches: IMatch[]) => {
  const obj = { ...objLeader };
  const leaderboard = matches.map((match) => {
    const winner = getMatchWinner(match);
  });
  return leaderboard;
};

export default generateLeaderboard;
