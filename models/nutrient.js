'use strict';
module.exports = function(sequelize, DataTypes) {
  var nutrient = sequelize.define('nutrient', {
    ndbno: DataTypes.TEXT,
    foodName: DataTypes.TEXT,
    quantity: DataTypes.INTEGER,
    carb: DataTypes.TEXT,
    fat: DataTypes.TEXT,
    protein: DataTypes.TEXT,
    calories: DataTypes.TEXT,
    logId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.nutrient.belongsTo(models.user);
        models.nutrient.hasOne(models.log)
      }
    }
  });
  return nutrient;
};