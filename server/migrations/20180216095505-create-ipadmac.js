module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Ipadmacs', {
      itemUnitNo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Cartlabs',
          key: 'serialNo',
        },
      },
      chargerSerialNo: {
        type: Sequelize.INTEGER
      },
      chargerCable: {
        type: Sequelize.STRING
      },
      chargerCableRemarks: {
        type: Sequelize.TEXT
      },
      itemType: {
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Ipadmacs');
  }
};