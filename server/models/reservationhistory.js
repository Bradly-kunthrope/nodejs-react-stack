module.exports = (sequelize, DataTypes) => {
  const ReservationHistory = sequelize.define('ReservationHistory', {
    status: {
      type: DataTypes.STRING,
    },
  });
  ReservationHistory.belongsTo(models.Creserve, {
    foreignKey: 'creserveId',
    onDelete: 'CASCADE',
  });
  return ReservationHistory;
};