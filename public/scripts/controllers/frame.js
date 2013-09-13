angular.module('app')
  .controller('FrameController', function ($scope) { 
    console.log($scope)
    $scope.name = 'i <3 angular';
  });