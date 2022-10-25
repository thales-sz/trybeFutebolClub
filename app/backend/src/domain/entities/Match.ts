import { ITeam } from './Team';

export interface IMatchUpdate {
  homeTeamGoals: number;
  awayTeamGoals: number;
}
export interface IMatch extends IMatchUpdate {
  id: number;
  homeTeam: number;
  awayTeam: number;
  inProgress?: boolean;
  teamHome?: ITeam;
  teamAway?: ITeam;
}
