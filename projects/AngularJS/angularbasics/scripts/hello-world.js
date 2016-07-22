// No [] because we don't want Angular to create new module, but to look for todoListApp module
angular.module('todoListApp')
.directive('helloWorld', function() {
  return {
    template: "This is the hello world directive!",
    restrict: "E" // Specifies to use as element only, not attribute
  };
});