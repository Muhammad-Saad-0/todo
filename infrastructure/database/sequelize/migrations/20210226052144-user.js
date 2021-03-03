'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', { 
      username: {
        type: Sequelize.STRING
      },
      password: {
          type: Sequelize.STRING
      }
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');

  }
};
