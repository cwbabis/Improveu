/* eslint-disable no-unused-vars */
// Get references to page elements
var $userName = $("#user-name");
var $userSubmitBtn = $("#user-submit");

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
  }
};

//handles the submit button event to show dashboard page
var showDashboard = function() {
  location.href = "/dashboard";
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleUserFormSubmit = function(event) {
  event.preventDefault();

  var data = {
    userName: $userName.val()
  };

  if (data.userName === null) {
    alert("You must enter a user name!");
    return;
  }
  console.log(data);
  API.saveUsername(data).then(function(res) {
    localStorage.setItem("localID", JSON.stringify(res.id));
    localStorage.setItem("userName", JSON.stringify(res.userName));
    //insert passport here
    showDashboard();
  });

  $userName.val("");
};

// Add event listeners to the submit and delete buttons

$(document).ready(function() {
  $userSubmitBtn.on("click", handleUserFormSubmit);
});
