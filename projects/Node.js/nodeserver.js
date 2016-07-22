// Problem: We need a simple way to look at a user's badge count and JavaScript points from a web browser
// Solution: Use Node.js to perform the profile look ups and serve our template via HTTP

// 1. Create a web server
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});

  setInterval(function() {
    response.write(new Date() + "\n");
  }, 1000); // Executes after the first second, so response.end will run first

  response.end('Hello World\n');
}).listen(3000); // Server listens to outside world from port 3000 (localhost:3000)

console.log('Server running');

// 2. Handle HTTP route GET / and POST / i.e. Home
  // if url == "/" && GET
    // show search
  // if url == "/" && POST
    // redirect to /:username

// 3. Handle HTTP route GET /:username i.e. /samowl
  // if url == "/...."
    // get JSON from Treehouse
      // on "end"
        // show profile
      // on "error
        // show error

// 4. Function that handles the reading of files and merge in values
   // read from file and get a string
      // merge values into string
