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

  // Delete an User by id
  app.delete("/api/user/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
