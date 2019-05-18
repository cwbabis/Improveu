module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userPhoto: {
      type: DataTypes.STRING(1000)
    },
    userName: DataTypes.STRING
  });
  return User;
};
