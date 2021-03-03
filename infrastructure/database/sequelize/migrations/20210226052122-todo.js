'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('users', { 
        id: {
          type: Sequelize.STRING,
          primaryKey: true
        },
        description: {
            type: Sequelize.STRING
        },
        startDate: {
            type: Sequelize.STRING
        },
        endDate: {
            type: Sequelize.STRING
        },
        completed: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
      });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('users');
  }
};
