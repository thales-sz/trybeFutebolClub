import { ITeam } from '../domain/entities/Team';
import objLead from '../domain/entities/Leaderboard';
import { IMatch } from '../domain/entities/Match';

type matchStatus = 'win' | 'loss' | 'draw' | undefined;
type team = 'homeTeam' | 'awayTeam';

const getWinner = (condition: team, match: IMatch) => {
  const { homeTeamGoals, awayTeamGoals } = match;
  if (condition === 'homeTeam') {
    if (homeTeamGoals > awayTeamGoals) return 'win';
    if (homeTeamGoals < awayTeamGoals) return 'loss';
    return 'draw';
  }
  if (condition === 'awayTeam') {
    if (homeTeamGoals < awayTeamGoals) return 'win';
    if (homeTeamGoals > awayTeamGoals) return 'loss';
    return 'draw';
  }
};

const getMatchPoints = (status: matchStatus) => {
  if (status === 'win') return 3;
  if (status === 'loss') return 0;
  return 1;
};

const handleHomePoints = (team: ITeam, matches: IMatch[]) => {
  const currTeam = { ...objLead };
  matches.forEach((match) => {
    if (team.id === match.homeTeam) {
      const winOrLoss = getWinner('homeTeam', match);
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
  const currTeam = { ...objLead };
  matches.forEach((match) => {
    if (team.id === match.awayTeam) {
      const winOrLoss = getWinner('awayTeam', match);
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

const handleGeneralPoints = (team: ITeam, matches: IMatch[]) => {
  const currTeam = { ...objLead };
  matches.forEach((match) => {
    const current = match.awayTeam !== team.id ? 'homeTeam' : 'awayTeam';
    const opponent = match.awayTeam === team.id ? 'homeTeam' : 'awayTeam';
    if (team.id === match.awayTeam || team.id === match.homeTeam) {
      currTeam.name = team.teamName;
      currTeam.totalPoints += getMatchPoints(getWinner(current, match));
      currTeam.totalGames += 1;
      currTeam.totalVictories += getWinner(current, match) === 'win' ? 1 : 0;
      currTeam.totalDraws += getWinner(current, match) === 'draw' ? 1 : 0;
      currTeam.totalLosses += getWinner(current, match) === 'loss' ? 1 : 0;
      currTeam.goalsFavor += match[`${current}Goals`];
      currTeam.goalsOwn += match[`${opponent}Goals`];
      currTeam.goalsBalance = currTeam.goalsFavor - currTeam.goalsOwn;
      currTeam.efficiency = ((currTeam.totalPoints / (currTeam.totalGames * 3)) * 100).toFixed(2);
    }
  });
  return currTeam;
};

export {
  handleHomePoints,
  handleAwayPoints,
  handleGeneralPoints,
};
