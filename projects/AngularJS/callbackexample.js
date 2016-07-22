// Second parameter defines dependencies, convention to place Ctrl after controller name
angular.module("todoListApp", [])

.controller('mainCtrl', function($scope, dataService) {
  $scope.todos = dataService.getTodos1; // Controller fires getTodos1, response returned after todos variable created, so todos is undefined in the beginning. Fix by turning getTodos1 into a function

  // Function here is the callback function!
  dataService.getTodos2(function(response) {
    console.log(response.data);
    $scope.todos = response.data;
  });
})

// $http is http provider, then method is to execute code after a response has been received from a server
.service('dataService', function($http) {
  this.getTodos1 = $http.get('mock/todos.json').then(function(response) {
    console.log(response.data); // Run this function after we return to scope
    return response.data;
  });

  // 'callback' is the callback function inside dataService.getTodos2
  this.getTodos2 = function(callback) {
    $http.get('mock/todos.json').then(callback);
  };
})
