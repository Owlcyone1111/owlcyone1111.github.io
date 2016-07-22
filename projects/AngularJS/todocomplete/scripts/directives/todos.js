'use strict';

angular.module('todoListApp')

.directive('todos', function() {
  return {
    templateUrl: 'templates/todos.html',
    controller: 'mainCtrl',
    replace: true // Injects todos.html template inside 'todos' html tags (our custom directive)
  }
});
