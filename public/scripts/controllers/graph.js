angular.module('app.controllers.graph', ['app.services.data'])
  .controller('GraphController', ['$scope', 'Data', function ($scope, Data) { 
    console.log($scope)
    $scope.message = Data.message;
    $scope.chart = {
      labels: ["Kills", "Deaths", "Assists"],
      datasets: [
        {
          fillColor : "#e67e22",
          strokeColor : "#e67e22",
          pointColor : "#e67e22",
          pointStrokeColor : "#e67e22",
          data: Data.data
        }
      ],
      options: {
        //Boolean - If we show the scale above the chart data     
        scaleOverlay : true,
        //Boolean - If we want to override with a hard coded scale
        scaleOverride : true,
        //** Required if scaleOverride is true **
        //Number - The number of steps in a hard coded scale
        scaleSteps : 10,
        //Number - The value jump in the hard coded scale
        scaleStepWidth : 1,
        //Number - The scale starting value
        scaleStartValue : 0,
      }
    }
  }]);