'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('products', {
       id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false
       },
       tittle: {
        type: Sequelize.STRING,
        allowNull:false
       },
       description: {
        type: Sequelize.STRING,
        allowNull:false
       },
       rating: {
        type: Sequelize.FLOAT,
        allowNull:false
       },
       image: {
        type: Sequelize.STRING
       }
      });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('products');
  }
};
