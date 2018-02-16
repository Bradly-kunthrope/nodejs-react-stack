module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cartlabs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      unitNo: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      cartNo: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      specs: {
        type: Sequelize.TEXT,
        allowNull: false,

      },
      location: {
        type: Sequelize.TEXT,
        allowNull: false,

      },
      gradeLevel: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      datePurchased: {
        type: Sequelize.DATEONLY,
      },
      itemRemarks: {
        type: Sequelize.TEXT,
        allowNull: false,

      },
      asOf: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      currentStatus: {
        type: Sequelize.TEXT,
        allowNull: false,

      },      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      // serialNo: {
      //   type: Sequelize.INTEGER,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'Creserves',
      //     key: ''
      //   }
      // }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cartlabs');
  }
};