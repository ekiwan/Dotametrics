angular.module('app')
  .controller('TestController', function ($scope) { 
    console.log($scope)
    $scope.name = 'its cool';
  });