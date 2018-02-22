
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AvItems', {
      avItemsId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'AvReservationItems',
          key: 'avItemsId',
        },
      },
      serialNo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      remarks: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('AvItems');
  }
};