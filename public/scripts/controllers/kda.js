angular.module('app.controllers.kda', ['app.services.data', 'app.services.options'])
  .controller('KdaController', ['$scope', 'Data', 'Options', function ($scope, Data, Options) {
    console.log('kda chart controller', $scope)
    Data.data.getKdaData($scope);

    $scope.$watch('kills + deaths + assists', function() {
      if($scope.kills && $scope.deaths && $scope.assists) {
        $scope.chart = [
          {
            value: $scope.kills,
            color: "#1AB221"
          },
          {
            value : $scope.deaths,
            color : "#F7464A"
          },
          {
            value: $scope.assists,
            color: "#4148FF"
          }
        ];
      }
    })
    $scope.options = Options.kdaOptions
  }])