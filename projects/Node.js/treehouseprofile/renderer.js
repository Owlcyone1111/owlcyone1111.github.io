var fs = require("fs");

function mergeValues(values, content) {
  // Cycle over the keys
  for (var key in values) {
    // Replace all {{key}} with the value from the values object
    content = content.replace("{{" + key + "}}", values[key]);
  }
  // Return merged content
  return content;
}

function view(templateName, values, response) {
  // Read from the template file synchronously (no callback function)
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"}); // Encoding option allows us use string instead of buffer for .replace() to work

  // Insert values into the content
  fileContents = mergeValues(values, fileContents);
  // Write out to the response
  response.write(fileContents);
}

module.exports.view = view;