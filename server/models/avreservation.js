module.exports = (sequelize, DataTypes) => {
  const AvReservation = sequelize.define('AvReservation', {
    quantityToBorrow: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    currentStatus: {
      type: DataTypes.STRING,
      notEmpty: true
    }
  });

  AvReservation.associate = (models) => {
    AvReservation.hasMany(models.AvReservationItem, {
      foreignKey: 'avReservationItemId',
      onDelete: 'CASCADE',
    }),
    AvReservation.hasOne(models.Creserve, {
        foreignKey: 'creserveId',
        onDelete: 'CASCADE',
      });
  };
  return AvReservation;
};