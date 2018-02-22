module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AvReservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantityToBorrow: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      currentStatus: {
        type: Sequelize.STRING,
        notEmpty: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      creserveId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Creserves',
          key: 'id',
          as: 'creserveId',
        },
      },
      avEquipmentNo: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('AvReservations');
  }
};