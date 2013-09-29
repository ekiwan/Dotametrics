angular.module('app.controllers.cs', ['app.services.data', 'app.services.options'])
  .controller('csController', ['$scope', 'Data', 'Options', function ($scope, Data, Options) {
    console.log('cs chart controller', $scope)
    Data.data.getDeniesData($scope);
    Data.data.getLastHitData($scope);

    $scope.$watch('lastHitData + deniesData', function() {
      if($scope.lastHitData && $scope.deniesData) {
        $scope.chart = [
          {
            value: $scope.lastHitData[$scope.lastHitData.length - 1],
            color: "rgba(22,79,16,1)"
          },
          {
            value : $scope.deniesData[$scope.deniesData.length - 1],
            color : "rgba(189,16,13,1)"
          }
        ];
      }
    })
    $scope.options = Options.csOptions
  }])