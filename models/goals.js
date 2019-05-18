module.exports = function(sequelize, DataTypes) {
  var Goal = sequelize.define("Goal", {
    goalTitle: DataTypes.STRING,
    goal: DataTypes.STRING,
    userOne: DataTypes.INTEGER,
    userOneProfile: {
      type: DataTypes.STRING(1000)
    },
    userTwo: DataTypes.INTEGER,
    isFull: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
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
