angular.module('app.controllers.nav', ['app.services.data'])
  .controller('NavController', ['$scope', 'Data', function ($scope, Data) { 
    $scope.message = Data.message
  }]);