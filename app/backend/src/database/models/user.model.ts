import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';

class UserModel extends Model {
  declare id: number;
  declare email: string;
  declare username: string;
  declare password: string;
  declare role: string;
}

UserModel.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  username: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  role: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

export default UserModel;
