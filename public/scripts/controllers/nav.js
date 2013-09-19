angular.module('app.controllers.nav', [])
  .controller('NavController', ['$scope', '$location', function ($scope, $location) {
    console.log('nav controller', $location.path());
    $scope.changePath = function(path) {
      $location.path(path);
    }
  }]);