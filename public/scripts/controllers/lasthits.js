angular.module('app.controllers.lasthits', ['app.services.data', 'app.services.options'])
  .controller('LastHitsController', ['$scope', 'Data', 'Options', function ($scope, Data, Options) { 
    console.log('cs chart controller', $scope)
    //$scope.lastHitData = [];
    Data.data.getLastHitData($scope);
    $scope.$watch('lastHitData + lastHitTimestamps', function() {
      $scope.chart = {
        labels : $scope.lastHitTimestamps,
        datasets : [
          {
            fillColor : "rgba(151,187,205,0)",
            strokeColor : "#f1c40f",
            pointColor : "rgba(151,187,205,0)",
            pointStrokeColor : "#f1c40f",
            data : $scope.lastHitData 
          }
        ],
      };
    })
    $scope.options = Options.lastHitOptions;
  }]);