/* eslint-disable no-unused-vars */
// Get references to page elements
var $userName = $("#username");
var $newGoal = $("#new-goal");
var $userSubmitBtn = $("#user-submit");
var $goalSubmitBtn = $("#goal-submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveUsername: function(input) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/user",
      data: JSON.stringify(input)
    });
  },
  saveNewGoal: function(input) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/goal",
      data: JSON.stringify(input)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleUserFormSubmit = function(event) {
  event.preventDefault();

  var data = {
    userName: $userName.val().trim()
  };

  if (!data.userName) {
    alert("You must enter a user name!");
    return;
  }

  API.saveUsername(data).then(function() {
    refreshExamples();
  });

  $userName.val("");
};

var handleGoalFormSubmit = function(event) {
  event.preventDefault();

  var data = {
    goal: $newGoal.val().trim()
  };

  if (!data.goal) {
    alert("You must enter a goal!");
    return;
  }

  API.saveNewGoal(data).then(function() {
    refreshExamples();
  });

  $newGoal.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$userSubmitBtn.on("click", handleUserFormSubmit);
$goalSubmitBtn.on("click", handleGoalFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
