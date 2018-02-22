module.exports = (sequelize, DataTypes) => {
  const Ipadmac = sequelize.define('Ipadmac', {
    chargerSerialNo: {
      type: DataTypes.INTEGER,
    },
    chargerCable: {
      type: DataTypes.STRING,
    },
    chargerCableRemarks: {
      type: DataTypes.TEXT,
    },
    itemType: {
      type: DataTypes.STRING
    }
  });

  Ipadmac.associate = (models) => {
    Ipadmac.belongsTo(models.Cartlab, {
      foreignKey: 'itemUnitNo',
      onDelete: 'CASCADE',
    });
  };
  return Ipadmac;
};