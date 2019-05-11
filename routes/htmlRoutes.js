// eslint-disable-next-line no-unused-vars
var db = require("../models");

module.exports = function(app) {
<<<<<<< HEAD
  //display landing page
  app.get("/", function(req, res) {
    res.render("index", {
      msg: "",
      examples: "dbExamples"
    });
  });
  //display dashboard
  app.get("/dashboard", function(req, res) {
    res.render("dashboard", {
      msg: "",
      examples: "dbExamples"
    });
  });
  /*   // Load index page
  app.get("/example", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("example", {
        msg: "",
        examples: dbExamples
=======
  // Load index page
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.render("index", {
        msg: "Welcome!",
        user: dbUser
>>>>>>> master
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/user/:id", function(req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function(dbUser) {
      res.render("user", {
        user: dbUser
      });
    });
  }); */

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
