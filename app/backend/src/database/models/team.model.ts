import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';
import MatchesModel from './match.model';

class TeamsModel extends Model {
  declare id: number;
  declare teamName: string;
}

TeamsModel.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Teams',
  timestamps: false,
});

MatchesModel.belongsTo(TeamsModel, { foreignKey: 'homeTeam', as: 'homeTeamId' });
MatchesModel.belongsTo(TeamsModel, { foreignKey: 'awayTeam', as: 'awayTeamId' });

export default TeamsModel;
