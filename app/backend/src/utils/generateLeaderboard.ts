// import { ILeaderboard } from '../domain/entities/Leaderboard';
import { IMatch } from '../domain/entities/Match';

const getMatchWinner = (match: IMatch) => {
  const { homeTeamGoals, awayTeamGoals } = match;
  if (homeTeamGoals > awayTeamGoals) return match.teamHome?.teamName;
  if (homeTeamGoals < awayTeamGoals) return match.teamAway?.teamName;
  return 'empate';
};

const generateLeaderboard = (matches: IMatch[]) => {
  const leaderboard = matches.map((match) =>
    console.log(getMatchWinner(match)));

  return leaderboard;
};

export default generateLeaderboard;
