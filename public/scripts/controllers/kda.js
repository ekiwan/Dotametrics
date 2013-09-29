angular.module('app.controllers.kda', ['app.services.data', 'app.services.options'])
  .controller('KdaController', ['$scope', 'Data', 'Options', function ($scope, Data, Options) {
    console.log('kda chart controller', $scope)
    Data.data.getKdaData($scope);

    $scope.$watch('kills + deaths + assists', function() {
      if($scope.kills && $scope.deaths && $scope.assists) {
        $scope.chart = [
          {
            value: $scope.kills,
            color: "rgba(22,79,16,1)"
          },
          {
            value : $scope.deaths,
            color : "rgba(189,16,13,1)"
          },
          {
            value: $scope.assists,
            color: "rgba(88,156,173,1)"
          }
        ];
      }
    })
    $scope.options = Options.kdaOptions
  }])