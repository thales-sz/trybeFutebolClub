module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teams', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      team_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
    },
      {
        timestamps: false,
      })
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('teams');
  },
};