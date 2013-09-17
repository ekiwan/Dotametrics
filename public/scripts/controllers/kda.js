angular.module('app.controllers.kda', ['app.services.data', 'app.services.options'])
  .controller('KdaController', ['$scope', 'Data', 'Options', function ($scope, Data, Options) {
    console.log('kda chart controller', $scope)
    $scope.chart = {
      data: [
        {
          value: 30,
          color: "#F7464A"
        },
        {
          value : 50,
          color : "#E2EAE9"
        },
        {
          value : 100,
          color : "#D4CCC5"
        }
      ],
      options: Options.kdaOptions
    }
  }])