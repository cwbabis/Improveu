module.exports = function(sequelize, DataTypes) {
  var Goal = sequelize.define("Goal", {
    goal: DataTypes.STRING
  });
  /*Goal.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Goal.belongsTo(models.Example, {
      foreignKey: {
        allowNull: false
      }
    });
  };*/

  return Goal;
};