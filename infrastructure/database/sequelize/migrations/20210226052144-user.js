'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example: */
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
    /**
     * Add reverting commands here.
     *
     * Example: */
    await queryInterface.dropTable('users');
     
  }
};
