var $newGoal = $("#new-goal");

var goalInput = $("#goal-input");
var goalTitle = $("#goal-title");

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
    return $.ajax({
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
      thirdChildDiv.attr("style", "font-weight: bold");
      thirdChildDiv.text(data[i].goalTitle);

      var fourthChildDiv = $("<div>");
      fourthChildDiv.addClass("float-right text-muted");
      if (data[i].isFull === false) {
        fourthChildDiv.text("Buddy Status: No Buddy");
      } else {
        fourthChildDiv.text("Buddy Status: Buddy'd Up");
      }

      var fifthChildDiv = $("<div>");
      var imgDiv = $("<img>");
      imgDiv.attr(
        "style",
        "height: 50px; width:50px; margin:15px; float: left;"
      );
      imgDiv.attr("src", data[i].userOneProfile);
      var goalContent = $("<p>");
      goalContent.attr("style", "padding: 15px;");
      goalContent.text(data[i].goal);
      fifthChildDiv.append(imgDiv);
      fifthChildDiv.append(goalContent);

      var hTag = $("<hr>");
      hTag.attr("style", "margin: 0px;");

      var lastOne = $("<div>");
      lastOne.attr("style", "vertical-align: middle;");
      lastOne.addClass("card-footer text-muted float-left");

      var buddyButton = $("<button>");
      buddyButton.attr("style", "margin-left: auto;");
      buddyButton.attr("goal-id", data[i].id);
      buddyButton.attr("id", "buddy-button");
      buddyButton.addClass("btn btn-success btn-sm float-right buddy-button");
      buddyButton.text("Buddy Up");

      var timeStamp = $("<time>");
      timeStamp.addClass("float-left timeago");
      var prettyTime = data[i].createdAt;
      timeStamp.attr("datetime", prettyTime);
      var timeCons = new Date(prettyTime);
      timeStamp.text(timeCons.toDateString());
      lastOne.append(timeStamp);

      if (data[i].isFull === false) {
        lastOne.append(buddyButton);
      }

      thirdChildDiv.append(fourthChildDiv);
      secondChildDiv.append(thirdChildDiv);
      secondChildDiv.append(fifthChildDiv);
      secondChildDiv.append(hTag);
      secondChildDiv.append(lastOne);
      childDiv.append(secondChildDiv);
      mainDiv.append(childDiv);
      $("#main-goals").prepend($("<br>"));
      $("#main-goals").prepend(mainDiv);
    }
  });
};

var handleGoalFormSubmit = function(event) {
  event.preventDefault();

  var data = {
    goalTitle: goalTitle.val().trim(),
    goal: goalInput.val().trim(),
    userOne: JSON.parse(localStorage.getItem("localID")),
    userOneProfile: JSON.parse(localStorage.getItem("userPhoto"))
  };

  if (data.goal === null) {
    alert("You must enter a goal!");
    return;
  }

  dashboardAPI.saveNewGoal(data).then(function() {
    console.log(data);
    refreshGoals();
  });

  $newGoal.val("");
};

var handleGoalJoin = function(event) {
  event.preventDefault();
  var goalID = $(this).attr("goal-id");
  console.log(goalID);
  var id = JSON.parse(localStorage.getItem("localID"));
  var data = {
    userTwo: id,
    isFull: true
  };

  dashboardAPI.updateGoal(goalID, data).then(function() {
    location.reload();
  });
};

$(document).ready(function() {
  getLocalName();
  refreshGoals();
  $("#userPhoto").attr("src", JSON.parse(localStorage.getItem("userPhoto")));
  $("#goal-submit").on("click", handleGoalFormSubmit);
  $(document).on("click", ".buddy-button", handleGoalJoin);
});
