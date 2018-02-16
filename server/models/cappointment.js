module.exports = (sequelize, DataTypes) => {
  const Cappointment = sequelize.define('Cappointment', {
    comments: {
      type: DataTypes.TEXT,

    },  
    coachCurrentStatus: {
      type: DataTypes.STRING,
      allowNull: false
    },

  });

  Cappointment.associate = (models) => {
    Cappointment.belongsTo(models.Creserve, {
      foreignKey: 'creserveId',
      onDelete: 'CASCADE',
    });

    Cappointment.hasMany(models.Coach, {
      foreignKey: 'coachId',
      onDelete: 'CASCADE',
    });
  };
  return Cappointment;
};