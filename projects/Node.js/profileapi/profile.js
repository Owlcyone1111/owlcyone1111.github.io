// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

var https = require("https");

function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message)
}

function printError(error) {
  console.error(error.message); // All error objects have message property
}

function getProfile(username) {
  // Connect to the API URL. These APIs aren't available until we require them
  var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response) {
    //console.dir(response);
    console.log(response.statusCode);
    
    var body = "";
    
    // Read the data (response is a stream of data
    response.on('data', function(chunk) {
      body += chunk;
    });
    response.on('end', function() {
      //console.log(typeof body); // Returns string
      
      if (response.statusCode === 200) {
        try {
          // Parse data and print
          var profile = JSON.parse(body);
          printMessage(username, profile.badges.length, profile.points.JavaScript);
        } catch(error) {
          printError(error); // Parse error
        }
      } else {
        // Status code error (not going to work with https)
        //printError({message: "There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
      }
    });
  });
  
  // Connection error, executed when error event, otherwise unhandled error event
  request.on("error", printError); // Or anonymous callback function
}

module.exports.get = getProfile; // So app.js can access getProfile method