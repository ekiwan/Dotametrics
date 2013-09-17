angular.module('app.controllers.kda', ['app.services.data', 'app.services.options'])
  .controller('KdaController', ['$scope', 'Data', 'Options', function ($scope, Data, Options) {
    console.log('kda chart controller', $scope)
    $scope.chart = [
      {
        value: Data.data.kdaData[0],
        color: "#F7464A"
      },
      {
        value : Data.data.kdaData[1],
        color : "#E2EAE9"
      },
      {
        value : Data.data.kdaData[2],
        color : "#D4CCC5"
      }
    ];
    $scope.options = Options.kdaOptions
  }])