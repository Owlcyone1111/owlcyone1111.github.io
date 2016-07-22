// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

var https = require("https"); // Otherwise https not defined error
var username = "samowl";

// Unhandled error event

function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
}

printMessage("Samowl", 1000, 2000000);

// Connect to the API URL. These APIs aren't available until we require them
var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response) {
  //console.dir(response);
  console.log(response.statusCode);
  // Read the data
  // Parse the data
  // Print the data
});
