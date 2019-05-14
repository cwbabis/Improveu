var getLocalName = function() {
  var localName = JSON.parse(localStorage.getItem("userName"));
  console.log(localName);
  $("#local-name").text(localName);
};

$(document).ready(function() {
  getLocalName();
});
