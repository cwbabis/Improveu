module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userPhoto: DataTypes.STRING,
    userName: DataTypes.STRING
  });
  return User;
};
