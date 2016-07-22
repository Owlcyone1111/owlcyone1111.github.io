var profile = require("./profile.js");
console.dir(process.argv); // Prints Node process, a global object to access things like the current version of node and arguments passed from command line.

Submit Answer
//var users = ["chalkers", "samowl", "davemcfarland"];
var users = process.argv.slice(2);

//users.forEach(function(username) {
//  profile.get(username);
//});

users.forEach(profile.get);