// Problem: User interaction doesn't provide desired results.
// Solution: Add interactivity so the user can manage daily tasks.

var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");

// New task list item
var createnewTaskElement = function(taskString) {
  var listItem = document.createElement("li");
  var checkBox = document.createElement("input");
  var label = document.createElement("label");
  var editInput = document.createElement("input");
  var editButton = document.createElement("button");
  var deleteButton = document.createElement("button");

  // Each element needs modified
  checkBox.type = "checkbox";
  editInput.type = "text";

  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  label.innerText = taskString;

  // Each element needs appending
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}

// Add a new task, same as function addTask() { }
var addTask = function() {
  console.log("add task");
  // Create a new list item with the text from #new-task:
  var listItem = createnewTaskElement(taskInput.value);
  // Append listItem to incompleteTaskHolder
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskComplete);

  taskInput.value = "";
}

// Edit an existing task
var editTask = function() {
  console.log("edit task");

  var listItem = this.parentNode;
  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  var containsClass = listItem.classList.contains("editMode");

  // if the class of the parent is .edit
  if (containsClass) {
    // Switch from .editMode
    // label text become the input's value
    label.innerText = editInput.value;
  }
  else {
    // Switch to .editMode
    // input value becomes the label's text
    editInput.value = label.innerText;
  }
  // Toggle .editMode on the list item
  listItem.classList.toggle("editMode");
}

// Delete an existing task
var deleteTask = function() {
  console.log("delete task");

  var listItem = this.parentNode;
  var ul = listItem.parentNode;

  // Remove the parent list item from the ul
  ul.removeChild(listItem);
}

// Mark a task as complete
var taskComplete = function() {
  console.log("task complete");
  // Append the task list item to the #completed-tasks
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}

// Mark a task as incomplete
var taskIncomplete = function() {
  console.log("task incomplete");
  // Append the task list item to the #incomplete-tasks
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskComplete);
}

// Bind list item events
var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("bind list item events");
  // Select taskListItem's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  // Bind editTask to edit button
  editButton.onclick = editTask;

  // Bind deleteTask to delete button
  deleteButton.onclick = deleteTask;

  // Bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;
}

var ajaxRequest = function() {
  console.log("AJAX request");
}

// Set the click handler to the addTask function
// addButton.onclick = addTask;
// addButton.onclick = ajaxRequest;
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);

// Cycle over incompleteTaskHolder ul list
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
  // Bind events to list item's children (taskCompleted)
  bindTaskEvents(incompleteTasksHolder.children[i], taskComplete);
}

// Cycle over completedTaskHolder ul list
for (var i = 0; i < completedTasksHolder.children.length; i++) {
  // Bind events to list item's children (taskIncomplete)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
