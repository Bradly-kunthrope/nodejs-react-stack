module.exports = (sequelize, DataTypes) => {

  const Creserve = sequelize.define('Creserve', {
    r_date_start: {
      type: DataTypes.DATEONLY,
      notEmpty: true
    },
    r_date_end: {
      type: DataTypes.DATEONLY,
      notEmpty: true
    },
    classroom_cl: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    subject_taught: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    department: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    year_level_taught: {
      type: DataTypes.INTEGER,
      isIn: [['1', '2', '3', '4']]
    },
  });

  Creserve.associate = (models) => {
    Creserve.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Creserve;
};