var $newGoal = $("#new-goal");
var $buddyButton = $("#buddy-button");

var getLocalName = function() {
  var localName = JSON.parse(localStorage.getItem("userName"));
  console.log(localName);
  $("#local-name").text(localName);
};

var dashboardAPI = {
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
  updateGoal: function(id, input) {
    $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "PUT",
      url: "api/goal/" + id,
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
  /*   dashboardAPI.getGoals().then(function(data) {
    console.log(data);
 */
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
  /*   }); */
};

var handleGoalFormSubmit = function(event) {
  event.preventDefault();

  refreshGoals();
  var data = {
    goal: $newGoal.val().trim()
  };

  if (data.goal === null) {
    alert("You must enter a goal!");
    return;
  }

  dashboardAPI.saveNewGoal(data).then(function() {
    console.log("working");
  });

  $newGoal.val("");
};

var handleGoalJoin = function(event) {
  event.default();
  var id = JSON.parse(localStorage.getItem("localID"));
  var data = {
    userTwo: id,
    isFull: true
  };
  API.saveNewGoal(id, data).then(function() {
    refreshGoals();
  });
};
$(document).ready(function() {
  getLocalName();
  $("#goal-submit").on("click", handleGoalFormSubmit);
  $buddyButton.on("click", handleGoalJoin);
});
