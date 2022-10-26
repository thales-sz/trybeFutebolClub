import { ILeaderboard } from '../domain/entities/Leaderboard';

const sortLeaderboardPosition = (teamA: ILeaderboard, teamB: ILeaderboard) => {
  if (teamA.totalPoints < teamB.totalPoints) return 1;
  if (teamA.totalPoints > teamB.totalPoints) return -1;
  if (teamA.goalsBalance < teamB.goalsBalance) return 1;
  if (teamA.goalsBalance > teamB.goalsBalance) return -1;
  if (teamA.goalsFavor < teamB.goalsFavor) return 1;
  if (teamA.goalsFavor > teamB.goalsFavor) return -1;
  return 0;
};

export default sortLeaderboardPosition;
