module.exports = (sequelize, DataTypes) => {
  const AvItems = sequelize.define('AvItem', {
    serialNo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    remarks: {
      type: DataTypes.STRING,
    },
  });
  AvItems.associate = (models) => {
    AvItems.belongsTo(models.AvReservationItem, {
      foreignKey: 'avItemsId',
      onDelete: 'CASCADE',
    });
  };
  return AvItems;
};