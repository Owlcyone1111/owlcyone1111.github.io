var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    //console.log(typeof xhr.responseText);
    var employees = JSON.parse(xhr.responseText); // takes a string to convert to JSON
    console.log(typeof employees); // should show object
    var statusHTML = '<ul class="bulleted">';
    for (var i = 0; i < employees.length; i++) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      }
      else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', 'data/employees.json');
xhr.send();