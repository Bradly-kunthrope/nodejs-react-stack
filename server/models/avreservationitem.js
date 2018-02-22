module.exports = (sequelize, DataTypes) => {
  const AvReservationItem = sequelize.define('AvReservationItem', {
    itemName: {
      type: DataTypes.STRING,
    },

    inventoryQuantity: {
      type: DataTypes.INTEGER,
    },

    datePurchased: {
      type: DataTypes.DATEONLY,
    },

    avCurrentStatus: {
      type: DataTypes.STRING
    },
  });
  AvReservationItem.associate = (models) => {
    AvReservationItem.hasMany(models.AvItem, {
      foreignKey: 'avItemsId',
      onDelete: 'CASCADE',
    });
    AvReservationItem.belongsTo(models.AvReservation, {
      foreignKey: 'AvReservationId',
      onDelete: 'CASCADE',
    });
  };
  return AvReservationItem;
};