angular.module('app.controllers.graph', ['app.services.data'])
  .controller('GraphController', ['$scope', 'Data', function ($scope, Data) { 
    console.log($scope)
    $scope.message = Data.message;
  }]);