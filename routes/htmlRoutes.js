var db = require("../models");

module.exports = function(app) {
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
  // Load index page
  app.get("/example", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("example", {
        msg: "",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
