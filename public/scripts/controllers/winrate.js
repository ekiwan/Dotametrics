angular.module('app.controllers.winrate', ['app.services.data', 'app.services.options'])
  .controller('WinrateController', ['$scope', 'Data', 'Options', function ($scope, Data, Options) { 
    console.log('winrate chart controller', $scope)
    $scope.chart = {
      labels : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept"],
      datasets : [
        {
          fillColor : "rgba(151,187,205,0)",
          strokeColor : "#e67e22",
          pointColor : "rgba(151,187,205,0)",
          pointStrokeColor : "#e67e22",
          data : Data.data.winrateData[0]
        },
        {
          fillColor : "rgba(151,187,205,0)",
          strokeColor : "#f1c40f",
          pointColor : "rgba(151,187,205,0)",
          pointStrokeColor : "#f1c40f",
          data : Data.data.winrateData[1]
        }
      ],
    };
    $scope.options = Options.winrateOptions;
  }]);