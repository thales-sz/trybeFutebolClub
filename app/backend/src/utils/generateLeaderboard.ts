import { ITeam } from '../domain/entities/Team';
import objLeader from '../domain/entities/Leaderboard';
import { IMatch } from '../domain/entities/Match';

type matchStatus = 'win' | 'loss' | 'draw';

const getMatchHomeWinner = (match: IMatch) => {
  const { homeTeamGoals, awayTeamGoals } = match;
  if (homeTeamGoals > awayTeamGoals) return 'win';
  if (homeTeamGoals < awayTeamGoals) return 'loss';
  return 'draw';
};

const getMatchAwayWinner = (match: IMatch) => {
  const { homeTeamGoals, awayTeamGoals } = match;
  if (homeTeamGoals > awayTeamGoals) return 'loss';
  if (homeTeamGoals < awayTeamGoals) return 'win';
  return 'draw';
};

const getMatchPoints = (status: matchStatus) => {
  if (status === 'win') return 3;
  if (status === 'loss') return 0;
  return 1;
};

const handleHomePoints = (team: ITeam, matches: IMatch[]) => {
  const currTeam = { ...objLeader };
  matches.forEach((match) => {
    if (team.id === match.homeTeam) {
      const winOrLoss = getMatchHomeWinner(match);
      currTeam.name = team.teamName;
      currTeam.totalPoints += getMatchPoints(winOrLoss);
      currTeam.totalGames += 1;
      currTeam.totalVictories += winOrLoss === 'win' ? 1 : 0;
      currTeam.totalDraws += winOrLoss === 'draw' ? 1 : 0;
      currTeam.totalLosses += winOrLoss === 'loss' ? 1 : 0;
      currTeam.goalsFavor += match.homeTeamGoals;
      currTeam.goalsOwn += match.awayTeamGoals;
      currTeam.goalsBalance = currTeam.goalsFavor - currTeam.goalsOwn;
      currTeam.efficiency = ((currTeam.totalPoints / (currTeam.totalGames * 3)) * 100).toFixed(2);
    }
  });
  return currTeam;
};

const handleAwayPoints = (team: ITeam, matches: IMatch[]) => {
  const currTeam = { ...objLeader };
  matches.forEach((match) => {
    if (team.id === match.awayTeam) {
      const winOrLoss = getMatchAwayWinner(match);
      currTeam.name = team.teamName;
      currTeam.totalPoints += getMatchPoints(winOrLoss);
      currTeam.totalGames += 1;
      currTeam.totalVictories += winOrLoss === 'win' ? 1 : 0;
      currTeam.totalDraws += winOrLoss === 'draw' ? 1 : 0;
      currTeam.totalLosses += winOrLoss === 'loss' ? 1 : 0;
      currTeam.goalsFavor += match.awayTeamGoals;
      currTeam.goalsOwn += match.homeTeamGoals;
      currTeam.goalsBalance = currTeam.goalsFavor - currTeam.goalsOwn;
      currTeam.efficiency = ((currTeam.totalPoints / (currTeam.totalGames * 3)) * 100).toFixed(2);
    }
  });
  return currTeam;
};

export {
  handleHomePoints,
  handleAwayPoints,
};
