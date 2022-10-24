module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teams', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      home_team: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'teams',
          key: 'id',
        }
      },
      home_teams_goals: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      away_team: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'away_team',
        references: {
          model: 'teams',
          key: 'id',
        }
      },
      away_teams_goals: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      in_progress: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    },
      {
        timestamps: false,
      })
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('matches');
  },
};