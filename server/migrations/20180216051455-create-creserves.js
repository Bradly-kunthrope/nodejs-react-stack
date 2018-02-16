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
        type: Sequelize.DATE,
        notEmpty: true
      },
      r_date_end: {
        type: Sequelize.DATE,
        notEmpty: true
      },
      grade: {
        type: Sequelize.INTEGER,
        notEmpty: true
      },
      section: {
        type: Sequelize.STRING,
        notEmpty: true,
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
      cartLabId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Cartlabs',
          key: 'id',
          as: 'cartLabId'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Creserves');
  }
};