'use strict';

angular.module('todoListApp')

// $http is http provider, .then() is to execute code after a response has been received from a server
.service('dataService', function($http) {
    //this.helloConsole = function() {
      //console.log("This is the hello console service!");
    //};
  
    this.getTodos = function(callback) {
      $http.get('mock/todos.json').then(callback);
    };
  
    this.deleteTodo = function(todo) {
      console.log("The " + todo.name + " has been deleted!");
    };
  
    this.saveTodo = function(todo) {
      console.log("The " + todo.name + " has been saved!");
    };
  
})