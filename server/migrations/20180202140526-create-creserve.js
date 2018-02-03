'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Creserves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      r_date_start: {
        type: Sequelize.DATEONLY,
        notEmpty: true
      },
      r_date_end: {
        type: Sequelize.DATEONLY,
        notEmpty: true
      },
      classroom_cl: {
        type: Sequelize.STRING,
        notEmpty: true
      },
      subject_taught: {
        type: Sequelize.STRING,
        notEmpty: true
      },
      department: {
        type: Sequelize.STRING,
        notEmpty: true
      },
      year_level_taught: {
        type: Sequelize.INTEGER,
        isIn: [['1', '2', '3', '4']]
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Creserves');
  }
};