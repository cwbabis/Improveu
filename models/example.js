module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    userName: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Example;
};
