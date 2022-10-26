import { Sequelize } from 'sequelize';
import * as config from '../config/database';
import MatchModel from './match.model';
import TeamModel from './team.model';

export default new Sequelize(config);

export {
  MatchModel,
  TeamModel,
}
