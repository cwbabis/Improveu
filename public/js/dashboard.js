var $goalSubmitBtn = $("#goal-submit");
var $newGoal = $("#new-goal");

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
  getGoals: function() {
    return $.ajax({
      url: "api/goal",
      type: "GET"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshGoals = function() {
  dashboardAPI.getGoals().then(function(data) {
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

var handleGoalFormSubmit = function(event) {
  event.preventDefault();

  var data = {
    goal: $newGoal.val().trim()
  };

  if (data.goal === null) {
    alert("You must enter a goal!");
    return;
  }

  API.saveNewGoal(data).then(function() {
    refreshGoals();
  });

  $newGoal.val("");
};

$(document).ready(function() {
  getLocalName();
  $goalSubmitBtn.on("click", handleGoalFormSubmit);
});
