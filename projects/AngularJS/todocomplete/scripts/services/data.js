'use strict';

angular.module('todoListApp')

// $http is http provider, .then() is to execute code after a response has been received from a server
.service('dataService', function($http) {
  
    this.getTodos = function(callback) {
      $http.get('mock/todos.json').then(callback);
    };
  
    this.deleteTodo = function(todo) {
      console.log("The " + todo.name + " has been deleted!");
    };
  
    this.saveTodos = function(todos) {
      console.log(todos.length + " todos have been saved!");
    };
  
})