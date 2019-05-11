/* eslint-disable no-unused-vars */
// Get references to page elements
var $userName = $("#username");
var $newGoal = $("#new-goal");
var $userSubmitBtn = $("#user-submit");
var $goalSubmitBtn = $("#goal-submit");

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
  getGoals: function() {
    return $.ajax({
      url: "api/goal",
      type: "GET"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshGoals = function() {
  API.getGoals().then(function(data) {
    console.log(data);
    //This logic will populate the card information and display on page
    //Need to add logic for join button to display or not
    /*     var $examples = data.map(function(example) {
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
    $exampleList.append($examples); */
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
    refreshGoals();
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
    refreshGoals();
  });

  $newGoal.val("");
};

// Add event listeners to the submit and delete buttons
$userSubmitBtn.on("click", handleUserFormSubmit);
$goalSubmitBtn.on("click", handleGoalFormSubmit);
