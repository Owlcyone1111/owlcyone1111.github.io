// Second parameter defines dependencies, convention to place Ctrl after controller name
angular.module("todoListApp", [])

.controller('coolCtrl', function($scope) {
  $scope.whoAmI = function() {
    console.log("hello there, this is the coolCtrl function!");
  };
  
  $scope.helloWorld = function() {
    console.log("This is not a the main ctrl!");
  };
})

.controller('imASibling', function($scope) {
  $scope.foobar = 1234;
});