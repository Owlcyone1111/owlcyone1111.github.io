// Problem: We need a simple way to look at a user's badge count and JavaScript points from a web browser
// Solution: Use Node.js to perform the profile look ups and serve our template via HTTP

// Create a web server
var http = require('http');
var router = require("./router.js");

http.createServer(function(request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(3000); // Server listens to outside world from port 3000 (localhost:3000)

console.log('Server running at http://<worskspace-url>/');