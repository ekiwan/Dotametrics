angular.module('app.controllers.lasthits', ['app.services.data', 'app.services.options'])
  .controller('LastHitsController', ['$scope', 'Data', 'Options', function ($scope, Data, Options) { 
    console.log('cs chart controller', $scope)
    //$scope.lastHitData = [];
    Data.data.getLastHitData($scope);
    $scope.$watch('lastHitData + lastHitTimestamps', function() {
      if($scope.lastHitData && $scope.lastHitTimestamps) {
        $scope.chart = {
          labels : $scope.lastHitTimestamps,
          datasets : [
            {
              fillColor : "rgba(79,143,73,0.2)",
              strokeColor : "rgba(22,79,16,1)",
              pointColor : "rgba(79,143,73,0)",
              pointStrokeColor : "rgba(79,143,73,1)",
              data : $scope.lastHitData 
            }
          ]
        };
      }
    })
    $scope.options = Options.lastHitOptions;
  }]);