var $newGoal = $("#new-goal");
var $buddyButton = $("#buddy-button");
var goalInput = $("#goal-input");

var getLocalName = function () {
  var localName = JSON.parse(localStorage.getItem("userName"));
  console.log(localName);
  $("#local-name").text(localName);
};

var dashboardAPI = {
  saveNewGoal: function (input) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/goal",
      data: JSON.stringify(input)
    });
  },
  updateGoal: function (id, input) {
    $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "PUT",
      url: "api/goal/" + id,
      data: JSON.stringify(input)
    });
  },
  getGoals: function () {
    return $.ajax({
      url: "api/goal",
      type: "GET"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshGoals = function () {
  dashboardAPI.getGoals().then(function(data) {
    console.log(data);
    for (i = 0; i < data.length; i++) {
      var mainDiv = $("<div>");
      mainDiv.addClass("row");
      var childDiv = $("<div>");
      childDiv.addClass("col-md-6 offset-md-3");
      var secondChildDiv = $("<div>");
      secondChildDiv.addClass("card");
      var thirdChildDiv = $("<div>");
      thirdChildDiv.addClass("card-header");
      childDiv.append(secondChildDiv);
      mainDiv.append(childDiv);

      $("#main-goals").prepend(mainDiv);
    }
  });
};

var handleGoalFormSubmit = function (event) {
  event.preventDefault();

  var data = {
<<<<<<< HEAD
    goal: $newGoal.val(),
=======
    goal: goalInput.val().trim(),
>>>>>>> master
    userOne: JSON.parse(localStorage.getItem("localID"))
  };

  if (data.goal === null) {
    alert("You must enter a goal!");
    return;
  }

<<<<<<< HEAD
  dashboardAPI.saveNewGoal(data).then(function () {
=======
  dashboardAPI.saveNewGoal(data).then(function() {
>>>>>>> master
    console.log(data);
    refreshGoals();
  });
  refreshGoals();
  $newGoal.val("");
};

var handleGoalJoin = function (event) {
  event.default();
  var id = JSON.parse(localStorage.getItem("localID"));
  var data = {
    userTwo: id,
    isFull: true
  };
  API.saveNewGoal(id, data).then(function () {
    refreshGoals();
  });
};
$(document).ready(function () {
  getLocalName();
  $("#goal-submit").on("click", handleGoalFormSubmit);
  $buddyButton.on("click", handleGoalJoin);
});
