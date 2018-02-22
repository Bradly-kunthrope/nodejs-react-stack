module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AvReservationItems', {
      avEquipmentNo: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'AvReservations',
          key: 'avEquipmentNo',
        },
      },
      itemName: {
        type: Sequelize.STRING
      },
      inventoryQuantity: {
        type: Sequelize.INTEGER
      },
      datePurchased: {
        type: Sequelize.DATEONLY
      },
      avCurrentStatus: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      avItemsId: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('avReservationItems');
  }
};