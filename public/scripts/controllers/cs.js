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
            color: "#1AB221"
          },
          {
            value : $scope.deniesData[$scope.deniesData.length - 1],
            color : "#F7464A"
          }
        ];
      }
    })
    $scope.options = Options.csOptions
  }])