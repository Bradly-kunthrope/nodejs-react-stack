module.exports = (sequelize, DataTypes) => {
  const Coach = sequelize.define('Coach', {
    classSchedule: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  Coach.associate = (models) => {
    Coach.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return Coach;
};