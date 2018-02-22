module.exports = (sequelize, DataTypes) => {
  const Cartlab = sequelize.define('Cartlab', {
    unitNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      
    },
    cartNo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
      
    },
    specs: {
      type: DataTypes.TEXT,
      allowNull: false,
      
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
      
    },
    gradeLevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      
    },
    datePurchased: {
      type: DataTypes.DATEONLY,
    },
    itemRemarks: {
      type: DataTypes.TEXT,
      allowNull: false,
      
    },
    asOf: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    currentStatus: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    serialNo: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
    }

  });
  // User.associate = (models) => {
  //   User.hasMany(models.Creserve, {
  //     foreignKey: 'userId',
  //     as: 'Creserves',
  //   });
  // };
  Cartlab.associate = (models) => {
    Cartlab.belongsTo(models.Creserve, {
      foreignKey: 'cartLabId',
      onDelete: 'CASCADE',
    });
    Cartlab.hasMany(models.Ipadmac, {
      foreignKey: 'itemUnitNo',
      onDelete: 'CASCADE',
    })
  };
  return Cartlab;
};