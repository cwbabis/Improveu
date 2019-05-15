var db = require("../models");

module.exports = function(app) {
  // Get all user
  app.get("/api/user", function(req, res) {
    db.User.findAll({}).then(function(dbuser) {
      res.json(dbuser);
    });
  });

  //Get all goals
  app.get("/api/goal", function(req, res) {
    db.Goal.findAll({}).then(function(dbGoal) {
      res.json(dbGoal);
    });
  });

  // Create a new User
  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  // Create a new goal
  app.post("/api/goal", function(req, res) {
    db.Goal.create(req.body).then(function(dbGoal) {
      res.json(dbGoal);
    });
  });

  app.put("/api/goal/:id", function(req, res) {
    db.Goal.update(
      { userTwo: req.body.userTwo },
      { isFull: req.body.isFull },
      { where: { id: req.params.id } }
    ).then(function(rowsUpdated) {
      res.json(rowsUpdated);
    });
  });
};
