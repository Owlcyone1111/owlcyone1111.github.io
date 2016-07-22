'use strict';

angular.module('todoListApp')

.controller('mainCtrl', function($scope, dataService) {
  
  dataService.getTodos(function(response) {
    console.log(response.data);
    $scope.todos = response.data;
  });
  
  $scope.deleteTodo = function(todo, $index) {
    dataService.deleteTodo(todo);
    $scope.todos.splice($index, 1);
  };
  
  $scope.saveTodos = function(todo) {
    // .filter() has callback function that takes in current element of array
    var filteredTodos = $scope.todos.filter(function(todo) {
      if (todo.edited) {
        return todo;
      };
    });
    dataService.saveTodos(filteredTodos); // Passes filteredTodos array to data.js
  };
  
  $scope.addTodo = function() {
    var todo = {name: "This is a new todo."};
    $scope.todos.unshift(todo); // Pushes to front of array, $scope.todos.push(todo) pushes to end of array
  };
    
})