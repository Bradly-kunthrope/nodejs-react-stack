module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    last_name: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    first_name: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_type: {
      type: DataTypes.STRING,
      notEmpty: true
    },
  });
  
  User.associate = (models) => {
    User.hasMany(models.Creserve, {
      foreignKey: 'userId',
      as: 'Creserves',
    });
  };
  return User;
};