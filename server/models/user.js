module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    lastName: {
      type: DataTypes.STRING,
      notEmpty: true,
    },
    firstName: {
      type: DataTypes.STRING,
      notEmpty: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      },
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userType: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isCoach: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  });
  
  User.associate = (models) => {
    User.hasMany(models.Creserve, {
      foreignKey: 'userId',
      as: 'Creserves',
    });
    User.hasMany(models.Coach, {
      foreignKey: 'userId',
      as: 'Coaches',
    });
  };
  return User;
};