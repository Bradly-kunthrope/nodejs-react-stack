module.exports = (sequelize, DataTypes) => {

  const Creserve = sequelize.define('Creserve', {
    r_date_start: {
      type: DataTypes.DATE,
      notEmpty: true
    },
    r_date_end: {
      type: DataTypes.DATE,
      notEmpty: true
    },
    grade: {
      type: DataTypes.INTEGER,
      notEmpty: true
    },
    section: {
      type: DataTypes.STRING,
      notEmpty: true,
    },
  });
  Creserve.associate = (models) => {
    Creserve.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });

    Creserve.hasOne(models.Cartlab, {
      foreignKey: 'cartLabId',
      onDelete: 'CASCADE',
    });
  };
  return Creserve;
};